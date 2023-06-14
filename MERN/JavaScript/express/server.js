const express = require("express");
const app = express();
const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/users", (req, res) => {
  res.json(users)
  console.log("Got all the users")
})

app.get("/users/:id", (req, res) => {
  res.json(users[req.params.id])
  console.log("Got the user")
})

app.post('/users/add', (req, res) => {
  users.push(req.body)
  res.json({status:"ok"})
})

app.put('/users/:id', (req, res) => {
  users[req.params.id] = req.body
  res.json({status: 'okay'})
})

app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);
