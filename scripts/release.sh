#! /bin/bash

# release a new version

npm config set registry http://registry.npmjs.org

npm version $1

npm publish --access public

npm config set registry https://registry.npm.taobao.org

echo "done"