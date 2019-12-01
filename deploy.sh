#!/usr/bin/env sh

set -e

yarn
yarn test:unit
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:maslaknikolai/fastnote.git master

cd -
