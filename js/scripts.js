// Business Logic
function Pizza(pizzaSizeValue, toppingScore){
  this.pizzaSizeValue = pizzaSizeValue;
  this.toppingScore = toppingScore;
}

Pizza.prototype.pizzaPrice = function(){
  return this.pizzaSizeValue + this.toppingScore
}
















// UI Logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizza-size option:selected").text();

    alert(pizzaSize);
    var pizzaSizeValue = parseInt($("#pizza-size").val());
    var userToppingScore = 0;
    var toppingScore = parseInt(userToppingScore);

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      userToppingScore = userToppingScore + 1;
    });
    alert(userToppingScore);

    var newPizza = new Pizza(pizzaSizeValue, toppingScore);

    $(".pizza-size").text(pizzaSize);
    $(".pizza-toppings").text(userToppingScore);
    $(".pizza-price").text("$" + newPizza.pizzaPrice() + ".00");

    $("#show-pizza").show();




  });
});
