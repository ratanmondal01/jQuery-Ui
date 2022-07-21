// // text change
// function textChange(){

// document.getElementById('h3').style.color = "red";

// }
// function loremChange(){
// 	document.getElementsByClassName('text-h1')[2].innerHTML = "Hello World!"
// }

// function changeDate(){
// 	document.getElementById('h5').innerHTML = Date()
// }


// function dateChange(){
// 	document.getElementById('c_h4').innerHTML = Date()
// }

// function changeClass(){
  
//   document.getElementsByClassName('c_h3')[6].innerHTML = Date()	
// }

// function colorChange(){
// 	document.getElementsByClassName('c_h1')[2].style.color = "green";
// }
// function customColor(){
// 	document.getElementById('custom-h2').style.color = "red";
// }
// function customPara(){
// 	document.getElementById('cutome_h1').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ad accusamus vel nulla nihil porro consequatur, quia delectus cumque impedit mollitia."
// }



// jquary start


$(document).ready(function(){

//   $('.c-button').click(function(){
//   	alert("Hello World")
//   });

//   $('.c-btn').click(function(){
//   	alert("Hello JQuery")
//   });

//   $('.hide').click(function(){
//   	 $('h2').hide("slow");
//   });
//   $('.show').click(function(){
//   	 $('h2').show("fast");
//   });
//    $('.tgl').click(function(){
//   	 $('h2').toggle(2000);
//   });

// $('.fadeout').click(function(){
// 	$('.c-h2').fadeOut();
// });
// $('.fadein').click(function(){
// 	$('.c-h2').fadeIn();
// });
// $('.fadetgl').click(function(){
// 	$('.c-h2').fadeToggle();
// });

// $('.ques').click(function(){
// 	$('.ans').slideToggle(600);
// })

$( "#draggable" ).draggable();

});

// jQuery ui start

$(document).ready(function(){


$( "#draggable" ).draggable();


$( "#draggables" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    $( "#resizable" ).resizable();
    $( "#accordion" ).accordion();


    var availableTags = [
      "HTML",
      "CSS",
      "bootstrap",
      "JavaScript",
      "jQuery"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "input" ).checkboxradio();



});

  $( function() {
    $( "#datepicker" ).datepicker();
        $( "#progressbar" ).progressbar({
      value: 50
    });
  } );
  $( function() {
    $( "input" ).checkboxradio();
  } );

    $( function() {
    $( "#tabs" ).tabs();

  } );

    $( function() {
    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,
 
        // Callbacks
        change: null,
        random: null
      },
 
      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );
 
        this.changer = $( "<button>", {
          text: "change",
          "class": "custom-colorize-changer"
        })
        .appendTo( this.element )
        .button();
 
        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });
        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };
 
        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();
 
        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
          return;
        }
        this._super( key, value );
      }
    });
 
    // Initialize with default options
    $( "#my-widget1" ).colorize();
 
    // Initialize with two customized options
    $( "#my-widget2" ).colorize({
      red: 60,
      blue: 60
    });
 
    // Initialize with custom green value
    // and a random callback to allow only colors with enough green
    $( "#my-widget3" ).colorize( {
      green: 128,
      random: function( event, ui ) {
        return ui.green > 128;
      }
    });
 
    // Click to toggle enabled/disabled
    $( "#disable" ).on( "click", function() {
      // use the custom selector created for each widget to find all instances
      // all instances are toggled together, so we can check the state from the first
      if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
        $( ":custom-colorize" ).colorize( "enable" );
      } else {
        $( ":custom-colorize" ).colorize( "disable" );
      }
    });
 
    // Click to set options after initialization
    $( "#green" ).on( "click", function() {
      $( ":custom-colorize" ).colorize( "option", {
        red: 64,
        green: 250,
        blue: 8
      });
    });
  } );



      $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );