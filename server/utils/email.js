import nodemailer from 'nodemailer'

const generateBody = (email, url) => `<div bgcolor="#f5f5f5" style="border:0;margin:0;padding:0;min-width:100%;width:100%">
  <table bgcolor="#f5f5f5" border="0" cellpadding="0" cellspacing="0" width="100%"
    style="border:0;margin:0;padding:0">
    <tbody>
      <tr>
        <td style="border:0;margin:0;padding:0">


          <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="600"
            style="border-bottom-left-radius:5px;border-bottom-right-radius:5px;margin:0 auto;min-width:600px">
            <tbody>
              <tr>
                <td style="border:0;margin:0;padding:0">


                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td align="center" height="0"
                          style="border:0;margin:0;padding:0;color:#ffffff;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">
                          <span class="m_3887354977480419350st-Delink m_3887354977480419350st-Delink--preheader"
                            style="color:#ffffff;text-decoration:none">


                            We received a request to reset the password for the Unpopular Vocabular account associated with <a
                              href="${email}" target="_blank">${email}</a>.



                            ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;


                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style="border:0;margin:0;padding:0;color:#525f7f!important;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">


                          Hello!


                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="12" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style="border:0;margin:0;padding:0;color:#525f7f!important;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">


                          We received a request to reset the password for the Stripe account associated with <a
                            href="mailto:${email}" target="_blank">${email}</a>.


                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="12" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style="border:0;margin:0;padding:0;color:#525f7f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">


                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td align="center" height="38" valign="middle"
                                  style="border:0;margin:0;padding:0;background-color:#00d1b2;border-radius:5px;text-align:center">
                                  <a style="border:0;margin:0;padding:0;color:#ffffff;display:block;height:38px;text-align:center;text-decoration:none"
                                    href="${url}"
                                    target="_blank">
                                    <span
                                      style="border:0;margin:0;padding:0;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;font-weight:bold;height:38px;line-height:38px;text-decoration:none;vertical-align:middle;white-space:nowrap;width:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset<span
                                        style="border:0;margin:0;padding:0;color:#00d1b2;font-size:12px;text-decoration:none">‑</span>your<span
                                        style="border:0;margin:0;padding:0;color:#00d1b2;font-size:12px;text-decoration:none">‑</span>password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>


                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="12" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style="border:0;margin:0;padding:0;color:#525f7f!important;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
                          If you didn’t request to reset your password, you can safely ignore this email. No changes
                          were made to your account yet.
                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="12" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="12" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="min-width:600px">
                    <tbody>
                      <tr>
                        <td colspan="3" height="20"
                          style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px"
                          width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td bgcolor="#e6ebf1" colspan="2" height="1"
                          style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                          <div>&nbsp;</div>
                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px"
                          width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="31" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style="border:0;margin:0;padding:0;color:#8898aa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:12px;line-height:16px">
                          <span class="m_3887354977480419350st-Delink m_3887354977480419350st-Delink--footer"
                            style="border:0;margin:0;padding:0;color:#8898aa;text-decoration:none">
                            Unpopular Vocabular
                          </span>
                        </td>
                        <td style="border:0;margin:0;padding:0;font-size:1px;line-height:1px" width="64">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" height="64" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>`

// eslint-disable-next-line import/prefer-default-export
export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'catherine.greenholt84@ethereal.email',
      pass: 'AC1un6hjGZEK8MJtRU',
    },
  })

  const mailOptions = {
    from: 'Liliya Voloshina <liliya@gmail.com>',
    to: options.email,
    subject: options.subject,
    html: generateBody(options.email, options.resetUrl),
  }

  await transporter.sendMail(mailOptions)
}
