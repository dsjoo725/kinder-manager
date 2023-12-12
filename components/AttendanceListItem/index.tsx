"use client";
import React, { useState } from "react";
import { Student } from "@prisma/client";
import { updateAttendance } from "@/services/student";

import style from "./style.module.css";

interface Props {
  student: Student;
}
function AttendanceListItem({ student }: Props) {
  const [studentView, setStudentView] = useState(student);
  const [pending, setPending] = useState(false);

  const toggleAttendance = async (student: Student) => {
    const toggledAtt = !student.att;
    try {
      setPending(true);
      const updateStudent = await updateAttendance(student.id, toggledAtt);
      setStudentView(updateStudent);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <li className={style.attendance_list_item}>
      {studentView.name}
      <span className={style.circle} data-att={studentView.att} />
      <button
        role="switch"
        aria-checked={studentView.att}
        disabled={pending}
        onClick={() => toggleAttendance(studentView)}
      >
        {studentView.att ? "결석" : "출석"}
      </button>
    </li>
  );
}

export default AttendanceListItem;
