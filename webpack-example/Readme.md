# Setting up webpack
## Install Webpack
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader
```

## Add webpack.config.js file and configure
```js
const path  = require("path");

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
}
```

## Add scripts to package.json
```json
"scripts": {
    "dev": "webpack serve",
    "build": "webpack"
}
```

## Run Development server
```bash
npm run dev
```