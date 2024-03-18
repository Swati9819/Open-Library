import { Dimensions, PixelRatio } from 'react-native';
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const scale = WINDOW_WIDTH / guidelineBaseWidth;

export const scaleSize = size => {
  const scaledWidth = (WINDOW_WIDTH / guidelineBaseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.floor(scaledWidth);
};

export const scaleSizeHeight = size => {
  const scaledHeight = (WINDOW_HEIGHT / guidelineBaseHeight) * size;
  return scaledHeight < 1 ? scaledHeight : Math.floor(scaledHeight);
};

export function scaleFont(size) {
  return Math.floor(PixelRatio.roundToNearestPixel(size * scale));
}

export const scaleSizeWidth = size =>
  Math.floor((WINDOW_WIDTH / guidelineBaseWidth) * size);

export { WINDOW_HEIGHT, WINDOW_WIDTH };
