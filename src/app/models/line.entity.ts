export class Line {

    constructor(
        public id?: number, 
        public name?: string, 
        public price?: number, 
        public quantity?: number
        ) {}

    public totalPrice(): number {
        return this.price * this.quantity;
    }
    
}
