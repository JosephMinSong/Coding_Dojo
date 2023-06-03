const myForm = document.getElementById('myform')
console.log(myForm)
async function get_users(){
    let response = await fetch('http://localhost:5000/users')
    let data = await response.json()
    console.log(data)

    // Target the table
    let user_table = document.getElementById('users')

    // Make the row for each user
    for (let i = 0; i < data.length ; i++){
        let row = document.createElement('tr')
        let name = document.createElement('td')
        let email = document.createElement('td')

        name.innerHTML = data[i].username
        email.innerHTML = data[i].email

        row.appendChild(name)
        row.appendChild(email)
        user_table.appendChild(row)
    }
}

get_users()

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    var form = new FormData(myForm);

    fetch('http://localhost:5000/users/create', { method: 'POST', body : form})
        .then( response => response.json())
        .then( data => {
            // Target the table
            let user_table = document.getElementById('users')

            // Make the row
            let row = document.createElement('tr')

            // Make the name table data and append it to the row
            let name = document.createElement('td')
            name.innerHTML = data.username
            row.appendChild(name)

            // Make the email table data and append it to the row
            let email = document.createElement('td')
            email.innerHTML = data.email
            row.appendChild(email)

            // Finally, append the whole row to the table
            user_table.appendChild(row)

            //Clear the form
            document.getElementById('username').value = ''
            document.getElementById('email').value = ''
        })
})


