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
import {Card, Icon, Container, Header, Item, Input} from 'native-base';
import styles from '../Styles/MainScreenStyle';
import {connect} from 'react-redux';
import {isLoading_Action} from '../Redux/Action/MainScreenAction';
import FETCH_JSON_DATA from '../Redux/Constant'

class App extends Component {
  constructor() {
    super();
    this.page = 1;
    this.state = {
      data: [],
      imageUrl: '',
      isLoading: true,
      isFav: false,
      isFilled: false,
      loading: false,
      search: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=erFtFMetS0kbSY5cKORLEmntXvig1nkU&limit=500';
      

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.props.isLoading_dispatch(false);
        this.setState({data: responseJson.data});
      })
      .catch(error => {
        ToastAndroid.show('Check Internet Connection.', ToastAndroid.SHORT);

        // console.error(error);
      });
  }
  gotoDetailView(item) {
    this.props.navigation.navigate('detailView', {
      item: item,
    });
  }
  checkFav(status) {
    this.setState({
      isFav: status,
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
      this.fetchData(this.page); // method for API call
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
      <View style={styles.container}>
        {this.props.isLoading === true ? (
          <ActivityIndicator size="large" style={{padding: 20}} />
        ) : (
          <View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Search"
                value={this.state.search}
                onChangeText={text => this.SearchFilterFunction(text)}
              />
              <Icon
                type="MaterialIcons"
                name="search"
                style={{marginTop: '5%'}}
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
