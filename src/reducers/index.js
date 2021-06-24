export default (state, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SET_TECHNOLOGY':
            return {
                ...state,
                tech: action.payload.tech
            }
        default:
            return state;
    }
}