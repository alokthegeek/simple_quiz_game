const questionSet = [
  {
    category: 'Food & Drink',
    id: 'qa-2',
    correctAnswer: 'Carrot',
    options: ['Potato', 'Carrot', 'Turnip', 'Radish'],
    question: "Q1: Which vegetable is traditionally used to make the orange base of a classic carrot cake?",
  },
  {
    category: 'Food & Drink',
    id: 'qa-3',
    correctAnswer: 'Avocado',
    options: ['Cucumber', 'Avocado', 'Zucchini', 'Eggplant'],
    question: "Q2: Which creamy fruit is often mistaken for a vegetable and is the main ingredient in guacamole?",
  },
  {
    category: 'Food & Drink',
    id: 'qa-4',
    correctAnswer: 'It’s served upside down!',
    options: [
      'It contains no sugar!',
      'It uses frozen bread!',
      'It’s served upside down!',
      'It’s made with cola!',
    ],
    question: "Q3: What’s unusual about a pineapple upside-down cake?",
  },
  {
    category: 'Food & Drink',
    id: 'qa-5',
    correctAnswer: 'Snickers',
    options: ['Twix', 'Snickers', 'KitKat', 'Mars'],
    question: "Q4: Which chocolate bar contains nougat, caramel, and peanuts, all covered in milk chocolate?",
  },
  {
    category: 'Food & Drink',
    id: 'qa-6',
    correctAnswer: 'Bubble Tea',
    options: ['Bubble Tea', 'Iced Latte', 'Milkshake', 'Smoothie'],
    question: "Q5: Which drink is known for having chewy tapioca balls at the bottom?",
  },
];

//destructure
let k = 0;
let { correctAnswer, options, question } = questionSet[k];

let quesDiv = document.querySelector("#question");
quesDiv.textContent = question;

let optDiv = document.querySelector("#options");

let scoreEl = document.querySelector("#score");

const nextBtn = document.createElement("button");
nextBtn.classList.add("nextButton");
nextBtn.textContent = "NEXT QUESTION";
scoreEl.append(nextBtn);
nextBtn.addEventListener("click", () => {
  if (k >= 4) {
    quesDiv.textContent = "Quiz Completed";
    optDiv.remove();
    nextBtn.remove();
  }

  k++;
  correctAnswer = questionSet[k].correctAnswer;
  options = questionSet[k].options;
  question = questionSet[k].question;
  quesDiv.textContent = question;

  let option_btn = document.querySelectorAll(".option-btn");
  let l = 0;
  options = shuffleArray(options);
  option_btn.forEach((btn) => {
    btn.textContent = options[l];
    l++;
  })
});

// shuffle array
function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

options = shuffleArray(options);

for (let i = 0; i < options.length; i++) {
  let eachOpt = document.createElement("button");
  eachOpt.textContent = options[i];
  eachOpt.classList.add("option-btn")
  optDiv.append(eachOpt);
}

const optionBtnArray = document.querySelectorAll(".option-btn");

let totalScore = 0;

for (let i = 0; i < optionBtnArray.length; i++) {
  let btn = optionBtnArray[i];
  btn.addEventListener("click", (event) => {
    if (event.target.textContent.trim() == correctAnswer) {
      totalScore++;
      scoreEl.innerHTML = `Score: ${totalScore}/ 5`;
      scoreEl.append(nextBtn);
    }
    else {
      totalScore -= 0.25;
      scoreEl.innerHTML = `Score: ${totalScore}/ 5`;
      scoreEl.append(nextBtn);
    }

    if (k >= 4) {
      quesDiv.textContent = "Quiz Completed";
      optDiv.remove();
    }

    k++;
    correctAnswer = questionSet[k].correctAnswer;
    options = questionSet[k].options;
    question = questionSet[k].question;
    quesDiv.textContent = question;

    let option_btn = document.querySelectorAll(".option-btn");
    let l = 0;
    options = shuffleArray(options);
    option_btn.forEach((btn) => {
      btn.textContent = options[l];
      l++;
    })
  }
  );
}

