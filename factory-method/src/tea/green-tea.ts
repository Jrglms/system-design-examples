import { Tea } from "./tea";

export class GreenTea extends Tea {
  constructor(amountOfBags: number) {
    console.log(`Getting ${amountOfBags} bag of tea`);
    super();
  }
}
