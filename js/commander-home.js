// must be called after #console on the .html
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);
alert(filename);

document.getElementById('cdh1').onclick = "appendCommand('cd bio/ '); window.location='/bio.html'";
document.getElementById('cdh2').onclick = "appendCommand('cd contact/ '); window.location='/contact.html'";
document.getElementById('cdh3').onclick = "appendCommand('cd projects/ '); window.location='/projects.html'";
document.getElementById('al').onclick = "appendCommand('$BROWSER https://www.archlinux.org '); window.location='https://www.archlinux.org'";
document.getElementById('pk').onclick = "appendCommand('wget -q /xtonousou-pubkey.asc '); window.location='/xtonousou-pubkey.asc'";
