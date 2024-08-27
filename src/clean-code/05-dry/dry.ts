type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Products {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReade(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (this[key] <= 0) throw new Error(`${key} is empty`);
          break;
        case 'boolean':
          if (!this[key]) throw new Error(`${key} is empty`);
          break;
        default:
          throw new Error('Type not allowed');
      }
    }
    return true;
  }

  toString() {
    // // No dry
    // if (this.name.length <= 0) throw new Error('Name is empty');
    // if (this.price <= 0) throw new Error('Price is empty');
    // if (this.size.length <= 0) throw new Error('Size is empty');
    if (!this.isProductReade()) return;
    return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
  }
}

(() => {
  const pants = new Products('Pants', 100, 'M');
  console.log(pants.toString());
})();
