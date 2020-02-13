import API from "./api.js"
import htmlFactory from "./htmlFactory.js"

const interestsContainer= document.getElementById("interestsContainer");

const render = {

    renderAllInterests() {

    API.getAllInterests()
        .then(interestsContainer.innerHTML = "")
        .then(interests => interests.forEach(interest => {
            interestsContainer.innerHTML += htmlFactory(interest)
        }))
    }
}

export default render