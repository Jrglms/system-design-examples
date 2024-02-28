import { BaseFactory } from "../baseFactory";
import { AbilifyPayment } from "./payment";

export class AbilifyFactory extends BaseFactory {
  createPayment() {
    return new AbilifyPayment();
  }
}
