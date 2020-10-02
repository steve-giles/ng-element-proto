const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/ng-element-proto/runtime.js',
    './dist/ng-element-proto/polyfills.js',
    './dist/ng-element-proto/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/ng-dts-element.js');
  console.info('Angular Elements created successfully!')

})();
