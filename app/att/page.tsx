import React from "react";

import { getStudents } from "@/services/student";
import AttendanceList from "@/components/AttendanceList";
import Link from "next/link";

async function AttendancePage() {
  const students = await getStudents();

  return (
    <main>
      <Link href={"/"}>뒤로가기</Link>
      <h1>출석 관리</h1>
      <AttendanceList students={students} />
    </main>
  );
}

export default AttendancePage;
