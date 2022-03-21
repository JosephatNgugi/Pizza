// pizzaobject{
//     name:"pepperoni",
//     crust:["stuffed", "gluten" ]
// }
// function Pizza(pizzaType, )



class Pizza{
    constructor(pizzaType, crust, toppings, size, quantity){
    this.pizzaType = pizzaType;
    this.crust = crust;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;
};


// Pizza.prototype.Price = function(){
    
// }

 crustPrice(){
     if (this.crust === "Stuffed" || this.crust === "Flat bread"){
         return 150;
     };
     if (this.crust === "Gluten Free"){
         return 200;
     };
     if (this.crust === "Crispy"){
         return 100;
     };
 };

 toppingsPrice(){
     if (this.toppings === "veggies"){
         return 60;
     };
     if (this.toppings === "mushroom"){
         return 50;
     };
     if (this.toppings === "bacon"){
         return 100;
     };
 };

 sizePrice(){
     if (size === "Small"){
         return 100;
     };
     if (size === "Medium"){
         return 200;
     };
     if (size === "Large"){
         return 300;
     };
 };
 pizzaPrice(){
     return (this.crustPrice() + this.toppingsPrice() + this.sizePrice());
 };
};

// var pizzaPrice = pizzaPrice()


var addToCart = document.getElementsByClassName("addToCart");
for (var i = 0; i < addToCart.length; i++){
    var button = addToCart[i];
    button.addEventListener('click',addToCartClicked);
};

function addToCartClicked(event){
    var button = event.target;
    var pizzaItem = button.parentElement.parentElement;
    var pizzaType = pizzaItem.getElementsByClassName("typeOfPizza")[0].innerText;
    // console.log(pizzaType);
    updateCart(pizzaType)
}

function updateCart(pizzaType, pizzaPrice){
    var cart = document.createElement("div");
    var cartItems = document.getElementById("cart");
    cartContents = `<div class="col">
                    <h3 class="btn point">ITEM</h3><br>
                    <p class="cartItem point">Gluten-free pizza with mushroom</p>
                    </div>
                    <div class="col">
                    <h3 class="btn point">PRICE</h3><br>
                    <p class="cartPrice point">KES <span>2,320</span></p>
                    </div>
                    <div class="col">
                    <h3 class="btn point">QUANTITY</h3><br>
                    <input class="cartInput" type="number" value="1">
                    <button class="btn" type="button">REMOVE</button>
                    </div>`
    cartItems.append(cart)
}