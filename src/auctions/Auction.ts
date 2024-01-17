export class Auction {
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    offeredBy: string = ''
    numberOfOffers: number = 0;
    initialBid: number = 0;
    finalBid: number = 0;
    bidders: string[] = [];
    offerdOn: Date = new Date();

    get isNew(): boolean {
        return this.id === undefined;
    }
    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.description) this.description = initializer.description;
        if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
        if (initializer.offeredBy) this.offeredBy = initializer.offeredBy;
        if (initializer.numberOfOffers) this.numberOfOffers = initializer.numberOfOffers;
        if (initializer.initialBid) this.initialBid = initializer.initialBid;
        if (initializer.finalBid) this.finalBid = initializer.finalBid;
        if (initializer.bidders) this.bidders = initializer.bidders;
        if (initializer.offerdOn) this.offerdOn = initializer.offerdOn;
    }
}