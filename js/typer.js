// typing effect logic
var Typer = {
  
  text: null, // the text container

  index: 0, // current cursor position
  speed: 2, // how many characters to process at each time from the txt file
  file: "", // file, must be setted

  // inizialize Hacker Typer
  init: function() {
    
    // inizialize timer for blinking cursor
    setInterval(function() {
        Typer.updLstChr();
      }, 650
    );

    // get the text file
    $.get(Typer.file, function(data) {
      // save the textfile in Typer.text
      Typer.text = data;
      Typer.text = Typer.text.slice(0, Typer.text.length - 1);
    });
  },

  // get console content
  content: function() {
    
    return $("#console").html();
  },

  // append to console content
  write: function(str) {
    
    $("#console").append(str);
    return false;
  },

  // main function to add the code
  addText: function(key) {
    
    // if text is loaded
    if (Typer.text) {
      // if the last char is the blinking cursor
      if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") {
        // remove it before adding the text
        $("#console").html($("#console").html().substring(0, Typer.content().length - 1));
      }

      // if key is not backspace
      if (key.keyCode != 8) {
        // add to the index the speed
        Typer.index += Typer.speed;
      } else {
        // else if index is not less than 0
        if (Typer.index > 0) {
          // remove speed for deleting text
          Typer.index -= Typer.speed;
        }
      }

      // replace newline chars with br, tabs with 4 space and blanks with an html blank
      $("#console").html(Typer.text.substring(0, Typer.index).replace(new RegExp("\n", "g"),"<br/>"));
    }

    // prevent F11(fullscreen) from being blocked
    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }
    
    // otherway prevent keys default behavior
    if (key.keyCode != 122) {
      key.returnValue = false;
    }
  },

  // blinking cursor
  updLstChr: function() {
    
    // if last char is the cursor
    if (this.content().substring(this.content().length - 1, this.content().length) == "_") {
      // remove it
      $("#console").html($("#console").html().substring(0, this.content().length - 1));
    } else {
      // else write it
      this.write("_");
    }
  },

  // append to console
  append: function(command) {

    // save it in Typer.text
    Typer.text = command;

    // if the last char is the blinking cursor
    if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") {
      // remove it before adding the text
      $("#console").html($("#console").html().substring(0, Typer.content().length - 1));
    }

    $("#console").append(Typer.text);

    var t = new Timeout(function () {
      // if the last char is the blinking cursor
      if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") {
        // remove it before removing the newly appended text
        $("#console").html($("#console").html().substring(0, Typer.content().length - 1));
      }
      $("#console").html($("#console").html().substring(0, Typer.content().length - Typer.text.length));
    }, 1000);
  }
}

function Timeout(fn, interval) {
  
  var timeoutID = setTimeout(fn, interval);
  this.cleared = false;
  this.clear = function () {
    this.cleared = true;
    clearTimeout(timeoutID);
  };
}

function startInterval(interval) {
  
  intervalID = setInterval(function() {
    Typer.addText({"KeyCode": 123748});
    if (Typer.text && Typer.index > Typer.text.length) {
      clearInterval(intervalID);
      $.getScript("/js/inject.js", function() {
        console.log("Injected hrefs.");
      });
    }
  }, interval);
}


// clears an old interval and starts a new one
// interval is an integer
// id is the interval id
function newInterval(interval, id) {
  
  // clear the existing interval
  clearInterval(id);
  // just start a new one
  startInterval(interval);
}

// initializes typer
// step is an integer, how many letters will be processed at a time
// file is the path to .txt file "/txts/smth.txt"
// speed is an integer, typing speed
function initTyper(step, file, speed) {

  Typer.speed = step;
  Typer.file = file;
  Typer.init();

  startInterval(speed);
}
