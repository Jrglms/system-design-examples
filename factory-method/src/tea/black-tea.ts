import { Tea } from "./tea";

export class BlackTea extends Tea {
  constructor(amountOfGrams: number) {
    console.log(`Getting ${amountOfGrams} of loose leave tea grams`);
    super();
  }
}
