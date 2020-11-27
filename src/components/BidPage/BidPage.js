import React from 'react';
import Navigation from 'components/Navigation/Navigation';

const BidPage = () => {
    return (
        <div className="dashboard-projects">
            <Navigation />
            <div className="bid-page">
                <div className="bid-page__thead">
                    <p >Vendor</p>
                    <p >Project Owner</p>
                    <p>Status</p>
                    <p >Received</p>
                    <p >Project Name</p>
                </div>

                <div className="bid-page__trow">
                    <p >Cupertino Electric, Inc.</p>
                    <p >David Felb</p>
                    <p >Open to Bid</p>
                    <p >Nov 12, 2020</p>
                    <p >Mattamy Development</p>
                </div>


            
            </div>
        </div>
    )
}

export default BidPage;