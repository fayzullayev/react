export class PizzaClass {
  constructor(
    public name: string,
    public ingredients: string,
    public price: number,
    public photoName: string,
    public soldOut: boolean
  ) {}
}

export type PizzaTypes = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};
