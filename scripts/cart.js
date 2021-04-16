console.log(localStorage.getItem("cart"));
let product = JSON.parse(localStorage.getItem("cart"))
$("#maskName").text(product.name);
$("#summary").text("$" + product.price);
