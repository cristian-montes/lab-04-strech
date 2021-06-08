// import functions
import { isEven } from './is-even.js';
// reference needed DOM elements
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const oddPic = document.getElementById('odd-pic');
const evenPic = document.getElementById('even-pic');


// set event listeners 
submitBtn.addEventListener('click', () => {
    return showCorrectImage();
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  //SHOW CORRECT IMAGE FUNCTION
function showCorrectImage() {
    const result = isEven(Number(userInput.value));
    if (result === 0) {
        oddPic.classList.remove('show-pictures');
        evenPic.classList.add('show-pictures');
        return evenPic;
        
    } else {
        evenPic.classList.remove('show-pictures');
        oddPic.classList.add('show-pictures');
        return oddPic;
    }
}
  