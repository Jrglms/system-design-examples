import { BasePayment } from "./basePayment";

export abstract class BaseFactory {
  abstract createPayment(): BasePayment;
}
