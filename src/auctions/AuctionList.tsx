import { Auction } from './Auction';
import AuctionCard from './AuctionCard';

interface AuctionListProps {
  auctions: Auction[];
}

function AuctionList({ auctions }: AuctionListProps) {
  return (
    <div className="row">
      {auctions.map((auction) => (
        <div key={auction.id} className="col-sm-3">
          <AuctionCard auction={auction} />
        </div>
      ))}
    </div>
  );
}

export default AuctionList;