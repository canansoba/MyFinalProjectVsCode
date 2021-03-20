export interface Rental{
    id: number;
    carId:number;
    brandName: string;
    customerName: string;
    rentalDate:Date;
    rentStartDate:Date;
    rentEndDate?:Date;
    returnDate?:Date;
    totalRentPrice?:number;
    dailyPrice:Date;
}