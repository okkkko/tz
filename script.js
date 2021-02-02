$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrow: true
  });
});
const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      let countryCode = (resp && resp.country) ? resp.country : "us";
      callback(countryCode);
    });
  },
  utilsScript: "build/js/utils.js"
});
