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