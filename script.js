class Order {
    constructor(size, number) {
        this.size = size;
        this.number = number;
        this.price 
    }
}

var totalOrder;

Order.prototype.total = function(){
    this.size*this.number
    return 
}

$(document).ready(function(){
    $("#order").submit(function(event){
        event.preventDefault();

        var pizzaSize = $("#pizzasize").val();
        var pizzaNumber = $("#pizzanumber").val();

        totalOrder = new Order(pizzaSize, parseInt(pizzaNumber));

        $("#pizzasize").val("");
        $("#pizzanumber").val("");

    })
})