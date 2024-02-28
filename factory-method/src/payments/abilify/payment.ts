import { BasePayment } from "../basePayment";

export class AbilifyPayment extends BasePayment {
  submit(cost: number) {
    console.log(
      `I'm an Abilify payment being submitted with a cost of ${cost}!`
    );
  }
}
