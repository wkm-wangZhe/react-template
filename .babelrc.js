
const devMode = process.env.NODE_ENV !== 'production'
const REACT_APP_API =  process.env.REACT_APP_API

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                targets: {
                    chrome: '49',
                    ie: '11'
                },
                corejs: 2
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        REACT_APP_API === 'dev' && 'react-refresh/babel',
        "react-activation/babel",
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        '@babel/plugin-proposal-class-properties',
        // "transform-decorators-legacy",
        '@babel/plugin-syntax-dynamic-import',
    ].filter(Boolean)

}



