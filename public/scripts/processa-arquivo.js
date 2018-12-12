$(document).ready(function(){
    $("#exportar-modelo").click(function(){
        var storage = firebase.storage();
        var pathReference = storage.ref('modelo_csv_escola_360.csv');
        pathReference.getDownloadURL().then(function(url) {
            window.location = url;
        });
    });
});