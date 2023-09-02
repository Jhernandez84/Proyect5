export const types = {
    setUserState: 'SETUSER'

}

const userReducer = (state, action={}) =>{
    switch(action.type){
        case types.setUserState:
            return {
                ...state,
                user: action.payload,
                error: null,  
            }

        case types.setError:
            return {
                ...state, 
                error: action.payload,  
            }

        default: 
            return state;

    }
}

export default userReducer;