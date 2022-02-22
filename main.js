$(document).ready( function () {
    getAdvice();
    
    $('#generate_advice').click(() => {
        getAdvice();
    });
});

function getAdvice(){
    // this is where I would start the loading animation for the button
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: 'get',
        dataType: 'json',
        success: function(res){
            $('#advice_number').text(res.slip.id);
            $('#advice_text').text(res.slip.advice);
        },
        complete: function(){
            // this is where I would stop the loading animation
        }
    });
}

