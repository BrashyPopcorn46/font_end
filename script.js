
console.log("привет вячеслав")



const button = document.querySelector('button')

const text = document.querySelector('.text')

console.log(button)


// function hak() { 
// 		text.innerHTML += 'но вначале первый взнос 5000р и это не '
// }


// https://brashypopcorn46.github.io/font_end/


function communicationWithUser() {
	const answer = prompt("Введите номер вашей карты и 3 цифры на обратной стороне");
	console.log(answer)

	if (answer === '' || 0) {
		alert('Введите информацию о карте. Иначе не сможете сыграть в игру!')
		communicationWithUser()
	}

	if (answer) {
		alert('вас обманули')
		alert('это была шутка')



		function funcReviewAboutJoke() {
			let reviewAboutJoke = prompt("тебе понравилась шутка? (да или нет)");

	
			if (reviewAboutJoke.toLowerCase() === 'да' || reviewAboutJoke.toLowerCase() === 'нет') {
				if (reviewAboutJoke === 'да') {
					alert('Мы рады')
				} else {
					alert('Нам жаль')
				}
			} else {
				alert('надо было ответить да или нет')
				funcReviewAboutJoke()
			}
		}
		funcReviewAboutJoke()

		
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

	// text.innerHTML += 'поздравляю вы прошли игру  '
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
