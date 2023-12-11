Solution for this kata http://codekata.com/kata/kata09-back-to-the-checkout/

## Supermarket checkout
### Short description

A supermarket has the following items:

| Item | Price |
| --- | --- |
| A | 50 |
| B | 30 |
| C | 20 |
| D | 15 |

Also the supermarket offers these discounts:

- 3 items A for 130
- 2 items B for 45
- 10% off total basket cost for baskets worth over 200 (after previous discounts)

Implement this JS code:

```js
const checkout = new Checkout(pricingRules);
checkout.scan(item);
checkout.scan(item);

const price = checkout.total();
```
