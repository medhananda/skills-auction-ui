import React from 'react';
import { MOCK_AUCTIONS } from './MOCK_AUCTIONS';
import AuctionList from './AuctionList';
import { Auction } from './Auction';

function AuctionsPage() {
  const saveAuction = (auction: Auction) => {
    console.log('Saving auction', auction);
  }
  return (
    <>
      <h1>Auctions</h1>
      <AuctionList auctions={MOCK_AUCTIONS} onSave={saveAuction}/>
    </>
  );
}
export default AuctionsPage;