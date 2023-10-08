const input = document.getElementById('input-box');
const list = document.getElementById('list-task');
const btn = document.getElementById('btn');


function addTask() {
	if ( input.value == '' ) {
		alert('Field harus diisi')
	} else {
		let li = document.createElement('li');
		li.innerHTML = input.value;
		list.appendChild(li)
		let span = document.createElement('span')
		span.innerHTML = '&#215';
		li.appendChild(span)
	}
	input.value = ''

	save()
}

function search() {
	let tasks = list.getElementsByTagName('LI')

	for ( let i = 0; i < tasks.length; i++ ) {
		let task = tasks[i]
		let taskName = task.innerText.toLowerCase()

		if ( taskName.includes(input.value) ) {
			task.style.display = 'block'
		} else {
			task.style.display = 'none'
		}
	}

	input.value = ''
}


list.addEventListener('click', (e) => {
	if ( e.target.tagName == 'LI') {
		e.target.classList.toggle('checked')
	} else if ( e.target.tagName == 'SPAN' ) {
		e.target.parentElement.remove()
	}
	save()
}, false)

function save() {
	sessionStorage.setItem('data', list.innerHTML)
}

function getData() {
	list.innerHTML = sessionStorage.getItem('data')
}

getData()