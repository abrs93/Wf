import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Image,
  } from 'react-native';

const checkoutStyle  = StyleSheet.create({
    fontTitle : {
        color:'#000',
        fontSize:20,
        padding:1
    },
    msg : {
        color:'#000',
        fontSize:15,
        padding:1
    },
    fontPrice : {
        color:'#000',
        fontSize:15,
        padding:1,
        
    },
    container:{
        backgroundColor:'#fff',
        flex:1,
        margin:3,
        flexDirection:'column'
    },
    header: {
        flex:1
    },
    list:{
        flex:6
    },
    label:{
        color:'#fff',
        fontSize:19,
        fontWeight:'600',
    },
    cntBtn: {
        backgroundColor:'#3d2277',
        padding:15,
        borderRadius:5,
        alignItems: 'center',
    },
    summary: {
       flex:1,
       flexDirection:'row',
       margin:5,
       height:100,
       borderRadius:2,
    },
    left_summary: {
        backgroundColor:"#94b7da47",
        padding:4,
        flex:2
    },
    right_summary: {
        backgroundColor:"#fff",

    },
    image : {
        height:100,
        width:100,
    },
    hrzLine: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }

})


class Checkout extends React.Component {

    static navigationOptions = {
        title: 'Checkout',
            headerStyle: {
            backgroundColor: '#3d2277',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    renderContinueShopping = () => {
        return (
            <TouchableOpacity 
                activeOpacity = { .9 }
                style={checkoutStyle.cntBtn}
                onPress={this.continue}
            >
                    <Text style={checkoutStyle.label}>
                        Continue Shopping
                    </Text>
            </TouchableOpacity>
        )
    }

    getRow = (product) => {
        const src = product.item && product.item.images[0];
        return(
            <View style={checkoutStyle.summary}>
                <View style={checkoutStyle.left_summary}>
                    <View><Text style={checkoutStyle.fontTitle}>{product.item.title}</Text></View>
                    <View><Text style={checkoutStyle.fontPrice}>{product.item.price}</Text></View>
                </View>
                <View style={checkoutStyle.right_summary}>
                    <Image
                        source={{uri: src.url}}
                        style={checkoutStyle.image}     
                        resizeMode='stretch'  
                    />
                </View>
            </View>
        )
    }

    renderCheckoutList = () => {
        const { checkoutList } = this.props;
        return (
            <FlatList 
                data={checkoutList}
                vertical
                renderItem={(product)=> this.getRow(product)}
                keyExtractor={item => `${item.id}`}>
            </FlatList>
        )
    }



    continue = () => {this.props.navigation.navigate('Home')};

    render() {
        const { checkoutList } = this.props;
        return (
            <>
                <StatusBar backgroundColor="#3d2277" barStyle="light-content" />
                <View style={checkoutStyle.container}>
                    <View style={checkoutStyle.header}>
                        <Text  style={checkoutStyle.msg}>{`You currently have ${checkoutList.length} item(s) in your cart.`}</Text>
                        <View style={checkoutStyle.hrzLine}></View>
                    </View>
                    <View style={checkoutStyle.list}>{ this.renderCheckoutList() }</View>
                    <View style={checkoutStyle.continue}>{ this.renderContinueShopping() }</View>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { checkoutList : state.products.checkoutList }
}
const checkoutContainer = connect(mapStateToProps)(Checkout);
export default checkoutContainer;