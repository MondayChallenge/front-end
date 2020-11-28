import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import renderImgBubble from 'components/utils/renderImgBubble';
import { useQuery } from '@apollo/client';
import { GET_ALL_BIDS } from '../../apollo/bid';
import { Link } from 'react-router-dom';

const BidPage = () => {

    const { loading, error, data } = useQuery(GET_ALL_BIDS);
    // useEffect(() => {}, []);
    if (loading) return <div>Loading</div>;
    else if (error) return <div>{JSON.stringify(error)}</div>;

    const statusColor = {
        Reviewing: "warning",
        Reviewed: "neutral",
        Accepted: "success",
        Rejected: "danger"
    };
   

    //in PM point of view, this page can show all bids for your project for you to reject/accept
    //from constractor POV, this page can show all bids that you sent out 
    //so you have to filter the bids on this component


    //if you are the bidder, you will see project name, bidder name, their org name, receieved, status

    console.log(data)
    const renderRow = (data) => {
        return data.bids.map((datum, i) => {
            return (<Link className="bid-page__trow" to={`costBreakdown/${datum.id}`} key ={datum.id}>
                <p >{datum.project.name}</p>
                <p >{datum.project.manager.organization.name}</p>
                <p >{datum.project.manager.name}</p>
                <p >${datum.amount}</p>
                <p >{datum.created_at.split("T")[0]}</p>
                <p className="font-color--success">In Review</p>
            </Link>
            )

        })

    }

    // <Link
    //       style={{ textDecoration: 'none', color: 'rgba(0,154,255,1.0)' }}
    //       to={`mainproject/${id}`}>
    //       {title}
    //     </Link>

    return (
        <div className="dashboard-projects">
            <Navigation />
            <div className="bid-page">
                <div className="bid-page__thead">
                    <p>Project Name</p>
                    <p>Organization</p>
                    <p>Project Manager</p>
                    <p>Amount</p>
                    <p>Date Sent</p>
                    <p>Status</p>
                </div>

                {/* <div className="bid-page__trow">
                    <p >Cupertino Electric, Inc.</p>
                    <p >David Felb</p>
                    <p className="font-color--success">Open to Bid</p>
                    <p >Nov 12, 2020</p>
                    <p >Mattamy Development</p>
                </div> */}

                {renderRow(data)}



            </div>
        </div>
    )
}

export default BidPage;