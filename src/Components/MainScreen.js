import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput, ToastAndroid
} from 'react-native';
import { Icon } from 'native-base';
import styles from '../Styles/MainScreenStyle';
import {connect} from 'react-redux';
import {isLoading_Action} from '../Redux/Action/MainScreenAction';
import Firebase from '../Firebase/Firebase';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

class App extends Component {
  constructor() {
    super();
    this.page = 1;
    this.state = {
      data: [],
      imageUrl: '',
      isLoading: true,
      isFav: false,
      loading: false,
      search: '',
      isAdd: true
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.firebase = require("firebase"); 
    this.fetchAPIData();
  }
  fetchAPIData() {
    url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=erFtFMetS0kbSY5cKORLEmntXvig1nkU&limit=500';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.props.isLoading_dispatch(false);
        this.setState({data: responseJson.data});
      })
      .catch(error => {
        // ToastAndroid.show('Check Internet Connection.', ToastAndroid.SHORT);
        // console.error(error);
      })
  }

  writeToDB(item){
      Firebase.database
          .ref('List')
          .child(item.id).set({
            imageUrl: item.images.fixed_height_small_still.url,
            gifId: item.id,
            title: item.title,
            datetime: item.import_datetime,
            rating: item.rating,
            isFav: this.state.isFav
          })
  }
  gotoDetailView(item) {
    this.props.navigation.navigate('detailView', {
      item: item,
      isFav: this.state.isFav
    });
  }
 
  randomHex() {
    let letters = [
      '#81d8d4',
      '#f0b786',
      '#e1d9aa',
      '#c5952f',
      '#f08080',
      '#FF6347	',
      '#85c589',
    ];
    let color = '';

    color += letters[Math.floor(Math.random() * 6)];

    return color;
  }
  renderRow(item, index) {
    if (item.title !== '') {
      let backgroundColor = this.randomHex();
      // this.writeToDB(item);
      return (
        <View
          style={styles.renderViewStyle}>
          <TouchableOpacity onPress={() => this.gotoDetailView(item)}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.listViewStyle,
                  {borderTopColor: backgroundColor},
                ]}
              />

              <View style={styles.nameNumStyle}>
                <View style={styles.nameNumStyle2}>
                  <Text numberOfLines={1} style={styles.titleText}>
                    {item.title}
                  </Text>
                  <Text style={styles.item}>{item.import_datetime}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  handleLoadMore = () => {
    if (!this.state.loading) {
      this.page = this.page + 1; // increase page by 1
      this.fetchAPIData(this.page); // method for API call
    }
  };
  SearchFilterFunction(text) {
    const newData = this.state.data.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      data: newData,
      search: text,
    });
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          {this.props.isLoading === true ? (
            <ActivityIndicator size="large" style={{padding: 20}} />
          ) : (
            <View>
              <View style={{flexDirection: 'row'}}>
                <SearchBar containerStyle={{ width: '100%', backgroundColor: 'white'}}
                  round inputContainerStyle={{backgroundColor:'white'}}
                  searchIcon={{ size: 24 }}
                  onChangeText={text => this.SearchFilterFunction(text)}
                  onClear={text => this.SearchFilterFunction('')}
                  placeholder="Search Here..."
                  value={this.state.search}
                  />
              </View>

              <FlatList
                style={{marginTop: '5%'}}
                ref={c => {
                  this.flatList = c;
                }}
                data={this.state.data}
                extraData={this.state.refresh}
                renderItem={({item, index}) => this.renderRow(item, index)}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.5}
                onEndReached={this.handleLoadMore.bind(this)}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.mainScreen.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoading_dispatch: val => {
      dispatch(isLoading_Action(val));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
