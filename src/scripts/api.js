const baseUrl = "http://localhost:5000";

const API = {
    getAllInterests(){
        return fetch(`${baseUrl}/interests?_expand=place`)
        .then(response => response.json());
    }
}

export default API