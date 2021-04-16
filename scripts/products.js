let products = [];

function writeProducts() {
    var productRef = db.collection("products");
    productRef.add({

        name: "Mask1",
        price: 10,
        reviews: 5,
    });
    productRef.add({
        name: "Mask2",
        price: 20,
        review: 10,
    });
    productRef.add({
        name: "Mask3",
        price: 30,
        review: 20,
    });

}
//writeProducts();

function displayProducts() {
    db.collection("products").get()
        .then(function (snap) {
            console.log(snap);

            snap.forEach(function (doc) {
                products.push(doc.data());
                // console.log(doc.data());

                var pic = doc.data().pic;   //key "picture"
                var name = doc.data().name;             //gets the name field
                var price = doc.data().price;             //gets the address field
                var review = doc.data().review;             //gets the review field

                let codestring = `
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${pic}" class="bd-placeholder-img card-img-top" width="100%" height="225">

                    <div class="card-body">
                        <h5 class="store-name">${name} </h5>
                        <h5 class="store-price">Price: ${price} </h5>
                        <h5 class="store-review">Review: ${review} </h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button id="buy_${name}" type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            `;

                // append with jquery to DOM
                $("#products").append(codestring);
            })
            console.log(products);
            $("button[id^=buy_]").click(function(event) {
                let name = $(this).attr('id').substr(4);
                let price = 0;
                products.forEach(product => {
                    if (product.name == name) {
                        price = product.price;
                    }
                });

                localStorage.setItem("cart", 
                    JSON.stringify({
                        name: name,
                        price: price,
                    })
                    
                );
                console.log(localStorage.getItem("cart"));
                window.open("cart.html");
            })
        })


}
displayProducts();


function getLowestPrice() {
    document.getElementById("lowestPrice").addEventListener('click', function () {
        $("#products").empty();
        productsQuery();
    })
}
getLowestPrice();


function productsQuery() {
    db.collection("products")
        .orderBy("price")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {

                var pic = doc.data().pic;   //key "picture"
                var name = doc.data().name;             //gets the name field
                var price = doc.data().price;
                var review = doc.data().review;             //gets the address field


                let codestring = `
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${pic}" class="bd-placeholder-img card-img-top" width="100%" height="225">

                    <div class="card-body">
                        <h5 class="store-name">${name} </h5>
                        <h5 class="store-price">Price: ${price} </h5>
                        <h5 class="store-review">Review: ${review} </h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            `;

                // append with jquery to DOM
                $("#products").append(codestring);

            })
        })
}
//productsQuery();

function getHighestPrice() {
    document.getElementById("highestPrice").addEventListener('click', function () {
        $("#products").empty();
        highestPrice()
    })
}
getHighestPrice();

function highestPrice() {
    db.collection("products")
        .orderBy("price", "desc")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {

                var pic = doc.data().pic;   //key "picture"
                var name = doc.data().name;             //gets the name field
                var price = doc.data().price;
                var review = doc.data().review;             //gets the address field


                let codestring = `
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${pic}" class="bd-placeholder-img card-img-top" width="100%" height="225">

                    <div class="card-body">
                        <h5 class="store-name">${name} </h5>
                        <h5 class="store-price">Price: ${price} </h5>
                        <h5 class="store-review">Review: ${review} </h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            `;

                // append with jquery to DOM
                $("#products").append(codestring);

            })
        })
}
//highestPrice();


function getReview() {
    document.getElementById("Review").addEventListener('click', function () {
        $("#products").empty();
        productsQueryReview();
    })
}
getReview();


function productsQueryReview() {
    db.collection("products")
        .orderBy("review", "desc")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {

                var pic = doc.data().pic;   //key "picture"
                var name = doc.data().name;             //gets the name field
                var price = doc.data().price;
                var review = doc.data().review;             //gets the address field


                let codestring = `
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${pic}" class="bd-placeholder-img card-img-top" width="100%" height="225">

                    <div class="card-body">
                        <h5 class="store-name">${name} </h5>
                        <h5 class="store-price">Price: ${price} </h5>
                        <h5 class="store-review">Review: ${review} </h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            `;

                // append with jquery to DOM
                $("#products").append(codestring);

            })
        })
}
//productsQueryReview();