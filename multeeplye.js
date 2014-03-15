$(document).ready(function(){
    $('#multiply-control').click(function(){
        var v1 = $('#v1').val();	
        var v2 = $('#v2').val();	
        var total = v1 * v2;
        if (!isNaN(total)) {
            $('#total').val(total);
        } else { 
            alert('Whoops! Please only enter numbers in these fields.');
        }
    });
});
