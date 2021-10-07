
// Write a function that calculates sale tax that should be paid for the product of the given price.
//  Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

function saleTax(array) {
    const taxes = [];
    const newProdutcs = array.map(product => {
        const tax = product.price * 0.2;
        const newPrice = product.price + tax;
        taxes.push(tax);
        return { ...product, price: newPrice };
    })

    return [newProdutcs, taxes];
}

const [taxedProducts, taxValues] = saleTax([{ name: 'Banana', price: 120 }, { name: 'Orange', price: 100 }]);

console.log(taxedProducts);
console.log(taxValues);