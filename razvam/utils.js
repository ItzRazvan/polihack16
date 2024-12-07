import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define a base height (e.g., 800) to calculate the unit
const baseHeight = 800;
const baseWidth = 320;

const scaleHeight = height / baseHeight;
const scaleWidth = width / baseWidth;

export const normalizeHeight = (size) => {
  return Math.round(scaleHeight * size);
};

export const normalizeWidth = (size) => {
  return Math.round(scaleWidth * size);
};