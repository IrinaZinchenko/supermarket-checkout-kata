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

export {Checkout};
