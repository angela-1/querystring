#! /bin/bash

# publish new version to npmjs

VERSION=0.0.4

npm config set registry http://registry.npmjs.org

echo "new version" $VERSION
npm version $VERSION --allow-same-version=true

npm publish --access public

npm config set registry https://registry.npm.taobao.org

echo "done"