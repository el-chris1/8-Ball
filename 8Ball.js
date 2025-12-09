function shakeMagic8Ball () {
  const question = prompt('Ask the Magic 8-Ball a question:')
  if (question === null) {
    // If the user clicks Cancel
    document.getElementById('response-text').innerText =
      'Please ask a question!'
    document.getElementById('response-text').classList = 'lead text-warning'
    document.getElementById('response-image').src = 'default-image.jpg'
    return
  }

  if (!question.trim()) {
    // If the user enters an empty string
    alert('Please enter a valid question!')
    return
  }

  const randomNumber = Math.floor(Math.random() * 8)
  let answer, image, color

  switch (randomNumber) {
    case 0:
      answer = 'Yes'
      image = 'happy-hamster.jpg'
      color = 'text-success'
      break;
    case 1:
      answer = 'No'
      image = 'images2.jpg'
      color = 'text-danger'
      break
    case 2:
      answer = 'Maybe'
      image = 'hamster-maybe.jpg'
      color = 'text-warning'
      break
    case 3:
      answer = 'Ask again later'
      image = 'askagain.jpg'
      color = 'text-secondary'
      break
    case 4:
      answer = 'Cannot predict now'
      image = 'realham.jpg'
      color = 'text-muted'
      break
    case 5:
      answer = "Don't count on it"
      image = 'images (1).jpg'
      color = 'text-danger'
      break
    case 6:
      answer = 'Most likely'
      image = 'smart.jpg'
      color = 'text-success'
      break
    case 7:
      answer = 'Outlook not so good'
      image = 'HAMSTER.jpg'
      color = 'text-danger'
      break
    default:
      break;
  }

  const responseText = document.getElementById('response-text')
  responseText.innerText = `${answer}`
  responseText.classList = `display-4 ${color}`
  document.getElementById('response-img').src = `${image}`
}