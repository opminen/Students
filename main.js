const students_body = document.querySelector(".students>tbody")
const wraper_modal = document.querySelector(".wraper_modal")

let countID = 0

const add_student = (name, secondname, age, cours) => {
  students_body.innerHTML += `
  <tr class="student">
      <th class="student-category">${countID++}</th>
      <th class="student-category">${name}</th>
      <th class="student-category">${secondname}</th>
      <th class="student-category">${age}</th>
      <th class="student-category">${cours}</th>
      <th class="student-category">
          <button id="edit" type="button" class="student-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24"/>
                  <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
          <button id="delete" type="button" class="student-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24"/>
                  <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
                  <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
              </svg>
          </button>
      </th>
  </tr>
  `
}

document.querySelector(".add_student").addEventListener("click", e => {
  e.preventDefault()
  wraper_modal.style.display = "flex"
})

document.querySelector(".modal-form").addEventListener("submit", e => {
  e.preventDefault()
  add_student(e.target.name.value, e.target.secondname.value, e.target.age.value, e.target.cours.value)
  wraper_modal.style.display = "none"
})

students_body.addEventListener("click", e => {
  if (e.target.parentElement.id === "delete") {
    e.target.parentElement.parentElement.parentElement.remove()
  }
  if (e.target.parentElement.id === "edit") {
    let Parent = e.target.parentElement.parentElement.parentElement.querySelectorAll(".student-category")
    for (let i = 1; i < 5; i++) {
      Parent[i].innerHTML = `<input type="text" class="modal-form-inp" value="${Parent[i].innerHTML}">`
    }
    e.target.parentElement.outerHTML = `
    <button id="done" type="button" class="student-btn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24"/>
            <path d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    `
  }
  if (e.target.parentElement.id === "done") {
    let Parent = e.target.parentElement.parentElement.parentElement.querySelectorAll(".student-category")
    for (let i = 1; i < 5; i++) {
      Parent[i].innerHTML = Parent[i].firstElementChild.value
    }
    e.target.parentElement.outerHTML = `
    <button id="edit" type="button" class="student-btn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24"/>
            <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    `
  }
})

document.querySelector("input[id=file]").addEventListener("change", e => {
  e.target.files[0].text().then(el => {
    loadFile(JSON.parse(el))
  })
})

function loadFile(json) {
  json.forEach(element => {
    students_body.innerHTML += `
  <tr class="student">
      <th class="student-category">${element.id}</th>
      <th class="student-category">${element.name}</th>
      <th class="student-category">${element.secondname}</th>
      <th class="student-category">${element.age}</th>
      <th class="student-category">${element.cours}</th>
      <th class="student-category">
          <button id="edit" type="button" class="student-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24"/>
                  <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
          <button id="delete" type="button" class="student-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24"/>
                  <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
                  <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
              </svg>
          </button>
      </th>
  </tr>
  `
  });
}

document.querySelector(".download").addEventListener("click", () => {
  let list = []
  students_body.querySelectorAll(".student").forEach(el => {
    list.push(
      {
        id: Number(el.children[0].textContent),
        name: el.children[1].textContent,
        secondname: el.children[2].textContent,
        age: Number(el.children[3].textContent),
        cours: el.children[4].textContent,
      }
    )
  })

  let a = document.createElement("a")
  a.setAttribute("download", "students.json")
  a.href = URL.createObjectURL(new Blob([JSON.stringify(list)], {type: "application/json"}))
  a.click()
})
