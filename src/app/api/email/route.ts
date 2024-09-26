import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
      }
    })

    await new Promise<void>((resolve, reject) => {
      transporter.sendMail(
        {
          from: email,
          to: process.env.AUTH_USER,
          subject: `New contact from ${name}`,
          text: message
        },
        (err, info) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            console.log(info)
            resolve()
          }
        }
      )
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ status: 500, error: error }, { status: 500 })
  }
}
