import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import renderImgBubble from 'components/utils/renderImgBubble';
import { useQuery, useMutation } from '@apollo/client';
import { getAllBidsForAUser, CHANGE_BID_STATUS } from '../../apollo/bid';
import { Link } from 'react-router-dom';
import './BidPage.css'
import { AWARDED, DECLINED, REVIEWING, SUBMITTED } from 'components/utils/standardNaming';

const BidPage = () => {
    // sessionStorage.setItem("jwtToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2Mjc4MDk3LCJleHAiOjE2MDg4NzAwOTd9.efVO2-okLs2ZanNEBWnDKPp3gC4fnh-AY7Rx6ZXEUyI");

    const token = sessionStorage.getItem('jwtToken');
    const userId = sessionStorage.getItem('userId');
    sessionStorage.setItem('jwt', token);

    const [bids, setBids] = React.useState([]);
    const { loading, error, data } = useQuery(getAllBidsForAUser, {
        variables: { ownerId: userId },
    });
    // useEffect(() => {}, []);
    if (loading) return <div>Loading</div>;
    else if (error) return <div>{JSON.stringify(error)}</div>;
    else {


        // React.useEffect(() => {

        //     if (data) {
        //         console.log('data', data)
        //         setBids({data})
        //         console.log(bids);
        //     }


        // }, [data])


        const statusColor = {
            Review: "warning",
            Awarded: "success",
            Declined: "danger",
            Submitted: "neutral"
        };

        const renderStatus = (status, statusColor) => {

            return (<p className={`font-color--${statusColor[status]}`}>{status}</p>)
        }


        const renderRow = (data) => {
            //console.log(data);
            return data.bids.map((datum, i) => {

                return (
                    <Link className="bid-page__trow table-blocks__trow" to={`costBreakdown/${datum.id}`} key={datum.id}>
                        {/* <Link to={`mainproject/${datum.project.id}`}>{datum.project.name}</Link> */}
                        <p>{datum.project.name}</p>
                        <p >{datum.project.manager.organization.name}</p>
                        <p >{datum.project.manager.name}</p>
                        {/* <p >${datum.amount}</p> */}
                        <p >Click for More</p>
                        <p >{datum.created_at.split("T")[0]}</p>
                        {renderStatus(datum.status, statusColor)}
                    </Link>
                )

            })

        }

        console.log(data)

        //to render all user's project's bids
        const renderProjectRow = (data) => {
            const renderProjectBids = (projectName, bids) => {
              
                return bids.map((bid, i) => {
                    return (
                        <Link className="bid-page__trow table-blocks__trow" to={`costBreakdown/${bid.id}`} key={bid.id}>
                            {/* <Link to={`mainproject/${datum.project.id}`}>{datum.project.name}</Link> */}
                            {/* projct name */}
                            <p>{projectName}</p>
                            {/* org */}
                            <p >{bid.organization.name}</p>
                            {/* name of bidder */}
                            <p >{bid.contactName}</p>
                            {/* <p >${datum.bids[0].amount}</p> */}
                            <p >Click for More</p>
                            <p >{bid.created_at.split("T")[0]}</p>
                            {bid.status === 'Submitted' ? <p >Ready for Review</p> : renderStatus(bid.status, statusColor)}
                        </Link>
                    )
                })

            }



            // console.log(data);
            return data.projects.map((datum, i) => {
                
                if (datum.bids.length == 0) {
                    return null;
                }

                return renderProjectBids(datum.name,datum.bids);

            })

        }

        return (
            <div className="dashboard-projects bidPage">
                <Navigation />
                <div className="bid-page">
                    <div className="bid-page__thead table-blocks__thead">
                        <p>Project Name</p>
                        <p>Organization</p>
                        <p>Contact Name</p>
                        <p>Amount</p>
                        <p>Date Sent</p>
                        <p>Status</p>
                    </div>

                    {renderRow(data)}


                    {renderProjectRow(data)}



                </div>
            </div>
        )
    }

}

export default BidPage;