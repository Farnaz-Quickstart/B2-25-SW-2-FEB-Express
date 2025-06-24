import React, {useEffect, useState} from 'react'
import { useLayoutEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

export default function ListStudents() {
  const [students, setStudents] = useState ([
    {student_name: "Joshua", student_email: "aa@gmail.com"},
    {student_name: "Ericaa", student_email: "ee@gmail.com"}
  ])

  useEffect(() => {
    const fetchStudents = async () => {
      console.log ("Use Effect ....")
      const response = await axios.get ("http://localhost:4000/students/")
      console.log (response)
      console.log (response.data)
      setStudents (response.data)
    }
    fetchStudents();
  }, [])
  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Student Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map ((student,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{student.student_name}</td>
            <td>{student.student_email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
