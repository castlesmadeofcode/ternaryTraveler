const baseUrl = "http://localhost:5000";

const API = {
    getAllInterests(){
        return fetch(`${baseUrl}/interests?_expand=place`)
        .then(response => response.json());
    },
    addNewInterest(newInterest){
        return fetch(`${baseUrl}/interests?_expand=place`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        }).then(response => response.json())

    }
}

export default API