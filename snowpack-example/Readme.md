# Install and setup snowpack bundler
## Install snowpack
```bash
npm install snowpack @snowpack/plugin-sass --save-dev 
```

## Add scripts to package.json
```json
"scripts": {
    "dev": "snowpack dev",
    "build": "snowpack"
}
```

## Define type module in package.json
```json
"type": "module"
```

## Run development server
```bash
npm run dev
```
