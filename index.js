const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUYCAKE = 'BUYCAKE'
function buyCake()
    {
        return {
    type: BUYCAKE,
    info: 'First Cake Action'
    }
}
const BUYICECREAM = 'BUYICECREAM'
function buyIceCream()
    {
        return {
    type: BUYICECREAM,
    info: 'First Icecream Action'
    }
}
const initialIcecreamState = {
    numOfIceCream: 15,
}
const initialCakeState = {
    numOfCake: 10,
}
const Cakereducer =(state=initialCakeState, action)=>{
    switch(action.type) {
        case BUYCAKE: return {
            ...state,               
            numOfCake: state.numOfCake -1};
        default: return state;
    }
}
const IceCreamreducer =(state=initialIcecreamState, action)=>{
    switch(action.type) {
        case BUYICECREAM: return {
            ...state,               
            numOfIceCream: state.numOfIceCream -1};
        default: return state;
    }
}
const rootReducer = redux.combineReducers({
    cake: Cakereducer,
    icecream: IceCreamreducer
})
// const reducer =(state=initialState, action)=>{
//     switch(action.type) {
//         case BUYCAKE: return {
//             ...state,               // create a copy of current state and update only the properties needed and other prop. remains same
//             numOfCake: numOfCake -1};
//         default: return state;
//     }
// }
const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
