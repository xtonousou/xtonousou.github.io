var timer = setInterval("t();", 30);
function t() {
  
  Typer.addText({"keyCode": 123748});
  if (Typer.text && Typer.index > Typer.text.length) {
    clearInterval(timer);
  }
}
