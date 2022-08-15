import {
    AI_USER
} from './types';




export function aiUser(dataToSubmit){
    

    return {
        type: AI_USER,
        payload: dataToSubmit
    }
}






