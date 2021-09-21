#!/usr/bin/env sh

set -e

npm run build

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:aarontanx/webdev-hello-world.git master:main


cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:aarontanx/webdev-hello-world.git master:gh-pages

cd -