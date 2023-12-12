import React from "react";

import StudentListItem from "../StudentListItem";
import { getStudents } from "@/services/student";

async function StudentList() {
  const students = await getStudents();
  return (
    <ul>
      {students.map((student) => (
        <StudentListItem key={student.id} student={student} />
      ))}
    </ul>
  );
}

export default StudentList;
