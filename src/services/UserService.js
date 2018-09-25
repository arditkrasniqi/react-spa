import axios from 'axios';
import config from '../config';

export default class UserService {

    static getUsers(index){
        // return response as a promise so we have access to method '.then' in our components
        return axios.get(`${config.BASE_URL}/users?since=${index}`);
    }

    static getUser(username){
        return axios.get(`${config.BASE_URL}/users/${username}`);
    }
}