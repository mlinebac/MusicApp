$('.flip').click(function(){

    $(this).find('#genreBox1').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return false;
});
