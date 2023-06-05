window.onload = function() {
    document.querySelector("#fav-things").onsubmit = function(event) {
        event.preventDefault();

        let favColor = document.getElementById("fav-color").value;
        let favMovie = document.getElementById("fav-movie").value;

        console.log(favColor);
        console.log(favMovie);
    }
};