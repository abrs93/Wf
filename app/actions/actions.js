function productsFetchSuccess(resp) {
   return {
        type : 'PRODUCTS_SUCCESS',
         resp
    }
}

async function fetchProducts() {
    const productsList = await [
    {
        id:1,
        title:'Wakefit Orthopedic Memory Foam Mattress',
        price:'Rs 9999',
        rating:'4.4',
        images:[
            {url : 'https://www.wakefit.co/img/orthopaedic-memory-foam-mattress/orthopaedic-memory-foam-mattress-2.jpg', id : 1},
            {url : 'https://www.wakefit.co/img/orthopaedic-memory-foam-mattress/mattress-package.jpg', id : 2},
            {url : 'https://www.wakefit.co/img/orthopaedic-memory-foam-mattress/orthopaedic-memory-foam-mattress-1.jpg', id : 3},
            {url : 'https://www.wakefit.co/img/size_guide_all_latest.jpg', id : 4}
        ]
    }];
    return productsList; 
}


export function getProductsList() {
    console.log('here')
    return dispatch => {
        fetchProducts().then(resp => {
            dispatch(productsFetchSuccess(resp));
        });
    }
}
