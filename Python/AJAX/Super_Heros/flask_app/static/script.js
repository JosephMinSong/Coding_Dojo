const resultDiv = document.querySelector('.result-div')
const submitButton = document.getElementById('search-btn')
const form = document.getElementById('myform')

submitButton.addEventListener('submit', (e) => {
    e.preventDefault()
    let form = new FormData(form)
    let hero_name = document.getElementById('hero').value
    fetch('http://localhost:5000/search', { method: 'POST', body : form })
        .then(r => response.json())
        .then(data => {
            
        })
})