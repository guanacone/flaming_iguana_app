const mailgun = require('mailgun-js');
const mgApiKey = process.env.MAILGUN_API_KEY;
const mgDomain = process.env.MAILGUN_DOMAIN;
// const mailgun = require('mailgun-js')({ apiKey: mgApiKey, domain: mgDomain });
// const mg = mailgun.client({ username: 'api', key: mgApiKey });
const mg = mailgun({ apiKey: mgApiKey, domain: mgDomain });

exports.sendEmail = async (data) => {
  try {
    const body = await mg.messages().send(data);
    console.log(body);
  } catch (error) {
    console.log(error);
  }
};