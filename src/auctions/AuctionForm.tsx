interface AuctionFormProps {
  onCancel: () => void;
}

function AuctionForm({ onCancel} : AuctionFormProps) {
    return (
      <form className="input-group vertical">
        <label htmlFor="name">Auction Name</label>
        <input type="text" name="name" placeholder="enter name" />
        <label htmlFor="description">Auction Description</label>
        <textarea name="description" placeholder="enter description" />
        <label htmlFor="initialBid">Auction Budget</label>
        <input type="number" name="initialBid" placeholder="enter initialBid" />
        <div className="input-group">
          <button className="primary bordered medium">Save</button>
          <span />
          <button type="button" className="bordered medium" 
            onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    );
  }
  
  export default AuctionForm;