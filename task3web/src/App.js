import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s1 from "./images/men2.jpeg";
import s2 from "./images/men1.jpeg";
import s3 from "./images/men2.jpeg";


const transactions = [
  {
    id: 1,
    name: "Mervin",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$13.00",
    status: "Received",
    color: "text-success",
    img: s1,
  },
  {
    id: 2,
    name: "Samvel",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "-$9.00",
    status: "Outgoing",
    color: "text-danger",
    img: s2,
  },
  {
    id: 3,
    name: "Azar",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$20.00",
    status: "Received",
    color: "text-success",
    img: s3,
  },
];

const TransactionList = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Last Transactions</h5>
        <a href="/transactions" className="text-muted">
          See All
        </a>
      </div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="d-flex align-items-center p-3 mb-2 bg-light rounded shadow-sm"
        >
          <img
            src={transaction.img}
            alt={transaction.name}
            className="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div className="flex-grow-1">
            <h6 className="mb-0">{transaction.name}</h6>
            <small className="text-muted">
              {transaction.date} • {transaction.time}
            </small>
          </div>
          <div className="text-end">
            <h6 className={transaction.color}>{transaction.amount}</h6>
            <small className="text-muted">{transaction.status}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;