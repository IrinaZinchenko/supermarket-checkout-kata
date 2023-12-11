import {PricingRules} from './pricing_rules.js';
import {Checkout} from './checkout.js';


function run(items) {
  const pricingRules = new PricingRules();

  const checkout = new Checkout(pricingRules);

  items.forEach(item => {
    checkout.scan(item);
  });

  return checkout.total();
}

export {run};
