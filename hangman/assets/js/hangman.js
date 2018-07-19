//array of words
const word =['edomites', 'edom', 'caveman'];
//random words
let randNum = Math.floor(math.random() *word.length);
let rightWord = [];
let wrongWord = [];
let underScore = [];
// let choosenWord = word[randNum];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('.underscore');
let docRightGuess = document.getElementsByClassName('.rightGuess');
let docWrongGuess = document.getElementsByClassName('.wrongtGuess');


//test
console.log(choosenWord);
// console.log(choosenWord);
//underscores
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHtml = underScore.join('');
    } 
    return underScore;
}

// console.log(generateUnderscore());
//users guess
document.addEventListener('keypress', (event) => {
    // let keycode = event.keyCode;
    let keyWord = String.fromCharCode(event.keyCode);
    // console.log(choosenWord.indexOf(choosenWord));
    // right guess
    if(choosenWord.indexOf(keyword) > -1) {
        // console.log(true);
        //right word array
        rightWord.push(keyword);
        // right `letter underscore
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHtml = underScore.join('');
        docRightGuess[0].innerHtml = rightWord.join('');


        // see if word matches up
        if(underScore.join('') ==choosenWord) {
            alert('You Win');
        }
        
    }
    else {
        wrongWord.push(keyword);
    }
});

generateUnderscore();
// 
//check if guess is right
//push if right array
//push if wrong array

