import axios from 'axios'; // Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node. js.

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
};