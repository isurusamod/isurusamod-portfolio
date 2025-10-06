// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.getElementById("navLinks")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll("a")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })
}

// Project Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filterValue === "all") {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 10)
        } else {
          if (card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "scale(1)"
            }, 10)
          } else {
            card.style.opacity = "0"
            card.style.transform = "scale(0.8)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        }
      })
    })
  })
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector(".skill-progress")
      if (progressBar) {
        const width = progressBar.style.width
        progressBar.style.width = "0"
        setTimeout(() => {
          progressBar.style.width = width
        }, 100)
      }
    }
  })
}, observerOptions)

// Observe all skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  observer.observe(item)
})

// Add scroll effect to navbar
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    navbar.style.boxShadow = "none"
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)"
  }

  lastScroll = currentScroll
})
