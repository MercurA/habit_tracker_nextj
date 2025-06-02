import { PrismaClient, Prisma } from "../../../generated/prisma";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    console.log(1)
    const entries = await prisma.entry.findMany({
        include: {
            habit: true,
            mood: true
        },
        orderBy: { date: 'desc' }
    });
    return NextResponse.json(entries);
}

export async function POST(request: Request) {
    const body = await request.json();

    const { date, form, allDay } = body;
    const { mood, habit, text } = form
    // Find or create mood
    const moodRecord = await prisma.mood.upsert({
        where: { name: mood.name },
        update: { color: mood.color },
        create: { name: mood.name, color: mood.color }
    });

    // Find or create habit
    const habitRecord = await prisma.habit.upsert({
        where: { name: habit.name },
        update: { color: habit.color },
        create: { name: habit.name, color: habit.color }
    });

    const entry = await prisma.entry.create({
        data: {
            date: new Date(date),
            allDay,
            text,
            moodId: moodRecord.id,
            habitId: habitRecord.id
        },
        include: {
            mood: true,
            habit: true
        }
    });

    return NextResponse.json(entry);
}
