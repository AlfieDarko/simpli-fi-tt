import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/button/themes';
// import { ThemeProvider, theme } from './pathToThemeProvider';

const ThemeDecorator = (storyFn: Function) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
