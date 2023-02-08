
const InitialValue ={
    favorite: "fa-regular fa-star fs-1 me-2 text-danger"
}

export default function FavoriteReducer(state = InitialValue, action){
    switch(action.type){
        case "CHANGEFAVOURITE": 
            return {
                ...state,
                favorite: action.payload
            }
        
        default: 
            return state
    }
}