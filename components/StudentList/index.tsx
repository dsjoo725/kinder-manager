import React from "react";
import { Student } from "@prisma/client";

import StudentListItem from "@/components/StudentListItem";
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
