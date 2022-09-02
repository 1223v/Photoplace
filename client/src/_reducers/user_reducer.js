import {
    AI_USER,
	NAV_USER
} from '../_actions/types';
 

export default function sagas(state={},action){
    switch(action.type){
        
        case AI_USER:
            return { ...state,aiSuccess: action.payload }
			
		case NAV_USER:
            return { ...state,navSuccess: action.payload }
       
		
        
        default:
            return state;
    }
}