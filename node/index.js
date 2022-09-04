const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

// DB
const mysql = require('mysql')
const connection = mysql.createConnection(config)

    connection.query(`INSERT INTO people(name) values('Bruno')`)

    let p_names = '<p>'
    connection.query('SELECT name FROM people', (err, rows, fields) => {
        if (err) throw err
        // console.log('name 0: ', rows[0].name)
        rows.forEach(row => {
            p_names += `<p>- ${row.name}</p>`;
        });
    })
    p_names += '</p>'

connection.end()

// OUT
const p_FullCycle = '<p><p><h1>Full Cycle Rocks!</h1></p></p>'

app.get('/', (req,res) => {
    res.send(p_FullCycle + p_names)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})