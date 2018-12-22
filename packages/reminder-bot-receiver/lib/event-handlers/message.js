const chrono = require('chrono-node')

const determineReminderSubject = (userInput) => {
  // Object reference at https://github.com/wanasit/chrono#usage
  const parsedChrono = chrono.parse(userInput);
  const dateTimeText = parsedChrono[0].text;

  // Remove the date / time part of the user's message
  let subject = userInput.replace(new RegExp(dateTimeText, 'g'), '');

  // Remove "@Reminder Bot" if the bot is used in a room
  subject = subject.replace(new RegExp('@Reminder Bot', 'g'), '');

  return subject.trim();
}

module.exports = (chatEventBody) => {
  const userInput = chatEventBody.message.text
  console.log(`Processing event type MESSAGE for message text: ${userInput}`)

  const reminderDate = chrono.parseDate(userInput);
  console.log(`Found date: ${reminderDate}`)

  const reminderSubject = determineReminderSubject(userInput)
  console.log(`Found subject: ${reminderSubject}`)
}