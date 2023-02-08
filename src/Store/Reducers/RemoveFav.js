
const InitialValue ={
    Movies:[]
}

export default function removereducer(state = InitialValue, action){
    switch(action.type){
        case "REMOVE_FROM_FAV":
            const item_index=action.payload;
            const newState={...state};
            newState.Movies.splice(item_index,1);
            return newState;
        default: 
            return state
    }
}