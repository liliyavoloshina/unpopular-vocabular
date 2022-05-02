import nodemailer from 'nodemailer'
import htmlToText from 'html-to-text'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const { convert } = htmlToText

const TEMPLATE_NAME = {
  EMAIL_CONFIRMATION: 'email-confirmation',
  FORGOT_PASSWORD: 'forgot-password',
}

export default class Email {
  constructor(user, link) {
    this.to = user.email
    this.firstName = user.name.split(' ')[0]
    this.url = link
    this.from = 'Unpopular Vocabular <unpopularvocabular@gmail.com>'
  }

  createTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      })
    }

    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USERNAME,
        pass: process.env.ETHEREAL_PASSWORD,
      },
    })
  }

  async send(templateName, subject) {
    const html = await ejs.renderFile(`${__dirname}/../templates/${templateName}.ejs`, { email: this.to, url: this.url, firstName: this.firstName })

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html,
      text: convert(html),
    }

    await this.createTransport().sendMail(mailOptions)
  }

  async sendConfirmation() {
    await this.send(TEMPLATE_NAME.EMAIL_CONFIRMATION, 'Email address confirmation')
  }

  async sendForgotPassword() {
    await this.send(TEMPLATE_NAME.FORGOT_PASSWORD, 'Password resetting')
  }
}
