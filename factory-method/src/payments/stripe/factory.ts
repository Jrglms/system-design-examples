import { BaseFactory } from "../baseFactory";
import { StripePayment } from "./payment";

export class StripeFactory extends BaseFactory {
  createPayment() {
    return new StripePayment();
  }
}
