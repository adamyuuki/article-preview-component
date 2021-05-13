shareBtn = $("#share");
cardSocialClass = $(".card-social");
shareBg = $(".share-bg");
arrow = $("#arrow");

controler = false;

shareBtn.click(handleClick);

function handleClick(){
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

  controler = !controler;
}
