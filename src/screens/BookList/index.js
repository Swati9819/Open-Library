import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../styles';
import {parseBookListData} from './parser';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function BookList() {
  const navigation = useNavigation();

  const [showLoader, setShowLoader] = useState(false);
  const [getBookListData, setGetBookListData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    setShowLoader(true);
    try {
      const resp = await fetch(
        'https://openlibrary.org/subjects/sci-fi.json?details=true',
      );
      const data = await resp.json();
      const getBookListFormatedData = parseBookListData(data);
      setGetBookListData(getBookListFormatedData);
      setShowLoader(false);
    } catch (error) {
      console.log(error);
      setShowLoader(false);
    }
  };

  const renderBookList = ({item}) => {
    return (
      <Animated.View entering={FadeInUp}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookDetail', {bookDetailObj: item});
        }}>
        <Text style={styles.bookText}>
          Book : <Text style={styles.subBookText}>{item?.title}</Text>
        </Text>
        <Text style={styles.bookText}>
          Author : <Text style={styles.subBookText}>{item?.authors}</Text>
        </Text>
        <Text style={styles.bookText}>
          Publish Year :{' '}
          <Text style={styles.subBookText}>{item?.publishYear}</Text>
        </Text>
        <Text style={styles.bookText}>
          Genre : <Text style={styles.subBookText}>{item?.genre}.</Text>
        </Text>
      </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.title}>Welcome to Open Library</Text>
      {showLoader ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.COLOR_4984b8} />
          <Text style={styles.loadingText}>
            Please wait while we loading your Booklist !
          </Text>
        </View>
      ) : (
        <View style={styles.subView}>
          <FlatList
            key={'bookList'}
            data={getBookListData}
            renderItem={renderBookList}
            contentContainerStyle={styles.bookListView}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separatorView} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
