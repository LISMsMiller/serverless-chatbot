exports.reminderBotChecker = async (event, context) => {
  console.log(`Input received:
    Event: ${JSON.stringify(event)}
    Context: ${JSON.stringify(context)}`)

  const schedulerBody = JSON.parse(Buffer.from(event.data, 'base64').toString())
  console.log('Scheduler body:', schedulerBody) // Empty object

  // TODO:
  // * Check the database for reminders that are due
  // * For each found reminder, publish a message to reminder-bot-messages-out
}