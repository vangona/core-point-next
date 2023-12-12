// app/ThemeRegistry.tsx
'use client';
import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useServerInsertedHTML } from 'next/navigation';
import type { Options } from '@emotion/cache';

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
interface ThemeRegistryProps {
  children: React.ReactNode;
  options?: Options;
}
export default function ThemeRegistry(props: ThemeRegistryProps) {
  const { options = { key: 'core-point-theme-cache' }, children } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: '#01B2EA',
        light: '#85D9FF',
        dark: '#00A3D7',
        contrastText: '#fcfcfc',
      },
      secondary: {
        main: '#00DEB7',
        light: '#B4F4ED',
        dark: '#00C89C',
        contrastText: '#fcfcfc',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      // eslint-disable-next-line quotes
      fontFamily: "'Noto Sans KR', Roboto, sans-serif",
    },
  });

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
