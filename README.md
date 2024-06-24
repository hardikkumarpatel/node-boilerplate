
# Node Boilerplate

Here are the setup instructions for node boilerplate project.


## Code setup
- Install dependencies with 
```bash 
  npm install
```

- If getting any error while installing dependencies with npm use the alternative 
```bash
  yarn install 
```

## Start server
- We have set up Babel to transpile the JS code into browser compatibility code to use the current JS syntax.
- ### Local server
- The below command start sever in local mode.
```bash 
  npm run start
```
- ### Development server
- The below command will generate the build folder using the Babel configuration and start the server from that build directory.
```bash 
  npm run dev:build
```

- ### Production server
```bash 
  npm run prod:build
```

## Formatting 
- Code Formatting (prettier)
```bash
  format:write: prettier --write .
```