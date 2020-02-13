

const htmlFactory =(interest) => {
    return `
    <section>
    <h3>${interest.name}</h3>
    <h3>${interest.description}</h3>
    <h3>${interest.cost}</h3>
    <h3>${interest.review}</h3>
    <h3>${interest.place.name}</h3>

    <button class="deleteBtn" id="deleteInterest--${interest.id}">Delete</button>
    <button id="editInterest--${interest.id}"> Edit </button>

    </section>
    `
}


export default htmlFactory