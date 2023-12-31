
CREATE TABLE students (
(# id serial primary key,
(# firstName text,
(# lastName text,
(# teacherID integer);

insert into students (firstName, lastName, teacherID)
values
('Miguel', 'Garcia', 1),
('Xochil', 'Garcia', 1),
('Tamara', 'Park', 3),
('Andrew', 'Webb', 2);

UPDATE students SET teacherID = 2 where id = 4;

CREATE TABLE teachers (
id serial primary key,
firstName text,
lastName text);

insert into teachers (firstName, lastName)
values
('Erin', 'Wong' ),
('Roger', 'Munoz'),
('Vidya', 'Singh'),
('Ivan', 'Etkin' );

CREATE TABLE rooms (
id serial primary key,
capacity integer,
teacherID integer);

insert into rooms (capacity, teacherID)
values
(20, 1 ),
(15, 2),
(22, 3),
(18, 4 );

CREATE TABLE guardians (
id serial primary key,
firstName text,
lastName text,
student_ID integer);

insert into guardians (firstName, lastName, student_ID)
values
('Yolanda', 'Garcia', 1),
('Bernardo', 'Garcia', 2),
('Yaeji', 'Park', 3),
('Hortense', 'Webb', 4);

SELECT students.id, students.firstName, students.lastName, students.teacherID
FROM students
INNER JOIN teachers
ON students.teacherID = teachers.id 
WHERE teachers.id = 1;

SELECT students.id, students.firstName, students.lastName, students.teacherID
FROM students
INNER JOIN teachers ON students.teacherID = teachers.id 
INNER JOIN rooms ON rooms.teacherID = teachers.id
WHERE rooms.id = 3; 

SELECT guardians.id, guardians.firstName, guardians.lastName, students.id, students.firstName, students.lastName, rooms.id, teachers.firstName, teachers.lastName
FROM guardians
INNER JOIN students ON students.id = guardians.student_id 
INNER JOIN teachers ON students.teacherID = teachers.id
INNER JOIN rooms ON rooms.teacherID = teachers.id
WHERE rooms.id = 2; 