import { Auction } from './Auction';
import AuctionCard from './AuctionCard';
import AuctionForm from './AuctionForm';
import React, { useState } from 'react';
import { MOCK_AUCTIONS } from './MOCK_AUCTIONS';

interface AuctionListProps {
  auctions: Auction[];
  onSave: (auction: Auction) => void;
}

function AuctionList({ auctions, onSave }: AuctionListProps) {

  const [auctionBeingEdited, setAuctionBeingEdited] = useState({});
  const handleEdit = (auction: Auction) => {
    console.log('In handle edit list', auction);
    setAuctionBeingEdited(auction);
  }

  const cancelEditing = () => {
    console.log("cancelEditing in AuctionList");
    setAuctionBeingEdited({});
  }
  
  return (
    <div className="row">
      {auctions.map((auction) => (
        <div key={auction.id} className="cols-sm">
          {auction === auctionBeingEdited ? (
            <AuctionForm
              auction={auction}
              onSave={onSave} 
              onCancel={cancelEditing} />
          ) : (
            <AuctionCard auction={auction} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}

export default AuctionList;