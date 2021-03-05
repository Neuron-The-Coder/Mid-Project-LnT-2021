$(document).ready(function(){
    AOS.init();
    var words="Welcome to my portfolio"
    var j = 0
    window.addEventListener('scroll', Appeared)
    window.addEventListener('mouseenter', TextAppear)

    function typeP(){
        
        if (j == words.length) return
        
        var temp = $("#welcome").text()
        temp = temp + words[j]
        $("#welcome").text(temp)
        j++ 

    }

    p = setInterval(typeP, 200)

    var mottos = ["Ad Astra Per Aspera", "No Pain, No Gain"]
    var i = 1
    var l = mottos.length;

    function TextAppear(){
        $('#Pic1Project').mouseenter(function(){
            $('#proj1').css('animation', 'dragLeftEnter 1s forwards')
        })
    }


    function changes(){
        $("#motto").fadeOut(500, function(){
            $("#motto").text(mottos[i]).fadeIn(500)
            i += 1
            i %= l
        })
    }
    setInterval(changes, 3000)

    function Appeared(){
        // Y Screen + height window yang ditampilkan

        if(window.scrollY + window.innerHeight >= 1500){
            $("#backbutton").css("animation", "backAppear 500ms")
            $("#backbutton").css("animation-fill-mode", "forwards")
            $("#backbutton").fadeIn(500)
        }

        else {
            $("#backbutton").css("animation", "backGone 500ms")
            $("#backbutton").css("animation-fill-mode", "forwards")
            $("#backbutton").fadeOut(500)
        }

        if (window.scrollY + window.innerHeight >= document.getElementById("about-me").offsetTop){
            $("#about-me").css("animation", "poof 1s")
            $("#about-me").css("animation-fill-mode", "forwards")
        }

        if (window.scrollY + window.innerHeight>= document.getElementById("expertise").offsetTop + 100){
            $("#expertise").css("animation", "poof 1s")
            $("#expertise").css("animation-fill-mode", "forwards")
        }

        if (window.scrollY + window.innerHeight>= document.getElementById("projects").offsetTop + 100){
            $("#projects").css("animation", "poofProj 1s")
            $("#projects").css("animation-fill-mode", "forwards")
        }
    }

    $('#backbutton').click(function(){
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul li:nth-child(1)').click(function (){
        window.scroll({
            top: document.getElementById("expertise").offsetTop,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul li:nth-child(2)').click(function (){
        window.scroll({
            top: document.getElementById("projects").offsetTop,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul li:nth-child(3)').click(function (){
        window.scroll({
            top: document.getElementById("contact-me").offsetTop,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul #hidDrop #hidDropCon p:nth-child(1)').click(function (){
        window.scroll({
            top: document.getElementById("expertise").offsetTop,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul #hidDrop #hidDropCon p:nth-child(2)').click(function (){
        window.scroll({
            top: document.getElementById("projects").offsetTop,
            behavior: "smooth"
        })
    })

    $('#navbar #navcon ul #hidDrop #hidDropCon p:nth-child(3)').click(function (){
        window.scroll({
            top: document.getElementById("contact-me").offsetTop,
            behavior: "smooth"
        })
    })

    $("#about-me #about-me-inside #photo-id img").mouseenter(function (){
        $("#about-me #about-me-inside #photo-id img").fadeOut(500, function(){
             $("#about-me #about-me-inside #photo-id img").attr("src", "Assets/PP-Dao.svg").fadeIn(500)
        })
    })

    $("#about-me #about-me-inside #photo-id img").mouseleave(function (){
        $("#about-me #about-me-inside #photo-id img").fadeOut(500, function(){
             $("#about-me #about-me-inside #photo-id img").attr("src", "Assets/PP-Ethen.svg").fadeIn(500)
        })
    })

    // $("#about-me #about-me-inside #photo-id img").mouseleave(function (){
    //     $("#about-me #about-me-inside #photo-id img").attr("src", "Assets/PP-Ethen.svg")
    //     $("#about-me #about-me-inside #photo-id img").attr("")
    // })


})



function AboutMeClicked(){
    window.scroll({
        top: document.getElementById("about-me").offsetTop,
        behavior: "smooth"
    })
}

// Check textarea


