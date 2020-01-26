import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
import Carousel from '../carousel';
import * as  actions from '../../actions/actions';
  
const productStyle  = StyleSheet.create({
    container: {
        margin:4,
        flex: 1,
        backgroundColor:'yellow',
        flexDirection:'column'
    },
    carouselContainer: {
        flex:1,
        backgroundColor:"#fff"
    },
    title:{
        fontSize:20,
        borderRadius:3,
        fontWeight:"500",
    },
    price:{
        fontSize:30,
        fontWeight:"900"
    },
    cartBtn: {
        backgroundColor:'#3d2277',
        padding:15,
        borderRadius:5,
        alignItems: 'center',
    },
    label:{
        color:'#fff',
        fontSize:19,
        fontWeight:'600',
    },
    hrzLine: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})


class Product extends React.Component {

    static navigationOptions = {
        title: 'Home',
            headerStyle: {
            backgroundColor: '#3d2277',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
      };

    componentDidMount = () => {
        const { dispatch } = this.props;
        dispatch(actions.getProductsList());
    }

    proceedToCheckout = () => {
        const { navigation, dispatch } = this.props;
        const { productsList } = this.props;
        const selectedProduct = productsList && Array.isArray(productsList) && productsList[0];
        selectedProduct && dispatch(actions.addProductToCheckout(selectedProduct))
        navigation.navigate('Checkout');
    }

    renderAddToCart = () => {
        return (
            <TouchableOpacity 
                activeOpacity = { .9 }
                style={productStyle.cartBtn}
                onPress={this.proceedToCheckout}
            >
                    <Text style={productStyle.label}>
                        Add to Cart
                    </Text>
            </TouchableOpacity>
        )
    }

    renderCarousel = () => {
        const { productsList } = this.props;
        const selectedProduct = productsList && Array.isArray(productsList) && productsList[0];
        return (
            
                selectedProduct ? 
                <ScrollView>
                    <Carousel images={selectedProduct.images}/>
                    <View style={productStyle.hrzLine}></View>
                    <Text style={productStyle.title}>{selectedProduct.title}</Text>
                    <Text style={productStyle.price}>{selectedProduct.price}</Text>
                </ScrollView> : <Text></Text>
            
        )
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#3d2277" barStyle="light-content" />
                <View style={productStyle.container}>
                    <View style={productStyle.carouselContainer}>{ this.renderCarousel() }</View>
                    <View style={productStyle.addCartContainer}>{ this.renderAddToCart() }</View>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { productsList : state.products.list }
}

const productContainer = connect(mapStateToProps)(Product);
export default productContainer;