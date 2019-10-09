$(function() {
    var aside = $("aside");
    var  button = aside.find("button");
    var duration = 300;

    //aside에 toggleclass('open') (와리가리 해야 해서)
    //aside에 open이란 클래스가 있으면 (열려있다면) 메뉴 나와야 하고 left 0
    //
  button.click(function(){

      aside.toggleClass("open");

      if(aside.hasClass("open")){

          aside.animate({
              left:'0px'
          },duration);
          
          button.find('img').attr('src','img/btn_close.png');
      }

      if(!aside.hasClass("open")){
          
        aside.animate({
            left:'-350px'
        },duration);

        button.find('img').attr('src','img/btn_open.png');
    }
  });
    

})