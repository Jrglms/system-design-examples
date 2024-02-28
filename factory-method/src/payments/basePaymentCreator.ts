import { BasePayment } from "./basePayment";

export abstract class BasePaymentCreator {
  abstract createPayment(): BasePayment; // This is the factory method
}
