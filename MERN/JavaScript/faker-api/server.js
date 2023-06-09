const express = require("express")
const app = express()
const port = 8000
const { faker } = require('@faker-js/faker')

const createUser = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    return {
        _id : faker.string.uuid(),
        firstName : firstName,
        lastName : lastName,
        email : faker.internet.email( { firstName, lastName } ),
        password : faker.internet.password(),
        phoneNumber : faker.phone.number()  
    }
}
const newFakeUser = createUser()

const createCompany = () => {
    return {
        _id : faker.string.uuid(),
        name : faker.company.name(),
        address : {
            street : faker.location.street(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country()
        }
    }
}
const newFakeCompany = createCompany()

const createUserandCompany = () => {
    return {
        _id : faker.string.uuid(),
        userName : faker.person.fullName(),
        email : faker.internet.email(),
        password : faker.internet.password(),
        phoneNumber : faker.phone.number(),
        companyName : faker.company.name(),
        address : {
            street : faker.location.street(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country()
        }
    }
}
const newUserandCompany = createUserandCompany()

app.get('/api/users/new', (req, res) => {
    res.json( newFakeUser )
})

app.get('/api/companies/new', (req, res) => {
    res.json( newFakeCompany )
})

app.get('/api/user/company', (req, res) => {
    res.json( newUserandCompany )
})

app.listen( port, () => console.log(`Listening on port : ${port}`))