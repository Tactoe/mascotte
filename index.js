let isOpen = false;
let bird = {mood:"happy", animation:"fly"};

function triggerForm() {
  if (!isOpen)
  {
    openForm();
  }
  else
  {
    closeForm();
  }
  isOpen = !isOpen;
}

function sayDialog(str)
{
  div = document.getElementById("textbox");
  div.innerHTML = "";
  let i = 0;
  var timer = window.setInterval(function() {
    Console.log("SSSO")
    div.innerHTML += str[i++];
    if (i === div.innerHTML.length)
      clearInterval(timer);
  }, 1);

}

function addLetter(text, delay)
{
  if(text.length > 0){
      elem.append(text[0]);
      setTimeout(function(){
              addLetter(text.slice(1),delay);
           }, delay);
  }
}

function sayDialog(text, delay){
  elem = document.getElementById("textbox");
  if(!delay){
      delay = 50;
  }
  elem.innerHTML = "";
  addLetter(text, delay);
}

function openForm() {
  sayDialog("Salut ma poule;");
  bird.animation = "fly";
  document.getElementById("helpSection").classList.add('vertTranslate');
  // document.getElementById("canvasContainer").style.display = "block";
  // div = document.getElementById("canvasContainer");
  // div.style.position = "absolute";
  // div.style.left = "50%";
  // var top = -500;
  // div.style.top = top + "px";
  // var gap = 5;
  // var timer = window.setInterval(function() {
  //   div.style.top = top + "px";
  //   if (top + gap >= 0) {
  //     top = 0;
  //   } else {
  //     top += gap;
  //   }
  //   if (top == 0) {
  //     clearInterval(timer);
  //   }
  // }, 1);
}

function closeForm() {
  document.getElementById("helpSection").classList.remove('vertTranslate');
}

displayBird(bird);
// displayBird({mood:"happy", animation:"fly"});
