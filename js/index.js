// const num1 = Math.ceil(Math.random()*10)
// const num2 = Math.ceil(Math.random()*10)

// const questionEl = document.getElementById("question");
// const formEl = document.getElementById("form");
// const inputEl = document.getElementById("input");
// const scoreEl = document.getElementById("score");
// let score = JSON.parse(localStorage.getItem("score"));

// if (!score) {
//     score = 0;
// }

// scoreEl.innerHTML = `score : ${score}` 

// questionEl.innerText = `What is ${num1} multiply by ${num2} ?`
// const correctAns = num1 * num2;

// formEl.addEventListener("submit", ()=>{
//     const userAns = +inputEl.value
//     if(userAns === correctAns){
//         score++
//         updateLocalStorage()
//     }
//     else{
//         score--
//         updateLocalStorage()
//     }
// });

// function updateLocalStorage(){
//     localStorage.setItem("score", JSON.stringify(score))
// }



// const num1 = Math.ceil(Math.random()*10)
// const num2 = Math.ceil(Math.random()*10)

// const questionEl = document.getElementById("question");

// const inputEl = document.getElementById("input");

// const formEl = document.getElementById("form");

// const scoreEl = document.getElementById("score");



// let score = JSON.parse(localStorage.getItem("score"));

// if (!score) {
//     score = 0;
// }

// scoreEl.innerText = `score: ${score}`

// questionEl.innerText = `What is ${num1} multiply by ${num2} ?` 

// const correctAns = num1 * num2;

// formEl.addEventListener("submit", ()=>{
//         const userAns = +inputEl.value
//         if(userAns === correctAns){
//             score++
//             updateLocalStorage()
//         }else{
//             score--
//             updateLocalStorage()
//         }
//     });
    
// function updateLocalStorage(){
//     localStorage.setItem("score", JSON.stringify(score))
// }


// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);

// const questionEl = document.getElementById("question");

// const inputEl = document.getElementById("input");

// const formEl = document.getElementById("form");

// const scoreEl = document.getElementById("score");

// let score = JSON.parse(localStorage.getItem("score"));

// if (!score) {
//   score = 0;
// }

// scoreEl.innerText = `score: ${score}`;

// questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

// const correctAns = num1 * num2;

// formEl.addEventListener("submit", () => {
//   const userAns = +inputEl.value;
//   if (userAns === correctAns) {
//     score++;
//     updateLocalStorage();
//   } else {
//     score--;
//     updateLocalStorage();
//   }
// });

// function updateLocalStorage() {
//   localStorage.setItem("score", JSON.stringify(score));
// }



const questionElement = document.getElementById("question");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let correctAnswer = num1 * num2;

questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('input');
let scoreElement = document.getElementById('score');

let score = Number(localStorage.getItem("score"));
if(!score) {
	score = 0;
}

scoreElement.textContent = `score : ${score}`;

form.addEventListener('submit',function() {
	let userAnswer = +input.value;
	if(correctAnswer === userAnswer) {
		score++;
		updateScore();
	}
	else {
		score--;
		updateScore();
	}
});

function updateScore() {
	localStorage.setItem("score",String(score));
}

// Clear Local Storage
// localStorage.removeItem("score");
