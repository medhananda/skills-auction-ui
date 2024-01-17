import { SyntheticEvent } from "react";
import { Auction } from "./Auction";

interface AuctionFormProps {
  onSave: (auction: Auction) => void;
  onCancel: () => void;
  
}

function AuctionForm({ onSave, onCancel} : AuctionFormProps) {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(new Auction({ name: 'Updated Auction' }));
  };
    return (
      <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Auction Name</label>
        <input type="text" name="name" placeholder="enter name" />
        <label htmlFor="description">Auction Description</label>
        <textarea name="description" placeholder="enter description" />
        <label htmlFor="initialBid">Auction Budget</label>
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