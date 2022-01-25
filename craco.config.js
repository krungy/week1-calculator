const path = require('path');

module.exports = {
  webpack: {
    // 절대경로 지정
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@router': path.resolve(__dirname, 'src/router'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^\\@components/(.*)$': '<rootDir>/src/components/$1',
        '^\\@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^\\@api/(.*)$': '<rootDir>/src/api/$1',
        '^\\@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^\\@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^\\@router/(.*)$': '<rootDir>/src/router/$1',
      },
    },
  },
};
