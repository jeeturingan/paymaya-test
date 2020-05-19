import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export const Message = (type: any) => {
  let msg, result;
  switch (type) {
    case 'cancel':
      msg = <span>Your order has been cancelled.</span>;
      result = 'Cancel';
      break;

    case 'failure':
      msg = <span>The payment was refused.</span>;
      result = 'Failed';
      break;

    default:
      msg = <span>Your order has been successfully placed.</span>;
      result = 'Success';
  }

  return (
    <>
      <h1>{result}</h1>
      <h3>{msg}</h3>
    </>
  );
};

export function Status() {
  let { type } = useParams();
  let query = new URLSearchParams(useLocation().search);

  console.log(useParams());
  return (
    <div className="status-container">
      <div className="status">
        <Message type={type} />
      </div>
    </div>
  );
}
