switch (document.title) {

  case "/home/xtonousou":
  
    var bio = document.getElementById('cdh1');
    var contact = document.getElementById('cdh2');
    var projects = document.getElementById('cdh3');
    var distro = document.getElementById('al');
    var publickey = document.getElementById('pk');

    bio.href = "/bio.html";
    contact.href = "/contact.html";
    projects.href = "/projects.html";
    distro.href = "https://www.archlinux.org";
    publickey.href = "/xtonousou-pubkey.asc";

    bio.onclick = function() { appendCommand('cd bio/ '); }
    contact.onclick = function() { appendCommand('cd contact/ '); }
    projects.onclick = function() { appendCommand('cd projects/ '); }
    distro.onclick = function() { appendCommand('$BROWSER https://www.archlinux.org '); }
    publickey.onclick = function() { appendCommand('wget -q /xtonousou-pubkey.asc '); }
    
    break;
  case "/home/xtonousou/bio":


    break;
  case "/home/xtonousou/contact":


    break;
  case "/home/xtonousou/projects":


    break;
  default:
    console.error("inject.js : unknown document.title");
}

// NOTE: if the text you want to append is "cd path/" pass "cd path/ " instead (an extra space)
function appendCommand(command) {

  Typer.text = command; // save it in Typer.text
  Typer.text = Typer.text.slice(0, Typer.text.length - 1);
  if (Typer.content().substring(Typer.content().length - 1, Typer.content().length) == "_") // if the last char is the blinking cursor
    $("#console").html($("#console").html().substring(0, Typer.content().length - 1)); // remove it before adding the text
  $("#console").append(Typer.text);
  window.scrollBy(0, 50); // scroll to make sure bottom is always visible

  var timer2 = setInterval( function t2() {
    if (Typer.text && Typer.index > Typer.text.length) {
      clearInterval(timer2);
      $("#console").html($("#console").html().substring(0, Typer.content().length - Typer.text.length)); // clear before change directory
      Typer.updLstChr();
    }
  }, 750);
  
  return true;
}
