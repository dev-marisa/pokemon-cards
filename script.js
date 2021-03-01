var isFlipped = false;

function imgSwap(element) {
    console.log(element.src);
    if(isFlipped) {
        element.src = "imgs/cardback.jpg";
    } else {
        element.src = "imgs/eevee.jpg";
    }
    // an advanced trick kind of thing
    // it will flip the boolean back and forth
    isFlipped = !isFlipped; 
}