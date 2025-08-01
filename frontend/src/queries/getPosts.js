import { testApi } from '../api';

export const getPosts = async () => {
    const response = await testApi.get('/posts');
    return response.data;
};
