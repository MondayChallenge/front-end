import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import renderImgBubble from 'components/utils/renderImgBubble';
import { useQuery } from '@apollo/client';
import { getAllBidsForAUser } from '../../apollo/bid';
import { Link } from 'react-router-dom';
import './BidPage.css'
import { AWARDED, DECLINED, REVIEWING, SUBMITTED } from 'components/utils/standardNaming';

const BidPage = () => {
    // sessionStorage.setItem("jwtToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2Mjc4MDk3LCJleHAiOjE2MDg4NzAwOTd9.efVO2-okLs2ZanNEBWnDKPp3gC4fnh-AY7Rx6ZXEUyI");

    /*
        const { loading, error, data } = useQuery(GET_ALL_BIDS);
        // useEffect(() => {}, []);
        if (loading) return <div>Loading</div>;
        else if (error) return <div>{JSON.stringify(error)}</div>;
        else {
    */

    const token = sessionStorage.getItem('jwtToken');
    const userId = sessionStorage.getItem('userId');
    sessionStorage.setItem('jwt', token);

    const [bids, setBids] = React.useState([]);
    const { data } = useQuery(getAllBidsForAUser, {
        variables: { ownerId: userId },
    });

  

 
    React.useEffect(() => {
        
        if (data) {
            console.log('data', data)
            setBids(data.bids)
        }


    }, [data])


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
        console.log(data);
        return data.bids.map((datum, i) => {

            return (
                <Link className="bid-page__trow table-blocks__trow" to={`costBreakdown/${datum.id}`} key={datum.id}>
                    {/* <Link to={`mainproject/${datum.project.id}`}>{datum.project.name}</Link> */}
                    <p>{datum.project.name}</p>
                    <p >{datum.project.manager.organization.name}</p>
                    <p >{datum.project.manager.name}</p>
                    <p >${datum.amount}</p>
                    <p >{datum.created_at.split("T")[0]}</p>
                    {renderStatus(datum.status, statusColor)}
                </Link>
            )

        })

    }

    //to render all user's project's bids
    const renderProjectRow = (data) => {


        console.log(data);
        return data.projects.map((datum, i) => {

            return (
                <Link className="bid-page__trow table-blocks__trow" to={`costBreakdown/${datum.bids[0].id}`} key={datum.bids[0].id}>
                    {/* <Link to={`mainproject/${datum.project.id}`}>{datum.project.name}</Link> */}
                    {/* projct name */}
                    <p>{datum.name}</p>
                    {/* org */}
                    <p >{datum.bids[0].organization.name}</p>
                    {/* name of bidder */}
                    <p >{datum.bids[0].contactName}</p>
                    <p >${datum.bids[0].amount}</p>
                    <p >{datum.bids[0].created_at.split("T")[0]}</p>
                    {datum.bids[0].status === 'Submitted' ?  <p >Ready for Review</p> :renderStatus(datum.bids[0].status, statusColor) }
                </Link>
            )

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

                {bids.length > 0 ? renderRow(data)
                    :
                    <div className="bid-page__trow table-blocks__trow">

                        <p>Loading...</p>

                    </div>
                }

                {bids.length > 0 ? renderProjectRow(data)
                    :
                    null
                }



            </div>
        </div>
    )
    // }

}

export default BidPage;