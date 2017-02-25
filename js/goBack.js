function goBack() {
  Typer.speed = 2;
  Typer.file = "/txts/back.txt";
  Typer.init();
  var timer = setInterval("t();", 30);
  function t() {
    
    Typer.addText({"keyCode": 123748});
    if (Typer.text && Typer.index > Typer.text.length) {
      clearInterval(timer);
    }
  }
  setTimeout(function() {
    console.log("Waiting 0.75 seconds...");
  }, 750);
  history.back();
}
