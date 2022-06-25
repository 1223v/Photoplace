import {
    AI_USER
    
} from '../_actions/types';
 

export default function(state={},action){
    switch(action.type){
        
        case AI_USER:
            return { ...state, aiSuccess: action.payload }
       
        
        default:
            return state;
    }
}