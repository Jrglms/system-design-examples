export abstract class BasePayment {
  abstract submit(cost: number): void;
}
