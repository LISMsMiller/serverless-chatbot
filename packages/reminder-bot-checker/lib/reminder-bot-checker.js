const { findReminders } = require('./db')

exports.reminderBotChecker = async (event, context) => {
  console.log(`Input received:
    Event: ${JSON.stringify(event)}
    Context: ${JSON.stringify(context)}`)

  const schedulerBody = JSON.parse(Buffer.from(event.data, 'base64').toString())
  console.log('Scheduler body:', schedulerBody) // Empty object

  const reminders = await findReminders()
  console.log(`Found ${reminders.length} reminders to be sent.`)

  // TODO:
  // * For each found reminder, publish a message to reminder-bot-messages-out
}