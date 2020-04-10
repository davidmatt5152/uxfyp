const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "What does UX stand for?",
        answers: {
            a: "User expectations",
            b: "User evaluation",
            c: "User experience"
        },
        correctAnswer: "C"
    },
    {
        question: "How many participants should suffice for a discount usability test?",
        answers: {
            a: "6",
            b: "5",
            c: "7"
        },
        correctAnswer: "b"
    },
    {
        question: "Most important part of design is how it looks",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "When performing a usability test, you should:",
        answers: {
            a: "",
            b: "5",
            c: "7"
        },
        correctAnswer: "b"
    },








]