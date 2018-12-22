const chrono = require('chrono-node')

module.exports = (chatEventBody) => {
  const userInput = chatEventBody.message.text
  console.log(`Processing event type MESSAGE for message text: ${userInput}`)

  const reminderDate = chrono.parseDate(userInput);
  console.log(`Found date: ${reminderDate}`)
}