const APP_NAME = "Magic 8 Ball";
const theReplies = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// const button = document.getElementById("askButton");
const answerShown = document.getElementById('answer');
const question = document.getElementById('question');
const eightball = document.getElementById('eight-ball');
const eight = document.getElementById('eight');
const refresh = document.getElementById('refresh')

function generateReply () {
    const randomDecimal = Math.random() * theReplies.length;
    const randomInteger = Math.floor(randomDecimal)

    if (question.value.length < 1){
        alert('Enter a question')
    } else {
        eight.innerHTML = ''
        answerShown.innerHTML = theReplies[randomInteger];
        question.value = '';
    }
}

function refreshPage (){
    question.value = '';
    document.location.reload
    eight.innerHTML = '8';
    answerShown.innerHTML = '';
}

eightball.addEventListener('click', generateReply);
refresh.addEventListener('click', refreshPage)
