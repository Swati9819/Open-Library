import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {parseSearchList} from './parser';
import React, {useRef, useState, useEffect} from 'react';
import imageConstants from '../../utils/imageConstant';
import {useNavigation} from '@react-navigation/native';

export default function Search() {
  const navigation = useNavigation();

  const textInputRef = useRef()
  const searchTextRef = useRef('');
  const searchTextTimerRef = useRef();

  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (searchText == '') {
      setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 300);
    }

  }, []);

  const onBackBtnClick = () => {
    navigation.goBack();
  };

  const callSearchApi = async () => {
    try {
      const resp = await fetch(
        `https://openlibrary.org/search.json?q=${searchTextRef.current}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name,first_publish_year, subject&mode=everything`,
      );
      const data = await resp.json();
      const getSearchData = parseSearchList(data);
      setSearchList(getSearchData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = text => {
    setSearchText(text);
    searchTextRef.current = text;

    if (searchTextTimerRef.current) {
      clearTimeout(searchTextTimerRef.current);
      searchTextTimerRef.current = null;
    }

    searchTextTimerRef.current = setTimeout(() => {
      callSearchApi();
    }, 500);
  };

  const renderSearchList = () => {
    const renderSearchItemList = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.listView}
          onPress={() => {
            navigation.navigate('BookDetail', {bookDetailObj: item});
          }}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.author}>{item?.authors}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.searchListView}>
        <FlatList
          key={'searchlist'}
          data={searchList}
          renderItem={renderSearchItemList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separatorView} />}
        />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.searchView}>
        <Image source={imageConstants.search} style={styles.icon} />
        <TextInput
          ref={r => {
            textInputRef.current = r
          }}
          placeholder="Search book for title"
          value={searchText}
          onChangeText={handleChangeText}
          style={styles.input}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity style={styles.backBtnView} onPress={onBackBtnClick}>
        <Image source={imageConstants.back} style={styles.icon} />
      </TouchableOpacity>
      {renderSearch()}
      {searchList?.length > 0 ? (
        renderSearchList()
      ) : (
        <View style={styles.noSearchView}>
          <Image source={imageConstants.search} style={styles.noSearch} />
          <Text style={styles.noSearchText}>No Search Found</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
