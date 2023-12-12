"use client";
import React, { useEffect, useState } from "react";
import { Student } from "@prisma/client";

import style from "./style.module.css";

interface Props {
  student: Student;
}
function StudentListItem({ student }: Props) {
  const [studentView, setStudentView] = useState(student);
  const [editMode, setEditMode] = useState(false);

  return (
    <li className={style.student_list_item}>
      {studentView.name}
      <div className={style.button_box}>
        <button onClick={() => setEditMode(true)}>수정</button>
        <button>삭제</button>
      </div>
    </li>
  );
}

export default StudentListItem;
