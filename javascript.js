

    window.addEventListener("scroll", function(){
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky",window.scrollY > 400);
    })

    $(document).ready(function(){
        $("#service").hover(function(){
            $("#wrapper1").show();
            $("#wrapper2").hide();
            $("#wrapper3").hide();
        });
        $("#overlay1").hover(function(){
            $(".wrapper-nav").hide();
        });
        });
        $(document).ready(function(){
            $("#sub-menu-iot").hover(function(){
                $(".iot-item").css("display","block")
            });
            $(".sub-menu-list-2").hover(function(){
            $(".iot-item").css("display","none");
        });
        });
        $(document).ready(function(){
        $("#technology").hover(function(){
            $("#wrapper2").show();
            $("#wrapper1").hide();
            $("#wrapper3").hide();
        });
        $("#overlay2").hover(function(){
            $(".wrapper-nav").hide();
        });
        });
        $(document).ready(function(){
        $("#client").hover(function(){
            $("#wrapper3").show();
            $("#wrapper1").hide();
            $("#wrapper2").hide();
        });
        $("#overlay3").hover(function(){
            $(".wrapper-nav").hide();
        });
        });

        /////////////////////////////////////////// third banner


        



