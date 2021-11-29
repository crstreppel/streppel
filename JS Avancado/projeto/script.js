const template =(function(){
	const languageSelect = document.querySelector('#language-tags');
	const listElement = document.querySelector('#list');
	
	let listItems = [
		{
			full_name: 'JavaScript 1',
			created_at: '2020-07-25T20:10:50',
			forks: 15300
		},
		{
			full_name: 'JavaScript 2',
			created_at: '2020-07-25T20:10:50',
			forks: 18300
		},
		{
			full_name: 'JavaScript 3',
			created_at: '2020-07-25T20:10:50',
			forks: 2570
		}
	]
	let languageTag = 'en-US'

	languageSelect.addEventListener('change', changeLanguage)

	function changeLanguage(){
	languageTag = languageSelect.value
	render()
	}

	function render(){
	let html = '';
    const numberFormatter = new Intl.NumberFormat(languageTag)
    const dateFormatter = new Intl.DateTimeFormat(languageTag, {week: 'long', year: 'numeric', month:'long', day: 'numeric'})
	listItems.forEach(item => {
        const forks = numberFormatter.format(item.forks)
        const createAt= dateFormatter.format(new Date(item.created_at))
		html += `
			<li>
				<div>
					<b>Name:</b> ${item.full_name}
				</div>
				<div>
					<b>Created At:</b> ${createAt}
				</div>
				<div>
					<b>Forks:</b> ${forks}
				</div>
			</li>
		`;
	})

	listElement.innerHTML = html;
}
})()





const searchInput = document.querySelector('#search');










