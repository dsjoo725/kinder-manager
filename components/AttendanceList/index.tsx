import React from "react";
import { Student } from "@prisma/client";

import AttendanceListItem from "@/components/AttendanceListItem";

interface Props {
  students: Student[];
}
function AttendanceList({ students }: Props) {
  return (
    <ul>
      {students.map((student) => (
        <AttendanceListItem key={student.id} student={student} />
      ))}
    </ul>
  );
}

export default AttendanceList;
