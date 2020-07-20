var shoppingList = ["chocolates","biscuits","cake","milk","butter"];
var shoppingBasket = [ ];
console.log(shoppingList);
console.log(shoppingBasket);
shoppingList.push("cheeze","eggs","vegetables","bread");
shoppingBasket.push(...shoppingList);
console.log(shoppingBasket);

