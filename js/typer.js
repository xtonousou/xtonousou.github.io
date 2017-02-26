// typing effect logic
var Typer = {
  
  text: null,

  console.log("1");

  index: 0, // current cursor position
  speed: 2, // speed of the Typer
  file: "", // file, must be setted

  console.log("2");

  // inizialize Hacker Typer
  init: function() {

console.log("3");
    // inizialize timer for blinking cursor
    setInterval(function() {
        Typer.updLstChr();
        console.log("4");
      }, 650
    );

    // get the text file
    $.get(Typer.file, function(data) {
      console.log("5");
      // save the textfile in Typer.text
      Typer.text = data;
      Typer.text = Typer.text.slice(0, Typer.text.length - 1);
    });
  },

  // get console content
  content: function() {
console.log("6");
    return $("#console").html();
  },

  // append to console content
  write: function(str) {
console.log("7");
    $("#console").append(str);
    return false;
  },

  // main function to add the code
  addText: function(key) {
    console.log("8");
    // if text is loaded
    if (Typer.text) {
      console.log("9");
      // if the last char is the blinking cursor
      if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") {
        console.log("10");
        // remove it before adding the text
        $("#console").html($("#console").html().substring(0, Typer.content().length - 1));
        console.log("11");
      }

      // if key is not backspace
      if (key.keyCode != 8) {
        console.log("12");
        // add to the index the speed
        Typer.index += Typer.speed;
      } else {
        console.log("13");
        // else if index is not less than 0
        if (Typer.index > 0) {
          console.log("14");
          // remove speed for deleting text
          Typer.index -= Typer.speed;
        }
      }

      // replace newline chars with br, tabs with 4 space and blanks with an html blank
      $("#console").html(Typer.text.substring(0, Typer.index).replace(new RegExp("\n", "g"),"<br/>"));
      console.log("15");
    }

    // prevent F11(fullscreen) from being blocked
    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
      console.log("16");
    }
    
    // otherway prevent keys default behavior
    if (key.keyCode != 122) {
      key.returnValue = false;
      console.log("17");
    }
  },

  // blinking cursor
  updLstChr: function() {
    console.log("18");
    // if last char is the cursor
    if (this.content().substring(this.content().length - 1, this.content().length) == "_") {
      // remove it
      console.log("19");
      $("#console").html($("#console").html().substring(0, this.content().length - 1));
    } else {
      // else write it
      this.write("_");
      console.log("20");
    }
  },

  // append to console
  append: function(command) {

    // save it in Typer.text
    Typer.text = command;
    Typer.text = Typer.text.slice(0, Typer.text.length - 1);

    // if the last char is the blinking cursor
    if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") {
      // remove it before adding the text
      $("#console").html($("#console").html().substring(0, Typer.content().length - 1));
    }

    $("#console").append(Typer.text);

    var timer2 = setInterval( function() {
      if (Typer.text && Typer.index > Typer.text.length) {
        // clear the interval
        clearInterval(timer2);
        // clear before redirection
        $("#console").html($("#console").html().substring(0, Typer.content().length - Typer.text.length));
        // update cursor
        Typer.updLstChr();
      }
    }, 750);
  }
}

// initializes typer
// typingSpeed is an integer
// textFile is the path to .txt file "/txts/smth.txt"
function initTyper(typingSpeed, textFile) {

  Typer.speed = typingSpeed;
  Typer.file = textFile;
  Typer.init();
  console.log("21");

  var timer = setInterval( function() {
    console.log("22");
    // add the text
    Typer.addText({"KeyCode": 123748});
    console.log("23");
    if (Typer.text && Typer.index > Typer.text.length) {
      console.log("24");
      // clear the interval
      clearInterval(timer);
      console.log("25");
      // start inject.js (inject hrefs)
      $.getScript("/js/inject.js", function() {
        console.log("Injected hrefs.");
      });
    }
  }, 30);
}
