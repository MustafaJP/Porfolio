$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    $navbar.css({left: `-${width}px`});
}

var typed = new Typed('#typed' , {
    strings: [
        'Freshmen ',
        'Web Developer',
        'Freelancer ',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Freshmen ',
        'Web Developer ',
        'Freelancer '
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(".st1").click(function(){
    $(".Uni").prop("checked", true);
})
$(".st2").click(function(){
    $(".G12").prop("checked", true);
})
$(".st3").click(function(){
    $(".G10").prop("checked", true);
})
$("ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})