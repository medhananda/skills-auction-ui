import { Auction } from './Auction';
import React from 'react';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface AuctionCardProps {
    auction: Auction;
}

function AuctionCard(props: AuctionCardProps) {
    const { auction } = props;
    const handleEditClick = (auctionBeingEdited: Auction) => {
        console.log(auctionBeingEdited);
    };

    return (
        <div className="card">
            <img src={auction.imageUrl} alt={auction.name} style={{ height: 100, width: 300 }} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{auction.name} <br />By {auction.offeredBy}
                        <br/> Number of offers: {auction.numberOfOffers.toLocaleString()}
                    </strong>
                    <p></p>
                </h5>
                <p>{auction.description}</p>
                <p>Initial Bid : {auction.initialBid.toLocaleString()}</p>
                <button
                className=" bordered"
                onClick={() => {
                    handleEditClick(auction);
                }} >
                <span className="icon-edit "></span>
                Edit
            </button>
        </section>
        </div >
    );
}

export default AuctionCard;