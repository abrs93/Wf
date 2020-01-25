import React from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image
  } from 'react-native';
import Carousel from '../carousel';
import * as  actions from '../../actions/actions';
  
const productStyle  = StyleSheet.create({
    body : {
        padding:10,
        flex:1,
    },
    carousel : {
         marginBottom:5,
    },
    container: {
        flex: 1,
    },
    carouselContainer: {
        flex:1,
    },
    title:{
        fontSize:20,
        borderRadius:3,
        fontWeight:"500",
    }
})


class Product extends React.Component {

    componentDidMount = () => {
        console.log('product');
        const { dispatch } = this.props;
        dispatch(actions.getProductsList());
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('receving props');
        console.log(nextProps)
    }

    renderAddToCart = () => {
        return (
            <Button 
                title="Add to Cart"
                onPress={() => this.props.navigation.navigate('Checkout') }>
            </Button>
        )
    }

    renderCarousel = () => {
        const { productsList } = this.props;
        const selectedProduct = productsList && Array.isArray(productsList) && productsList[0];
        console.log(selectedProduct);
        return (
            
                selectedProduct ? 
                <View>
                    <Carousel images={selectedProduct.images}/>
                    <Text style={productStyle.title}>{selectedProduct.title}</Text>
                    <Text>{selectedProduct.price}</Text>
                    <Text>{selectedProduct.rating}</Text>
                </View> : <Text></Text>
            
        )
    }

    render() {
        
        return (
            <View style={productStyle.body}>
                <StatusBar backgroundColor="#000" barStyle="light-content"  />
                <SafeAreaView style={productStyle.container}>
                    <View style={productStyle.carouselContainer}>{ this.renderCarousel() }</View>
                    <View style={productStyle.addCartContainer}>{ this.renderAddToCart() }</View>
                </SafeAreaView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { productsList : state.products.list }
}

const productContainer = connect(mapStateToProps)(Product);
export default productContainer;