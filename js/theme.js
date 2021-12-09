// When the user clicks for a call. Show this message before calling
document.querySelectorAll(".js-leve-a-massage-first").forEach((item) => {
  item.addEventListener("click", (event) => {
    alert("Please leave a message first :)");
  });
});

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textarea = document.querySelector(".resize-ta");
if(textarea != null){
  textarea.addEventListener("keyup", () => {
   textarea.style.height = calcHeight(textarea.value) + "px";
  });  
}


// Use Attribute "till-now"
document.querySelectorAll('[till-now]').forEach((item) => {
  let lastValue = item.innerHTML;
  item.innerHTML = 0;
  
  let inval = setInterval(() => {
    item.innerHTML++;
    if(item.innerHTML === lastValue) {
      clearInterval(inval);
    } 
  }, 50);
});

// Some Link to article Page
$('.latest-news a[href]').each(toArticle);
$('.related-news a[href]').each(toArticle);
$('.blog-s a[href]').each(toArticle);

function toArticle () {
  this.href = './article.html';
}