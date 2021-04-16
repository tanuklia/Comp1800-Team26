function getItemInputs() {
    document.getElementById("addItem").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {

            // get various values from the form
            var name = document.getElementById("item-name").value;
            var type = document.getElementById("mask-type").value;
            var desc = document.getElementById("description").value;
            var stock = document.getElementById("stock").value;
            var price = document.getElementById("price").value;


            // Either true or false
            var s = document.getElementById("Small").checked;
            var m = document.getElementById("Medium").checked;
            var l = document.getElementById("Large").checked;
            var k = document.getElementById("kids").checked;

            db.collection("users")
                .doc(user.uid)
                .collection("items")
                .add({
                    "Item name": name,   //from text field
                    "Item type": type,     
                    "Description": desc,     
                    "stock": stock,     
                    "price": price,     
                    "Small": s,     
                    "Medium": m,     
                    "Large": l,         
                    "Kids": k      //from checkbox
                })
        })
    })
}
getItemInputs();

