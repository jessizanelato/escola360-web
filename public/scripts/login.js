$(document).ready(function(){

    firebase.auth().signOut();

    $("#form-login").submit(function(event){
        event.preventDefault();
        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            firebase.auth().currentUser = user;
            window.location.href = './';
        })
        .catch(function(error) {
            alert(error.message);
        });
    });
});