console.log("HEY");

const questions = [
	{
		question: "What was the original name of the first Star Wars?",
		answers: ["Star Wars", "A New Hope", "Space Conflict", "A Jedi Tale"],
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

startBtn.addEventListener("click", () => {
	quiz.innerHTML = "";
	getQuestion();
});

var getQuestion = () => {
	questions.length ? createQuestions(questions.shift()) : showScore();
};

var createQuestions = currentQuestion => {
	let li, selected;

	const questionDiv = document.createElement("div");
	const question = document.createElement("h2");
	question.innerHTML = currentQuestion.question;

	const ul = document.createElement("ul");
	currentQuestion.answers.forEach(answer => {
		li = document.createElement("li");
		li.innerHTML = answer;
		li.className = "answers";

		ul.appendChild(li);
	});

	const btn = document.createElement("button");
	btn.innerHTML = "submit";

	questionDiv.appendChild(question);
	questionDiv.appendChild(ul);
	quiz.appendChild(questionDiv);

	const listOfAnswers = [...document.getElementsByClassName("answers")];
	console.log(listOfAnswers);
	[].forEach.call(listOfAnswers, li => {
		console.log(li);
		li.style = "color: blue;";
		li.addEventListener("click", () => {
			Array.prototype.forEach.call(listOfAnswers, li => {
				li.classList.remove("selected");
			});

			selected = li;
			console.log(selected);
			li.classList.add("selected");
		});
	});
};

var validateQuestion = () => {};

var checkAnswer = () => {};
