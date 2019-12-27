window.onload=function(){

    $('.nav li').click(function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
    })

    $('.banner_car_top a').click(function(){
        $('.banner_car_top a').removeClass('active');
        $(this).addClass('active');
    })
}