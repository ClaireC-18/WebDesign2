//“Samesite-examples/javascript.md at Master · GoogleChromeLabs/Samesite-examples.” n.d. GitHub. https://github.com/GoogleChromeLabs/samesite-examples/blob/master/javascript.md.
// Set a same-site cookie for first-party contexts
document.cookie = "cookie1=value1; SameSite=Lax";
// Set a cross-site cookie for third-party contexts
document.cookie = "cookie2=value2; SameSite=None; Secure";
//LOADER KEPT BREAKING THE SITE SO LEFT IT OUT
// Simulate loading
/*window.addEventListener('load', function() {
	const loader = document.getElementById('loader');
	const body = document.querySelector('body');
	
	// Add loaded class to body after 2 seconds (simulating loading time)
	setTimeout(function() {
	  body.classList.add('loaded');
	  // Hide loader
	  loader.style.display = 'none';
	}, 2000);
  });
*/
//HEADER FUNCTION TO ANIMATE WEBSITE HEADING AND DISPLAY PAGE DESCRIPTION
// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Get the DOM elements for the heading and text content
    var t = document.getElementById("heading"),
        e = document.getElementById("text-content");
    // Fade in the heading after 1 second
    setTimeout(function () {
        (t.style.opacity = 1),
            typeWriterEffect(t.innerHTML, t),
            setTimeout(function () {
                // Fade in the text content after 3 seconds
                e.style.display = "block";
            }, 3000);
    }, 3000);
});
// Define the typeWriterEffect function to display the heading text character by character
function typeWriterEffect(t, e) {
    let n = 0;
    (e.innerHTML = ""),
        !(function i() {
            n < t.length && ((e.innerHTML += t.charAt(n)), n++, setTimeout(i, 50));
        })();
}
// Define the fadeIn function to fade in the text content
function fadeIn() {
    var element = document.getElementById("text-content");
    element.style.display = "block"; // Make sure the element is visible
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            // Increase the opacity of the element by 0.1 every 500 milliseconds
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            // Stop the interval when the opacity reaches 1
            clearInterval(interval);
        }
    }, 5000); // Adjust fading speed
}

//GSAP SCROLLTRIGGER FUNCTION
function setupScrollTrigger(e) {
    let n = gsap.utils.toArray(".scroll-item", e);
    gsap.to(n, { xPercent: -100 * (n.length - 1), ease: "none", scrollTrigger: { trigger: e, pin: !0, scrub: 1, snap: 1 / (n.length - 1), end: () => "+=" + e.offsetWidth } });
}
gsap.registerPlugin(ScrollTrigger);
const containers = document.querySelectorAll(".scroll-container");
containers.forEach((e) => setupScrollTrigger(e));

//FUNCTION TO CREATE, RUN, AND CALCULATE SCORES FOR EACH SECTION OF THE QUIZ SECTIONS
//“Progress Bar,” n.d. https://shoelace.style/components/progress-bar.
function updateProgressBar() {
    let e = this.questions.length,
        n = this.userAnswers.length;
    let progressBarId = "progress-bar-quiz" + this.container.id.slice(-1);
    document.getElementById(progressBarId).style.width = `${(n / e) * 100}%`;
}
//Faraz. 2023. “Build a Quiz Application With HTML, CSS, and JavaScript | Step-by-Step Guide.” Code with Faraz - Best Front-End Components and Blogs (blog). June 1, 2023. https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide.
const quizzes = {
    //Questions defined for Quiz 1
    container1: {
        questions: [
            { question: "What ancient civilization is known for constructing the Great Pyramid of Giza?", options: ["Mesopotamia", "Ancient Greece", "Ancient Egypt", "Indus Valley Civilization"], answer: 2 },
            { question: "Which ancient civilization mysteriously disappeared without a clear explanation?", options: ["Roman Empire", "Mayan Civilization", "Ancient Persia", "Chinese Dynasties"], answer: 1 },
            { question: "When did the Indus Valley Civilization mysteriously disappear?", options: ["1900 CE", "1900 BCE", "1000 CE", "1000 BCE"], answer: 1 },
            { question: "Stonehenge, the prehistoric monument in England, was constructed during which approximate timeframe?", options: ["3000–2000 CE", "1000–500 CE", "3000–2000 BCE", "1000–500 BCE"], answer: 2 },
            { question: "Who was buried in the Great Pyramid of Giza?", options: ["Pharaoh Khafre", "Pharaoh Khufu", "Pharaoh Ramses II", "Tutankhamun"], answer: 1 },
            { question: "What is the most famous Mayan Pyramid?", options: ["The Pyramid of Kukulkan El Castillo", "The Great Pyramid of Cholula", "The Great Pyramid of Calakmul", "Chichen Itza"], answer: 3 },
            { question: "In which historic period did the Indus Valley Civilization live?", options: ["Stone Age", "Classical Era", "Bronze Age", "Iron Age"], answer: 2 },
        ],
    },
    //Questions defined for Quiz 2
    container2: {
        questions: [
            { question: "What historical event is associated with the Roanoke Colony Disappearance in 1590?", options: ["Salem Witch Trials", "Spanish Inquisition", "Jamestown Settlement", "Mayflower Compact"], answer: 2 },
            { question: "During which century did the Lost Colony of Greenland go missing?", options: ["1200s", "1300s", "1400s", "1500s"], answer: 2 },
            { question: "What is the primary characteristic of the Voynich Manuscript, discovered in the 15th century?", options: ["Coded Language", "Ancient Maps", "Poetic Verses", "Herbal Recipes"], answer: 0 },
            { question: "The Tamam Shud Case, a mysterious death, occurred in which year?", options: ["1928", "1948", "1963", "1975"], answer: 1 },
            { question: "What was the mysterious occurrence associated with the Roanoke Colony Disappearance?", options: ["Alien Abduction", "Crop Circles", "Disappearing Settlers", "Ghost Ship Sightings"], answer: 2 },
            { question: "Which region is linked to the Lost Colony of Greenland's disappearance?", options: ["North America", "South America", "Europe", "Asia"], answer: 2 },
            { question: "What type of writing system has yet to be deciphered in the Voynich Manuscript?", options: ["Hieroglyphics", "Runes", "Linear B", "Unknown Script"], answer: 3 },
        ],
    },
    //Questions defined for Quiz 3
    container3: {
        questions: [
            { question: "What ancient artifact, dating back to approximately 100 BCE, is often considered an early analog computer?", options: ["Rosetta Stone", "Baghdad Battery", "Antikythera Mechanism", "Archimedes Screw"], answer: 2 },
            { question: "The Shroud of Turin, believed by some to be the burial cloth of Jesus, is thought to originate from which century?", options: ["1st century", "7th century", "14th century", "18th century"], answer: 2 },
            {
                question: "What bizarre phenomenon struck the city of Strasbourg in 1518, causing people to uncontrollably dance for days on end?",
                options: ["Black Death", "Spanish Inquisition", "Dancing Plague", "Witch Trials"],
                answer: 2,
            },
            { question: "The Tunguska Event, an unexplained explosion in Siberia, occurred in which year?", options: ["1883", "1908", "1929", "1954"], answer: 1 },
            { question: "What type of artifact is the Shroud of Turin believed to be?", options: ["Painting", "Sculpture", "Relic", "Manuscript"], answer: 2 },
            { question: "Which civilization is often associated with the creation of the Antikythera Mechanism?", options: ["Ancient Rome", "Ancient Greece", "Ancient Egypt", "Byzantine Empire"], answer: 1 },
            { question: "What natural event is believed to have caused the mysterious Tunguska explosion?", options: ["Meteor Impact", "Earthquake", "Volcanic Eruption", "Tsunami"], answer: 0 },
        ],
    },
};
// Define the Quiz constructor function
function Quiz(e, n) {
    // Set the container, questions, current question index, score, and user answers
    (this.container = document.getElementById(e)),
        (this.questions = n),
        (this.currentQuestionIndex = 0),
        (this.score = 0),
        // Define the displayResults method
        (this.displayResults = function () {
            (this.container.innerHTML = "<h2>Quiz Completed!</h2>"), (this.container.innerHTML += `<p>Your Score: ${this.score}/${this.questions.length}</p>`), (this.container.innerHTML += "<p>Incorrect Answers:</p>");
            for (let e = 0; e < this.questions.length; e++) {
                let n = this.questions[e];
                n.answer !== this.userAnswers[e] &&
                    ((this.container.innerHTML += `<p class = question>${n.question}</p>`),
                    (this.container.innerHTML += `<p class="incorrect">Your Answer: ${n.options[this.userAnswers[e]]}</p>`),
                    (this.container.innerHTML += `<p class="correct">Correct Answer: ${n.options[n.answer]}</p>`));
            }
            let i = document.createElement("button");
            (i.textContent = "Retry Quiz"),
                (i.onclick = function () {
                    quiz1.reset(), quiz2.reset(), quiz3.reset(), quiz1.displayQuestion(), quiz2.displayQuestion(), quiz3.displayQuestion();
                }),
                this.container.appendChild(i);
        }),
        (this.userAnswers = []),
        // Define the reset method
        (this.reset = function () {
            (this.currentQuestionIndex = 0), (this.score = 0), (this.userAnswers = []);
        }),
        // Define the displayQuestion method
        (this.displayQuestion = function () {
            if ((updateProgressBar.call(this, this.container), this.currentQuestionIndex < this.questions.length)) {
                let e = this.questions[this.currentQuestionIndex];
                this.container.innerHTML = `<h2>${e.question}</h2>`;
                for (let n = 0; n < e.options.length; n++) {
                    let i = document.createElement("button");
                    (i.textContent = e.options[n]),
                        (i.onclick = (function (e, n) {
                            return function () {
                                e.checkAnswer(n);
                            };
                        })(this, n)),
                        this.container.appendChild(i);
                }
            } else this.displayResults();
        }),
        // Define the checkAnswer method
        (this.checkAnswer = function (e) {
            let n = this.questions[this.currentQuestionIndex];
            this.userAnswers.push(e),
                n.answer === e ? ((this.container.innerHTML += "<p>Correct!</p>"), this.score++) : (this.container.innerHTML += `<p>Wrong! The correct answer is ${n.options[n.answer]}</p>`),
                this.currentQuestionIndex++,
                this.displayQuestion();
        });
}
// Create new instances of the Quiz constructor for each container
let quiz1 = new Quiz("quiz1", quizzes.container1.questions),
    quiz2 = new Quiz("quiz2", quizzes.container2.questions),
    quiz3 = new Quiz("quiz3", quizzes.container3.questions);
// Display the first question for each quiz
quiz1.displayQuestion(),
    quiz2.displayQuestion(),
    quiz3.displayQuestion(),
    //SPLIDE CAROUSEL FUNCTION FOR PHOTO GALLERY
    //“SplideJS Carousel Demo.” n.d. CodePen. https://codepen.io/brandonleetran/pen/bGEKrEE.
    // Initialize the Splide carousel for each container
    document.addEventListener("DOMContentLoaded", function () {
        new Splide("#splide1", { type: "loop", perPage: 1, focus: "center", flickMaxPages: 2, updateOnMove: !0, pagination: !1, padding: "10%", throttle: 300, breakpoints: { 1440: { perPage: 1, padding: "30%" } } }).mount(),
            new Splide("#splide2", { type: "loop", perPage: 1, focus: "center", flickMaxPages: 2, updateOnMove: !0, pagination: !1, padding: "10%", throttle: 300, breakpoints: { 1440: { perPage: 1, padding: "30%" } } }).mount(),
            new Splide("#splide3", { type: "loop", perPage: 1, focus: "center", flickMaxPages: 2, updateOnMove: !0, pagination: !1, padding: "10%", throttle: 300, breakpoints: { 1440: { perPage: 1, padding: "30%" } } }).mount();
    });

var myIndex = 0;
function carousel() {
    var e,
        n = document.getElementsByClassName("mySlides");
    for (e = 0; e < n.length; e++) n[e].style.display = "none";
    ++myIndex > n.length && (myIndex = 1), (n[myIndex - 1].style.display = "block"), setTimeout(carousel, 9e3);
}
carousel();

//FUNCTION TO VALIDATE INPUT FIELD OF THE CONTACT FORM.
//“Responsive Contact Page: Dark Mode + Form Validation.” n.d. CodePen. https://codepen.io/dianalisova/pen/eYJGgKq.
// Get the DOM elements for the name, email, message, contact form, error message, success message, and submit button
const name = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("message"),
    contactForm = document.getElementById("contact-form"),
    errorElement = document.getElementById("error"),
    successMsg = document.getElementById("success-msg"),
    submitBtn = document.getElementById("submit"),
    // Define the validate function to handle form validation
    validate = (e) =>
        // Prevent the form from submitting
        // Check if the name is less than 3 characters long
        (e.preventDefault(), name.value.length < 3)
            ? // Display an error message
              ((errorElement.innerHTML = "Your name should be at least 3 characters long."), !1)
            : // Check if the email is valid
            email.value.includes(".") && email.value.includes("@") && emailIsValid(email.value)
            ? message.value.length < 15
                ? // Display an error message
                  ((errorElement.innerHTML = "Please write a longer message."), !1)
                : // Display a success message
                  ((errorElement.innerHTML = ""),
                  (successMsg.innerHTML = "Thank you! I will get back to you as soon as possible."),
                  // Prevent the form from submitting
                  e.preventDefault(),
                  // Reset the form after 6 seconds
                  setTimeout(function () {
                      (successMsg.innerHTML = ""), document.getElementById("contact-form").reset();
                  }, 6e3),
                  !0)
            : // Display an error message
              ((errorElement.innerHTML = "Please enter a valid email address."), !1);
// Define the emailIsValid function to check if the email is valid
function emailIsValid(e) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e);
}
