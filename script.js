



const button = document.querySelector('button')

const text = document.querySelector('.text')

console.log(button)



function hak() { 
		text.innerHTML += 'люблю шгш '
}


button.addEventListener('click', () => {
		setInterval(()=> hak(), 100);
	
})

