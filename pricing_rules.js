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

export {PricingRules};
