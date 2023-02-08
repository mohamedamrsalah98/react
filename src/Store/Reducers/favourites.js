
const InitialValue ={
    Movies:[]
}

export default function AddtoFav(state = InitialValue, action){
    switch(action.type){
        case "ADD_TO_FAV": 
        return{
            Movies :[
                ...state.Movies,{
                    movie:action.payload,

                }
            ],


        }
        case "REMOVE_FROM_FAV":
            const item_index=action.payload;
            const newState={...state};
            newState.Movies.splice(item_index,1);
            return newState;
        default: 
            return state
    }
}