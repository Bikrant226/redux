const redux=require('redux');

const BUY_CAKE='buy_cake';
const BUY_COOKIE='buy-cookie';


//STATE OF OUR APP
// const initialState={
//     numCake:10,
//     numCookie:25
// }

const initialCakeState={
    numCake:10    
}
const initialCookieState={
    numCookie:25
}


//ACTION
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyCookie(){
    return{
        type:BUY_COOKIE,
        info:'Second redux action'
    }
}


//REDUCER
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return{
//                 ...state,
//                 numCake:state.numCake-1
//             }
//         case BUY_COOKIE:
//             return{
//                 ...state,
//                 numCookie:state.numCookie-1
//             }
//         default:
//             return state
//     }
// }

//Reducer for cake
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numCake:state.numCake-1
            }
        default:
            return state
    }
}


//Reducer for cookie
const cookieReducer=(state=initialCookieState,action)=>{
    switch(action.type){
        case BUY_COOKIE:
            return{
                ...state,
                numCookie:state.numCookie-1
            }
        default:
            return state
    }
}



//STORE

// const store=redux.createStore(reducer);
const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    cookie:cookieReducer
})
const store=redux.createStore(rootReducer)
console.log('Initial State:',store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCookie())
store.dispatch(buyCookie())
store.dispatch(buyCookie())


unsubscribe();