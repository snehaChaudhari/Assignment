/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../MainScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('detail view renders correctly', () => {
  renderer.create(<MainScreen />);
});
