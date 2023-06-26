const pool= require("./db.js");
const express = require('express');

//mount to API
const app = express();
//app.use('/api', require('./api'))

app.listen(8080, ()=>{
    console.log("LIVE ON PORT 8080")
    
})



app.get("/class1", async (req, res) =>{
  const class1 = await pool.query(`SELECT students.id, students.firstName, students.lastName, students.teacherID
   FROM students
   INNER JOIN teachers
   ON students.teacherID = teachers.id 
   WHERE teachers.id = 1;`)
   res.json(class1)
})