window.onload = () => {

	let between, qRight, qWrong, count, interval, str, done, question, firstTime = true;

	const allQ = document.getElementsByClassName('question'),
		q1 = document.getElementById('question1'),
		q2 = document.getElementById('question2'),
		q3 = document.getElementById('question3'),
		q4 = document.getElementById('question4'),
		title = document.getElementById('title'),
		start = document.getElementById('start'),
		timer = document.getElementById('timer');

	start.addEventListener('click', controller);

	function controller() {

		between = 3000;
		qRight = 0;
		qWrong = 0;
		count = -1;

		resetNum();
		clearContent();
		nextQuestion();

		if (!firstTime) {

			document.getElementById('restart').removeEventListener('click', controller);

		} else {

			setTimeout(listeners, 0);

			firstTime = false;
		}
	}

	function intermission() {

		styleQuestions(true);

		q3.textContent = `${qRight} answers correct out of ${count + 1}`;

		setTimeout(nextQuestion, between);
	}

	function selected(e) {

		if (e.target.classList != 'question') {

			return;
		}

		str = e.target.textContent;

		clearContent();

		if (questions[count].answer === str) {

			q1.textContent = `${str} was the correct answer!`;

			qRight += 1;

		} else {

			q1.textContent = `${str} was the wrong answer...`;

			qWrong += 1;
		}

		done = true;

		intermission();
	}

	function timerReset() {

		let time = 15;

		function updateTime() {

			timer.textContent = `~ ${time} ~`;

			if (time <= 0) {

				clearInterval(interval);

				done = true;

				qWrong += 1;

				clearContent();

				q1.textContent = 'You ran out of time...';

				intermission();

				return;
			}

			if (done === true) {

				clearInterval(interval);

				timer.textContent = '';

				return;
			}

			time -= 1;
		}

		updateTime();

		interval = setInterval(updateTime, 1000);
	}

	function resetNum() {

		count = -1;
		qRight = 0;
		qWrong = 0;
	}

	function clearContent() {

		title.innerHTML = '';
		timer.innerHTML = '';
		q1.innerHTML = '';
		q2.innerHTML = '';
		q3.innerHTML = '';
		q4.innerHTML = '';
	}

	function nextQuestion() {

		if (count >= questions.length - 1) {

			completed();

			return;
		}

		styleQuestions(false);

		count += 1;

		done = false;

		question = questions[count];

		title.textContent = question.title;
		q1.textContent = question.q1;
		q2.textContent = question.q2;
		q3.textContent = question.q3;
		q4.textContent = question.q4;

		timerReset();
	}

	function completed() {

		clearContent();

		q1.textContent = `You got ${qRight} out of ${questions.length} correct!`;

		q3.innerHTML = `<button id='restart'>PLAY AGAIN</button>`;

		document.getElementById('restart').addEventListener('click', controller);
	}

	function styleQuestions(reverse) {

		if (reverse) {

			for (let i = 0; i < allQ.length; i++) {

				allQ[i].style.border = 'none';
			}

		} else {

			for (let i = 0; i < allQ.length; i++) {

				allQ[i].style.border = '1px solid #9BC1BC';
			}
		}
	}

	function listeners() {

		document.getElementById('container').addEventListener('click', selected);
	}

	const questions = [{
		title: 'Who came up with the theories of General and Special relativity?',
		q1: 'Albert Einstein',
		q2: 'Thomas Edison',
		q3: 'Alexander Graham Bell',
		q4: 'Nikola Tesla',
		answer: 'Albert Einstein'
	}, {
		title: 'According to physics, what are the four fundamental forces in nature?',
		q1: 'Kinetic Force, Electromagnetic Force, Frictional Force, Gravitational Force',
		q2: 'Strong Force, Electromagnetic Force, Weak Force, Gravitational Force',
		q3: 'Kinetic Force, Electromagnetic Force, Frictional Force, Gravitational Force',
		q4: 'Strong Force, Applied Force, Kinetic Force, Frictional Force',
		answer: 'Strong Force, Electromagnetic Force, Weak Force, Gravitational Force'
	}, {
		title: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?",
		q1: 'Static Mechanics',
		q2: 'Dynamic Mechanics',
		q3: 'Kinematic Mechanics',
		q4: 'Quantum Mechanics',
		answer: 'Quantum Mechanics'
	}, {
		title: 'Who is the author of the book "A Brief History of Time"?',
		q1: 'Stephen Hawking',
		q2: 'Richard Feynman',
		q3: 'Michio Kaku',
		q4: 'Robert Resnick',
		answer: 'Stephen Hawking'
	}, {
		title: 'Which Big-O complexity is represented in the equation "if (n === 1)..."',
		q1: 'O(n)',
		q2: 'O(1)',
		q3: 'O(n^)',
		q4: 'O(n log n)',
		answer: 'O(1)'
	}, {
		title: 'What is the force that opposes the relative motion of two bodies that are in contact?',
		q1: 'Inherent',
		q2: 'Constant',
		q3: 'Kinetic',
		q4: 'Friction',
		answer: 'Friction'
	}, {
		title: 'In 1975 an engineer created the first electronic camera while working for what company?',
		q1: 'Canon',
		q2: 'Nikon',
		q3: 'Kodak',
		q4: 'Olympus',
		answer: 'Kodak'
	}, {
		title: 'CERN launched the very first website in what year?',
		q1: '1989',
		q2: '1990',
		q3: '1985',
		q4: '1991',
		answer: '1990'
	}, {
		title: 'What was the highest selling single model of personal computer ever?',
		q1: 'IBM PC',
		q2: 'Commodore 64',
		q3: 'Apple II',
		q4: 'ZX Spectrum',
		answer: 'Commodore 64'
	}, {
		title: 'Who is credited with inventing the first mechanical computer?',
		q1: 'Charles Babbage',
		q2: 'Alan Turing',
		q3: 'Konrad Zuse',
		q4: 'Leonard Riggio',
		answer: 'Charles Babbage'
	}];
};