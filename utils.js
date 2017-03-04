var engine = "Mojs";
function promoteMojs()
{
  for (var property in mojs) {
      if (mojs.hasOwnProperty(property)) {
          window[property] = mojs[property];
      }
  }
}
function useFramer()
{
    var scale = 1 / window.devicePixelRatio;
    var width  = screen.width;
    var constant = window.devicePixelRatio*scale;
    if(width<=375)
    {
          var viewport = "width=device-width, height=device-height, initial-scale=" + constant + ", maximum-scale=" + constant + ", user-scalable=no"
        var iOS = /iPad|iPhone|iPod/.test(navigator.platform)
        //if (iOS) { viewport += ", shrink-to-fit=no" }
        document.write("<meta name=\"viewport\" content=\"" + viewport + "\">")
    }
    engine = "Framer";
}
function useMojs()
{
    var scale = (1 / window.devicePixelRatio);
    var width  = screen.width;
    var screenhandle = document.getElementById("screen");
    if(width>375)
    {
      screenhandle.style.transform = "scale("+scale+")";
    }
    else
    {
      var viewport = "width=device-width, height=device-height, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no"
      var iOS = /iPad|iPhone|iPod/.test(navigator.platform)
      if (iOS) { viewport += ", shrink-to-fit=no" }
      document.write("<meta name=\"viewport\" content=\"" + viewport + "\">")

    }
    var framerContexthandle = document.getElementById('screen');
    console.log(framerContexthandle);
    framerContexthandle.className += " usemojs";
    promoteMojs();
    engine = "Mojs";
}
function getEngine()
{
  return engine;
}
