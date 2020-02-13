

const htmlFactory =(interest) => {
    return `
    <section>
    <h3>Name: ${interest.name}</h3>
    <h3>Description: ${interest.description}</h3>
    <h3>Cost: ${interest.cost}</h3>
    <h3>Review: ${interest.review}</h3>
    <h3>Country: ${interest.place.name}</h3>

    <button class="deleteBtn" id="deleteInterest--${interest.id}">Delete</button>
    <button id="editInterest--${interest.id}"> Edit </button>

    </section>
    `
}


export default htmlFactory