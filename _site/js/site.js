function init() {

  var map = L.map('contact', {
    zoomControl: false
  }).setView([47.599518, -122.25], 12);
  L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
    var popup = L.popup({
    'offset': [395, 69]
  }).setContent('<h3>Let\'s work together.</h3><p class="popup-info">314 1st Avenue South, Seattle, WA 98104<br><span>hello@theowlandwolf.com<br>206-854-5372</span></p>');

  var marker = L.circleMarker([47.599518, -122.333970], {
    'fillColor': '#000',
    'stroke': false,
    'fillOpacity': 1
  }).setRadius(6).bindPopup(popup).addTo(map).openPopup();


  $('a.scroll').on('click', function(){
    if($(this).attr('href').indexOf('#')>-1) {
      event.preventDefault();
      var id = $(this).attr("href");
      var top = $(id).offset().top;
      $("html, body").animate({
        scrollTop: top
      }, 300); // you can set any time here
    }
  });
}

window.onload = init();