import axios from 'axios';
import {
    AI_USER,
	AI_SELECT
} from './types';
import { USER_SERVER } from '../components/Config.js';



export function aiUser(dataToSubmit){
    

    return {
        type: AI_USER,
        payload: dataToSubmit
    }
}






