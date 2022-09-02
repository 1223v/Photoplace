import {
    AI_USER,
	NAV_USER
} from './types';




export function aiUser(dataToSubmit){
    

    return {
        type: AI_USER,
        payload: dataToSubmit
    }
	
}

export function navUser(dataToSubmit){
    

    return {
        type: NAV_USER,
        payload: dataToSubmit
    }
}






