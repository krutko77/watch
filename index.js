import { data } from './data/data.js';
import { NumbersList } from './components/numbersList/NumberList.component.js';

const numbersListElement = NumbersList(data);

const boxElement = document.getElementById('wrapper');

boxElement.append(numbersListElement);




const textAria = document.getElementById('box');
const activeButton = document.getElementById('button');

activeButton.addEventListener('click', function () {
	newId = createUniqId();
	textString = document.createElement('p');
	wrapperString = document.createElement('div');
	wrapperString.classList.add("wrapper-string");
	wrapperString.id = newId;
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	textString.textContent = 'Новое число:' + ' ' + randomNumber + ' ';
	stringButton = document.createElement('button');
	stringButton.classList.add("delete-btn");
	stringButton.id = newId;
	stringButton.textContent = '❌';
	wrapperString.append(textString, stringButton);
	textAria.append(wrapperString);
});

function createUniqId() {
	return Math.floor(Math.random() * 10000);
}

const deleteButton = document.querySelectorAll('delete-btn');
const numberString = document.querySelectorAll('wrapper-string');
deleteButton.addEventListener('click', function () {
	if (deleteButton.id === numberString.id) {
		numberString.innerHTML = ' ';
	}
});


/* const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
	clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
	const clock = document.getElementById('clock');
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	clock.textContent = hours + ':' + minutes + ':' + seconds;
} */