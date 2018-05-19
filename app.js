console.log("HEY");

const questions = [
	{
		question: "What was the original production name of the first Star Wars?",
		answers: ["Star Wars", "A New Hope", "Space Conflict", "Adventures of Luke Starkiller"],
		answer: 0
	},
	{
		question: "What is Boba Fett's home planet?",
		answers: ["Vandor-1", "Mandalore", "Teth", "Kamino"],
		answer: 3
	}
];

var initialState = () => {
	return { questionIndex: 0, points: 0 };
};

let state = initialState();

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const listOfAnswers = document.getElementsByClassName("answers");

startBtn.addEventListener("click", () => {
	quiz.innerHTML = "";
	getQuestion();
});

var getQuestion = () => {
	questions.length ? createQuestionHtml(questions.shift()) : showScore();
};

var createQuestionHtml = currentQuestion => {
	let li;

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

	getSelectedValue();
};

var getSelectedValue = () => {
	[].forEach.call(listOfAnswers, li => {
		createListenersOnLi(li);
	});
};

var createListenersOnLi = li => {
	li.addEventListener("click", () => {
		removeSelectedClassOnLi();
		var selected = li;
		console.log(selected.innerHTML);
		li.classList.add("selected");
	});
};

var removeSelectedClassOnLi = () => {
	[].forEach.call(listOfAnswers, li => {
		li.classList.remove("selected");
	});
};

var validateQuestion = () => {};

var checkAnswer = () => {};
