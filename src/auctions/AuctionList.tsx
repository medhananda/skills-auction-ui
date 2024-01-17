import { Auction } from './Auction';
import AuctionCard from './AuctionCard';
import AuctionForm from './AuctionForm';

interface AuctionListProps {
  auctions: Auction[];
}

function AuctionList({ auctions }: AuctionListProps) {
  const handleEdit = (auction: Auction) => {
    console.log(auction);
  }
  return (
    <div className="row">
      {auctions.map((auction) => (
        <div key={auction.id} className="col-sm-3">
          <AuctionCard auction={auction} onEdit={handleEdit} />
          <AuctionForm/>
        </div>
      ))}
    </div>
  );
}

export default AuctionList;