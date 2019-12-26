/**
 * @format
 */

import 'react-native';
import React from 'react';
import SplashScreen from '../SplashScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('detail view renders correctly', () => {
  renderer.create(<SplashScreen />);
});
