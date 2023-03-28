// $(document).ready(function() {
//     $(".box").hover(function() {
//       $(this).animate({
//         marginTop: "-=1%",
//         marginBottom: "+=1%"
//       }, 200);
//     }, function() {
//       $(this).animate({
//         marginTop: "0%",
//         marginBottom: "0%"
//       }, 200);
//     });
//   });
$(document).ready(function () {
  $(window).scroll(function () {
     $(".animated-section").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
           $(this).addClass("fadeleft");
        }
     });
  });
})