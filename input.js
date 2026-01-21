function keyPressed() {
  let page = pages[currentPage];
  let keys = page.keys || {};
  if(key === keys.next) nextPage();
  if(key === keys.prev) prevPage();
}

function nextPage(){
  if(currentPage < pages.length-1){ currentPage++; resetText(); }
}

function prevPage(){
  if(currentPage > 0){ currentPage--; resetText(); }
}
