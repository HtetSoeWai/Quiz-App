const scorept = document.getElementById('score_point')
const countContainer = document.getElementById("countdown-number");
const Appearquiz = document.getElementById('quiz');
const count = document.getElementById('countdown');
const timeLeft = document.getElementById('time-left');
const timeup = document.getElementById('time_left_txt');
const welcome = document.getElementById('hello');
const startBtn = document.getElementById('btn');
const rule = document.getElementById('rule-list');
var remainingTime = 3;
var timer;
var isStopped = true;
let showAnsTimerID
let welcomeTimerID
let welcomeText =['W', 'e', 'l', 'l','c','o','m','e',' ','T','o',' ','O','u','r',' ','m','i','n','i',' ','Q','u','i','z',' ','P','r','o','j','e','c','t']
let i = 0
function showWelcome(){
    document.createTextNode(welcomeText[i])
    welcome.appendChild(document.createTextNode(welcomeText[i]))
    document.body.appendChild(welcome)
    if(i == welcomeText.length-1){
        clearInterval(welcomeTimerID)
    }
    i++
}
function hideWelcome(){
    welcome.style.display= 'none'
}
function hiderule(){
    rule.style.display= 'none';
}
startBtn.addEventListener('click', hiderule);
startBtn.addEventListener('click', hideWelcome);
welcomeTimerID = setInterval(showWelcome, 100)
function start(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeLeft.textContent = time;
        time--;
        if(time<5){
            timeLeft.style.color = '#d43c00';
        }if(time==-1){
            showcorrect();
        }
    }
}
function nextpage(){
    submitBtn.click();
};
function showcorrect(){
    clearInterval(counter);
    timeup.innerHTML = "<strong>Time up!<strong>";
    timeup.style.color = 'red';
    a_text.click();
    setTimeout(nextpage,500);
};
const startTimer = () => {
if (isStopped) {
isStopped = false;
countContainer.innerHTML =remainingTime;
timer = setInterval(renderTime, 1000);
}
};
const renderTime = () => {
remainingTime -= 1;
countContainer.innerHTML = remainingTime;
if (remainingTime === 0) {
isStopped = true;
clearInterval(timer);
remainingTime = 3;
}
};
function remove(el){
    var element = el;
    element.remove();
}
function appear(){
    Appearquiz.style.display = 'block';
    count.style.display = 'none';
}
function removecount(){
    const elems = document.querySelectorAll('.counter');
    for(e of elems){
        setTimeout(function(){e.remove();},3500);
    }
}
function showresult(){
    if(score==0){
        quiz.innerHTML = `<center> &#128528 Umm...Sorry</center>
        <h2>${score}/10 <br>None of your answers are correct.May be good luck in next time!</h2> <button onclick="location.reload()">Reload</button> ` 
    }
    else if(score<=2){
        quiz.innerHTML = `<center> &#128529 Amm...You need to know a lot! </center>
        <h2>You got ${score} scores out of 10 questions.</h2> <button onclick="location.reload()">Reload</button> ` 
    }
    else if(score<=5){
        quiz.innerHTML = `<center> &#128578 Not Bad! </center>
        <h2>You got ${score} scores out of 10 questions.</h2> <button onclick="location.reload()">Reload</button> ` 
    }
    else if(score<=8){
        quiz.innerHTML = ` <center>&#128512 Good Job!</center> 
        <h2>You got ${score} scores out of 10 questions.</h2> <button onclick="location.reload()">Reload</button> ` 
    }
    else if(score==9){
        quiz.innerHTML = ` <center>&#128526 Nice! Just a little more...</center>
        <h2>You got ${score} scores out of 10 questions.</h2> <button onclick="location.reload()">Reload</button> ` 
    }
    else{
        quiz.innerHTML = ` <center>&#127881 Congratulation! &#127881</center> 
        <h2>${score}/10 <br>Wow...You answered all of the questions correctly.Are you a genius?</h2>  <button onclick="location.reload()">Reload</button> ` 
    }
}
const quizData = [ { 
    question: "Which language runs in a web browser?",   a: "Java",   b: "C",   c: "Python",   d: "javascript",   correct: "d",},  
   { 
    question: "What does CSS stand for?",   a: "Central Style Sheets",   b: "Cascading Style Sheets",   c: "Cascading Simple Sheets",   d: "Cars SUVs Sailboats",   correct: "b",},  
   { 
    question: "What does HTML stand for?",   a: "Hypertext Markup Language",   b: "Hypertext Markdown Language",   c: "Hyperloop Machine Language",   d: "Helicopters Terminals Motorboats Lamborginis",   correct: "a",},  
   { 
    question: "What year was JavaScript launched?",   a: "1996",   b: "1995",   c: "1994",   d: "none of the above",   correct: "b",},  
   { 
    question: "What is the boiling point temperature (water)?",   a: "50 degree celsius",   b: "100 degree celsius",   c: "150 degree celsius",   d: "200 degree celsius",   correct: "b",},  
   { 
    question: "Which fruit is associated with Isaac Newton?",   a: "Apple",   b: "Pear",   c: "Pineapple",   d: "Banana",   correct: "a",},  
   { 
    question: "In which city did Diana, Princess of Wales, died?",   a: "London",   b: "Edinburgh",   c: "New York City",   d: "Paris",   correct: "d",},  
   { 
    question: "Which building was not attacked on 9/11?",   a: "World Trade Center South Tower",   b: "World Trade Center North Tower",   c: "The Pentagon",   d: "Statue of Liberty",   correct: "d",},  
   { 
    question: "Which animal is not part of the Chinese zodiac?",   a: "Horse",   b: "Dog",   c: "Cat",   d: "Monkey",   correct: "c",},  
   { 
    question: "Which famous inventor invented the telephone?",   a: "Thomas Edison",   b: "Benjamin Franklin",   c: "Alexander Graham Bell",   d: "Nikola Tesla",   correct: "c",},  
   { 
    question: "If you are born on the 1st of January, which star sign are you?",   a: "Scorpio",   b: "Capricorn",   c: "Libra",   d: "Aries",   correct: "b",},  
   { 
    question: "What does the Richter scale measure?",   a: "Wind Speed",   b: "Temperature",   c: "Tornado Strength",   d: "Earthquake intensity",   correct: "d",},  
   { 
    question: "Which country is the footballer Cristiano Ronaldo from?",   a: "Spain",   b: "Brazil",   c: "Uruguay",   d: "Portugal",   correct: "d",},  
   { 
    question: "What is the longest river in the world?",   a: "Amazon River",   b: "Nile",   c: "Yellow River",   d: "Congo River",   correct: "b",},  
   { 
    question: "Who is the CEO of Amazon?",   a: "Elon Musk",   b: "Tim Cook",   c: "Mark Zuckerberg",   d: "Jeff Bezos",   correct: "d",},  
   { 
    question: "Who was the first woman to win a Nobel Prize?",   a: "Mother Teresa",   b: "Marie Curie",   c: "Jane Adams",   d: "Alva Myrdal",   correct: "b",},  
   { 
    question: "Apart from water, what is the most popular drink in the world?",   a: "Tea",   b: "Coffee",   c: "Beer",   d: "Orange Juice",   correct: "a",},  
   { 
    question: "How many bones are there in an adult human body?",   a: "186",   b: "206",   c: "286",   d: "306",   correct: "b",},  
   { 
    question: "On which continent is the Sahara Desert located?",   a: "Asia",   b: "South America",   c: "Africa",   d: "Europe",   correct: "c",},  
   { 
    question: "How many countries are there in the world?",   a: "105",   b: "145",   c: "195",   d: "245",   correct: "c",},  
   { 
    question: "Which country is not located on the Golden Triangle?",   a: "Thailand",   b: "Laos",   c: "Myanmar",   d: "China",   correct: "d",},  
   { 
    question: "What other country, besides the US, uses the US dollar as its official currency?",   a: " Ecuador",   b: " Canada",   c: " Mexico",   d: " United Kingdom",   correct: "a",},  
   { 
    question: "How many sides does a Dodecahedron have?",   a: " 12",   b: " 24",   c: " 14",   d: " 20",   correct: "a",},  
   { 
    question: "The Sun is primarily comprised of which of the following elements?",   a: " Oxygen",   b: " Hydrogen",   c: " Iron",   d: " Magnesium",   correct: "b",},  
   { 
    question: "Which of the following animals is capable of running at the fastest recorded speed?",   a: " Lion",   b: " Tiger",   c: " Leopard",   d: " Cheetah",   correct: "d",},  
   { 
    question: "Brazil is the biggest producer of which of the following commodities?",   a: " Coffee",   b: " Rice",   c: " Oil",   d: " Wheat",   correct: "a",},  
   { 
    question: " In the solar system, which planet is known for its rings?",   a: " Jupiter",   b: " Saturn",   c: " Mars",   d: " Venus",   correct: "b",},  
   { 
    question: "What is the name of the spacecraft that took the first men to the moon?",   a: " Apollo 6",   b: " Apollo 9",   c: " Apollo 11",   d: " Apollo 13",   correct: "c",},  
   { 
    question: "What is the first name of the current president of the USA?",   a: " Joe",   b: " Barack",   c: " Donald",   d: " George",   correct: "a",},  
   { 
    question: "The average person in the US opens what 13 times per day?",   a: " Front door",   b: " A can of soda",   c: " Refrigerator",   d: " A window",   correct: "c",},  
   { 
    question: "What was the first animal sent into Space?",   a: " Rabbit",   b: " Chimpanzee",   c: " Dog",   d: " Rat",   correct: "c",},  
   { 
    question: "How many strings does a violin have?",   a: " 4",   b: " 5",   c: " 6",   d: " 7",   correct: "a",},  
   { 
    question: "How many keys does a piano have?",   a: " 66",   b: " 77",   c: " 88",   d: " 99",   correct: "c",},  
   { 
    question: "Which film features the song 'Let It Go'?",   a: " Tangled",   b: " Frozen",   c: " Moana",   d: " The Little Mermaid",   correct: "b",},  
   { 
    question: "What measurement scale is used to determine wind speed?",   a: " Beaufort scale",   b: " Richter scale",   c: " Synoptic scale",   d: " Gusting scale",   correct: "a",},  
   { 
    question: "At what wind speed does a tropical storm become a hurricane?",   a: "74mph",   b: "86mph",   c: "98mph",   d: "110mph",   correct: "a",},  
   { 
    question: "In Chess, what is the only piece that can't move backwards?",   a: " Knight",   b: " Bishop",   c: " Pawn",   d: " Castle",   correct: "c",},  
   { 
    question: "Approximately what proportion of people in the world have blue eyes?",   a: " 4%",   b: " 8%",   c: " 12%",   d: " 16%",   correct: "b",},  
   { 
    question: "Which colour is found on 75% of world flags?",   a: " Red",   b: " White",   c: " Blue",   d: " Black",   correct: "a",},  
   { 
    question: "Which of these colours is not in the rainbow?",   a: " Red",   b: " Yellow",   c: " Pink",   d: " Violet",   correct: "c",},  
   { 
    question: "What is the world's fastest species of bird?",   a: "Golden eagle",   b: "Peregrine falcon",   c: "Frigatebird",   d: "Penguin",   correct: "b",},  
   { 
    question: "Santa Claus is also known as Saint...?",   a: " Stephen",   b: " James",   c: " Edward",   d: " Nicholas",   correct: "d",},  
   { 
    question: "Which planet shares its name with the Roman Goddess of love?",   a: " Uranus",   b: " Venus",   c: " Earth",   d: " Saturn",   correct: "b",},  
   { 
    question: "Approximately how many roses are grown for Valentine's Day every year?",   a: " 879 million",   b: " 224 million",   c: " 103 million",   d: " 56 million",   correct: "b",},  
   { 
    question: "If someone sends you yellow roses on Valentine's Day, what are they celebrating?",   a: " Your friendship",   b: " Your wedding anniversary",   c: " The day you first met",   d: " Your break-up anniversary",   correct: "a",},  
   { 
    question: "In which of these countries is Valentine's Day banned?",   a: " Saudi Arabia",   b: " Canada",   c: " Australia",   d: " Mexico",   correct: "a",},  
   { 
    question: "What is the flower for the month of February?",   a: " Gardenia",   b: " Lilly",   c: " Sunflower",   d: " Violet",   correct: "d",},  
   { 
    question: "What is the traditional birthstone for February?",   a: " Amethyst",   b: " Diamond",   c: " Quartz",   d: " Sapphire",   correct: "a",},  
   { 
    question: "How many days does January have in total?",   a: "28",   b: "29",   c: "30",   d: "31",   correct: "d",},  
   { 
    question: "Before January was added to the calendar, how many months were there?",   a: "8",   b: "9",   c: "10",   d: "11",   correct: "c",},  
   { 
    question: "What was the fastest growing web browser in 2020?",   a: "Microsoft Edge",   b: "Firefox",   c: "DuckDuckGo",   d: "Internet Explorer",   correct: "a",},  
   { 
    question: "What was the name of the first operating system?",   a: "Windows 1.01",   b: "TSS/360",   c: "EPOC",   d: "GM-NAA I/O",   correct: "d",},  
   { 
    question: "Where was the world wide web invented?",   a: "United States",   b: "Switzerland",   c: "Germany",   d: "United Kingdom",   correct: "b",},  
   { 
    question: "What was the first mobile phone with internet connectivity?",   a: "iPhone",   b: "Nokia 9000 Communicator",   c: "Motorola 7500",   d: "Blackberry 850",   correct: "b",},  
   { 
    question: "What is the name of the oldest programming language still in use?",   a: "Matlab",   b: "FORTRAN",   c: "Ada",   d: "COBOL",   correct: "b",},  
   { 
    question: "Which of the following is the easiest method of determining the age of a tree?",   a: " Height",   b: " Number of leaves",   c: " Number of rings on the trunk",   d: " Darkness of the bark",   correct: "c",},  
   { 
    question: "After the Moon, what is the brightest object in the night sky?",   a: "Betelgeuse",   b: "Pole Star",   c: "Venus",   d: "International Space Station",   correct: "c",},  
   { 
    question: "Saturn is the planet with the most moons in the Solar System. How many moons does it have?",   a: "82",   b: "79",   c: "27",   d: "14",   correct: "a",},  
   { 
    question: "Our Solar System is 4.6 billion years old, but how old is the Earth?",   a: "560 million years",   b: "1.3 billion years",   c: "2.6 billion years",   d: "4.5 billion years",   correct: "d",},  
   { 
    question: "Which country was the first to travel in space?",   a: "United States",   b: "China",   c: "Soviet Union",   d: "United Kingdom",   correct: "c",},  
   { 
    question: "What is a prime number?",   a: "A number made up by Amazon",   b: "A number at the peak of its life",   c: "A number that is only divisible by itself or 1",   d: "A number that starts and ends with a 1",   correct: "c",},  
   { 
    question: "Complete this sequence of numbers: 1, 3, 7, 15 . . .",   a: "29",   b: "30",   c: "31",   d: "32",   correct: "c",},  
   { 
    question: "In a right-angled triangle, what is the name given to the longest side?",   a: "Hypotenuse",   b: "Tangent",   c: "Parabola",   d: "Hyperbola",   correct: "a",},  
   { 
    question: "____ is an input device that controls the movements of the cursor on the display screen.",   a: "Scanner",   b: "Monitor",   c: "Light pen",   d: "Mouse",   correct: "d",},  
   { 
    question: "The main function of the CPU is to perform arithmetic and logical operations on data taken from ____",   a: "Permanent memory",   b: "Control unit",   c: "Main memory",   d: "CPU",   correct: "c",},  
   { 
    question: "____ is a memory on which data can be written only once.",   a: "EPROM",   b: "PROM",   c: "ROM",   d: "RAM",   correct: "b",},  
   { 
    question: "Which language is directly understood by the computer without translation program?",   a: "Machine language",   b: "High level language",   c: "BASIC language",   d: "Assembly language",   correct: "a",},  
   { 
    question: "____ enables the hardware to perform specific task.",   a: "Liverware",   b: "Firmware",   c: "Hardware",   d: "Software",   correct: "d",},  
   { 
    question: "The desktop computers are also known as ____ computers.",   a: "workstation",   b: "home",   c: "personal",   d: "all the above",   correct: "c",},  
   { 
    question: "The smallest dot that can be displayed is called a ___",   a: "resolution",   b: "pixels",   c: "dotmatrix",   d: "element",   correct: "b",},  
   { 
    question: "A scanner scans ____",   a: "Pictures",   b: "Texts",   c: "Both picture and text",   d: "Neither picture nor text",   correct: "c",},  
   { 
    question: "CD stands for",   a: "Compare Disc",   b: "Compose Disc",   c: "Compact Disc",   d: "All of these",   correct: "c",},  
   { 
    question: "Which one of the following is a logical operator?",   a: "||",   b: "&&",   c: "!",   d: "all of these",   correct: "d",},  
   { 
    question: "Approximately how many K-pop groups are there in South Korea?",   a: "50",   b: "100",   c: "300",   d: "500",   correct: "c",},  
   { 
    question: "Which K-pop band was the first to perform at Coachella?",   a: "Twice",   b: "BLACKPINK",   c: "EXO",   d: "BTS",   correct: "b",},  
   { 
    question: "How many 0.5cm slices can you cut from a bread that is 25cm long? ",   a: "50",   b: "25",   c: "39",   d: "None of the above.",   correct: "a",},  
   { 
    question: "The answer is really big. ",   a: "THE ANSWER.",   b: "Really big.",   c: "An elephant.",   d: "The data given is insufficient.",   correct: "a",},  
   { 
    question: "How many colors in the Rainbow?",   a: "One",   b: "Five",   c: "Seven",   d: "Eight",   correct: "c",},  
    ];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text') 
const submitBtn = document.getElementById('submit') 

    let score = 0 
    remainTime = 15
    let counter;
    let currentQuiz=0
    var numbers=[];
    let roomnumber=0
    function loadQuiz()
        {  
          var min,max,r,n,p;
          min=0;
          max=77;
          r=1;
          for(let i=0;i<r;i++){
            do{
              n=Math.floor(Math.random()*(max-min+1))+min;
              p=numbers.includes(n);
              if(!p){
                numbers.push(n);
              }
            }
            while(p);
          }
            let rand=numbers[roomnumber];
            roomnumber++
            window.rand2=rand;
            clearInterval(counter);
            start(remainTime);
            deselectAnswers()
            scorept.innerHTML = score;
        const currentQuizData = quizData[rand] 
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a 
        b_text.innerText = currentQuizData.b 
        c_text.innerText = currentQuizData.c 
        d_text.innerText = currentQuizData.d }
        function deselectAnswers() {
        answerEls.forEach(answerEls => answerEls.checked = false) } 
        function getSelected() 
        { let answer
            answerEls.forEach(answerEls => { 
                if(answerEls.checked) { 
                    answer = answerEls.id;
                }})
                return answer  } 
            [a_text,b_text,c_text,d_text].forEach(item =>
            item.addEventListener('click', () =>{
                submitBtn.disabled = false;})
            )
        submitBtn.addEventListener('click', () => {
        submitBtn.disabled = true;
        timeup.innerHTML = "<strong>Time Left</strong>";
        timeup.style.color = '#004085';
        timeLeft.style.color = '#fff';
            const answer = getSelected() 
        if(answer) { if(answer === quizData[rand2].correct) 
            { score++ } 
            currentQuiz++ 
            if(currentQuiz < 10) 
                { loadQuiz() }
                else{ showresult()} 
            }
        }

        )
{/* <h2>You answered ${quizData.length} questions and got ${score} score.</h2> <button onclick="location.reload()">Reload</button> ` */}