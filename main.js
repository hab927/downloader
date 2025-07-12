let button = document.getElementById("press");
let field = document.getElementById("field");

button.onclick = function() {say()};

function say() {
    console.log(field.value);

    $(document).ready(
        $.ajax({
            type: "POST",
            url: "number.py",
            data: {param: field.value}
        }).done(function(o) {
            console.log(o);
        })
    );
}

