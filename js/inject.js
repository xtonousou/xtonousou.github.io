alert(document.title);
switch (document.title) {

  case "/home/xtonousou":
    console.log("im in");
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

    bio.onclick = appendCommand('cd bio/ ');
    contact.onclick = appendCommand('cd contact/ ');
    projects.onclick = appendCommand('cd projects/ ');
    distro.onclick = appendCommand('$BROWSER https://www.archlinux.org ');
    publickey.onclick = appendCommand('wget -q /xtonousou-pubkey.asc ');    
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
