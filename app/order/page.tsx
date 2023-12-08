import Link from "next/link";
import React from "react";

import OrderPicker from "@/components/OrderPicker";
import { getAttendingStudents } from "@/services/student";

async function OrderPage() {
  const students = await getAttendingStudents();
  return (
    <main>
      <Link href={"/"}>뒤로가기</Link>
      <h1>순서 뽑기</h1>
      <h2>차례차례 질서를 지켜요😍</h2>
      <OrderPicker students={students} />
    </main>
  );
}

export default OrderPage;
