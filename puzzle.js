
  $(function() {
// draggables
    $( "#draggable" ).draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
    $( "#draggable4" ).draggable();
    $( "#draggable5" ).draggable();
    $( "#draggable6" ).draggable();
    $( "#draggable7" ).draggable();
    $( "#draggable8" ).draggable();
    $( "#draggable9" ).draggable();

// droppables
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }

    });
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }

    });

    $( "#droppable3" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

     $( "#droppable4" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

    $( "#droppable6" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

     $( "#droppable7" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

    $( "#droppable8" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

     $( "#droppable9" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }
    });

  });