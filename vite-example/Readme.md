# Installing and setting up vite bundler
```bash
npm create vite@latest
```

follow the instructions and set up

```bash
cd vite-example
npm install
npm run dev
```

## Configuring root and output folder
add `vite.config.js` with following content:
```js
import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true
    }
})
```