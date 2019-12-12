const compo = {
	div(id, text) {
		const div = document.createElement('div')
		div.setAttribute('style', 'border: 1px solid black')
		div.setAttribute('id', id)
		// div.textContent = text
		return div
	},
	inputText(id, type){
		const arr = [...arguments]
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('id', id)
		return input
	},
	inputButton(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('value',val)
		input.setAttribute('id',id)
		return input
	},
	br(){
		return document.createElement('br')
	}
}