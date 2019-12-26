import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity,  } from 'react-native'
import { Icon } from 'native-base'
import styles from '../Styles/DetailViewStyle'
import * as firebase from "firebase";
import 'firebase/storage';
import Firebase from '../Firebase/Firebase'

export default class DetailView extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            isFav: false,
            title:'', rating:'',
            datetime: ''
        }
    }
    static navigationOptions = ({ navigation }) => {
        var item = navigation.getParam("item", null);
        return {
            title: item.title,
            headerStyle: {
                elevation: 0,
                borderBottomWidth:0,
            }
        }
    }
    ToggleFunction = () => {
        this.setState(state => ({
            isFav: !state.isFav
        }));
        console.log("change status--"+!this.state.isFav)
        this.changeStatus()
    }
    changeStatus(){
        // console.log("change status 2--"+!this.state.isFav)
        var database = firebase.database(); 
        var updates = {};
        let listItem = {
            title: this.state.title,
            datetime: this.state.datetime,
            isFav: !this.state.isFav,
            gifId: this.state.gifId,
            rating: this.state.rating,
            imageUrl: this.state.imageUrl
        };
        updates[
          'List/' + this.state.gifId
        ] = listItem;
        var mainRef = database.ref();
        Firebase.database
          .ref(mainRef)
          .update(updates)
          .then(data => {
            return data;
          });
    }
    componentDidMount() {
        Firebase.init();
        const data = this.props.navigation.getParam('item', null)
        console.log(data.id)
        var uri = { uri: data.images.fixed_height_small_still.url } 

        var self = this;
        Firebase.database
          .ref('List/')
          .child(data.id)                               
          .on('value', function(snapshot) {
            //   console.log("val--"+snapshot.val().isFav)
            if(snapshot.val().isFav !== null)
            self.setState({ isFav: snapshot.val().isFav })
        })

               
        this.setState({ 
            gifId: data.id,
            imageUrl: uri ,
            title: data.title, 
            rating: data.rating, 
            // isFav: isFav,
            datetime: data.import_datetime
        })

       
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconViewStyle}>
                    <TouchableOpacity onPress={() => this.ToggleFunction()}>
                        {this.state.isFav === false
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

