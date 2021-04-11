var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:"none"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="View"){
    display.innerHTML=wd;
    
  }else{
    viewPage()
  }
  
  
  
}

var list=[];

function viewPage(){window.location.replace("https://cynsulli.github.io/ViewPage/")
}

contentWrite(pages[0].content, "Home");