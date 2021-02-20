const foodList = document.querySelector(".food-list"),
        foodInput = foodList.querySelector("input"),
        createRoulette = document.querySelector(".create-roulette"),
        createBtn = createRoulette.querySelector("input");
let products = new Array();

function paintProducts(name){
  const product = {
    name : name,
    color : "#" + Math.round(Math.random() * 0xffffff).toString
    (16)
  }
  products.push(product);
  console.log(products);
}

function draw(){
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const ctx = canvas.getContext('2d');

    ctx.translate(500,500);
    
    products.forEach(function(e,i){
      ctx.beginPath();
      ctx.arc(0,0,300,0,(360/products.length)*(Math.PI/180),false);
      ctx.lineTo(0,0);
      ctx.closePath();
      ctx.fillStyle = e.color;
      ctx.fill();
      
      ctx.fillStyle = 'black';
      ctx.textAlign = 'left';
      ctx.font = '14px sanserif';
      ctx.fillText(e.name, 100,100);
      
      ctx.rotate( (360/products.length)*(Math.PI/180) );
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
    'transitionend':function() {alert('오늘은 이거닷!');}
  });
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue = foodInput.value;
  paintProducts(currentValue);
  foodInput.value = "";
}

function handleClick(){
  draw();
}


function init(){
    foodList.addEventListener("submit",handleSubmit);
    createBtn.addEventListener("click",handleClick);
}
init();
