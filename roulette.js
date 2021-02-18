
var product = new Array({
  name: '빨갱이',
  color : 'red'
},
{
  name: '파랭이',
  color : 'blue'
}
)

function init(){
    draw();
}
function draw(){
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
       const ctx = canvas.getContext('2d');
      
       ctx.translate(500,500);

       product.forEach(function(e,i){
          ctx.beginPath();
          ctx.arc(0,0,300,0,(360/product.length)*(Math.PI/180),false);
          ctx.lineTo(0,0);
          ctx.closePath();
          ctx.fillStyle = e.color;
          ctx.fill();
          
          ctx.fillStyle = 'white';
          ctx.textAlign = 'left';
          ctx.font = '14px sanserif';
          ctx.fillText(e.name, 50,50);
          
          ctx.rotate( (360/product.length)*(Math.PI/180) );
        });
      }
      var random = 0;
      $('#canvas').on({
        'click': function(){
          random += Math.random()*360 + 720;
          $(this).css({'transition-timing-function': 'ease-in-out',
          'transition' : '5s',
          'transform' : 'rotate('+random+'deg'})
        },
        'transitionend':function() {alert('당첨!');}
      });
    }
init();