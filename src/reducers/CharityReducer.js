const charityInitialState = [];
const charityReducer = (state = charityInitialState, action) => {
    switch (action.type) {
        case 'SET_CHARITY': {
            return [...action.payload]
        } case 'ADD_CHARITY': {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}


export default charityReducer;