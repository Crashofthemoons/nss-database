const addBtn = document.querySelector('#addBtn')
const staffArt = document.querySelector("#staff")
const staffFragment = document.createDocumentFragment()


const buildStaffArticle = () => {
    while (staffArticle.firstChild) {
        staffArticle.removeChild(staffArticle.firstChild)
    }

    for (let i = 0; i < NssDatabase.staff.length; i++) {
        const staffMember = NssDatabase.staff[i]
        const sectionElement = document.createElement('section')
        sectionElement.textContent = `${staffMember.name}: ${staffMember.cohort}`
        staffFragment.appendChild(sectionElement)
    }
    staffArt.appendChild(staffFragment)
}
buildStaffArticle()

const getUserInput = () => {
    const inputName = document.querySelector("#inputName")
    const inputCohort = document.querySelector('#inputCohort')
    console.log("input fields", inputName, inputCohort)

    const newStaffMember = {
        name: inputName.value,
        cohort: inputCohort.value
    }

    NssDatabase.staff.push(newStaffMember)
    console.log(NssDatabase)
    saveDatabase(NssDatabase, "NssDb")

    buildStaffArticle()

    inputName.value = ""
    inputCohort.value = ""
}

addBtn.addEventListener("click", getUserInput)

let array = [1, 2, 3, 4, 5]

for (let item in array) {
    console.log(array[item])
}