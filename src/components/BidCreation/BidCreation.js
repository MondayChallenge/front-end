import React, { useState, useEffect, useRef } from 'react';
import Navigation from 'components/Navigation/Navigation'
import { CREATE_BID } from '../../apollo/bid';
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

const BidCreation = () => {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    let history = useHistory();

    const [createBid, data] = useMutation(CREATE_BID);
    //const [bidId,setBidId] = useState("");
    const [material, setMaterial] = useState({ data: [{ 'name': '', 'cost': 0 }] });
    const [labor, setLabor] = useState({ data: [{ 'name': '', 'cost': 0 }] });
    const [misc, setMisc] = useState({ data: [{ 'name': '', 'cost': 0 }] });
    const [materialCounter, setMaterialCounter] = useState(0);
    const [laborCounter, setLaborCounter] = useState(0);
    const [miscCounter, setMiscCounter] = useState(0);
    const formRef = useRef();

    const MATERIAL = "Material";
    const LABOR = "Labor";
    const MISCELLANEOUS = "Miscellaneous";

    //console.log(formRef.current.values)

    // $amount: Long
    // $organization: ID
    // $estTime: String
    // $availability: Date
    // $material: JSON
    // $labor: JSON
    // $miscExpense: JSON
    // $contactName: String
    // $phone: String
    // $license_number: String
    // $classType: String
    // $notes: String
    // $project: ID

    const inputHeader = [
        "Company Name",
        "Contact Name",
        "Contact Phone",
        "Contractors State License Number",
        "Class Type",
        "Estimated Time to Build",
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

    const handleSubmit = () => {
        console.log('this was triggered');

        // createBid({ variables: testData }).then(res => {
        //     //console.log(res);
        //     //setBidId(res.data.createBid.bid.id);
        // }).catch(err => { throw err });
        alert("You have successfully placed your bid");
        history.push('/');
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



    const renderBidDetails = (counter, name) => {

        let renderElement = [];
        for (let i = 0; i <= counter; i++) {
            renderElement.push(<div className="form-inputs-row">
                <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >{name}</h4>
                    <Field name={`${name}_item_${i}`} className="form-inputs form-inputs--small" />
                </div>
                {/* <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >Units</h4>
                    <Field name={`${name}_units_${i}`} className="form-inputs form-inputs--small"></Field>
                </div> */}
                <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >Cost</h4>
                    <Field name={`${name}_cost_${i}`} className="form-inputs form-inputs--small"></Field>
                </div>
            </div>
            )
        }


        return renderElement;

    }


    const testData = {

        organization: 1,
        contactName: "Tony",
        phone: "+91 999999999",
        license_number: "PPR11722P",
        classType: "A Class",
        estTime: "20 Days",
        availability: "2020-12-01",
        notes: "Hello, World",
        project: 1,

        material: { data: [{ 'name': 'brick1', 'cost': 50000 }, { 'name': 'brick2', 'cost': 1000 }] },
        labor: { data: [{ 'name': 'brick1', 'cost': 500 }, { 'name': 'brick2', 'cost': 1000 }] },
        miscExpense: { data: [{ 'name': 'brick1', 'cost': 500 }, { 'name': 'brick2', 'cost': 1000 }] },
        amount: 100000000000,

    };


    const gqlInputType = ["organization", "contactName", "phone", "license_number", "classType", "estTime", "availability", "notes", "project", "material", "labor", "miscExpense", "amount"];

    const inputMapping = {

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

        for (let i = 0; i < arrValues.length; i++) {
           

            if (arrValues[i][0].includes(`${MATERIAL}_item_`)) {
                // console.log(arrValues[i]);
                // console.log(arrValues[i][1]);
               
                materialData.data.push({ "name": arrValues[i][1], "cost": null });
            } else if(arrValues[i][0].includes(`${MATERIAL}_cost_`)){
                materialData.data[innerMatCount]["cost"] = parseInt(arrValues[i][1]);
                innerMatCount +=1;

            } else if(arrValues[i][0].includes(`${LABOR}_item_`)){
                console.log('labor name triggered')
                laborData.data.push({ "name": arrValues[i][1], "cost": null });
           
            } else if(arrValues[i][0].includes(`${LABOR}_cost_`)){
                console.log('labor cost triggered')
                laborData.data[innerLaborCount]["cost"] = parseInt(arrValues[i][1]);
                innerLaborCount +=1;
            }
            
            else {
                gqlData[arrValues[i][0]] = arrValues[i][1];
            }



        }

        gqlData["material"] = materialData;
        gqlData["labor"] = materialData;
        gqlData["miscExpense"] = materialData;


        return gqlData;
    }


    return (
        <div className="dashboard-projects">
            <Navigation />

            <Formik
                initialValues={{

                    organization: "",
                    contactName: "",
                    phone: "",
                    license_number: "",
                    classType: "",
                    estTime: "",
                    availability: "",
                    notes: "",
                    project: "",//from where you chose the project


                }}

                // validationSchema={SignupSchema}
                innerRef={formRef}

                onSubmit={values => {
                    // same shape as initial values
                    const some = shapingValues(values);
                    console.log(some);

                    // console.log(values);

                    // console.log(values["Material_0"]);
                    //need to input values here and manupulate it
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
                            <p className="bid-creation__summary__note">Note: It is understood that this Bid shall remain in effect, and may not be withdrawn,
     for a period of ninety (90) days from the date that bids are due to be received.</p>

                            <p className="bid-creation__summary__total">ESTIMATED TOTAL</p>
                            <p className="bid-creation__summary__price">$191,987.41</p>
                        </div>

                        <input type="submit" value="Submit" className="bid-creation__submit-btn form-submit-btn" ></input>


                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default BidCreation;

//  <Field name="firstName" />
// {errors.firstName && touched.firstName ? (
//     <div>{errors.firstName}</div>
// ) : null}

// <Field name="lastName" />
// {errors.lastName && touched.lastName ? (
//     <div>{errors.lastName}</div>
// ) : null}

// <Field name="email" type="email" />
// {errors.email && touched.email ? <div>{errors.email}</div> : null}
// <button type="submit">Submit</button> 












{/* <form action="" className="bid-creation" onSubmit={(e)=>handleSubmit(e)}>
<h1 className="form-section-header">{`Bidder's Information`}</h1>

<p className="form-section-subheader ">
    Please fill out the required fields below to provide us with the details of the company bidding on this proposal.
</p>

<div className="form-inputs-section">
    {renderBidInfo(inputHeader)}

    <div className="form-inputs-block form-inputs-block--large">
        <h4 className="form-inputs-label" >Notes</h4>
        <input className="form-inputs form-inputs--large"></input>
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
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Materials</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Units</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Cost</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Labor</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Units</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Cost</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Miscellaneous Expenses</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Units</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
    <div className="form-inputs-block form-inputs-block--small">
        <h4 className="form-inputs-label" >Cost</h4>
        <input className="form-inputs form-inputs--small"></input>
    </div>
</div>

<div className="bid-creation__summary">
    <p className="bid-creation__summary__note">Note: It is understood that this Bid shall remain in effect, and may not be withdrawn,
     for a period of ninety (90) days from the date that bids are due to be received.</p>

    <p className="bid-creation__summary__total">ESTIMATED TOTAL</p>
    <p className="bid-creation__summary__price">$191,987.41</p>
</div>

<input type="submit" value="Submit" className="bid-creation__submit-btn form-submit-btn" ></input>


</form> */}