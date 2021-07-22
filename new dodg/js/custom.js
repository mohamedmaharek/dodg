$(function() {
    /*
       Smooth Scrolling to section
    */ 
    // $(".navbar-light .navbar-nav ").on("click", ".nav-link" ,function(e){
    //      e.preventDefault();
    //      var destination = "#" + $(this).data("scroll")
    //      //console.log("#" + $(this).data("scroll") );
    //      //console.log($(destination).offset().top) ;
    //      var navHeight =($(".navbar").outerHeight());
    //      $("html,body").animate({
    //        scrollTop : $(destination).offset().top - navHeight
    //      } , 500)
    // });
      /*
      end Smooth Scrolling to section
    */ 
   
    //scroll to top
    $(window).on("scroll", function(){
       //console.log($(window).scrollTop());
       if($(window).scrollTop() >=500){
        // console.log("Hello");
        $(".scroll-to-top").fadeIn();
       }else{
        $(".scroll-to-top").fadeOut();
       }
    });
    $(".scroll-to-top").on("click", function(e){
      e.preventDefault();
      $("html,body").animate({
        scrollTop : 0
      }, 500)
    });
  });

   
//  end the top button

 

// arabic button عربى 
$(".btn").click(function(){
  $(".arabic").show(3000);
});


// 
$(".eng").click(function(){
  $(".arabic").hide(4000);
});


$(".btn").click(function(){
  $(".enshlis").show(3000)
});
 

// $(".btn").click(function(){
//   $("about").animate({left: '250px'});
// }); 

// $( "a" ).click(function() {
//   $( "div" ).fadeIn( 3000, function() {
//     $( "span" ).fadeIn( 100 );
//   });
//   return false;
// });

 



// $(document).ready(function(){
//   $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   });
// });


// $(document).ready(function(){
//   $("other").click(function(){
//     $("media").animate({left: '250px'});
//   });
// });
// $(document).ready(function () {
//   // Hide the div
//   $("#girl").hide();
//   // Show the div after 5s
//   $("#girl").delay(5000).fadeIn(100);  
// });
 