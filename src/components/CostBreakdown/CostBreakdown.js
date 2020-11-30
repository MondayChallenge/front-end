import React, { useState, useEffect } from 'react';
import { AWARDED, DECLINED, REVIEWING, SUBMITTED } from 'components/utils/standardNaming';
import Navigation from 'components/Navigation/Navigation';

import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";

import { useQuery, useMutation } from '@apollo/client';

import { GetBid, CHANGE_BID_STATUS } from '../../apollo/bid';

import './CostBreakdown.css';
import { Loader, LoaderStoryLine } from 'monday-ui-react-core';



function LeftRight({ mkey, val }) {
  return (
    <div className="row">
      <p className="left">{mkey}</p>
      <p className="right">{val}</p>
    </div>
  );
}

export default function CostBreakdown(props) {


  let history = useHistory();


  let projectId = 'dsfsdlfksj';
  const { loading, error, data } = useQuery(GetBid, {
    //needs to be changed to projectId from props
    variables: { id: props.match.params.id },
  });

  const [changeBidStatus] = useMutation(CHANGE_BID_STATUS);




  if (loading) return <div>Loading</div>;
  else if (error) return <div>{JSON.stringify(error)}</div>;
  else {

    // console.log(data.bid.contactName);

    const materials = data.bid.material.data.map((data) => {
      return (

        <div className="row" key={uuidv4()}>
          <p className="costListItem">{data.name}</p>
        </div>
      )

    });

    const labor = data.bid.labor.data.map((data) => {
      return (
        <div className="row" key={uuidv4()}>
          <p className="costListItem">{data.name}</p>
        </div>
      )

    });
    const misc = data.bid.miscExpense.data.map((data) => {
      return (
        <div className="row" key={uuidv4()}>
          <p className="costListItem">{data.name}</p>
        </div>
      )

    });
    const materialPrices = data.bid.material.data.map((data) => (
      <div className="row row-reverse" key={uuidv4()}>

        <p className="costListItem">${data.cost}</p>
      </div>
    ));
    const laborPrices = data.bid.labor.data.map((data) => (
      <div className="row row-reverse" key={uuidv4()}>
        <p className="costListItem">${data.cost}</p>
      </div>
    ));
    const miscPrices = data.bid.miscExpense.data.map((data) => (
      <div className="row row-reverse" key={uuidv4()}>

        <p className="costListItem">${data.cost}</p>
      </div>
    ));
    const Tot = () => {
      let arr = [];
      data.bid.miscExpense.data.map((data) => {
        if (data.totalCost) arr.push(data.totalCost);
      });
      data.bid.labor.data.map((data) => {
        if (data.totalCost) arr.push(data.totalCost);
      });
      data.bid.material.data.map((data) => {
        if (data.totalCost) arr.push(data.totalCost);
      });
      //console.log(arr);
      let sum = arr.reduce(function (a, b) {
        return parseFloat(a) + parseFloat(b);
      }, 0);
      return (
        <div key={uuidv4()} className="tot">
          ${sum}
        </div>
      );
    };

    const handleChangeStatus = (status) => {
      changeBidStatus({ variables: { bidId: props.match.params.id, status: status } });
      history.push('/bidPage');
    }

    return (
      <div className="dashboard-projects">
        <Navigation />
        <div className="cost-breakdown">
          <div className="row3">
            <h1 className="form-section-header">Bid Proposal</h1>
            <div className="bid-btn-group">
              <button className="bid-btn submit-btn button-background-color--success" onClick={() => { handleChangeStatus(AWARDED) }}>Accept Bid</button>
              <button className="bid-btn submit-btn button-background-color--danger" onClick={() => { handleChangeStatus(DECLINED) }}>Reject Bid</button>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <LeftRight mkey={'Project Name'} val={data.bid.project.Name} />
              <LeftRight
                mkey={'Project Manager'}
                val={data.bid.organization.Name}
              />
              <LeftRight mkey={'Project ID'} val={data.bid.project.id} />
              <br />
              <div className="row">
                <p className="header">Materials</p>
              </div>
              {materials}
              <div className="row">
                <p className="header">Labor</p>
              </div>
              {labor}
              <div className="row">
                <p className="header">Misc</p>
              </div>
              {misc}
            </div>
            <div className="col">

              <LeftRight mkey={'Org. Name'} val={data.bid.organization.Name} />
              <LeftRight mkey={'Submitted by'} val={data.bid.contactName} />
              <LeftRight mkey={'Est. Time'} val={data.bid.estTime} />
              {/* <div className = "custom-br"></div> */}
              <br />
              <div className="m-table">
                <div className="row row-reverse">

                  <p className="header">Total cost</p>
                </div>
                {materialPrices}
                <div className="row">

                  <p className="header custom-br">.</p>
                </div>
                {laborPrices}
                <div className="row ">
                  <p className="header custom-br">.</p>
                </div>
                {miscPrices}
              </div>
              <div className="est-tot">ESTIMATED TOTAL</div>
              <Tot />
            </div>

          </div>
        </div>
      </div>

    );
  }
}
