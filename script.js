// query selectors
const signUpCard = document.querySelector(".sign-up")
const form = document.querySelector("form")
const input = form.querySelector("input")
const errorMessage = form.querySelector("#email-error")
const submitButton = form.querySelector("button")

const successCard = document.querySelector(".success")
const successButton = document.querySelector(".success button")
const successHeading = successCard.querySelector("h1")
const submittedEmail = successCard.querySelector("#submitted-email")

// handlers
function handleSubmit(e) {
  e.preventDefault()

  const email = input.value.trim()
  const emailRegex = /^\S+@\S+\.\S+$/

  if (!emailRegex.test(email)) {
    errorMessage.hidden = false
    input.setAttribute("aria-invalid", "true")
    input.setAttribute("aria-describedby", errorMessage.id)
    input.classList.add("error")
  } else {
    errorMessage.hidden = true
    input.setAttribute("aria-invalid", "false")
    input.removeAttribute("aria-describedby")
    input.classList.remove("error")

    submittedEmail.textContent = email

    signUpCard.classList.add("confirmed")
    successCard.classList.add("confirmed")

    successHeading.focus()
  }
}

// event listeners

// clear error message when the user starts typing
form.addEventListener("input", () => {
  errorMessage.hidden = true
  input.setAttribute("aria-invalid", "false")
  input.removeAttribute("aria-describedby")
  input.classList.remove("error")
})

// dismiss only when the dismiss button is clicked
successButton.addEventListener("click", () => {
  successCard.classList.remove("confirmed")
  signUpCard.classList.remove("confirmed")
  input.focus()
})

form.addEventListener("submit", handleSubmit)