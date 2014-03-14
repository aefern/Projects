$(document).ready(function(){
    $("#button").click(function(){
        var v1 = $('#v1').val();	
        var v2 = $('#v2').val();	
        var total = v1 * v2;
        if (!isNaN(total)) {
            $('#total').attr('value', total);
        } else { 
            alert('Whoops! Please only enter numbers in these fields.');
        }
    });
});
