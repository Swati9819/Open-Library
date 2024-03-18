import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../styles';
import localStorage from '../../utils/localStorage';
import imageConstants from '../../utils/imageConstant';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';

export default function BookDeatil(props) {
  const navigation = useNavigation();

  const getBookDeatils = props.route.params.bookDetailObj;

  const savedBookListRef = useRef([]);
  const savedLikedBookListRef = useRef([]);

  const [genre, setGenre] = useState([]);
  const [bookDesc, setBookDesc] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  useEffect(() => {
    fetchData();
    const getGenre = getBookDeatils?.genre?.split(' ');
    setGenre(getGenre);
    getStoredList();
  }, []);

  const fetchData = async () => {
    setShowLoader(true);
    try {
      const fecthBookDescription = await fetch(
        `https://openlibrary.org${getBookDeatils.bookDetail}.json`,
      );
      const fetchBookImage = await fetch(
        `https://covers.openlibrary.org/b/id/${getBookDeatils.thumbnail}-M.jpg`,
      );
      const [bookDescObj, bookthumbnailUrl] = await Promise.all([
        fecthBookDescription,
        fetchBookImage,
      ]);
      const parseBookDescObj = await bookDescObj.json();
      const parseBookthumbnailUrl = bookthumbnailUrl.url;
      setBookDesc(parseBookDescObj);
      setThumbnailUrl(parseBookthumbnailUrl);
      setShowLoader(false);
    } catch (error) {
      console.log(error);
      setShowLoader(false);
    }
  };

  const getStoredList = async () => {
    const storedBooklist = await localStorage.getItem('bookList');
    const storedLikedBookList = await localStorage.getItem('likedBookList');

    savedBookListRef.current = storedBooklist;
    savedLikedBookListRef.current = storedLikedBookList;

    const isBookmarked = storedBooklist?.findIndex(
      item => item?.id == getBookDeatils?.id,
    );
    const liked = storedLikedBookList?.findIndex(
      item => item == getBookDeatils?.id,
    );
    if (isBookmarked !== -1) {
      setBookmark(true);
    }
    if (liked !== -1) {
      setIsLiked(true);
    }
  };

  const onBackBtnClick = () => {
    navigation.goBack();
  };

  const onLikeBtnClick = async () => {
    setIsLiked(!isLiked);

    if (!isLiked) {
      let mergeLikedBookList;
      if (savedLikedBookListRef.current?.length > 0) {
        mergeLikedBookList = [
          ...savedLikedBookListRef.current,
          getBookDeatils.id,
        ];
      } else {
        mergeLikedBookList = [getBookDeatils.id];
      }
      await localStorage.setItem('likedBookList', mergeLikedBookList);
    } else {
      const filterLikedBookList = savedLikedBookListRef?.current?.filter(
        item => item !== getBookDeatils?.id,
      );
      await localStorage.setItem('likedBookList', filterLikedBookList);
    }
  };

  const onBookmarkBtnClick = async () => {
    setBookmark(!bookmark);

    if (!bookmark) {
      const currentBookDetail = {
        ...getBookDeatils,
        thumbnailUrl: thumbnailUrl,
      };

      let mergeBookList;

      if (savedBookListRef.current?.length > 0) {
        mergeBookList = [...savedBookListRef.current, currentBookDetail];
      } else {
        mergeBookList = [currentBookDetail];
      }

      await localStorage.setItem('bookList', mergeBookList);
    } else {
      const filterBookList = savedBookListRef?.current?.filter(
        item => item?.id !== getBookDeatils?.id,
      );
      await localStorage.setItem('bookList', filterBookList);
    }
  };

  const renderGenre = () => {
    return (
      <View style={styles.genreView}>
        {genre?.map((item, index) => {
          return (
            <View key={index} style={styles.genreSubView}>
              <Text style={styles.genreText}>
                {item?.replace(',', '') ?? ''}{' '}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderBookImage = () => {
    return (
      <View style={styles.ImageView}>
        <View style={styles.ImageHeaderView}>
          <TouchableOpacity style={styles.iconView} onPress={onBackBtnClick}>
            <Image source={imageConstants.back} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.rightSideView}>
            <TouchableOpacity style={styles.iconView} onPress={onLikeBtnClick}>
              {isLiked ? (
                <Image source={imageConstants.redHeart} style={styles.icon} />
              ) : (
                <Image source={imageConstants.heart} style={styles.icon} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconView, styles.saveIconView]}
              onPress={onBookmarkBtnClick}>
              {bookmark ? (
                <Image source={imageConstants.bookmark} style={styles.icon} />
              ) : (
                <Image source={imageConstants.save} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Image source={{uri: thumbnailUrl}} style={styles.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      {showLoader ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.COLOR_4984b8} />
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderBookImage()}
          <View style={styles.bookDescView}>
            <Text style={styles.title}>{getBookDeatils?.title ?? ''}</Text>
            <Text style={styles.author}>
              by {getBookDeatils?.authors ?? ''} |{' '}
              {getBookDeatils?.publishYear ?? ''}
            </Text>
            {renderGenre()}
            <Text style={styles.description}>
              {bookDesc?.description ?? 'No description found!'}
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
