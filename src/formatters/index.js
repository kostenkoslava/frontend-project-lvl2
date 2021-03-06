import formatStylish from './formatStylish.js';
import formatPlain from './formatPlain.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: JSON.stringify,
};

export default (data, formatterName) => formatters[formatterName](data);
