const initialState = {
    list : []
}

const products = (state = initialState, action) => {
    switch(action.type){
        case 'PRODUCTS_SUCCESS':
            console.log('reached state');
            return Object.assign({}, state , { list : action.resp });
        default:
            return state
    }
}

export default { products };