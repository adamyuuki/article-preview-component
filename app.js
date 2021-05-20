shareBtn = $("#share");
cardSocialClass = $(".card-social");
shareBg = $(".share-bg");
arrow = $("#arrow");
winWidth = $(window).width();
cardBottomClass = $(".card-bottom");
shareClass = $(".share");

controler = false;

shareBtn.click(handleClick);

function handleClick(){

  if (winWidth<576){

    if(controler){

      cardBottomClass.css("display", "flex");
      cardSocialClass.css("display", "none");
      shareBg.css("background-color", "hsl(210, 46%, 95%)");
      shareBtn.css("background-color", "hsl(210, 46%, 95%)");
      arrow.css("color", "hsl(217, 19%, 35%)");
      shareClass.css("bottom", "8px");
    } else {
      cardBottomClass.css("display", "none");
      cardSocialClass.css("display", "flex");
      shareClass.css("bottom", "15px");
      shareClass.css("right", "0px");
      // shareBtn.css("background-color", "hsl(217, 19%, 35%)");
      // shareBg.css("background-color", "hsl(217, 19%, 35%)");
      // arrow.css("color", "hsl(210, 46%, 95%)");
    }

  } else{
    if(controler){
      cardSocialClass.css("display", "none");
      shareBg.css("background-color", "hsl(210, 46%, 95%)");
      shareBtn.css("background-color", "hsl(210, 46%, 95%)");
      arrow.css("color", "hsl(217, 19%, 35%)");
    } else {
      cardSocialClass.css("display", "flex");
      shareBtn.css("background-color", "hsl(217, 19%, 35%)");
      shareBg.css("background-color", "hsl(217, 19%, 35%)");
      arrow.css("color", "hsl(210, 46%, 95%)");
    }
  }

  controler = !controler;
}
