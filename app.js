// import functions
import { isEven } from './is-even.js';
// reference needed DOM elements
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const oddPic = document.getElementById('odd-pic');
const evenPic = document.getElementById('even-pic');


// Submit Button event listener
submitBtn.addEventListener('click', () => {
    return showCorrectImage();
    
});

// Clear Button event Listener
clearBtn.addEventListener('click', () =>{
    userInput.value = '';
    evenPic.classList.remove('show-pictures');
    oddPic.classList.remove('show-pictures');
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
  