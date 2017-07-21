// Business Logic
function Pizza(pizzaSize, toppingScore){
  this.pizzaSize = pizzaSize;
  this.toppingScore = toppingScore;
}

Pizza.prototype.pizzaPrice = function(){
  return this.pizzaSize + this.toppingScore
}
















// UI Logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("#pizza-size").val());
    var toppingScore = parseInt($("input:checkbox[name=pizza-toppings]:checked").val());

    // $("input:checkbox[name=pizza-toppings]:checked").each(function(){
    //   pizzaToppingScore = pizzaToppingScore + 1;
    // });
    // alert(pizzaToppingScore);

    var newPizza = new Pizza(pizzaSize, toppingScore);








    $(".pizza-size").text(pizzaSize);
    $(".pizza-toppings").text(toppingScore);
    $(".pizza-price").text(newPizza.pizzaPrice());

    $("#show-pizza").show();




  });
});
