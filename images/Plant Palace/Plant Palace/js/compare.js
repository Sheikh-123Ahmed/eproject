
var flowers = [
  {id:"0", imgsrc:"img/service/ser2.jpg", title:"Choose a Flower", description:".", price:"", type:"", care:"", blooming:""},
  
  {id:"1", imgsrc:"img/compare/sun.png", title:"Sunflower", description:"Known for its bright yellow petals and tall stature.", price:"$8.49", type:"Annual", care:"Regular watering and full sunlight", blooming:"Summer to fall"},
  {id:"2", imgsrc:"img/compare/lavender.png", title:"Lavender", description:"Famous for its fragrant purple flowers and medicinal properties.", price:"$14.99", type:"Perennial Herb", care:"Well-draining soil and sunlight", blooming:"Late spring to summer"},
  {id:"3", imgsrc:"img/compare/cactus.png", title:"Cactus", description:"A succulent plant adapted to arid environments.", price:"$6.99", type:"Succulent", care:"Infrequent watering and bright light", blooming:"Occasional small flowers"},
  {id:"4", imgsrc:"img/compare/orchid.jpg", title:"Orchid", description:"Exotic and delicate flowers with a wide variety of species.", price:"$24.99", type:"Epiphyte", care:"Filtered light and humidity", blooming:"Several times a year"},

  {id:"5", imgsrc:"img/compare/bonsai.png", title:"Bonsai Tree", description:"Artfully cultivated miniature trees.", price:"$32.99", type:"Bonsai", care:"Pruning and careful watering", blooming:"Depends on the tree species"},
  {id:"6", imgsrc:"img/compare/fern.jpg", title:"Boston Fern", description:"A popular choice for indoor greenery with feathery leaves.", price:"$18.49", type:"Fern", care:"Consistent moisture and indirect light", blooming:"Non-flowering"},
  {id:"7", imgsrc:"img/compare/succulent.jpg", title:"Succulent", description:"Water-retaining plants often grown in small containers.", price:"$7.99", type:"Succulent", care:"Sparse watering and bright light", blooming:"Occasional small flowers"},
  {id:"8", imgsrc:"img/compare/tulip.png", title:"Tulip", description:"Colorful spring flowers known for their cup-shaped blooms.", price:"$10.49", type:"Bulb", care:"Well-draining soil and sunlight", blooming:"Spring"},

  {id:"9", imgsrc:"img/compare/palmreal.png", title:"Palm Tree", description:"Iconic tropical trees with large fan-like leaves.", price:"$45.99", type:"Tree", care:"Regular watering and indirect light", blooming:"Non-flowering"},
  {id:"10", imgsrc:"img/compare/carnation.jpg", title:"Carnation", description:"Popular for its ruffled appearance and sweet fragrance.", price:"$5.99", type:"Perennial", care:"Regular watering and full sunlight", blooming:"Late spring to summer"},
  {id:"11", imgsrc:"img/compare/bonsai2.jpg", title:"Juniper Bonsai", description:"A type of bonsai tree with distinctive needle-like foliage.", price:"$28.99", type:"Bonsai", care:"Pruning and careful watering", blooming:"Depends on the tree species"},
  {id:"12", imgsrc:"img/compare/lilly.png", title:"Lily", description:"Elegant flowers often associated with purity and rebirth.", price:"$12.99", type:"Bulb", care:"Regular watering and filtered sunlight", blooming:"Summer"},

  {id:"13", imgsrc:"img/compare/money.jpg", title:"Money Tree", description:"Believed to bring good luck and financial fortune.", price:"$20.99", type:"Houseplant", care:"Moderate watering and bright light", blooming:"Non-flowering"},
  {id:"14", imgsrc:"img/compare/snake.png", title:"Snake Plant", description:"Hardy indoor plant with striking vertical leaves.", price:"$14.99", type:"Succulent", care:"Sparse watering and low light", blooming:"Occasional small flowers"},
  {id:"15", imgsrc:"img/compare/venus.png", title:"Venus Flytrap", description:"Carnivorous plant known for its jaw-like traps.", price:"$9.99", type:"Carnivorous Plant", care:"Distilled water and bright light", blooming:"Occasional small flowers"},
  {id:"16", imgsrc:"img/compare/rose.png", title:"Red Rose", description:"A classic symbol of love and beauty.", price:"$12.99", type:"Flowering Plant", care:"Moderate watering and full sunlight", blooming:"Spring to early summer"},
];

for(var i of flowers){
      $(".opt").append("<option id="+i.id+">"+i.title+"</option>");
      $(".selection").append("<option id="+i.id+">"+i.title+"</option>");
      $(".opt").hover(function(){
        $(".opt").css("backgroundColor","black");
      });
  
}


$("#selection").on("change",function(){
  fun();
})
$("#opt2").on("change",function(){
  fun();
})
function fun(){
    var id = $("#selection").val();
    var id2 = $("#opt2").val();
    for(var i of flowers){
    if(i.title == id){
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp11").innerHTML = "Type : "+i.type;
      document.getElementById("comp21").innerHTML = "Price :" +i.price;
      document.getElementById("comp31").innerHTML = "Care :" +i.care;
      document.getElementById("comp41").innerHTML = "Blooming : "+i.blooming;
      document.getElementById("comp42").innerHTML = "Description : "+i.description;

      
      
    }
  }
  for(var i of flowers){
    if(i.title == id2){
        $("#img").attr("src",i.imgsrc);
        document.getElementById("comp1").innerHTML = "Type : "+i.type;
        document.getElementById("comp2").innerHTML = "Price :" +i.price;
        document.getElementById("comp3").innerHTML = "Care :" +i.care;
        document.getElementById("comp4").innerHTML = "Blooming : "+i.blooming;
      document.getElementById("comp5").innerHTML = "Description : "+i.description;
        
    }
    }
}








// Nav 
$(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop()>1){
    $("nav").css("background-color" , "white",);
  }
  else{
    $("nav").css("background" , "transparent");
  }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});

