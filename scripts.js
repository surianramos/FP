const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.list .item')
const dots = document.querySelectorAll('.indicators ul li')
const number = document.querySelector('.indicators .number')

let active = 0

function updateSlider() {
  items.forEach((item, index) => item.classList.toggle('active', index === active))
  dots.forEach((dot, index) => dot.classList.toggle('active', index === active))
  if (number) {
    number.textContent = String(active + 1).padStart(2, '0')
  }
}

nextButton.addEventListener('click', () => {
  active = active === items.length - 1 ? 0 : active + 1
  updateSlider()
})

prevButton.addEventListener('click', () => {
  active = active === 0 ? items.length - 1 : active - 1
  updateSlider()
})

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    active = index
    updateSlider()
  })
})

updateSlider()

