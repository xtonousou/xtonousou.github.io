$(document).ready(function() {
  switch (document.title) {
    case "/home/xtonousou":
      document.getElementById('pk').href = "/xtonousou-pubkey.asc";
      document.getElementById('al').href = "https://www.archlinux.org";
      document.getElementById('cdh1').href = "/bio.html";
      document.getElementById('cdh2').href = "/contact.html";
      document.getElementById('cdh3').href = "/projects.html";

      $("#pk").click(function() {
        Typer.append('wget -q /xtonousou-pubkey.asc ');
      });
      $("#al").click(function() {
        Typer.append('$BROWSER https://www.archlinux.org ');
      });
      $("#cdh1").click(function() {
        Typer.append('cd bio/ ');
      });
      $("#cdh2").click(function() {
        Typer.append('cd contact/ ');
      });
      $("#cdh3").click(function() {
        Typer.append('cd projects/ ');
      });

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
});
