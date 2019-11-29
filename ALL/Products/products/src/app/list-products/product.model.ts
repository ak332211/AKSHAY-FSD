export class IProduct{

    constructor(
        public productId:   number,
        public productName: String,
        public productCode: String,
        public releaseDate: String,
        public description: string,
        public price      : number,
        public starRating : number,
        public imageUrl   : string){}
}