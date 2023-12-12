import StudentList from "@/components/StudentList";
import Link from "next/link";
import React from "react";

function StudentPage() {
  return (
    <main>
      <Link href={"/"}>뒤로가기</Link>
      <h1>학생 관리</h1>
      <StudentList />
    </main>
  );
}

export default StudentPage;
