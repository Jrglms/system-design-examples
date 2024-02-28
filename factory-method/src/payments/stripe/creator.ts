import { BasePaymentCreator } from "../basePaymentCreator";
import { StripePayment } from "./payment";

export class StripePaymentCreator extends BasePaymentCreator {
  createPayment() {
    return new StripePayment();
  }
}
