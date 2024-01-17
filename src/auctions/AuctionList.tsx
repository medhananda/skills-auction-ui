import { Auction } from './Auction';

interface AuctionListProps {
  auctions: Auction[];
}

function AuctionList({ auctions }: AuctionListProps) {
  return (
    <div className="row">
      {auctions.map((auction) => (
        <div key={auction.id} className="col-sm-3">
          <div className="card">
            <img src={auction.imageUrl} alt={auction.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{auction.name} <br/>By {auction.offeredBy} </strong>
                <p></p>
              </h5>
              <p>{auction.description}</p>
              
              <p>Initial Bid : {auction.initialBid.toLocaleString()}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuctionList;