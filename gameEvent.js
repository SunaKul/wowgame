//Reyhan Suna Kul
//22002481

$(function(){
  let chk=true;
    $(".shuffle").click(function(){  //Shuffling when icon is clicked
      if(chk){
    var rand=["O","B","R","U","D"];
    let x = Math.floor((Math.random() * 4));
    $(".innerC:nth-of-type(1)").text(`${rand[x]}`);
      rand.splice(x,1);
      let y = Math.floor((Math.random() * 3) + 1); 
      $(".innerC:nth-of-type(2)").text(`${rand[y]}`);
      rand.splice(y,1);
      let z = Math.floor((Math.random() * 2) + 1); 
      $(".innerC:nth-of-type(3)").text(`${rand[z]}`);
      rand.splice(z,1);
      let i = Math.floor((Math.random() * 1) + 1); 
      $(".innerC:nth-of-type(4)").text(`${rand[i]}`);
      rand.splice(i,1);
      let k = Math.floor((Math.random() * 1)); 
      $(".innerC:nth-of-type(5)").text(`${rand[k]}`);
      }

      else{
        $( "#shuff" ).effect( "shake");
      }
    });
    

   

let count=false;
$(".clue").click(function(){  //To see/hide clue
    count=!count;
   if(count){
    $(".let").animate({color:"black"},1000); }  

  else{
   $(".let").animate({color:"white"},1000,function () {
    count=!count;
   });}
   
});

let arr=[];
let clicked=false;

$(".innerC").click(function(){  //Changing background when a letter is clicked.
  chk=false;
  clicked=!clicked;

  $(this).css("background","violet");
  
});

let dene=true;
$(".innerC:nth-of-type(1)").click(function(){  //Changing background of letter and bouncing if it is already selected.
  chk=false;
 
  if(dene){
    const show= $('#u').text();
    $("#display").append(show);
    arr.push(show);
    dene=false;
  }
  else{
    $( "#u" ).effect( "bounce");
  }
});

let rdene=true;
$(".innerC:nth-of-type(2)").click(function(){
  chk=false;
  if(rdene){
  const show= $('#r').text();
  $("#display").append(show);
  rdene=false;
  arr.push(show);}
  else{
    $( "#r" ).effect( "bounce");
  }
  
});


let odene=true;
$(".innerC:nth-of-type(3)").click(function(){
  chk=false;
  if(odene){
 const show= $('#o').text();
  $("#display").append(show);
  odene=false;
  arr.push(show);}
  else{
    $( "#o" ).effect( "bounce");
  }
});


let bdene=true;
$(".innerC:nth-of-type(4)").click(function(){
  chk=false;
  if(bdene){
 const show= $('#b').text();
  $("#display").append(show);
  bdene=false;
  arr.push(show);}
  else{
    $( "#b" ).effect( "bounce");
  }
});


let ddene=true;
$(".innerC:nth-of-type(5)").click(function(){
  chk=false;
  if(ddene){
  const show= $('#d').text();
  $("#display").append(show);
  ddene=false;
  arr.push(show);}
  else{
    $( "#d" ).effect( "bounce");
  }
});


var wordArray =["BOR","ORDU","BODUR","OBUR","BORU"];  //to compare if widget equals to these words or not

var boruC=true;  
var oburC=true;
var bodurC=true;
var orduC=true;
var borC=true;

$(".hey").contextmenu(function(e){  //Submitting word when it's right clicked.
let checkWord="";
chk=true;
const show= $('#display').text();
dene=true;
rdene=true;
odene=true;
ddene=true;
bdene=true;
  
  for(let i=0;i<wordArray.length;i++){

    if(show==="BOR"){
      $(".letterContainer").text("");
      if(borC){
      $(".b1").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".o1").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".r1").css("background-color","violet").effect( "bounce", {times:1},"fast",function(){
       borC=false;});
      }

      else{
          $(".b1").css("background-color","violet").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
          $(".o1").css("background-color","violet").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
          $(".r1").css("background-color","violet").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        }}

    if(show==="OBUR"){
      $(".letterContainer").text("");
      if(oburC){
      $(".b2").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".u1").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".r2").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".o1").css("background-color","violet").effect( "bounce", {times:1},"fast",function(){
        oburC=false;});}


      else{
        $(".b2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".u1").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".r2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".o1").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        }
      }

    if(show==="BORU"){
      $(".letterContainer").text("");
      if(boruC){
        $(".r3").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".u1").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".b3").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".o2").css("background-color","violet").effect( "bounce", {times:1},"fast",function(){
          boruC=false;});}
        
      else{
        $(".r3").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".u1").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".b3").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".o2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        }}


    if(show==="BODUR"){
     $(".letterContainer").text("");
     if(bodurC){
      $(".u2").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".d1").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".b4").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".o2").css("background-color","violet").effect( "bounce", {times:1},"fast");
      $(".r4").css("background-color","violet").effect( "bounce", {times:1},"fast",function(){
      bodurC=false;});}

      else{
       $(".u2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
       $(".d1").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
       $(".b4").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
       $(".o2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
       $(".r4").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
       }}

          
    if(show==="ORDU"){
      $(".letterContainer").text("");
      if(orduC){
        $(".u3").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".d2").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".o3").css("background-color","violet").effect( "bounce", {times:1},"fast");
        $(".r4").css("background-color","violet").effect( "bounce", {times:1},"fast",function(){
        orduC=false;
        });
         }
             
      else{
        $(".u3").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".d2").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".o3").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        $(".r4").animate({opacity: '0.4'}, "fast").animate({opacity: '1'});
        }
          
       }
  }

  if(show!="BORU" || show!="BODUR" || show!="OBUR" || show!="ORDU"){
    $( "#display" ).effect( "shake",function(){ $(".letterContainer").text("");});
  }

  $(".innerC").css("background","white"); 
  e.preventDefault();

})

});


