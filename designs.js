
// EBRAHIM CASSIM - 28/03/2019
// PIXEL ART MAKER JS FILE
// UDACITY INTRO TO PROGRAMMING - JAVA SCRIPT

// Select color input
// Select size input
var col, row, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    var col = document.getElementById('inputHeight').value;
    var row = document.getElementById('inputWidth').value;
    makeGrid(col, row);
  
})

function makeGrid(col, row) {
    $('tr').remove();
    
// Your code goes here!

                                        //for columns and rows
    for (var i = 1; i <= col; i++){
        $('#pixelCanvas').append('<tr id=table'+ i +'></tr>');

        for (var j = 1; j <= row; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
                                        //for color
        $ ('td').click(function addInk() {
            color = $ ('#colorPicker').val();
            $(this).attr('style', 'background-color:' + color);
        });
    }
