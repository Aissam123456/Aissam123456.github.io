// script.js

$(document).ready(function(){

    /* Animation compétences */

    $(".skill").hover(function(){

        $(this).css({
            "transform": "scale(1.03)",
            "transition": "0.3s"
        });

    }, function(){

        $(this).css("transform", "scale(1)");
    });

    /* Formation accordéon */

    $(".formation-item h3").click(function(){

        $(this).next(".details").slideToggle();
    });

    /* Animation projets */

    $(".project-card").hover(function(){

        $(this).css({
            "background": "#dfefff"
        });

    }, function(){

        $(this).css({
            "background": "#f1f1f1"
        });
    });

    /* Scroll animé */

    $("nav a").click(function(e){

        e.preventDefault();

        let cible = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(cible).offset().top - 50

        }, 1000);

    });

    /* Validation formulaire */

    $("#contactForm").submit(function(e){

        e.preventDefault();

        let nom = $("#nom").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(
            nom === "" ||
            email === "" ||
            message === ""
        ){

            $("#error")
                .css("color", "red")
                .text("Tous les champs sont obligatoires");

            return;
        }

        if(!emailRegex.test(email)){

            $("#error")
                .css("color", "red")
                .text("Email invalide");

            return;
        }

        $("#error")
            .css("color", "green")
            .text("Message envoyé avec succès !");

        $("#contactForm")[0].reset();

    });

});