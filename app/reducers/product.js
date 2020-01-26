const initialState = {
    list : [],
    checkoutList: [],
}

const products = (state = initialState, action) => {
    switch(action.type){
        case 'PRODUCTS_SUCCESS':
            return Object.assign({}, state , { list : action.resp });
        case 'PRODUCT_ADD':
            return Object.assign({}, state , { checkoutList : [action.resp]});
        default:
            return state
    }
}

export default { products };