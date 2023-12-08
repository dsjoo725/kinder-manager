import React from "react";

import { getStudents } from "@/services/student";
import StudentList from "@/components/StudentList";
import Link from "next/link";

export const revalidate = 0;

async function AttendancePage() {
  const students = await getStudents();
  return (
    <main>
      <Link href={"/"}>뒤로가기</Link>
      <h1>출석 관리</h1>
      <StudentList students={students} />
    </main>
  );
}

export default AttendancePage;
