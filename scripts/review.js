function getReviews() {
    document.getElementById("addReview").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {

            // get various values from the form
            var review;
            var email = document.getElementById("email").value;
            var desc = document.getElementById("message").value;
            if($('#star5').is(':checked')) {
                review =  document.getElementById("star5").value;
            } else if ($('#star4').is(':checked')) {
                review =  document.getElementById("star4").value;
            } else if ($('#star3').is(':checked')) {
                review =  document.getElementById("star3").value;
            } else if ($('#star2').is(':checked')) {
                review =  document.getElementById("star2").value;
            } else if ($('#star1').is(':checked')) {
                review =  document.getElementById("star1").value;
            }


            db.collection("users")
                .doc(user.uid)
                .collection("reviews")
                .add({
                    "Email": email,   //from text field   
                    "Description": desc,        
                    "Rating": review    

                })
        })
    })
}
getReviews();