window.onload = () => {

	const title = document.getElementById('title'),
		q1 = document.getElementById('question1'),
		q2 = document.getElementById('question2'),
		q3 = document.getElementById('question3'),
		q4 = document.getElementById('question4');

	const questions = [{
		title: 'Who came up with the theories of General and Special relativity?',
		q1: 'Albert Einstein',
		q2: 'Thomas Edison',
		q3: 'Alexander Graham Bell',
		q4: 'Nikola Tesla'
	}, {
		title: 'According to physics, what are the four fundamental forces in nature?',
		q1: 'Kinetic Force, Electromagnetic Force, Frictional Force, Gravitational Force',
		q2: 'Strong Force, Electromagnetic Force, Weak Force, Gravitational Force',
		q3: 'Kinetic Force, Electromagnetic Force, Frictional Force, Gravitational Force',
		q4: 'Strong Force, Applied Force, Kinetic Force, Frictional Force'
	}, {
		title: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?",
		q1: 'Static Mechanics',
		q2: 'Dynamic Mechanics',
		q3: 'Kinematic Mechanics',
		q4: 'Quantum Mechanics'
	}, {
		title: 'Who is the author of the book "A Brief History of Time"?',
		q1: 'Stephen Hawking',
		q2: 'Richard Feynman',
		q3: 'Michio Kaku',
		q4: 'Robert Resnick'
	}, {
		title: 'Which Big-O complexity is represented in the equation "if (n === 1)..."',
		q1: 'O(n)',
		q2: 'O(1)',
		q3: 'O(n^)',
		q4: 'O(n log n)'
	}, {
		title: 'What is the force that opposes the relative motion of two bodies that are in contact?',
		q1: 'Inherent',
		q2: 'Constant',
		q3: 'Kinetic',
		q4: 'Friction'
	}, {
		title: 'In 1975 an engineer created the first electronic camera while working for what company?',
		q1: 'Canon',
		q2: 'Nikon',
		q3: 'Kodak',
		q4: 'Olympus'
	}, {
		title: 'CERN launched the very first website in what year?',
		q1: '1989',
		q2: '1990',
		q3: '1985',
		q4: '1991'
	}, {
		title: 'What was the highest selling single model of personal computer ever?',
		q1: 'IBM PC',
		q2: 'Commodore 64',
		q3: 'Apple II',
		q4: 'ZX Spectrum'
	}, {
		title: 'Who is credited with inventing the first mechanical computer?',
		q1: 'Charles Babbage',
		q2: 'Alan Turing',
		q3: 'Konrad Zuse',
		q4: 'Leonard Riggio'
	}];
};