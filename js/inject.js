// must be called after #console on the .html

switch (document.title) {

  case "/home/xtonousou":
    document.getElementById('cdh1').onclick = "appendCommand('cd bio/ '); window.location='/bio.html'";
    document.getElementById('cdh2').onclick = "appendCommand('cd contact/ '); window.location='/contact.html'";
    document.getElementById('cdh3').onclick = "appendCommand('cd projects/ '); window.location='/projects.html'";
    document.getElementById('al').onclick = "appendCommand('$BROWSER https://www.archlinux.org '); window.location='https://www.archlinux.org'";
    document.getElementById('pk').onclick = "appendCommand('wget -q /xtonousou-pubkey.asc '); window.location='/xtonousou-pubkey.asc'";
    
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
