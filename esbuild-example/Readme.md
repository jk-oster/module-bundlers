# Install and setup esbuild bundler
## Install esbuild
```bash
npm install esbuild --save-dev
```

## Add scripts to package.json
```json
"scripts": {
    "build": "esbuild src/index.js --bundle --outfile=dist/index.js"
  }
```

## Run build
```bash
npm run build
```