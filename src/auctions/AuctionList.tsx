import { Auction } from './Auction';
import AuctionCard from './AuctionCard';
import AuctionForm from './AuctionForm';
import React, { useState } from 'react';

interface AuctionListProps {
  auctions: Auction[];
}

function AuctionList({ auctions }: AuctionListProps) {
  const [auctionBeingEdited, setAuctionBeingEdited] = useState({});
  const cancelEditing = () => {
   console.log("cancelEditing in AuctionList");
   setAuctionBeingEdited({});
  }
  const handleEdit = (auction: Auction) => {
    console.log(auction);
    setAuctionBeingEdited(auction);
  }
  return (
    <div className="row">
      {auctions.map((auction) => (
       <div key={auction.id} className="cols-sm">
       {auction === auctionBeingEdited ? (
         <AuctionForm onCancel={cancelEditing} />
       ) : (
         <AuctionCard auction={auction} onEdit={handleEdit} />
       )}
     </div>
      ))}
    </div>
  );
}

export default AuctionList;