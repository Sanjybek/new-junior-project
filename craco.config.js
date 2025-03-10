const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/components/common/ui'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};