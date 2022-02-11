autosize($('textarea'));

$(window).on('load', function () {
    $("body").removeClass("preload");
});

form = $("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);


    sendMail(mail);
})

const sendMail = (mail) => {

    fetch("https://numy-code.herokuapp.com/send", {
        method: "post",
        body: mail,

    }).then((response) => {
        return response.json();
    });
};