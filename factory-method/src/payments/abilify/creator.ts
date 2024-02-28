import { BasePaymentCreator } from "../basePaymentCreator";
import { AbilifyPayment } from "./payment";

export class AbilifyPaymentCreator extends BasePaymentCreator {
  createPayment() {
    return new AbilifyPayment();
  }
}
