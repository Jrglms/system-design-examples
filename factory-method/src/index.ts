import { AbilifyPaymentCreator } from "./payments/abilify/creator";
import { BasePaymentCreator } from "./payments/basePaymentCreator";
import { StripePaymentCreator } from "./payments/stripe/creator";

enum PaymentType {
  Abilify,
  Stripe,
}

const abilifyPaymentCreator = new AbilifyPaymentCreator();
const stripePaymentCreator = new StripePaymentCreator();

const creatorMapper: Record<PaymentType, BasePaymentCreator> = {
  [PaymentType.Abilify]: abilifyPaymentCreator,
  [PaymentType.Stripe]: stripePaymentCreator,
};

const submitPayment = (type: PaymentType, cost: number) => {
  const creator = creatorMapper[type];

  const payment = creator.createPayment();

  payment.submit(cost);
};

submitPayment(PaymentType.Abilify, 100);
submitPayment(PaymentType.Stripe, 100);
