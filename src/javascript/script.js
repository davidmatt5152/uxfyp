const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('questions-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

function setNextQuestion(){

}

function selectAnswer() {

}

















// (function(){
//     function buildQuiz(){
//         // variable to store the HTML output
//         const output = [];
//
//         // for each question...
//         myQuestions.forEach(
//             (currentQuestion, questionNumber) => {
//
//                 // variable to store the list of possible answers
//                 const answers = [];
//
//                 // and for each available answer...
//                 for(letter in currentQuestion.answers){
//
//                     // ...add an HTML radio button
//                     answers.push(
//                         `<label>
//                           <input type="radio" name="question${questionNumber}" value="${letter}">
//                           ${letter} :
//                           ${currentQuestion.answers[letter]}
//                         </label>`
//                     );
//                 }
//
//                 // add this question and its answers to the output
//                 output.push(
//                     `<div class="question"> ${currentQuestion.question} </div>
//                     <div class="answers"> ${answers.join('')} </div>`
//                 );
//             }
//         );
//
//         // finally combine our output list into one string of HTML and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }
//
//     function showResults() {
//
//         // gather answer containers from our quiz
//         const answerContainers = quizContainer.querySelectorAll('.answers');
//
//         // keep track of user's answers
//         let numCorrect = 0;
//
//         // for each question...
//         myQuestions.forEach((currentQuestion, questionNumber) => {
//
//             // find selected answer
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name=question${questionNumber}]:checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//
//             // if answer is correct
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;
//
//                 // color the answers green
//                 answerContainers[questionNumber].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[questionNumber].style.color = 'red';
//             }
//         });
//
//         // show number of correct answers out of total
//         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }
//     const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');
//     const myQuestions = [
//     {
//         question: "What does UX stand for?",
//         answers: {
//             a: "User expectations",
//             b: "User evaluation",
//             c: "User experience"
//         },
//         correctAnswer: "C"
//     },
//     {
//         question: "How many participants should suffice for a discount usability test?",
//         answers: {
//             a: "6",
//             b: "5",
//             c: "7"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Most important part of design is how it looks",
//         answers: {
//             a: "True",
//             b: "False",
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "When performing a usability test, you should:",
//         answers: {
//             a: "Hurry the user to find problems",
//             b: "Leave the user do their own thing",
//             c: "Guide the user subtly"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Which of these is not part of the UI",
//         answers: {
//             a: "Scenarios",
//             b: "Colours",
//             c: "Layouts"
//         },
//         correctAnswer: "a"
//     }
// ];
//
// buildQuiz();
//
// submitButton.addEventListener('click', showResults);
// })();

 // }