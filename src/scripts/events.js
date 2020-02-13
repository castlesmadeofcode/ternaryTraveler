import API from "./api.js"
import render from "./render.js";

const interestName = document.getElementById("interestName");
const interestDescription = document.getElementById("interestDescription");
const interestCost = document.getElementById("interestCost");
const interestReview = document.getElementById("interestReview")
const interestLocation = document.getElementById("interestLocation")

const nameField = document.getElementById("nameField");
const descriptionField = document.getElementById("descriptionField");
const locationField = document.getElementById("locationField");



const saveButton = document.getElementById("saveButton");
const interestsContainer = document.getElementById("interestsContainer");
const hiddenInterestId = document.querySelector("#interestId")



const showVisibility = () => {
    nameField.style.visibility='visible'
    descriptionField.style.visibility='visible'
    locationField.style.visibility='visible'
}

const clearForm = () => {
  
    hiddenInterestId.value = "";
    interestName.value = "";
    interestDescription.value = "";
    interestCost.value = "";
    interestReview.value = "";
    interestLocation.value = "";
  }


const updateInterestFields = interestId => {

    fetch(`http://localhost:5000/interests/${interestId}`)
        .then(response => response.json())
        .then(interest => {
            console.log(interest)
            hiddenInterestId.value = interest.id;
            interestCost.value = interest.cost;
            interestReview.value = interest.review;
            interestName.value = interest.name;
            interestDescription.value = interest.description;
            interestLocation.value = interest.placeId;
        

        });
}


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
            if (hiddenInterestId.value !== "") {
                newInterest.id = parseInt(hiddenInterestId.value);
            console.log(newInterest);


            API.updateInterestEntry(newInterest)
                .then(render.renderAllInterests)
                .then(clearForm)
                .then(showVisibility)

            }
            
            else if (interestName.value !== "" && interestDescription.value !== ""
            && interestCost.value !== "" && interestLocation.value !== "") {


            interestsContainer.textContent = ""

            API.addNewInterest(newInterest)
                .then(render.renderAllInterests)
                .then(clearForm);

        }
        else {
            window.alert("fill out all the things!")
        }
        })
    },
    addDeleteButtonListeners() {
        interestsContainer.addEventListener("click", (event) => {

                 
              if (event.target.id.startsWith("deleteInterest--")) {
                const deleteBtnId = event.target.id.split("--")[1];

                interestsContainer.textContent = ""
                if (confirm("Want to delete?") === true) {
                API.deleteInterest(deleteBtnId)
                    .then(render.renderAllInterests)
                    showVisibility();

                }
                else {
                    render.renderAllInterests();
                    showVisibility();
                }
            }
            else if (event.target.id.startsWith("editInterest--")) {
                nameField.style.visibility='hidden'
                descriptionField.style.visibility='hidden'
                locationField.style.visibility='hidden'

                const interestToEdit = event.target.id.split("--")[1];

                updateInterestFields(interestToEdit)
            }

        })

        }
    }


export default events