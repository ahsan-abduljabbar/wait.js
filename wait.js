var wait = {
 
  interval: null,
   
  prependInsideBody: function (message) {
       
    $("body").prepend("<div id = 'wait' style = 'display: table; position: fixed; width: 100%; height: 100%; text-align: center; background: rgba(0, 0, 0, .8); z-index: 15000;'>" +
                      "  <div style = 'display: table-cell; vertical-align: middle; '>" +
                      "    (message != null ? "<span style = 'color: #FFF; font-size: 16px; font-weight: bold;'>" + message + "</span><br /><br />":"") +
                      "    Please Wait<br />" +
                      "    <br /><span style = 'color: #FFF; font-family: arial; font-size: 10x;'>Time Elapsed: <div style = 'display: inline-block; font-weight: bold;' id = 'timebox'>00:00</div>" +
                      "  </div>" +
                      "</div>");   
       
  },
     
  remove: function () {
     
    $("#wait").remove();
       
  },
   
  show: function (message) {
       
    // Time Elapsed
       
    var m;
    var s = 0;;
    var startTime = new Date();
     
    this.interval = setInterval(function(){
       
      s++;
       
      var temps= s%60;
       
      m = Math.floor(s/60);
       
      document.querySelector("#timebox").innerHTML = "" + (m > 9 ? "":"0") + m + ":" + (temps > 9 ? "":"0") + temps;
     
    }, 1000);
 
    //
     
    if (!$("#wait").length > 0) {
         
      $("#wait").remove();
             
    } 
         
    wait.prependInsideBody(message);
           
  },
   
  hide: function () {
           
    clearInterval(this.interval);
           
    wait.remove();
           
  }
         
};
