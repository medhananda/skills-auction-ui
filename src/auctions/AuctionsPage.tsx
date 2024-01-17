import React from 'react';
import { MOCK_AUCTIONS } from './MOCK_AUCTIONS';
import AuctionList from './AuctionList';

function AuctionsPage() {
  return (
    <>
      <h1>Auctions</h1>
      <AuctionList auctions={MOCK_AUCTIONS} />
    </>
  );
}

export default AuctionsPage;