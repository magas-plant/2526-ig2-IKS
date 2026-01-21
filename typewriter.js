function drawTypewriter(txt,x,y,w,h){
  if(millis()-lastTime>interval && charIndex<txt.length){
    displayText+=txt.charAt(charIndex);
    charIndex++;
    lastTime=millis();
  }
  text(displayText,x,y,w,h);
}

function resetText(){
  displayText="";
  charIndex=0;
}
