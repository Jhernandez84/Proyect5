export const types = {
    setProductState: 'SETPRODUCT'
}

const ProductReducer = (state, action={}) =>{
    switch(action.type){
        case types.setProductState:
            return {
                ...state,
                Product: action.payload,
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

export default ProductReducer;