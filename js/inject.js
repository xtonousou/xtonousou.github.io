switch (document.title) {
  case "/home/xtonousou":
    var bio = document.getElementById('cdh1');
    var contact = document.getElementById('cdh2');
    var projects = document.getElementById('cdh3');
    var distro = document.getElementById('al');
    var publickey = document.getElementById('pk');
    var bioEv = $('onclick = "Typer.append('cd bio/ ');"');

    $('#cdh1').append(bioEv);

    bio.href = "/bio.html";
    contact.href = "/contact.html";
    projects.href = "/projects.html";
    distro.href = "https://www.archlinux.org";
    publickey.href = "/xtonousou-pubkey.asc";

    contact.onclick = function() { Typer.append('cd contact/ '); }
    projects.onclick = function() { Typer.append('cd projects/ '); }
    distro.onclick = function() { Typer.append('$BROWSER https://www.archlinux.org '); }
    publickey.onclick = function() { Typer.append('wget -q /xtonousou-pubkey.asc '); }

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
