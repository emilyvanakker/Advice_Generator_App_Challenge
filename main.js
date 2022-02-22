$(document).ready( function () {
    getAdvice();
    
    $('#generate_advice').click(() => {
        getAdvice();
    });
});

function getAdvice(){
    $('#generate_advice').attr("disabled", true);
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: 'get',
        dataType: 'json',
        success: function(res){
            $('#advice_number').text(res.slip.id);
            $('#advice_text').text(res.slip.advice);
        },
        complete: function(){
            $('#generate_advice').attr("disabled", false);
        }
    });
}

