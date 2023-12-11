class PricingRules {
  PRICES = {A: 50, B: 30, C: 20, D: 15,}
  DEFAULT_BASKET = {A: 0, B: 0, C: 0, D: 0,}

  constructor() {
  }

  forItem(item, amount) {
    if (item === 'A') {
      return Math.floor(amount / 3) * 130 + (amount % 3) * this.PRICES[item];
    }
    if (item === 'B') {
      return Math.floor(amount / 2) * 45 + (amount % 2) * this.PRICES[item];
    }
    return this.PRICES[item] * amount;
  }

  forTotal(sum) {
    if (sum > 200) {
      sum = +(sum * 0.9).toFixed(2);
    }
    return sum;
  }
}



class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.basket = {...this.pricingRules.DEFAULT_BASKET};
  }

  scan(item) {
    if(!Object.keys(this.basket).includes(item)) {
      return;
    }

    this.basket[item] += 1;
    }

  total() {
    let sum = 0;
    for (let key in this.basket) {
      sum += this.pricingRules.forItem(key, this.basket[key]);
    }

    return this.pricingRules.forTotal(sum);
  }
}


// ----------------------- tests
function run(items) {
  const pricingRules = new PricingRules();

  const checkout = new Checkout(pricingRules);

  items.forEach(item => {
    checkout.scan(item);
  });

  return checkout.total();
}

function test(x, y) {
  console.log(`${x} === ${y}`);
  console.log((x === y) ? 'ok' : 'not ok');
}


test(run(['A', 'B', 'C', 'D']), 115);
test(run(['A', 'A', 'A', 'A']), 180);
test(run(['B', 'B', 'B', 'B', 'B']), 120);
test(run(['B', 'A', 'B', 'B', 'A']), 175);
test(run(['C', 'A', 'A', 'C', 'B', 'C', 'D', 'D']), 198);
test(run(['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C']), 200);
test(run(['A', 'A', 'A', 'B', 'B', 'B', 'B', 'C',  'D', 'D']), 243);
