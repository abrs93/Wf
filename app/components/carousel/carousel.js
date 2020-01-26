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
    Dimensions
} from 'react-native';

const CarouselStyle = StyleSheet.create({
    image : {
        height:50,
        width:50,
    },
    preview: {
        flex:1,
        height:Dimensions.get('window').width,
    },
    previewContainer: {
        flex: 1,
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
        return (
            <TouchableOpacity 
                activeOpacity = { .5 } 
                onPress={()=>{this.selectImage(img.index)}}>
                <Image 
                        source={{uri: img.item.url}} 
                        style={CarouselStyle.image}     
                        resizeMode='center'  
                />
            </TouchableOpacity>
        )
    }

    
    getCarousel = (images) => {
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
                <View style={CarouselStyle.previewContainer}>{this.getselectedIndexView()}</View>
                <View style={CarouselStyle.productsList}>{this.getCarousel(images)}</View>
            </View>
        );
        
    }
}

export default Carousel;