class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.basket = {};
    for (let key in this.pricingRules.ITEMS) {
      this.basket[key] = 0;
    }
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
