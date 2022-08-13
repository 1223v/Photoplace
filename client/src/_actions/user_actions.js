import axios from 'axios';
import {
    AI_USER,
	AI_SELECT
} from './types';




export function aiUser(dataToSubmit){
    

    return {
        type: AI_USER,
        payload: dataToSubmit
    }
}






