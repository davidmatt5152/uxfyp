mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied email address: " + copyText.value);
}