const express = require('express')
const students = require('./students.json')

const app = express()

app.get('/students',(req,res)=>{

    const course = req.query.course

    if(course){
        const filteredStudents = students.filter((student)=>{
            return ( student.course.toLowerCase() === course.toLowerCase())
    })

        res.json(filteredStudents)

    }

    res.json(students)
})

app.listen(3000,()=>{
    console.log('server running')
})