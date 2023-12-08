"use client";
import React, { useState } from "react";
import { Student } from "@prisma/client";

import style from "./style.module.css";

interface Props {
  students: Student[];
}
function OrderPicker({ students }: Props) {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);

  const selectRandomStudent = () => {
    const availableStudents = students.filter(
      (student) =>
        !selectedStudents.some((selected) => selected.id === student.id)
    );

    if (availableStudents.length === 0) {
      alert("모든 학생이 이미 목록에 있습니다.");
      return;
    }

    const randomStudent =
      availableStudents[Math.floor(Math.random() * availableStudents.length)];

    setSelectedStudents((prevSelectedStudents) => [
      ...prevSelectedStudents,
      randomStudent,
    ]);
  };

  return (
    <div className={style.order_picker}>
      <div>
        <button onClick={selectRandomStudent}>뽑기</button>
      </div>
      <ol className={style.selcted_list}>
        {selectedStudents.map((student) => (
          <li className={style.selcted_list_item} key={student.id}>
            {student.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default OrderPicker;
