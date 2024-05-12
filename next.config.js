// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle PDF files
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader' ,
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/images/',
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};
