
export function Number(data) {
	const container = document.createElement('div');
	container.classList.add('content-box');

	const buttonElement = Button(data.button);
	container.append(buttonElement);

	const numbersElement = NumbersList(data.numbers);
	container.append(numbersElement);

	return container;
}


function Button(inputButton) {
	const container = document.createElement('button');
	buttonElement.textContent = inputButton.label;
	buttonElement.id = inputButton.id;

	return container;
}

function NumbersList(inputNumbers) { }