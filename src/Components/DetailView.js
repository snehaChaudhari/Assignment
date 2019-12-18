import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity,  } from 'react-native'
import { Icon } from 'native-base'
import styles from '../Styles/DetailViewStyle'

export default class DetailView extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            toggle: true,
            title:'', rating:''
        }
    }
    static navigationOptions = ({ navigation }) => {
        var item = navigation.getParam("item", null);
        return {
            title: item.title,
            headerStyle: {
                elevation: 0
            }
        }
    }
    ToggleFunction = () => {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }
    componentDidMount() {
        const data = this.props.navigation.getParam('item', null)
        // console.log("data-1-" + data.images.fixed_height_small_still.url)
        var uri = { uri: data.images.fixed_height_small_still.url } //{uri: data.embed_url}
        this.setState({ 
            imageUrl: uri ,
            title: data.title, 
            rating: data.rating, 
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconViewStyle}>
                    <TouchableOpacity onPress={() => this.ToggleFunction()}>
                        {this.state.toggle
                            ?
                                <Icon type="MaterialIcons" name="favorite-border" style={styles.favIconStyle}/>
                                
                            : <Icon type="MaterialIcons" name="favorite" style={styles.favIconStyle} />
                        }

                    </TouchableOpacity>
                </View>


                <View style={styles.imageViewStyle}>
                    <Image source={this.state.imageUrl}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={{margin: '5%'}}>
                    <Text style={styles.descriptionStyle}> 
                    This is a {this.state.title} with Ratings 
                     "{this.state.rating}" </Text>
                </View>
                
            </View>
        )
    }
}

