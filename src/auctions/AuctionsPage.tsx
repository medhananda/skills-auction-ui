import React from 'react';
import { MOCK_AUCTIONS } from './MOCK_AUCTIONS';
import AuctionList from './AuctionList';
import { Auction } from './Auction';
import { useState } from 'react';

function AuctionsPage() {
  const [auctions, setAuctions] = useState(MOCK_AUCTIONS);
  const saveAuction = (auction: Auction) => {
    let updatedAuctions = auctions.map((p: Auction) => {
      return p.id === auction.id ? auction : p;
    });
    setAuctions(updatedAuctions);
  }
  return (
    <>
      <h1>Auctions</h1>
      <AuctionList auctions={auctions} onSave={saveAuction} />
    </>
  );
}
export default AuctionsPage;