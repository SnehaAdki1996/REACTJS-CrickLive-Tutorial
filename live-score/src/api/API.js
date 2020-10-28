const API_KEY = "tiwswTrwz7Q3VkewJdjmcI7IEAQ2"



//Get Upcoming matches
export const getMatches = () => {
    const url =`https://cricapi.com/api/matches?apikey=${API_KEY}`

    return fetch(url).then(
        response => response.json()
    ).catch(err => {throw err;})
}

//Match Details
export const getMatchDetails = (id) =>{
    const url =`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url).then(
        response => response.json()
    ).catch(err => {throw err;})
}