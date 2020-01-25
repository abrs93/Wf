import React from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const wakefitStyle  = StyleSheet.create({
    font : {
        color:'#876',
        fontSize:30
    }
})


class Checkout extends React.Component {

    componentDidMount = () => {
        console.log('product');
        console.log(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps)
    }
    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor="#000" barStyle="light-content"  />
                <SafeAreaView>
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    >
                    <Text style={wakefitStyle.font}>Checkout</Text>
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { products : state }
}
const checkoutContainer = connect(mapStateToProps)(Checkout);
export default checkoutContainer;