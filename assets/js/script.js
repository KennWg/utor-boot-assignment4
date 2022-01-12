var mainContent = document.getElementById("main-content"),
    startButton = document.getElementById("start-button"),
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

//button handler
var buttonHandler = function(event) {
    if(event.target.matches("#start-button")){
        console.log("Start button clicked");
    }
};

//quiz start function
//countdown function
//display current time on screen


//quiz round function
//populate screen with questions
//subtract time if feedback from wrong question


//quiz end function


//highscore click function
var highScoresLoad = function() {
    console.log("High scores clicked");
};

//highscore save function


//highscore load function


//onclick event listeners

highScoreButton.addEventListener("click", highScoresLoad);
mainContent.addEventListener("click", buttonHandler);