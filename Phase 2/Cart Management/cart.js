var i1 = {
    name: '55 Gal. Crude Oil',
    price: 3,
    image: 'https://www.renderhub.com/denlog/metal-barrel/metal-barrel-01.jpg'
};
var i2 = {
    name: 'Desert Eagle Mark XIX',
    price: 25,
    image: 'https://cdn11.bigcommerce.com/s-wkf3yob290/images/stencil/1280x1280/products/1767/4984/Desert_Eagle_Mark_19_MR_1__10214.1605272628.png?c=2'
};
var i3 = {
    name: 'Pocket Lint 5 lbs.',
    price: 2,
    image: 'https://daffyducts.com/wp-content/uploads/2015/02/shutterstock_175666913.jpg'
};
var items = [];
function constructor() {
    return this;
}
function addProduct(item) {
    this.items.push(item);
    calculateSubTotal();
    document.getElementById("itemsList").innerHTML += item.name + "</br>$" + item.price + "</br>";
    count();
}
function count() {
    document.getElementById("itemSize").innerHTML = "Order Recap (" + this.items.length + ")";
}
function calculateSubTotal() {
    var m = 0;
    for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
        var x = _a[_i];
        m += x.price;
    }
    if (m) {
        document.getElementById("subtotal").innerHTML = "$" + m;
    }
    else {
        document.getElementById("subtotal").innerHTML = "$0";
    }
}
function checkout() {
    if (this.items.length == 0) {
        throw new Error("Cannot checkout an empty cart");
    }
    this.clear();
    document.getElementById("itemSize").innerHTML = "Order Recap (0 Items)";
    document.getElementById("itemsList").innerHTML = "";
    calculateSubTotal();
}
function clear() {
    this.items = [];
}
//# sourceMappingURL=cart.js.map