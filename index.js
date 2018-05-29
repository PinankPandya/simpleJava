
function courseClick(event){
    console.log("SDSDD");
    // console.log(event.target.nextElementSibling.style.displa);
    // console.log(event.target.children.length);
    console.log(event.target.className);
    alreadyOpen=document.getElementsByClassName("alreadyClicked");
    for(i=0;i<alreadyOpen.length;i++){
        alreadyOpen[i].style.display="None"
        alreadyOpen[i].className=alreadyOpen[i].className.split(" ")[0];
    }

    // event.target.removeChild(event.target.children[1]);
    event.target.innerHtml='<i class="fas fa-minus"></i>';
    // event.target.class="alreadyClicked";
    event.target.nextElementSibling.style.display="block";
    event.target.nextElementSibling.className+=" alreadyClicked";
    
}

window.onload=function(){
    var height=window.innerHeight;
    var width=window.innerWidth;
    
    var home=document.getElementById("home");    
    home.style.minHeight=height+"px";
    home.style.backgroundSize=width+"px "+height+"px";
    
    var courseList=document.getElementsByClassName("courseHeader");
    
    for(i=0;i<courseList.length;i++){
        courseList[i].addEventListener("click",courseClick);
    }

    
    var typed = new Typed('.intro', {
        strings: ["He's Smart","He's Hard-working","He's Intelligent","He's suppose to be Rich"],
        typeSpeed: 30,
        backSpeed:10,
        smartBackspace:true,
        loop:true
    });

}

