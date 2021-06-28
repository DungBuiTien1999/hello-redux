import { handleAction } from 'redux-actions';

export default handleAction(
  'SET_TECHNOLOGY',
  (state, action) => ({ ...state, tech: action.payload }),
  {}
);

// export default (state, action) => {
//     console.log(action.type);
//     switch (action.type) {
//         case 'SET_TECHNOLOGY':
//             return {
//                 ...state,
//                 tech: action.payload.tech
//             }
//         default:
//             return state;
//     }
// }
