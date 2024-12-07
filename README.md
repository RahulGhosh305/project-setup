- npm i -D husky
- npx husky install
- npm pkg set scripts.prepare="husky install"

- npm install --save-dev @commitlint/{cli,config-conventional}
- echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
- echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
