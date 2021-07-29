const initalState = {
    modalState : false
}

const modal = (state = initalState, action) => {
    switch(action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                modalState : true
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                modalState : false
            }
        default :
            return state
    }
}

export default modal