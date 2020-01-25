import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';

const CarouselStyle = StyleSheet.create({
    productsList: {

    },
    image : {
        height:50,
        width:50,
    },
    preview: {
        width:500,
        height:500,
        borderRadius:3,
    },
    previewContainer: {
        marginBottom:10,
    }
})
  

class Carousel extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedIndex: 0,
        }
    }


    selectImage = (index) => {
        this.setState({
            selectedIndex : index,
        })
    }

    getImageScrollList = (img) => {
        console.log('ca',img)
        return (
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>{this.selectImage(img.index)}}>
                <Image 
                        source={{uri: img.item.url}} 
                        style={CarouselStyle.image}     
                        resizeMode='center'  
                />
            </TouchableOpacity>
        )
    }

    
    getCarousel = (images) => {
        console.log(images);
        return (
            <FlatList 
                data={images}
                horizontal
                renderItem={(img)=> this.getImageScrollList(img)}
                keyExtractor={item => `${item.id}`}>
            </FlatList>
        )
    }

    getselectedIndexView = () => {
        const { selectedIndex } = this.state;
        const { images } = this.props;
        const selecttedImage = images && Array.isArray(images) && images[selectedIndex];
        console.log(selecttedImage);
        return (
            <Image
                source={{uri: selecttedImage.url}} 
                style={CarouselStyle.preview}
                resizeMode='stretch'  
            />
        )
    }


    render(){
        const { images } = this.props;
        
        return (
            <View>
                <SafeAreaView style={CarouselStyle.previewContainer}>{this.getselectedIndexView()}</SafeAreaView>
                <SafeAreaView style={CarouselStyle.productsList}>{this.getCarousel(images)}</SafeAreaView>
            </View>
        );
        
    }
}

export default Carousel;