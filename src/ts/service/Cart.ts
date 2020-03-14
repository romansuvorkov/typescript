import Buyable from '../domain/Buyable';

export default class Cart {
    conterCount : number;
    _totalPrice : number;
    _totalPriceWithDiscount : number;
    private _items: Buyable[] = [];

    constructor() {
        this.conterCount = 0;
        this._totalPrice = 0;
        this._totalPriceWithDiscount = 0;
      }
    
    
    add(item: Buyable): void {
        this._items.push(item);
        this.conterCount += 1;
    }

    *[Symbol.iterator]() {
        let current = 0;
        while (current < this.conterCount) { 
          yield this._items[current];
          current += 1;
        }
    };

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): void {
        for (let item of this) {
        this._totalPrice += item.price;
        }
    }
      
    totalPriceWithDiscount(discount: number): void {
        this._totalPriceWithDiscount = this._totalPrice - (this._totalPrice * (discount/100));
    }

    deleteItem(itemID: number): void {
        let counter : number = 0;
        for (let item of this) {
          if (itemID === item.id) {
            this._items.splice(counter, 1);
            this.conterCount -= 1;
          }
          counter += 1;
        }
    }








}