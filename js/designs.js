$(document).ready(function pixelTable(){
const table = $('.pixelCanvas');
  
  /* This is the makd grid function below   */
   function makeGrid(width, height) {
   const $tbody = $("<tbody></tbody>");
         
      for (let row = 0; row < width; row++) {
             let $row = $("<tr></tr>");
          for (let col = 0 ; col < height; col++) {
             let $col = $("<td></td>");
               $row.append($col);
            /* col is now an added child to row*/
            }
               $tbody.append($row);
              /* row is now an added child to tbody*/
               } 
           table.append($tbody);
           /* tbody is now the child of the table*/
          
         $('td').mousedown(function(event){
            let color = $('.colorPicker').val();
            $(this).css('background-color', color);
         });                         
                                                        
                                            }
  /* This is the makd grid function above   */                                       
        table.dblclick(function(e) {
        $(e.target).css("background-color", "white");
        });

                                            
                                            

    $('#submitButton').click(function(event){ 
        event.preventDefault();
        table.children().remove();
        let maxWidth = 50;
        let maxHeight = 50;
        let width = $('.inputWidth').val();
        let height = $('.inputHeight').val();
        if (width > maxWidth | height > maxHeight) {
            alert ("The number you have entered is above 50.  Please use a lower number"); }
            else {
            makeGrid(width, height); 
        }
        });
  
  
  
});