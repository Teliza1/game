/* Declare variables below to save the different sections (divs) of your story*/
let optionOneButton=document.querySelector(".option-one");
let optionTwoButton=document.querySelector(".option-two");
let optionThreeButton=document.querySelector(".option-three");
let storyOpening=document.querySelector(".story-opening");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionThreeScreen=document.querySelector(".option-three-screen");
let firstBtn=document.querySelector(".first-next");
let secondBtn=document.querySelector(".second-next");
let thirdBtn=document.querySelector(".three-next");






optionOneButton.onclick=function(){
  storyOpening.style.display="none";
  optionOneScreen.style.display="block";
  optionTwoScreen.style.display="none";
  firstBtn.style.display="block";
};




optionTwoButton.onclick=function(){
  storyOpening.style.display="none";
  optionOneScreen.style.display="none";
  optionTwoScreen.style.display="block";
  secondBtn.style.display="block";
};

optionThreeButton.onclick=function(){
  storyOpening.style.display="none";
  optionThreeScreen.style.display="block";
  thirdBtn.style.display="block";
}








