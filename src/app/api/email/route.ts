import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: true,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.AUTH_USER,
      subject: `New contact from ${name}`,
      text: message
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json({ status: 500, error: error })
  }
}
