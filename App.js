import React, { useState } from 'react';
import {  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
FlatList} from 'react-native';
const axios = require('axios');
const width = Dimensions.get('window').width;
function Item({ item }) {
  return (
    <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
      <View
        style={{
          width: width - 20,
          backgroundColor: '#fff',
          borderRadius: 6,
          borderRightColor: 'blue',
          borderRightWidth: 4,
          padding: 10,
          margin: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#000',
              borderRadius: 8,
            }}></View>
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 18, color: '#000'}}>
            {item.name}
            </Text>
            <Text style={{fontSize: 16, color: 'rgba(0,0,0,0.5)'}}>
              by{' '}
              <Text style={{fontSize: 16, color: 'blue'}}>{item.name}</Text>
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  backgroundColor: 'darkyellow',
                  padding: 5,
                  borderRadius: 10,
                }}>
                <Text style={styles.secondRowText}>Bonds</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'skyblue',
                  padding: 5,
                  borderRadius: 10,
                  marginLeft: 15,
                }}>
                <Text style={styles.secondRowText}>Comoddities</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{width: '20%'}}>
            <Text style={[styles.textLast, styles.blaclLight2]}>AUM</Text>
            <Text style={[styles.textLast, styles.blaclLight]}>₹ 12L</Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={[styles.textLast, styles.blaclLight2]}>
              GAINS{' '}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.2)',
                }}>
                / MONTH
              </Text>
            </Text>
            <Text style={[styles.textLast, styles.blaclLight]}>12.23%</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={[styles.textLast, styles.blaclLight2]}>INDEX</Text>
            <Text style={[styles.textLast, styles.blaclLight]}>1028.75</Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={[styles.textLast, styles.blaclLight2]}>FOLLOWERS</Text>
            <Text style={[styles.textLast, styles.blaclLight]}>700K</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <View style={{width: '50%'}}>
            <Text style={[styles.textStart, styles.blaclLight2]}>
              MIN FOLLOW AMOUNT
            </Text>
            <Text style={[styles.textStart, styles.blaclLight]}>
              ₹ 22,023.00
            </Text>
          </View>
          <View style={styles.viewWidth}>
            <Text style={[styles.textLast, styles.blue, styles.mt10]}>
              WATCH
            </Text>
          </View>
          <View style={styles.viewWidth}>
            <Text style={[styles.textLast, styles.blue, styles.mt10]}>
              FOLLOW
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default class App extends React.Component {
  state = {
    portfolios: [],
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

   makeRemoteRequest = () => {

    let webApiUrl = 'http://3.108.244.88:3010/api/portfolios?skip=0&limit=20';
    let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2NWE0YWVhY2I4NGNiYjI2ODJmOTQiLCJ1c2VybmFtZSI6ImtldGFudGVzdCIsImlhdCI6MTYzMDkxNzM0NCwiZXhwIjoxNjQ2NDY5MzQ0fQ.E3zEZdFqB4aQ3xq22zCrhud3s_aQQgD01yd5qKoEvhw';
    axios.get(
      webApiUrl,
      {headers: {
          "user-access-token" : tokenStr
        }
      }
    )
    .then((response) => {
        var response = response.data;
      //  console.log(response);
        this.state.portfolios = response.portfolios
        console.log(this.state.portfolios)
        this.state.apiLoaded = true
      },
      (error) => {
        var status = error.response.status
        console.log(status)
      }
    );
  };

  

  render(){
    const DATA = [{"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Nawazish", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-13T08:12:51.184Z", "id": "613f0803f004b1af50b909b2", "isFeaturedPortfolio": false, "isPublic": true, "name": "testing field", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "sushanyt", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-11T08:54:43.914Z", "id": "613c6ed33679966ecb30a2f2", "isFeaturedPortfolio": false, "isPublic": true, "name": "sushant_)final", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Sudeep", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-11T08:28:19.042Z", "id": "613c68a33679966ecb30a2df", "isFeaturedPortfolio": false, "isPublic": true, "name": "Test", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Chandra Prakash", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-10T05:40:57.700Z", "id": "613aefe91c2ae65c04719961", "isFeaturedPortfolio": false, "isPublic": true, "name": "Ultra Stocks", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Amisha", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-09T05:47:33.397Z", "id": "61399ff5a061056dbf5b424b", "isFeaturedPortfolio": false, "isPublic": true, "name": "rrxd", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Reesa", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-08T07:13:17.261Z", "id": "6138628d7c2d3f9825cff2f9", "isFeaturedPortfolio": false, "isPublic": true, "name": "Test 109", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Prashant Mittal", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-08T04:23:30.409Z", "id": "61383ac284f2e9df77e137dc", "isFeaturedPortfolio": false, "isPublic": true, "name": "Demo", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Nawazish", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T09:00:33.321Z", "id": "61372a3141755f31c67a5763", "isFeaturedPortfolio": false, "isPublic": true, "name": "test", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "RashiTest", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T08:45:16.417Z", "id": "6137269c41755f31c67a5269", "isFeaturedPortfolio": false, "isPublic": true, "name": "Rashi Test 5", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Aditya", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T08:29:16.036Z", "id": "613722dc41755f31c67a5254", "isFeaturedPortfolio": false, "isPublic": true, "name": "Aditya bhel test 7 sept", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Aditya", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T08:25:59.807Z", "id": "6137221741755f31c67a523f", "isFeaturedPortfolio": false, "isPublic": true, "name": "Test-Z-newDesign", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 55.15, "aumAssets": [[Object]], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 98.79791293457426, "indexValueAssets": {"assets": [Array], "firstOrderDate": "2021-09-07T08:23:11.635Z", "xirrArray": [Array]}, "isFollowed": false, "minFollowAmount": 55.15, "name": "Aditya", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T08:22:23.575Z", "id": "6137213f41755f31c67a520a", "isFeaturedPortfolio": false, "isPublic": true, "name": "Testing-newdesign", "tags": [Array], "trader": [Object]}, "returns": -0.012020870654257436}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [[Object]], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "ketan", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T06:31:57.636Z", "id": "6137075dae2c27bf34464020", "isFeaturedPortfolio": false, "isPublic": false, "name": "new for test", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [[Object]], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "ketan", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T06:31:34.995Z", "id": "61370746ae2c27bf3446400a", "isFeaturedPortfolio": false, "isPublic": false, "name": "asdasd", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "ketan", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T04:43:46.541Z", "id": "6136ee02640fd43db899ffc2", "isFeaturedPortfolio": false, "isPublic": false, "name": "test1", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "ketan", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T04:30:06.743Z", "id": "6136eace640fd43db899fe91", "isFeaturedPortfolio": false, "isPublic": false, "name": "Follow-Joy's test 4", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "ketan", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-07T04:28:32.190Z", "id": "6136ea70640fd43db899fde1", "isFeaturedPortfolio": false, "isPublic": false, "name": "Follow-safal-niveshak-2", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Ishdutt", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-06T09:13:22.770Z", "id": "6135dbb2e4e554a737d7e9e5", "isFeaturedPortfolio": false, "isPublic": true, "name": "Testing cash1", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Ishdutt", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-06T09:11:32.892Z", "id": "6135db44423180a7051baab9", "isFeaturedPortfolio": false, "isPublic": true, "name": "Testing cash", "tags": [Array], "trader": [Object]}, "returns": 0}, {"AUM": 0, "aumAssets": [], "followerReturns": 0, "followersCount": 0, "inWatchlist": [], "indexValue": 100, "indexValueAssets": {}, "isFollowed": false, "minFollowAmount": 0, "name": "Reesa", "oldIndexValueAssets": {}, "portfolio": {"areAssetClassesLocked": false, "assetClasses": [Array], "createdAt": "2021-09-06T07:01:18.366Z", "id": "6135bcbe40549f474e4febf8", "isFeaturedPortfolio": false, "isPublic": true, "name": "Test 107", "tags": [Array], "trader": [Object]}, "returns": 0}]

    return (
      <View style={styles.container}>
        {this.state.apiLoaded}
        <FlatList
          style={{flex:1}}
          data={DATA}
          renderItem={({ item }) => <Item item= {item} />}
          keyExtractor={item => item.portfolio.id}
          extraData = {this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  blue: {
    color: 'blue',
  },
  secondRowText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 8,
    paddingRight: 8,
  },
  blaclLight: {
    color: 'rgba(0,0,0,0.6)',
  },
  blaclLight2: {
    color: 'rgba(0,0,0,0.4)',
  },
  textStart: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textLast: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  viewWidth: {
    width: '25%',
  },
});