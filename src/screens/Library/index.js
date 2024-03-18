import styles from './styles';
import React, {useEffect, useState} from 'react';
import localStorage from '../../utils/localStorage';
import imageConstants from '../../utils/imageConstant';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';

export default function Library() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getSavedBookList();
  }, []);

  const getSavedBookList = async () => {
    const storedBooklist = await localStorage.getItem('bookList');
    if (storedBooklist?.length > 0) {
      setBookList(storedBooklist);
    }
  };

  const renderBookList = ({item}) => {
    return (
      <View style={styles.bookListView}>
        <Image source={{uri: item?.thumbnailUrl}} style={styles.bookImage} />
        <Text style={styles.bookTitle} numberOfLines={3}>
          {item?.title}
        </Text>
        <Text style={styles.author}>{item?.authors}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.title}>Library</Text>
      <View style={styles.bookView}>
        {bookList?.length > 0 ? (
          <FlatList
            numColumns={2}
            data={bookList}
            contentContainerStyle={styles.bookListContainer}
            renderItem={renderBookList}
          />
        ) : (
          <View style={styles.noBookFoundView}>
            <Image source={imageConstants.book} style={styles.noBook} />
            <Text style={styles.noBookText}>You don't have any Book yet !</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
