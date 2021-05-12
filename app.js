shareBtn = $("#share");
cardSocialClass = $(".card-social");

controler = false;

shareBtn.click(handleClick);

function handleClick(){
  if(controler){
    cardSocialClass.css("display", "none");
  } else {
    cardSocialClass.css("display", "flex");
  }

  controler = !controler;
}
