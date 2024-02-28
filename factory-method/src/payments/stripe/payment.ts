import { BasePayment } from "../basePayment";

const PROVIDER_FEE = 0.5;

export class StripePayment extends BasePayment {
  submit(cost: number) {
    console.log(
      `I'm a Stripe payment being submitted with a cost of ${
        cost + PROVIDER_FEE
      }!`
    );
  }
}
