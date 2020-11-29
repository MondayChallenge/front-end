import React, { useState, useEffect, useRef } from 'react';
import Navigation from 'components/Navigation/Navigation'
import { SUBMITTED, MATERIAL, LABOR, MISCELLANEOUS } from 'components/utils/standardNaming';
import { CREATE_BID } from '../../apollo/bid';

import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";


const BidCreation = () => {

    // const SignupSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('Required'),
    //     lastName: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('Required'),
    //     email: Yup.string().email('Invalid email').required('Required'),
    // });

    let history = useHistory();

    const [createBid] = useMutation(CREATE_BID);

    const [materialCounter, setMaterialCounter] = useState(0);
    const [laborCounter, setLaborCounter] = useState(0);
    const [miscCounter, setMiscCounter] = useState(0);

    const [amount, setAmount] = useState(0);

    //const formRef = useRef();


    const inputHeader = [
        "Company Name",
        "Contact Name",
        "Contact Phone",
        "Contractors State License Number",
        "Available Start Date",
        "Estimated Time to Build",
        "Class Type",
        // "Address",
        // "Zip (Postal) Code",
        // "Country",
        // "State/Province",
        // "City"
    ];

    const fieldNames = {
        "Company Name": "organization", //maybe carry your org info from page to page? 
        "Contact Name": "contactName",
        "Contact Phone": "phone",
        "Contractors State License Number": "license_number",
        "Class Type": "classType",
        "Estimated Time to Build": "estTime",
        "Available Start Date": "availability",
        // "Address":"address",
        // "Zip (Postal) Code":"zipCode",
        // "Country":"country",
        // "State/Province":"state",
        // "City":"city"
    };



    const renderBidInfo = (infos, fieldNames) => {
        return infos.map((info, i) => {
            return (
                <div className="form-inputs-block form-inputs-block--small" key={i} >
                    <h4 className="form-inputs-label" >{info}</h4>
                    <Field name={fieldNames[info]} className="form-inputs form-inputs--small" />
                </div>
            )
        })
    }

    const handleAmountCounter = (event)=>{

        const int = event.target.value;
      setTimeout(()=>setAmount(amount+parseInt(int)),1000)
        
        
    }

  

    const renderBidDetails = (counter, name) => {
        let renderElement = [];
        for (let i = 0; i <= counter; i++) {
            renderElement.push(<div className="form-inputs-row"key = {`${name}_${i}`}>
                <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >{name}</h4>
                    <Field name={`${name}_item_${i}`} className="form-inputs form-inputs--small" />
                </div>
                <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >Cost</h4>
                    <Field name={`${name}_cost_${i}`}  className="form-inputs form-inputs--small"></Field>
                </div>
            </div>
            )
        }
        return renderElement;
    }

    const handleCounter = (name) => {
        console.log(`handleCounter ${name}`)
        switch (name) {
            case MATERIAL:
                setMaterialCounter(materialCounter + 1);
                break;
            case LABOR:
                setLaborCounter(laborCounter + 1);
                break;
            case MISCELLANEOUS:
                setMiscCounter(miscCounter + 1);
                break;
            default:
                return null;
                break;
        }
    }

 


    const shapingValues = (values) => {
        const arrValues = Object.entries(values);
        let gqlData = {};
        let materialData = { data: [] }
        let laborData = { data: [] }
        let miscData = { data: [] }
        let innerMatCount = 0;
        let innerLaborCount = 0;
        let innerMiscCount = 0;

        arrValues.map(value => {

            if (value[0].includes(`${MATERIAL}_item_`)) {
                materialData.data.push({ "name": value[1], "cost": null });
            } else if (value[0].includes(`${MATERIAL}_cost_`)) {
                materialData.data[innerMatCount]["cost"] = parseInt(value[1]);
                innerMatCount += 1;

            } else if (value[0].includes(`${LABOR}_item_`)) {

                laborData.data.push({ "name": value[1], "cost": null });

            } else if (value[0].includes(`${LABOR}_cost_`)) {
                //pushing cost from name data to the std schema
                laborData.data[innerLaborCount]["cost"] = parseInt(value[1]);
                innerLaborCount += 1;
            } else if (value[0].includes(`${MISCELLANEOUS}_item_`)) {

                miscData.data.push({ "name": value[1], "cost": null });

            } else if (value[0].includes(`${MISCELLANEOUS}_cost_`)) {

                miscData.data[innerMiscCount]["cost"] = parseInt(value[1]);
                innerMiscCount += 1;
            }
            else {
                gqlData[value[0]] = value[1];
            }

        }
        )

        gqlData["material"] = materialData;
        gqlData["labor"] = laborData;
        gqlData["miscExpense"] = miscData;

        return gqlData;
    }

  


    const handleSubmit = (data) => {
        console.log('this was triggered');

        createBid({ variables: data }).then(res => {
            
        }).catch(err => { throw err });
        alert("You have successfully placed your bid");
        history.push('/bidPage');
    }


    return (
        <div className="dashboard-projects">
            <Navigation />

            <Formik
                initialValues={{

                    organization: 1,
                    contactName: "",
                    phone: "",
                    license_number: "",
                    classType: "",
                    estTime: "",
                    availability: "2020-12-01",
                    notes: "",
                    project: 1,//from where you chose the project
                    //TODO - NEED TO CALCULATE AMOUNT AS YOU ADD ITEMS
                    amount: amount,
                    status: SUBMITTED,

                }}

                // validationSchema={SignupSchema}
    
              

                onSubmit={values => {

                    const finalValues = shapingValues(values)
                    //console.log(finalValues);
                    //need to input values here and manupulate it
                    handleSubmit(finalValues);
                     //handleSubmit(testData)
                }}
            >
                {({ errors, touched }) => (
                    <Form action="" className="bid-creation" >
                        <h1 className="form-section-header">{`Bidder's Information`}</h1>

                        <p className="form-section-subheader ">
                            Please fill out the required fields below to provide us with the details of the company bidding on this proposal.
                        </p>

                        <div className="form-inputs-section">
                            {renderBidInfo(inputHeader, fieldNames)}

                            <div className="form-inputs-block form-inputs-block--small">
                                <h4 className="form-inputs-label" >Address</h4>
                                <input className="form-inputs form-inputs--small"></input>
                            </div>
                            <div className="form-inputs-block form-inputs-block--small">
                                <h4 className="form-inputs-label" >Zip(Postal) Code</h4>
                                <input className="form-inputs form-inputs--small"></input>
                            </div>
                            <div className="form-inputs-block form-inputs-block--small">
                                <h4 className="form-inputs-label" >Country</h4>
                                <input className="form-inputs form-inputs--small"></input>
                            </div>
                            <div className="form-inputs-block form-inputs-block--small">
                                <h4 className="form-inputs-label" >State/Province</h4>
                                <input className="form-inputs form-inputs--small"></input>
                            </div>
                            <div className="form-inputs-block form-inputs-block--small">
                                <h4 className="form-inputs-label" >City</h4>
                                <input className="form-inputs form-inputs--small"></input>
                            </div>

                            <div className="form-inputs-block form-inputs-block--large">
                                <h4 className="form-inputs-label" >Notes</h4>
                                <Field name="notes" className="form-inputs form-inputs--large"></Field>
                            </div>

                        </div>

                        <h1 className="form-section-header">Attachments</h1>
                        <p className="form-section-subheader ">
                            Please upload the scope of work, images, or additional documentation for bidders to review prior to submitting a project bid.
                        </p>

                        <div className="bid-creation__files">
                            <div className="form-drop-file">
                                <p className="form-drop-file__title">
                                    Drag your file here, or
                                    <span > browse</span>
                                </p>

                                <p className="form-drop-file__sub ">
                                    Supports: JPG, GIF, PDF, PNG
                                </p>
                            </div>


                            <div className="form-drop-file">
                                <p className="form-drop-file__title">
                                    Drag your file here, or
                                    <span > browse</span>
                                </p>

                                <p className="form-drop-file__sub ">
                                    Supports: JPG, GIF, PDF, PNG
                                </p>
                            </div>

                        </div>

                        <h1 className="form-section-header">Bid Details</h1>
                        <p className="form-section-subheader ">
                            Bidders shall include in their bid the cost of providing all labor, material, equipment, supervision, services, taxes, insurance,
                            licenses, fees, overhead and profit, etc. necessary or incidentally required to complete the subcontract work including, but not limited to,
                            the attached scope of work and clarifications and in accordance with the contract documents and specifications with this bid package.
                        </p>

                        <div className="form-inputs-section">

                            {renderBidDetails(materialCounter, MATERIAL)}
                            <button type="button" onClick={() => { handleCounter(MATERIAL) }}>Plus</button>
                            {renderBidDetails(laborCounter, LABOR)}
                            <button type="button" onClick={() => { handleCounter(LABOR) }}>Plus</button>
                            {renderBidDetails(miscCounter, MISCELLANEOUS)}
                            <button type="button" onClick={() => { handleCounter(MISCELLANEOUS) }}>Plus</button>


                        </div>

                        <div className="bid-creation__summary">
                            <p className="bid-creation__summary__note">
                            Note: It is understood that this Bid shall remain in effect, and may not be withdrawn,
                            for a period of ninety (90) days from the date that bids are due to be received.
                            </p>

                            {/* <p className="bid-creation__summary__total">ESTIMATED TOTAL</p>
                            <p className="bid-creation__summary__price">${amount}</p> */}
                        </div>

                        <input type="submit" value="Submit" className="bid-creation__submit-btn submit-btn" ></input>


                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default BidCreation;














// const testData = {

//     organization: 1,
//     contactName: "Tony",
//     phone: "+91 999999999",
//     license_number: "PPR11722P",
//     classType: "A Class",
//     estTime: "20 Days",
//     availability: "2020-12-01",
//     notes: "Hello, World",
//     project: 1,

//     material: { data: [{ 'name': 'brick1', 'cost': 50000 }, { 'name': 'brick2', 'cost': 1000 }] },
//     labor: { data: [{ 'name': 'brick1', 'cost': 500 }, { 'name': 'brick2', 'cost': 1000 }] },
//     miscExpense: { data: [{ 'name': 'brick1', 'cost': 500 }, { 'name': 'brick2', 'cost': 1000 }] },
//     amount: 100000000000,

// };
