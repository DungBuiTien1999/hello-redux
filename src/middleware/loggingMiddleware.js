const loggingMiddleware = ({getState, dispatch}) => next => action => {
    console.log("%c getState: ", "background:purple;color:white", getState());
    next(action);
    // if(action.type !== 'LOGGER') {
    //     return;
    // }
    // console.log("%c Action: ", "background:yellow;color:black", action);
    console.log("%c getState: ", "background:blue;color:white", getState());
    // console.log("%c dispatch: ", "background:yellow;color:black", dispatch);
    // console.log("%c next: ", "background:blue;color:white", next);
    // dispatch({
    //     type: 'TEST_DISPATCH',
    //     payload: {}
    // })
}

export default loggingMiddleware;