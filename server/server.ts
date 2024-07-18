import express from 'express'
import * as Path from 'node:path'
import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import fruitRoutes from './routes/fruits.ts'

// Load environment variables from .env file
dotenv.config()

const server = express()

server.use(express.json())
server.use(bodyParser.json())
server.use(cors())

server.use('/api/v1/fruits', fruitRoutes)

// Contact form route
server.post('/api/v1/contact', (req, res) => {
  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions: SendMailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  }

  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: SentMessageInfo) => {
      if (error) {
        console.error('Error sending email:', error)
        res.status(500).send('Error sending email')
      } else {
        console.log('Email sent:', info.response)
        res.status(200).send('Email sent successfully')
      }
    },
  )
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
