import { ServerMiddleware } from '@nuxt/types'
import { env } from 'process'
import express from 'express'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const apiMiddleware = express()
apiMiddleware.use(express.json())

const envVars = {
  host: String(env.SMTP_HOST),
  port: parseInt(String(env.SMTP_PORT)),
  user: String(env.SMTP_USERNAME),
  pass: String(env.SMTP_PASSWORD),
  allowSelfSigned: Boolean(env.SMTP_ALLOW_SELF_SIGNED),
  from: String(env.SMTP_FROM),
  to: String(env.SMTP_TO),
}

let transporter = nodemailer.createTransport({
  host: envVars.host,
  port: envVars.port,
  secure: true,
  tls: {
    rejectUnauthorized: !envVars.allowSelfSigned,
  },
  auth: {
    user: envVars.user,
    pass: envVars.pass,
  },
})

interface becomeSpulmerRequest {
  firstName: string
  lastName: string
  email: string
  phone: string
}

apiMiddleware.all('/become-spulmer', (req, res) => {
  // Validate input
  console.log('BecomeSpulmer: Validating input ...')
  const r: becomeSpulmerRequest = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  }
  if (r.firstName == null || r.firstName.toString() == '') {
    res.status(400).send('Voornaam is verplicht')
  }
  if (r.lastName == null || r.lastName.toString() == '') {
    res.status(400).send('Achternaam is verplicht')
  }
  if (
    (r.email == null || r.email.toString() == '') &&
    (r.phone == null || r.phone.toString() == '')
  ) {
    res.status(400).send('Email of telefoonnummer is verplicht')
  }

  // Send email
  console.log('BecomeSpulmer: Sending email ...')
  let msg: Mail.Options = {
    from: envVars.from,
    to: envVars.to,
    subject: 'www.spellebel.be - Ik wil spulmer worden ...',
    text: buildEmail(r),
  }
  if (r.email != null && r.email.toString() != '') {
    msg.replyTo = r.email
  }
  transporter
    .sendMail(msg)
    .then(() => {
      // Request successful
      console.log('BecomeSpulmer: Email sent')
      res.send('Email sent')
    })
    .catch((e) => {
      // Request failed
      let logEnvVars = envVars
      logEnvVars.pass = '*'.repeat(envVars.pass.length)
      console.log('BecomeSpulmer: Sending email failed', e, logEnvVars, msg)
      res.status(500).send('Failed to send email')
    })
})

function buildEmail(r: becomeSpulmerRequest): string {
  return `
  Voornaam: ${r.firstName}
  Achternaam: ${r.lastName}
  Email: ${r.email}
  Telefoonnummer: ${r.phone}
  `
}

export default apiMiddleware as ServerMiddleware
