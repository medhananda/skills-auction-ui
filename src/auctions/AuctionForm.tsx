
import { Auction } from "./Auction";
import React, { SyntheticEvent, useState, useEffect } from 'react';

interface AuctionFormProps {
  auction: Auction;
  onSave: (auction: Auction) => void;
  onCancel: () => void;
}

function AuctionForm({
  auction: initialAuction,
  onSave, 
  onCancel }: AuctionFormProps) {
  ;
  const [auction, setAuction] = useState(initialAuction);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(auction);
  };

  const handleChange = (event: any) => {
   
    const { type, name, value, checked } = event.target;
   console.log ("type", type ," name", name, " value", value, " checked", checked);
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedAuction: Auction;
    setAuction((p) => {
      updatedAuction = new Auction({ ...p, ...change });
      return updatedAuction;
    });
  };


  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Auction Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={auction.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Auction Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={auction.description}
        onChange={handleChange}
      />
      <label htmlFor="initialBid">Initial Bid</label>
      <input type="number" name="initialBid" placeholder="enter initialBid" />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default AuctionForm;