import { AbilifyFactory } from "./payments/abilify/factory";
import { BaseFactory } from "./payments/baseFactory";
import { StripeFactory } from "./payments/stripe/factory";

enum PaymentType {
  Abilify,
  Stripe,
}

const abilifyFactory = new AbilifyFactory();
const stripeFactory = new StripeFactory();

const factoryMapper: Record<PaymentType, BaseFactory> = {
  [PaymentType.Abilify]: abilifyFactory,
  [PaymentType.Stripe]: stripeFactory,
};

const submitPayment = (type: PaymentType, cost: number) => {
  const factory = factoryMapper[type];

  const payment = factory.createPayment();

  payment.submit(cost);
};

submitPayment(PaymentType.Abilify, 100);
submitPayment(PaymentType.Stripe, 100);
