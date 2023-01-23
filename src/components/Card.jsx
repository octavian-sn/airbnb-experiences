import React, { Component } from 'react';
import star from '../assets/star.png';

function Card(props) {
  let notification;

  if (props.item.openSpots === 0) notification = 'SOLD OUT';
  else if (props.item.location === 'Online') notification = 'ONLINE';

  return (
    <div className="card">
      {notification && <div className="card--notification">{notification}</div>}
      <img src={props.item.coverImg} alt="contents of card" />
      <div className="card--row-one">
        <img src={star} alt="star icon" />
        <p>{props.item.stats.rating}</p>
        <p className="gray">({props.item.stats.reviewCount})</p>
        <ul>
          <li className="gray">{props.item.location}</li>
        </ul>
      </div>
      <div className="card--row-two">
        <p>{props.item.title}</p>
      </div>
      <div className="card--row-three">
        <p className="card--row-three-price">From ${props.item.price} </p>
        <p>&nbsp;/ person</p>
      </div>
    </div>
  );
}

export default Card;
