// score =0;
cross=true;
// document.onkeydown=function(e){
//     console.log("the code is ",e.keyCode)
//     if(e.keyCode==38){
//         var spidey=document.querySelector(".dino")
//         spidey.classList.add("animateDino")
//         setTimeout(()=>{
//             spidey.classList.remove("animateDino")
//         },2000)
//     }
//     if(e.keyCode=37){
//         var tyler =document.querySelector(".obstacle")
//         var spidey=document.querySelector(".dino")
//         dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
//         dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
//         DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
//         DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
//         spidey.style.left=dx-112+"px"

//     }
//     if(e.keyCode==39){
//     //     var spidey=document.querySelector(".dino")
//     // var tyler =document.querySelector(".obstacle")
//     //     dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
//     //     // console.log(dx)
//     //     dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
//     //     // console.log(dy)
//     //     var tyler=document.querySelector(".obstacle")
//     //     DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
//     //     // console.log(DX)
//     //     DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
//     //     // spidey.style.left=dx+112+"px"
//     //     spidey.style.left=dx+112+"px"
        
//     var spidey=document.querySelector(".dino")
//     // var tyler =document.querySelector(".obstacle")
// //         dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
// //         // console.log(dx)
// //         dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
// //         // console.log(dy)
// //         var tyler=document.querySelector(".obstacle")
// //         DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
// //         // console.log(DX)
// //         DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
// // spidey.style.left=dx+112+"px"
        
// var spidey=document.querySelector(".dino")
// // var tyler =document.querySelector(".obstacle")
//     dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
//     // console.log(dx)
//     dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
//     // console.log(dy)
//     var tyler=document.querySelector(".obstacle")
//     DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
//     // console.log(DX)
//     DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
// spidey.style.left=dx+112+"px"
    
// }
//     }
  
score=0;
cross=true;
    // // var spider=document.getElementById("spipder")
    // document.onkeydown=function(e){
    //     console.log("the key is: ",e.keyCode)
    //     if(e.keyCode==38){
    //         dino=document.querySelector('.dino')
    //         // spider.classList.a
    //         dino.classList.add('animateDino')
    //         // spider.classList.add("animateDino")
    //         setTimeout(() => {
    //             dino.classList.remove("animateDino")
    //         }, 1400);
    //     }
    //     if(e.keyCode==39){
    //         dino=document.querySelector('.dino')
    //         // dinoX=
    //         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    //         dino.style.left=dinoX+112+"px"
    //     }
    //     if(e.keyCode==37){
    //         dino=document.querySelector('.dino')
    //         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    //         dino.style.left = (dinoX - 112) + "px";
    //     }
    // }
//  setInterval(()=>{
//     dino = document.querySelector('.dino');
//     gameOver = document.querySelector('.gameOver');
//     obstacle = document.querySelector('.obstacle');
//     dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
//     console.log(dx)
//  })
var spider=document.getElementById("dino")
// console.log("hello there")
document.onkeydown=function (e){
    console.log("the code is "+e.keyCode)
    if(e.keyCode==38){
        var spidey=document.querySelector(".dino")
spidey.classList.add("animateDino")

      setTimeout(() => {
        spidey.classList.remove("animateDino")
      }, 2000);
    }
    if(e.keyCode==37){
    var tyler =document.querySelector(".obstacle")
        var spidey=document.querySelector(".dino")
    dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
    // console.log(dx)
    dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
    // console.log(dy)
    var tyler=document.querySelector(".obstacle")
    DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
    // console.log(DX)
    DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
spidey.style.left=dx-112+"px"


    }
    if(e.keyCode==39){
        var spidey=document.querySelector(".dino")
    // var tyler =document.querySelector(".obstacle")
        dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
        // console.log(dx)
        dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
        // console.log(dy)
        var tyler=document.querySelector(".obstacle")
        DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
        // console.log(DX)
        DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
spidey.style.left=dx+112+"px"
        
    }

}
setInterval(()=>{
    {
        var spidey=document.querySelector(".dino")
        var tyler =document.querySelector(".obstacle")
        var gameOver=document.querySelector(".gameOver")
        var obstacle=document.querySelector(".obstacle")
        dx=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("left"))
    // console.log(dx)
    dy=parseInt(window.getComputedStyle(spidey,null).getPropertyValue("right"))
    // console.log(dy)
    var tyler=document.querySelector(".obstacle")
    DX=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("left"))
    // console.log(DX)
    DY=parseInt(window.getComputedStyle(tyler,null).getPropertyValue("right"))
    
    offsetX=Math.abs(dx-DX)
    offsety=Math.abs(dy-DY)
    if(offsetX<112 && offsety<52){
        // console.log("hi there")
        gameOver.innerHTML="game OVer -Reload to Play Again"
        obstacle.classList.remove("obstacleAni")

    }

    else if(offsetX< 145 && cross){
        function updateScore(score){
            scoreCont=document.getElementById("scoreCount")
            ScoreCont.innerHTML="your score s "+ score
        }
        score+=1; 
        updateScore(score)
        cross=false
        setTimeout(()=>{
            cross=true;

        },1000)
    }
    }
},500)





