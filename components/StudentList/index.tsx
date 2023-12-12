import React from "react";
import { Student } from "@prisma/client";

import style from "./style.module.css";
import StudentListItem from "../StudentListItem";

interface Props {
  students: Student[];
}
function StudentList({ students }: Props) {
  return (
    <ul>
      {students.map((student) => (
        <StudentListItem key={student.id} student={student} />
      ))}
    </ul>
  );
}

export default StudentList;
