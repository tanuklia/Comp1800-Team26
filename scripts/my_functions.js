function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            // User is signed in.
            // Do something for the user here. 
            console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    //console.log(doc.data().name);
                    var n = doc.data().name;
                    //using jquery
                    $("#name-goes-here").text(n);
                    //                                 //using vanilla javascript
                    //             //document.getElementById("username").innerText = n;
                    //         })
                    // } else {
                    //     // No user is signed in.
                })
        }
    });
}
sayHello();

function writeStores() {
    var storesRef = db.collection("stores");
    storesRef.add({
       
        name: "Store 1",
        address: 123,
        phone: 604123456,
        
    });
    storesRef.add({
        name: "Store 2",
        address: 123,
        phone: 604123456,
    });
    storesRef.add({
        name: "Store 3",
        address: 123,
        phone: 604123456,
    });
    
}


function displayStores(){
    db.collection("stores").get()
    .then(function(snap){
        console.log(snap);

        snap.forEach(function(doc){
            console.log(doc.data());

            var pic = doc.data().pic;   //key "picture"
            var name = doc.data().name;             //gets the name field
            var address = doc.data().address;             //gets the address field
            var phone = doc.data().phone;             //gets the phone field

            let codestring = `
                <div class="col">
                    <div class="card shadow-sm">
                    <img src="${pic}" class="bd-placeholder-img card-img-top" width="100%" height="225">

                    <div class="card-body">
                        <h5 class="store-name">${name} </h5>
                        <h5 class="store-address">Address: ${address} </h5>
                        <h5 class="store-address"> Phone Number: ${phone} </h5>

                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            
                            <a href="ProductList.html" class="btn btn-primary my-2">View</a>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            `;
            
            // append with jquery to DOM
            $("#stores").append(codestring);
        })

    })
}
displayStores();




function writeReviews(){
    var reviewRef = db.collection("reviews");
    reviewRef.add({
        name: "Mona lisa",            
        description:"I highly recomend this store! I am very happy with my new mask!",
        rating: 5
    });
}
//writeReviews();

function reviewsQuery(){
    db.collection("reviews")
    .get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            var desc = doc.data().description;
            var r = doc.data().rating;
            console.log(n);
            var newdom = "<div> " + "<b>" +  n + "</b>" + "<br>" + desc + "<br>" + r + "</div>";
            $("#reviews-go-here").append(newdom);
            //document.getElementById("cities-go-here").innerHTML = newdom;
        })
    })
}
reviewsQuery();

function getStoreInputs() {
    document.getElementById("editProfile").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {

            // get various values from the form
            var name = document.getElementById("store-name").value;
            var address = document.getElementById("store-address").value;
            var city = document.getElementById("city").value;

            // Either true or false
            //var mon = document.getElementById("monday").checked;
            //var tue = document.getElementById("tuesday").checked;

            db.collection("users")
                .doc(user.uid)
                .collection("stores")
                .add({
                    "Store name": name,   //from text field
                    "Address": address,     
                    "city": city      //from checkbox
                })
        })
    })
}
getStoreInputs();

// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     }



// myMap();
