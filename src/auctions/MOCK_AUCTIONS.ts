import { Auction } from './Auction';

export const MOCK_AUCTIONS = [
  new Auction({
    id: 1,
    name: 'Dinner at Padkis in Spring',
    description:
      'Dinner at Padkis',
    imageUrl: 'https://picsum.photos/200/100', 
    offeredBy: 'Anu Padki',
    numberOfOffers: 4,
    initialBid: 50,
    finalBid: 0,
    bidders:  [],
    offerdOn: new Date("2024-11-22")
  }),
  new Auction({
    id: 2,
    name: 'Wine and Poetry at Padkis',
    description:
      'Wine and Read Poems',
    imageUrl: 'https://picsum.photos/100/100', 
    offeredBy: 'Milind Padki',
    numberOfOffers: 4,
    initialBid: 50,
    finalBid: 0,
    bidders:  [],
    offerdOn: new Date("2024-12-22")
  })
];