
const moodButtons = document.querySelectorAll('button')
const body = document.body

const moods = {
  chill: 'linear-gradient(to right, #4facfe, #00f2fe)',
  hype: 'linear-gradient(to right, #ff416c, #ff4b2b)',
  sad: 'linear-gradient(to right, #373B44, #4286f4)'
}

moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedMood = btn.dataset.mood
    body.style.background = moods[selectedMood]
  })
})
