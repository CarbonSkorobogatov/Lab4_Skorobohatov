window.onload = function(){
  // make a stylesheet link
  
  
  setInterval(function(){
  WithofDekstop = screen.width;
  document.getElementById("text").innerHTML = "Ширина монитора = " + WithofDekstop;

  if(WithofDekstop > 1024){
    document.body.style.backgroundColor = "white";
  }else if(WithofDekstop > 600 && WithofDekstop < 1024){
    document.body.style.backgroundColor = "red";
  }else{
    document.body.style.backgroundColor = "blue";
  }
  }, 200)

  
  var dneiproshlo=0,mai=9;
  dneiproshlo=(31+28+31+30+mai)%7;
  switch(dneiproshlo)
  {
    case 1:alert("Воскресенье");break;
    case 2:alert("Понедельник");break;
    case 3:alert("Вторник");break;
    case 4:alert("Среда");break;
    case 5:alert("Четверг");break;
    case 6:alert("Пятница");break;
    case 0:alert("Суббота");break;
  }


  if(dneiproshlo == 0 || dneiproshlo == 1){
    var myCSS = document.createElement( "link" );
    myCSS.rel = "stylesheet";
    myCSS.href = "style2.css";
    // insert it at the end of the head in a legacy-friendly manner
    document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
  }else{
    var myCSS = document.createElement( "link" );
    myCSS.rel = "stylesheet";
    myCSS.href = "style1.css";
    // insert it at the end of the head in a legacy-friendly manner
    document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
  }

}

