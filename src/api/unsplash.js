import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NZj3rhJyy-j_mb2HAir3tLFuCwFuDNQlj7NFJF6XTnk'
    }
})