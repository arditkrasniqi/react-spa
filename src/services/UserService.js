import axios from 'axios';
import config from '../config';

export default class UserService {

    static getUsers(){
        // return response as a promise so we have access to method '.then' in our components
        return axios.get(`${config.BASE_URL}/users`);
    }

    static getUser(id){

    }
}