const $header=document.querySelector(".header");
const  $profile=document.querySelector(".profile");
const  $home=document.querySelector(".home");
const  $message=document.querySelector(".message");
const  $setting=document.querySelector(".setting");
const  $resert=document.querySelector(".resert");
const  $s1=document.querySelector(".s1");
const  $s2=document.querySelector(".s2");
const  $s3=document.querySelector(".s3");
const  $s4=document.querySelector(".s4");



$home.addEventListener("click",function(e){
  "use strict"
  e.preventDefault();
  $home.style.backgroundColor="blue";
  $s1.style.display="block";
  $profile.style.backgroundColor="white";
  $s2.style.display="none";
  $setting.style.backgroundColor="white";
  $s4.style.display="none";
  $message.style.backgroundColor="white";
  $s3.style.display="none";
})
$profile.addEventListener("click",function(e){
    "use strict"
    e.preventDefault();
    $profile.style.backgroundColor="blue";
    $s2.style.display="block";
    $home.style.backgroundColor="white";
    $s1.style.display="none";
   $setting.style.backgroundColor="white";
    $s4.style.display="none";
   $message.style.backgroundColor="white";
   $s3.style.display="none";
  
  })
  $message.addEventListener("click",function(e){
    "use strict"
    e.preventDefault();
    $message.style.backgroundColor="blue";
    $s3.style.display="block";
    $profile.style.backgroundColor="white";
    $s2.style.display="none";
    $home.style.backgroundColor="white";
    $s1.style.display="none";
   $setting.style.backgroundColor="white";
    $s4.style.display="none";
  
  })  
  $setting.addEventListener("click",function(e){
    "use strict"
    e.preventDefault();
    $setting.style.backgroundColor="blue";
    $s4.style.display="block";
  
    $message.style.backgroundColor="white";
    $s3.style.display="none";
    $profile.style.backgroundColor="white";
    $s2.style.display="none";
    $home.style.backgroundColor="white";
    $s1.style.display="none";

  })