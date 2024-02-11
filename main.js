gsap.registerPlugin(ScrollTrigger);

function setupScrollTrigger(scrollContainer) {
	let sections = gsap.utils.toArray(".scroll-item", scrollContainer);

	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: scrollContainer,
			pin: true,
			scrub: 1,
			snap: 1 / (sections.length - 1),
			end: () => "+=" + scrollContainer.offsetWidth
		}
	});
}

const containers = document.querySelectorAll('.scroll-container');
containers.forEach(container => setupScrollTrigger(container));


function updateProgressBar() {
  const totalQuestions = this.questions.length;
  const answeredQuestions = this.userAnswers.length;
  const progress = (answeredQuestions / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
}

//Ancient Civilisations Quiz
const quizzes = {
	container1: {
		questions: [{
			question: 'What ancient civilization is known for constructing the Great Pyramid of Giza?',
			options: ['Mesopotamia', 'Ancient Greece', 'Ancient Egypt', 'Indus Valley Civilization'],
			answer: 2
		}, {
			question: 'Which ancient civilization mysteriously disappeared without a clear explanation?',
			options: ['Roman Empire', 'Mayan Civilization', 'Ancient Persia', 'Chinese Dynasties'],
			answer: 1
		}, {
			question: 'When did the Indus Valley Civilization mysteriously disappear?',
			options: ['1900 CE', '1900 BCE', '1000 CE', '1000 BCE'],
			answer: 1
		}, {
			question: 'Stonehenge, the prehistoric monument in England, was constructed during which approximate timeframe?',
			options: ['3000–2000 CE', '1000–500 CE', '3000–2000 BCE', '1000–500 BCE'],
			answer: 2
		}, {
			question: 'Who was buried in the Great Pyramid of Giza?',
			options: ['Pharaoh Khafre', 'Pharaoh Khufu', 'Pharaoh Ramses II', 'Tutankhamun'],
			answer: 1
		}, {
			question: 'What is the most famous Mayan Pyramid?',
			options: ['The Pyramid of Kukulkan El Castillo', 'The Great Pyramid of Cholula', 'The Great Pyramid of Calakmul', 'Chichen Itza'],
			answer: 3
		}, {
			question: 'In which historic period did the Indus Valley Civilization live?',
			options: ['Stone Age', 'Classical Era', 'Bronze Age', 'Iron Age'],
			answer: 2
		}, ]
	},
	container2: {
		questions: [{
			question: 'What historical event is associated with the Roanoke Colony Disappearance in 1590?',
			options: ['Salem Witch Trials', 'Spanish Inquisition', 'Jamestown Settlement', 'Mayflower Compact'],
			answer: 2
		}, {
			question: 'During which century did the Lost Colony of Greenland go missing?',
			options: ['1200s', '1300s', '1400s', '1500s'],
			answer: 1
		}, {
			question: 'What is the primary characteristic of the Voynich Manuscript, discovered in the 15th century?',
			options: ['Coded Language', 'Ancient Maps', 'Poetic Verses', 'Herbal Recipes'],
			answer: 0
		}, {
			question: 'The Tamam Shud Case, a mysterious death, occurred in which year?',
			options: ['1928', '1948', '1963', '1975'],
			answer: 1
		}, {
			question: 'What was the mysterious occurrence associated with the Roanoke Colony Disappearance?',
			options: ['Alien Abduction', 'Crop Circles', 'Disappearing Settlers', 'Ghost Ship Sightings'],
			answer: 2
		}, {
			question: 'Which region is linked to the Lost Colony of Greenland\'s disappearance?',
			options: ['North America', 'South America', 'Europe', 'Asia'],
			answer: 2
		}, {
			question: 'What type of writing system has yet to be deciphered in the Voynich Manuscript?',
			options: ['Hieroglyphics', 'Runes', 'Linear B', 'Unknown Script'],
			answer: 3
		}, ]
	},
	container3: {
		questions: [{
			question: 'What ancient artifact, dating back to approximately 100 BCE, is often considered an early analog computer?',
			options: ['Rosetta Stone', 'Baghdad Battery', 'Antikythera Mechanism', 'Archimedes Screw'],
			answer: 2
		}, {
			question: 'The Shroud of Turin, believed by some to be the burial cloth of Jesus, is thought to originate from which century?',
			options: ['1st century', '7th century', '14th century', '18th century'],
			answer: 2
		}, {
			question: 'What bizarre phenomenon struck the city of Strasbourg in 1518, causing people to uncontrollably dance for days on end?',
			options: ['Black Death', 'Spanish Inquisition', 'Dancing Plague', 'Witch Trials'],
			answer: 2
		}, {
			question: 'The Tunguska Event, an unexplained explosion in Siberia, occurred in which year?',
			options: ['1883', '1908', '1929', '1954'],
			answer: 1
		}, {
			question: 'What type of artifact is the Shroud of Turin believed to be?',
			options: ['Painting', 'Sculpture', 'Relic', 'Manuscript'],
			answer: 2
		}, {
			question: 'Which civilization is often associated with the creation of the Antikythera Mechanism?',
			options: ['Ancient Rome', 'Ancient Greece', 'Ancient Egypt', 'Byzantine Empire'],
			answer: 1
		}, {
			question: 'What natural event is believed to have caused the mysterious Tunguska explosion?',
			options: ['Meteor Impact', 'Earthquake', 'Volcanic Eruption', 'Tsunami'],
			answer: 0
		}, ]
	}
};

function Quiz(containerId, questions) {
	this.container = document.getElementById(containerId);
	this.questions = questions;
	this.currentQuestionIndex = 0;
	this.score = 0; // Initialize the score

	// Display the final results and allow retry
	this.displayResults = function() {
		this.container.innerHTML = `<h2>Quiz Completed!</h2>`;
		this.container.innerHTML += `<p>Your Score: ${this.score}/${this.questions.length}</p>`;
		this.container.innerHTML += `<p>Incorrect Answers:</p>`;

		for (let i = 0; i < this.questions.length; i++) {
			let question = this.questions[i];
			if (question.answer !== this.userAnswers[i]) {
				this.container.innerHTML += `<p class = question>${question.question}</p>`;
				this.container.innerHTML += `<p class="incorrect">Your Answer: ${question.options[this.userAnswers[i]]}</p>`;
				this.container.innerHTML += `<p class="correct">Correct Answer: ${question.options[question.answer]}</p>`;
			}
		}

		let retryButton = document.createElement('button');
		retryButton.textContent = 'Retry Quiz';
		retryButton.onclick = function() {
			// Reset the quiz for retry
			quiz1.reset();
			quiz2.reset();
			quiz3.reset();
			// Display the first question again
			quiz1.displayQuestion();
		};

		this.container.appendChild(retryButton);
	};

	this.userAnswers = []; // Store user answers

	// Reset the quiz for retry
	this.reset = function() {
		this.currentQuestionIndex = 0;
		this.score = 0;
		this.userAnswers = [];
	};

	// Display the current question
	this.displayQuestion = function() {
    updateProgressBar.call(this);
		if (this.currentQuestionIndex < this.questions.length) {
			let q = this.questions[this.currentQuestionIndex];
			this.container.innerHTML = `<h2>${q.question}</h2>`;
			for (let i = 0; i < q.options.length; i++) {
				let button = document.createElement('button');
				button.textContent = q.options[i];
				button.onclick = (function(quiz, index) {
					return function() {
						quiz.checkAnswer(index);
					};
				})(this, i);
				this.container.appendChild(button);
			}
		} else {
			this.displayResults(); // Quiz is completed, display the final results
		}
	};

	// Check the answer and update the score
	this.checkAnswer = function(selectedOption) {
		let question = this.questions[this.currentQuestionIndex];
		this.userAnswers.push(selectedOption); // Store user answer

		if (question.answer === selectedOption) {
			this.container.innerHTML += '<p>Correct!</p>';
			this.score++;
		} else {
			this.container.innerHTML += `<p>Wrong! The correct answer is ${question.options[question.answer]}</p>`;
		}
		this.currentQuestionIndex++;
		this.displayQuestion();
	};
}

let quiz1 = new Quiz('quiz1', quizzes.container1.questions);
let quiz2 = new Quiz('quiz2', quizzes.container2.questions);
let quiz3 = new Quiz('quiz3', quizzes.container3.questions);

quiz1.displayQuestion();
quiz2.displayQuestion();
quiz3.displayQuestion();


document.addEventListener('DOMContentLoaded', function() {
	new Splide('#splide1', {
		type: 'loop',
		perPage: 1,
		focus: 'center',
		flickMaxPages: 2,
		updateOnMove: true,
		pagination: false,
		padding: '10%',
		throttle: 300,
		breakpoints: {
			1440: {
				perPage: 1,
				padding: '30%'
			}
		}
	}).mount();

	new Splide('#splide2', {
		type: 'loop',
		perPage: 1,
		focus: 'center',
		flickMaxPages: 2,
		updateOnMove: true,
		pagination: false,
		padding: '10%',
		throttle: 300,
		breakpoints: {
			1440: {
				perPage: 1,
				padding: '30%'
			}
		}
	}).mount();

	new Splide('#splide3', {
		type: 'loop',
		perPage: 1,
		focus: 'center',
		flickMaxPages: 2,
		updateOnMove: true,
		pagination: false,
		padding: '10%',
		throttle: 300,
		breakpoints: {
			1440: {
				perPage: 1,
				padding: '30%'
			}
		}
	}).mount();
});



//contact form
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);