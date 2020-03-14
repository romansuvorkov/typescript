import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id : number,
        readonly name : string,
        readonly nameEng : string,
        readonly imax : boolean,
        readonly year : number,
        readonly contry : string,
        readonly slogan : string,
        readonly genre : string[],
        readonly timeMinutes : number,
        readonly timeHour : string,
        readonly price : number,
    ) { 
        this.id = id;
        this.name = name;
        this.nameEng = nameEng;
        this.imax = imax;
        this.year = year;
        this.contry = contry;
        this.slogan = slogan;
        this.genre = genre;
        this.timeMinutes = timeMinutes;
        this.timeHour = timeHour;
        this.price = price;
    }
}