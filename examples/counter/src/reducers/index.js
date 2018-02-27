// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return state + 3;
        case 'DECREMENT':
          return state - 3;
        default:
          return state;
    }
}
