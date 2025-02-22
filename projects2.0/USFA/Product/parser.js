const path = require('path');
const { parseDirectoryFiles } = require('../../fileSystem');

const headers = [
  'NDB_Number',
  'long_name',
  'data_source',
  'gtin_upc',
  'manufacturer',
  'date_modified',
  'date_available',
  'ingredients_english',
];

const directory = '../../../../sd/src/data/Product';
// //joining path of directory
const directoryPath = path.join(__dirname, directory);

parseDirectoryFiles(directoryPath, headers);
