//This code is for the quiz
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('quiz-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Discount usability testing is expensive',
        answers: [
            { text: 'False', correct: true },
            { text: 'True', correct: false }
        ]
    },
    {
        question: 'You need to be part of the development of a project to be able to do a usability test on it',
        answers: [
            { text: 'False', correct: true },
            { text: 'True', correct: false },
        ]
    },
    {
        question: 'What does UX stand for?',
        answers: [
            { text: 'User Excitement', correct: false },
            { text: 'User Enjoyment', correct: false },
            { text: 'User Journey', correct: false },
            { text: 'User Experience', correct: true }
        ]
    },
    {
        question: 'What does UI stand for?',
        answers: [
            { text: 'User Input', correct: false },
            { text: 'User Involvement', correct: false },
            { text: 'User Interface', correct: false },
            { text: 'User Information', correct: true }
        ]
    },
    {
        question: 'UX is more important than the UI',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },

        ]
    },
]