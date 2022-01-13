var timer = 75,
    roundIndex = 0,
    startButton = document.getElementById("start-button"),
    mainContent = document.getElementById("main-content"),
    initialContent = document.getElementById("initial-content"),
    highScoreButton = document.getElementById("high-scores-link");


//saved questions/answers
var questions = [
    ["Which of the following is not a falsy statement?",2,
        ["1. 0","2. '0'","3. null", "4. NaN"]
    ],
    ["What should arrays be enclosed by?",4,
        ["1. ' '","2. ( )","3. / /","4. [ ]"]
    ],
    ["What would be most useful to turn an user's input from a string to an integer?",4,
        ["1. .stringify()","2. .integer()","3. .parse()","4. .parseInt()"]
    ],
    ["Which of the following is not a JavaScript data type?",1,
        ["1. style","2. string","3. boolean", "4. null"]
    ],
    ["In JavaScript, what is a code block enclosed by?",3,
        ["1. ' '", "2. ( )", "3. { }", "4. [ ]"]
    ],
    ["Which of the following are you not able to store in an array?",4,
        ["1. arrays", "2. objects", "3. booleans", "4. None of the above"]
    ]
];

//quiz start function
var quizStart = function(){
    //hide current text
    initialContent.setAttribute("style","display:none");

    //countdown function
    countdown = setInterval(() => {
        //display current time on screen
        let timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = "Time: " + timer;

        if(timer<=0){
            clearInterval(countdown);
            quizLose();
        }
        timer--;
    }, 1000);

    //call first round function
    if(timer > 0 && roundIndex < questions.length){
        quizRoundStart(roundIndex);
    }
}

//quiz round function
var quizRoundStart = function(roundNumber){
    let roundInfo = questions[roundNumber];
    
    //populate screen with questions
    //create container
    let roundContent = document.createElement("div");
    roundContent.className = "flex content-container round-container";
    mainContent.appendChild(roundContent);

    //create heading
    let roundh2 = document.createElement("h2");
    roundh2.textContent = roundInfo[0];
    roundContent.appendChild(roundh2);

    //create buttons
    for(let i = 0; i < 4; i++){
        let answerWrapper = document.createElement("div");
        answerWrapper.className = "answer-wrapper flex";
        let answerButton = document.createElement("span");
        answerButton.className = "button answer-button"
        answerButton.textContent = roundInfo[2][i];
        answerButton.setAttribute("button-id", i+1);
        answerWrapper.appendChild(answerButton);
        roundContent.appendChild(answerWrapper);
    }

    //add event listener
    roundContent.addEventListener("click", answerCheck);
}

//Answer Evaluation function
var answerCheck = function(event) {
    //evaluate if answer is correct
    let answer = event.target.getAttribute("button-id");
    if(answer==questions[roundIndex][1]){
        console.log("Correct answer");
    }
     //subtract time if feedback from wrong question
     else if(answer != null){
         console.log("Wrong answer");
         timer-= 15;
         if(timer<0){
             timer = 0;
         }
     }
     else{
         return false;
     }
     //continue game if timer is above 0
     if(timer>0){
         roundReset();
         roundIndex++;
         if(roundIndex < questions.length){
             quizRoundStart(roundIndex);
         }
     }
}

//reset round
var roundReset = function(){
    let roundContent = document.querySelector(".round-container");
    roundContent.remove();
};


//reset game function
var quizReset = function(){
    timer = 75;
    initialContent.setAttribute("style","display:flex");
    let roundContent = document.querySelector(".round-container");
    roundContent.remove();
}

//quiz lose function
var quizLose = function(){
    console.log("You have lost!")
    quizReset();
}

//quiz win function
var quizWin = function(){
    console.log("Quiz has ended");
    quizReset();
}

//highscore click function
var highScoresLoad = function() {
    console.log("High scores clicked");
};

//highscore save function


//highscore load function


//onclick event listeners

highScoreButton.addEventListener("click", highScoresLoad);
initialContent.addEventListener("click", function(event) {
    if(event.target.matches("#start-button")){
    console.log("Start button clicked");
    quizStart();
    }
});