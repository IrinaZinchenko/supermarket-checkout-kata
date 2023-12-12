class PricingRules {
  ITEMS = {
    A: {
      price: 50,
      discount_rule: (amount) => Math.floor(amount / 3) * 130 + (amount % 3) * this.PRICES.A,
    },
    B: {
      price: 30,
      discount_rule: (amount) => Math.floor(amount / 2) * 45 + (amount % 2) * this.PRICES.B,
    },
    C: {
      price: 20,
      discount_rule: null,
    },
    D: {
      price: 15,
      discount_rule: null,
    },
  }
  DEFAULT_BASKET = {A: 0, B: 0, C: 0, D: 0,}

  constructor() {
  }

  forItem(item_code, amount) {
    const item = this.ITEMS[item_code];
    if (item.discount_rule) {
      return item.discount_rule(amount);
    }

    return item.price * amount;
  }

  forTotal(sum) {
    if (sum > 200) {
      sum = +(sum * 0.9).toFixed(2);
    }
    return sum;
  }
}

export {PricingRules};
