import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const EMAILS_FILE = path.resolve(process.cwd(), 'emails.json');

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    let emails: string[] = [];
    try {
      const data = await fs.readFile(EMAILS_FILE, 'utf-8');
      emails = JSON.parse(data);
    } catch (e) {
      // File may not exist yet
      emails = [];
    }
    if (!emails.includes(email)) {
      emails.push(email);
      await fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 2));
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 