console.log("HEY");

const questions = [
	{
		question: "What was the original production name of the first Star Wars?",
		answers: [
			"Star Wars",
			"A New Hope",
			"Space Conflict",
			"Adventures of Luke Starkiller"
		],
		answer: 3
	},
	{
		question: "What is Boba Fett's home planet?",
		answers: ["Vandor-1", "Mandalore", "Teth", "Kamino"],
		answer: 3
	}
];

const initialState = () => {
	return { points: 0 };
};

let state = initialState();

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const listOfAnswers = document.getElementsByClassName("answers");
const submitBtn = document.createElement("div");
let prevailingQuestion, selected;

startBtn.addEventListener("click", () => {
	getQuestion();
});

const getQuestion = () => {
	questions.length ? createQuestionHtml(questions.shift()) : showScore();
};

const createQuestionHtml = currentQuestion => {
	let li;

	prevailingQuestion = currentQuestion;

	quiz.innerHTML = "";

	const questionDiv = document.createElement("div");

	const question = document.createElement("h2");
	question.innerHTML = currentQuestion.question;

	const btn = document.createElement("button");
	btn.innerHTML = "submit";

	const ul = document.createElement("ul");
	currentQuestion.answers.forEach(answer => {
		li = document.createElement("li");
		li.innerHTML = answer;
		li.className = "answers";
		ul.appendChild(li);
	});

	questionDiv.appendChild(question);
	questionDiv.appendChild(ul);
	quiz.appendChild(questionDiv);

	submitBtn.innerHTML = "SUBMIT";
	quiz.appendChild(submitBtn);
	submitBtn.addEventListener("click", validate);

	getSelectedValue();
};

const getSelectedValue = () => {
	[].forEach.call(listOfAnswers, li => {
		createListenersOnLi(li);
	});
};

const createListenersOnLi = li => {
	li.addEventListener("click", () => {
		removeSelectedClassOnLi();
		selected = li.innerHTML;
		li.classList.add("selected");
	});
};

const removeSelectedClassOnLi = () => {
	[].forEach.call(listOfAnswers, li => {
		li.classList.remove("selected");
	});
};

const validate = () => {
	if (selected) {
		checkAnswerOnSubmit(selected);
	}
};

const checkAnswerOnSubmit = selected => {
  console.log("checkAnswerOnSubmit")
  console.log(prevailingQuestion)
	if (prevailingQuestion.answers[prevailingQuestion.answer] === selected) {
		console.log("yes");
		state.points += 1;
	} else {
		console.log("no");
	}

  selected = null
  prevailingQuestion = null
  submitBtn.removeEventListener("click", validate)
	getQuestion();
};

const showScore = () => {
	quiz.innerHTML = state.points;
};
