import React from 'react';
import Navigation from 'components/Navigation/Navigation'

const BidCreation = () => {

    const inputHeader = [
        "Company Name",
        "Contact Name",
        "Contact Phone",
        "Contractors State License Number",
        "Class Type",
        "Bids Due",
        "Address",
        "Zip (Postal) Code",
        "Country",
        "State/Province",
        "City"
    ]

    const renderBidInfo = (infos) => {
        return infos.map((info, i) => {
            return (
                <div className="form-inputs-block form-inputs-block--small">
                    <h4 className="form-inputs-label" >{info}</h4>
                    <input className="form-inputs form-inputs--small"></input>
                </div>
            )
        })
    }

    return (
        <div className="dashboard-projects">
            <Navigation />
            <div className="bid-creation">
                <h1 className="form-section-header">Bidder's Information</h1>

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
                Bidders shall include in their bid the cost of providing all labor, material, equipment, supervision, services, taxes, insurance, licenses, fees, overhead and profit, etc. necessary or incidentally required to complete the subcontract work including, but not limited to, the attached scope of work and clarifications and in accordance with the contract documents and specifications with this bid package. 
                </p>


            </div>


        </div>
    )
}

export default BidCreation;