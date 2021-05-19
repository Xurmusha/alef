function validateEmail() {
    let valueEmail = document.getElementById('email-address').value;
    console.log(valueEmail);
    const check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!check.test(valueEmail)) {
        document.getElementById('result').innerHTML= "<div class='alert'>" +
            "  <span class='closebtn' onclick=" +
            "this.parentElement.style.display='none';>" +
            "&times;</span>" +
            " Error! Your email is not compatible!!!" +
            "</div>";
    }
}

function changeModal() {
    var modal = document.getElementById("myModal");
    document.getElementById("myModal").style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}