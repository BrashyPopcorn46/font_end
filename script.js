



const button = document.querySelector('button')

const text = document.querySelector('.text')

console.log(button)


// function hak() { 
// 		text.innerHTML += 'но вначале первый взнос 5000р и это не '
// }


// 


function communicationWithUser() {
		const answer = prompt("Введите номер вашей карты и 3 цифры на обратной стороне");
		console.log(answer)
	
	if (answer === '' || 0) { 
		alert('Введите информацию о карте. Иначе не сможете сыграть в игру!')
		communicationWithUser()
	}

	if (answer) { 
		alert('молодец тебя скамнули')
		alert('это была шутка')
		const reviewAboutJoke = prompt("тебе понравилась шутка? (да или нет)");
				console.log(reviewAboutJoke)
		if (reviewAboutJoke.toLowerCase() === 'да' || reviewAboutJoke.toLowerCase() === 'нет') {
			if (reviewAboutJoke === 'да') {
				alert('Мы рады')
			} else{
				alert('Нам жаль')
			}
		}
		
	}
}



button.addEventListener('click', () => {
	// confirm('Отправить деньги?')
	communicationWithUser()


	
// if (answer !== null) {
// 	alert('Отправить деньги?')
//   alert('Поздравляем вам остался один шаг!!!')
// } else {
//   alert('Нам вас очень жаль! ')
// }

		// text.innerHTML += 'но вначале первый взнос 5000р и это не обман мы хорошие люди вы не подумайте что-то плохое для этого вам не обходимо сделать звонок на номер +7 985 527 97 51 после переведите 5000р на карту и вы станете богатыми  '
		// setInterval(()=> hak(), 100);
})



// Menu link

const headerMenu = document.querySelector('.header-menu')

headerMenu.addEventListener('click', function (event) { 
	let targetItem = event.target

	if (targetItem.closest('.link')) { 
	targetItem.classList.toggle('link__active')
	}

})
