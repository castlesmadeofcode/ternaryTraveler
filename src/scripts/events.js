import API from "./api.js"
import render from "./render.js";

const interestName = document.getElementById("interestName");
const interestDescription = document.getElementById("interestDescription");
const interestCost = document.getElementById("interestCost");
const interestReview = document.getElementById("interestReview")
const saveButton = document.getElementById("saveButton");
const interestsContainer = document.getElementById("interestsContainer");



const events = {
    addSaveButtonListener() {
        saveButton.addEventListener("click", (event) => {
            console.log(event);
            const newInterest = {
                "name": interestName.value,
                "description": interestDescription.value,
                "cost": interestCost.value,
                "review": interestReview.value,
                "placeId": interestLocation.value
            }
            console.log(newInterest);

            API.addNewInterest(newInterest)
                .then(render.renderAllInterests)
        })
    },
    addDeleteButtonListeners() {
        interestsContainer.addEventListener("click", (event) => {

            if (event.target.id.startsWith("delete--")) {
                const deleteBtnId = event.target.id.split("--")[1];

                interestsContainer.textContent = ""

                API.deleteInterest(deleteBtnId)
                    .then(render.renderAllInterests)
            }

        })
    }
}


export default events