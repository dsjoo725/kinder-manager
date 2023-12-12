import StudentList from "@/components/StudentList";
import { getStudents } from "@/services/student";
import Link from "next/link";
import React from "react";

async function StudentPage() {
  const students = await getStudents();

  return (
    <main>
      <Link href={"/"}>뒤로가기</Link>
      <h1>학생 관리</h1>
      <StudentList students={students} />
    </main>
  );
}

export default StudentPage;
