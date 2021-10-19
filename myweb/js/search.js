const search = () => {
    var input, text;
    input = document.getElementById('myinput');
    text = document.getElementsByClassName('card mb-2 ');
    filter = input.value.toUpperCase();

    for (i = 0; i < text.length; i++) {
        a = text[i].getElementsByTagName("b")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            text[i].style.display = "";
        } else {
            text[i].style.display = "none";
        }
    }

}