$(document).ready(function() {
  
  var img = $(".glitch");
  var prefix = "data:image/jpg;base64,";
  var maxErrors = 200;

  function update() {
    
    var corrupted = data;
    if (Math.random() > 0.8) {
      var errors = Math.round(Math.random() * maxErrors)
      for (var i = 0; i < errors; i++) {
        var l = 2000 + Math.round(Math.random() * (corrupted.length - 2002));
        corrupted = corrupted.substr(0, l) + corrupted.charAt(l + 1) + corrupted.charAt(l) + corrupted.substr(l + 2);
      }
    }
    img.attr("src", prefix + corrupted);

  }
  update();
  setInterval(update, 26);

});
