import axios from 'axios';

const postsAPI = axios.create({
    baseURL: 'https://www.euro2day.gr/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export const fetchPosts = async () => {
    const response = await postsAPI.get('/rss.ashx?catid=121');
    return response.data;
}
