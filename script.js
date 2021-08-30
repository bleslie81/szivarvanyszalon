$(document).ready(function(){
    $(".m1").click(function(){
        $(".m1").css({'color':'black'});
        $(".m2, .m3, .m4").css({'color':'white','transform':'skewX(20deg)'});
        $(".active").css({'left':'0px','transform':'skewX(20deg)','width': '100px'});
    });
    $(".m2").click(function(){
        $(".m2").css({'color':'black'});
        $(".m1, .m3, .m4").css({'color':'white'});
        $(".active").css({'left':'180px','transform':'skewX(20deg)','width': '100px'});
    });
    $(".m3").click(function(){
        $(".m3").css({'color':'black'});
        $(".m1, .m2, .m4").css({'color':'white'});
        $(".active").css({'left':'350px','transform':'skewX(-20deg)','width': '100px'});
    });
    $(".m4").click(function(){
        $(".m4").css({'color':'black'});
        $(".m1, .m2, .m3").css({'color':'white'});
        $(".active").css({'left':'500px','transform':'skewX(-20deg)','width': '180px'});
    });
});




function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    
    var x = document.querySelector(".toggle-active");
    var y = document.querySelector(".toggle-btn");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

$(document).ready(function(){

    $count=1;

    $("#rightbtn").click(function(){
        if($count==1){
            $(".munka").animate({left:"-100%"},1000);
            $count=2;
        }
        else if($count==2){
            $(".munka").animate({left:"-200%"},1000);
            $count=3;
        }
        else if($count==3){
            $(".munka").animate({left:"-300%"},1000);
            $count=4;
        }else if($count==4){
            $(".munka").animate({left:"-400%"},1000);
            $count=5;
        }
    });

    $("#leftbtn").click(function(){
        if($count==5){
            $(".munka").animate({left:"-300%"},1000);
            $count=4;
        }else if($count==4){
            $(".munka").animate({left:"-200%"},1000);
            $count=3;
        }
        else if($count==3){
            $(".munka").animate({left:"-100%"},1000);
            $count=2;
        }
        else if($count==2){
            $(".munka").animate({left:"0%"},1000);
            $count=1;
        }
    });

    /*$(document).ready(function(){
        $("#mainapi").mouseenter(function(){
          $("#apimenu").show();
        })
        $("#apimenu").mouseleave(function() {
            $("#apimenu").hide();
        })
      });*/

      $(document).ready(function () {

        $("#mainapi").mouseenter(function(){
          $("#apimenu").slideDown();
          $(".hrrolam").css({"top":"25px"});
        });
      
        $("#apimenu").mouseleave(function(){
          $("#apimenu").slideUp(); 
          $(".hrrolam").css({"top":"5px"});
        });

        $(".m1").mouseenter(function(){
            $("#apimenu").slideUp(); 
            $(".hrrolam").css({"top":"5px"});
          });

        $(".m2").mouseenter(function(){
            $("#apimenu").slideUp(); 
            $(".hrrolam").css({"top":"5px"});
        });

        $(".m4").mouseenter(function(){
            $("#apimenu").slideUp(); 
            $(".hrrolam").css({"top":"5px"});
        });
        $(".message").focus(function() {
            $(".message").addClass('msgactive');
        });
        $(".message").focusout(function() {
            $(".message").removeClass('msgactive');
        });
        $(".email").focus(function() {
            $(".email").addClass('msgactive');
        });
        $(".message").focusout(function() {
            $(".email").removeClass('msgactive');
        });    
      });
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  console.log(window_height);
  console.log(window_top_position);
  console.log(window_bottom_position);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(".sidebar-item").on('hover', function(){
    console.log("asd");
})


$(".sidebar-item").hover(function(){
    $(".sidebar-item>a>span").css("display", "block");
    console.log("hover");
    }, function(){
    $(".sidebar-item>a>span").css("display", "none");
    console.log("hover");
  });