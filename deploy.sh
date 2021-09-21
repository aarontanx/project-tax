#!/usr/bin/env sh

set -e

npm run build

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:aarontanx/project-tax.git master:main


cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:aarontanx/project-tax.git master:gh-pages

cd -