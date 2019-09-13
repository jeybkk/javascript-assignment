var customername = "Jeremy";
var products = ["Pizza", "Naan", " Sourdough", "Foccacia", "iPhone X"];
var price = [40, 10, 20, 80, 1000];
var quantity = 3;
var totalPrice = 0;
var greeting = "";
var time = new Date().getHours();
var productsText = "";
var productsElement = document.getElementById("product-list");

if (time < 12) {
    gretting = "Good Morning!";
} 
else if (time < 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening!";
}

for (i = 0; i < products.length; i++) {
    productsText = productsText + "<li class='list-group-item'>" + products[i] + "<span class='badge badge-pill badge-secondary float-right'>$" + price[i] + "</li>";
    productsElement.innerHTML = productsText;
    totalPrice += price[i];
}

document.getElementById("customer-name").innerHTML = customername;
document.getElementById("price").innerHTML = "$" + totalPrice * 0.75 +'  ';
document.getElementById("greetingText").innerHTML = greeting;
