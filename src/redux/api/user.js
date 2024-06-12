import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

export const createUserApi = async () => {
    try {
        const res = await axios.post(`${BASE_URL}auth/register`);
        return res
    } catch (error) {
        throw error
    }
}

