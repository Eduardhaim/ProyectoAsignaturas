
const express = require('express')
const Asignatura = require('./Modelos/Asignatura')
const Alumno = require('./Modelos/Alumno')

const app = express()

app.use(express.json())

// punto de entrada
// metodo (get, post, put, delete)
// request , response
// codigos respuesta 200,400,500

app.post('/asignatura', async (req, resp) => {
    try {

        // insert into asignatura values(?,?,?)

        const asignatura = await Asignatura.create(req.body)
        resp.status(200).json(asignatura)

    } catch (error) {
        resp.status(500).json(error)
    }
})



app.get('/alumno', async (req, resp) => {
    try {
        const alumnos = await Alumno.findAll()
        resp.status(200).json(alumnos)
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.listen(5000, () => {
    console.log('Aplicacion ejecutando')
})