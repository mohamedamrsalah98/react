export const changeFavourite= (payload) => {
    return {
        type: "CHANGEFAVOURITE",
        payload
    }
}

export const addingtofavourite= (payload) => {
    return {
        type: "ADD_TO_FAV",
        payload
    }
}

export const removingfromFav= (payload) => {
    return {
        type: "REMOVE_FROM_FAV",
        payload
    }
}


