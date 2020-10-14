#! /bin/bash

# publish new version to npmjs


npm config set registry http://registry.npmjs.org

npm version --allow-same-version=true

npm publish --access public

npm config set registry https://registry.npm.taobao.org

echo "done"