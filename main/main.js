$(document).ready(function(){

    $('.start').click(function(){
        $('.bg_loading').css("display", "block");
        $('#contents').fadeIn(300);

    });


    $('.big_box .name').click(function(){
        var _index =$('.big_box .name').index(this);
        var count = _index+1;
        var a = $('.big_box .option:nth-child('+ count +') input').val();
        console.log(a);
        $('.big_box .option').animate({
            top:30 + "%",
            left:39 + "%"
        }, 500, function(){
            $(".big_box").css("display", "none");
            if (count === 1){
                korea_food();
            }

            if (count === 2){
                china_food();
            }

            if (count === 3){
                japen_food();
            }

            if (count ===4){
                america_food();
            }
        
        });
    })


    function korea_food(){
        $(".korea_box").css("display", "block");
        $('.soup').animate({
            top:55 + "%",
            left:39 + "%"
        });

        $('.rice').animate({
            top:55 + "%",
            left:10 + "%"
        });

        $('.schoolFood').animate({
            top:55 + "%",
            left:70+ "%"
        });

        $('.jjim').animate({
            top:2 + "%",
            left:39 + "%"
        });

        $('.hocks').animate({
            top:2 + "%",
            left:10 + "%"
        });

        $('.lunchbox').animate({
            top:2 + "%",
            left:70 + "%"
        });
    }

    function china_food(){
        $(".china_box").css("display", "block");
        $('.cotton').animate({
            top:55+ "%",
            left:17 + "%"
        });

        $('.rice').animate({
            top:5 + "%",
            left:17 + "%"
        });

        $('.Food').animate({
            top:55 + "%",
            left:60+ "%"
        });

        $('.fried').animate({
            top:5 + "%",
            left:60 + "%"
        });

       
    }

    function japen_food(){
        $(".japen_box").css("display", "block");
        $('.cotton').animate({
            top:55+ "%",
            left:17 + "%"
        });

        $('.rawFish').animate({
            top:5 + "%",
            left:17 + "%"
        });

        $('.bowlRice').animate({
            top:55 + "%",
            left:60+ "%"
        });

        $('.fried').animate({
            top:5 + "%",
            left:60 + "%"
        });

       
    }


    function america_food(){
        $(".america_box").css("display", "block");
        $('.pasta').animate({
            top:55+ "%",
            left:17 + "%"
        });

        $('.steak').animate({
            top:5 + "%",
            left:17 + "%"
        });

        $('.filaf').animate({
            top:55 + "%",
            left:60+ "%"
        });

        $('.fastFood').animate({
            top:5 + "%",
            left:60 + "%"
        });

       
    }



    $('.name').hover(   // background 색상 마우스 hover 됐을 때 변경 해주기
        function(){
            $(this).addClass("hover")
        },
        function(){
            $(this).removeClass("hover")
        }
    );




    $(document).mouseup(function (e){    //빈공간 클릭 했을때 창 닫기
        
        var LayerPopup = $("#contents");
        console.log(e.target);     //클릭한 요소의 태그
        console.log(LayerPopup.has(e.target).length);  // 그 태그가 layerpopup 안에있는거면 length가 1 이상이니깐 안꺼짐
        if(LayerPopup.has(e.target).length === 0){  // 0아면 꺼짐
          LayerPopup.css("display", "none");
          $(".bg_loading").css("display", "none");
        
        }
      });


    











});