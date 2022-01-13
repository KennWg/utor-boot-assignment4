var timer = 10,
    startButton = document.getElementById("start-button"),
    initialContent = document.getElementById("initial-content"),
    highScoreButton = document.getElementById("high-scores-link");


//saved questions/answers
var questions = [
    ["Which of the following is not a falsy statement?",2,
        ["1. 0","2. '0'","3. null", "4. NaN"]
    ],
    ["What should arrays be enclosed by?",4,
        ["1. ' '","2. ()","3. / /","4. []"]
    ],
    ["What would be most useful to turn an user's input from a string to an integer?",4,
        ["1. .stringify()","2. .integer()","3. .parse()","4. .parseInt()"]
    ],
    ["Which of the following is not a JavaScript data type?",1,
        ["1. style","2. string","3. boolean", "4. null"]
    ],
    ["In JavaScript, what is a code block enclosed by?",3,
        ["1. ' '", "2. ()", "3. {}", "4. []"]
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
        timer--;
        console.log(timer);
        //display current time on screen
        let timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = "Time: " + timer;

        if(timer<=0){
            clearInterval(countdown);
            quizLose();
        }
    }, 1000);

    //call round functions
    for(let i = 0; i < questions.length && timer > 0; i++){
        quizRound(i);
        //end quiz if final round
        if(timer > 0 && i+1 === questions.length){
            quizWin();
        }
    }
    
}



//quiz round function
var quizRound = function(roundNumber){
    let roundInfo = questions[roundNumber];
    
    //populate screen with questions
    //create container
    let roundContent = document.createElement("div");
    roundContent.className = "flex content-container";

    //create heading
    let roundh2 = document.createElement("h2");
    roundh2.textContent = roundInfo[0];
    roundContent.appendChild(roundh2);

    //create buttons
    for(let i = 0; i < 4; i++){
        answerButton = document.createElement("span");
        answerButton.className = "button answer-button"
        answerButton.setAttribute("button-id", i+1);
        roundContent.appendChild(answerButton);
    }

    //evaluate if answer is correct
    

    //subtract time if feedback from wrong question
}


//reset function
var quizReset = function(){
    timer = 10;
    initialContent.setAttribute("style","display:flex");
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
initialContent.addEventListener("click", function() {
    console.log("Start button clicked");
    quizStart();
});