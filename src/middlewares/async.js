// this middleware will help with async nature of our app

// written with some ES5 syntax
// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {
//       console.log(action);

//       next(action);
//     }
//   } 
// }


// ES6 syntax   example of reduxPromise middleware
export default function({ dispatch }) {
  return next => action => {
    // if the action does not have payload
    // or, the payload does not have a .then (promise) property
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // Make sure the action's promise resolves
    action.payload
      .then(function(res) {
        // ...action -- makes sure we are preserving the existing type of our action
        // payload: res -- replace our payload with our response
        
        // create a new action with the old type, but replace
        // the promise with the response data
        const newAction = { ...action, payload: res}
        // dispatch is a function and it makes sure our new action
        // gets passed through everything again
        // this is because we may need our action to pass through earlier middlewares
        dispatch(newAction);
      });
  };
}

// middleware will always have the same signature at the top,
// it will have a function that gets called with dispatch and return
// from that another function that gets called with next
// and return from that another function that gets called with action
// and inside that, we can place logic that we can run everytime 
// an actioncreator returns an action inside our app