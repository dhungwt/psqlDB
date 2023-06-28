const pool= require("./db.js");
const express = require('express');

//mount to API
const app = express();
app.use(express.json())
//^can also install body parser to directly input in postman

app.listen(8080, ()=>{
    console.log("LIVE ON PORT 8080")
    
})


//inner join to students and teachers to display all students that have the teacher with an ID number of 1
app.get("/class1", async (req, res) =>{
  const class1 = await pool.query(`SELECT students.id, students.firstName, students.lastName, students.teacherID
   FROM students
   INNER JOIN teachers
   ON students.teacherID = teachers.id 
   WHERE teachers.id = 1;`)
   res.json(class1)
})

//inner join of students, teachers and rooms to show all students in room 3
app.get("/class2", async (req, res) =>{
  const class2 = await pool.query(`SELECT students.id, students.firstName, students.lastName, students.teacherID
  FROM students
  INNER JOIN teachers ON students.teacherID = teachers.id 
  INNER JOIN rooms ON rooms.teacherID = teachers.id
  WHERE rooms.id = 3; `)
   res.json(class2)
})

//inner join on students, guardians, rooms and teachers to display which parent has a child in room 2 and who their child's teacher is
app.get("/class3", async (req, res) =>{
  const class3 = await pool.query(`SELECT guardians.id, guardians.firstName, guardians.lastName, students.id, students.firstName, students.lastName, rooms.id, teachers.firstName, teachers.lastName
  FROM guardians
  INNER JOIN students ON students.id = guardians.student_id 
  INNER JOIN teachers ON students.teacherID = teachers.id
  INNER JOIN rooms ON rooms.teacherID = teachers.id
  WHERE rooms.id = 2;  `)
   res.json(class3)
})


//post to a new row teachers in Postman
app.post("/class4", async (req, res) =>{
  const text = "INSERT INTO teachers (firstName, lastName) VALUES ($1 , $2) returning *", // can also use VALUES($1 $2), [firstName, lastName]
  const {firstName, lastName} = req.body
  //console.log ("THIS IS BODY :" + firstName +" "+ lastName)
  const values = [firstName, lastName]
  //below to destructure data out of JSON and the variabloes below can replace values in VALUES
  try{ const class4 = await pool.query(text, values)
   console.log("RESULT OF CLASS 4: " + class4.rows)
    res.json({data:class4.rows[0]})
}catch(error){
  console.error(error)
}
})
