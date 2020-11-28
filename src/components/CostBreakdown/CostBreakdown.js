import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Loader, LoaderStoryLine } from 'monday-ui-react-core';
import { GetBid } from '../../apollo/bid';
import Navigation from 'components/Navigation/Navigation';
import './CostBreakdown.css';

import { v4 as uuidv4 } from 'uuid';

function LeftRight({ mkey, val }) {
  return (
    <div className="row">
      <p className="left">{mkey}</p>
      <p className="right">{val}</p>
    </div>
  );
}

export default function CostBreakdown(props) {

  //for testing purposes
  //you get this when you create a user account
  sessionStorage.setItem("jwtToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2Mjc4MDk3LCJleHAiOjE2MDg4NzAwOTd9.efVO2-okLs2ZanNEBWnDKPp3gC4fnh-AY7Rx6ZXEUyI");
console.log(props);
  let projectId = 'dsfsdlfksj';
  const { loading, error, data } = useQuery(GetBid, {
    //needs to be changed to projectId from props
    variables: { id: props.match.params.id },
  });
  // useEffect(() => {}, []);
  if (loading) return <div>Loading</div>;
  else if (error) return <div>{JSON.stringify(error)}</div>;
  else {
    
    // console.log(data.bid.contactName);
    console.log(data.bid.material.data);
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
      <div className="row2" key={uuidv4()}>
        {/* <p>{data.qty}</p>
        <p>{data.unitCost}</p> */}
        <p>{data.cost}</p>
      </div>
    ));
    const laborPrices = data.bid.labor.data.map((data) => (
      <div className="row2" key={uuidv4()}>
        {/* <p>{data.qty}</p>
        <p>{data.unitCost}</p> */}
        <p>{data.cost}</p>
      </div>
    ));
    const miscPrices = data.bid.miscExpense.data.map((data) => (
      <div className="row2" key={uuidv4()}>
        {/* <p>{data.qty}</p>
        <p>{data.unitCost}</p> */}
        <p>{data.cost}</p>
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
          {sum}
        </div>
      );
    };

    return (
      <div className="dashboard-projects">
        <Navigation />
        <div className="row3">
          <h4>Bid Proposal</h4>
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
            <div className="row">
              <h4 className="companyLink">{data.bid.organization.Name}</h4>
            </div>
            <LeftRight mkey={'Submitted by'} val={data.bid.contactName} />
            <LeftRight mkey={'Recieved'} val={data.bid.estTime} />
            <div className="m-table">
              <div className="row2">
                <p className="t-header">Qty</p>
                <p className="t-header">Unit cost</p>
                <p className="t-header">Total cost</p>
              </div>
              {materialPrices}
              <br />
              {laborPrices}
              <br />
              {miscPrices}
            </div>
            <div className="est-tot">ESTIMATED TOTAL</div>
            <Tot />
          </div>
          <div className="col">
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}
