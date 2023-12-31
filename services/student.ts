"use server";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export const getStudents = async () => {
  try {
    const students = await prisma.student.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return students;
  } catch (error) {
    throw error;
  }
};

export const getAttendingStudents = async () => {
  try {
    const students = await prisma.student.findMany({
      where: {
        att: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return students;
  } catch (error) {
    throw error;
  }
};

export const updateAttendance = async (
  studentId: string,
  attendanceStatus: boolean
) => {
  try {
    const updatedStudent = await prisma.student.update({
      where: { id: studentId },
      data: {
        att: attendanceStatus,
      },
    });
    revalidatePath("/att");
    return updatedStudent;
  } catch (error) {
    throw error;
  }
};
