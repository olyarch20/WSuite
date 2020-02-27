function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var email = $("#email");
    applyStyles($("#subject"));
    applyStyles($("#message"));
    if (!validateEmail(email.val()) || email.val() === ""){
        email.addClass("is-invalid").removeClass("is-valid");
    }else{
        email.addClass("is-valid").removeClass("is-invalid");
    }
    return false;
}

function applyStyles(el){
    if(el.val() === "") el.addClass("is-invalid").removeClass("is-valid");
    else el.addClass("is-valid").removeClass("is-invalid");
}

$("#validate").on("click", validate);


$('.carousel').carousel({
    interval: 3000
});
