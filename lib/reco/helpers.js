var __sanitize = function(value) {
  if (value && value.ecoSafe) {
    return value;
  } else if (typeof value !== 'undefined' && value != null) {
    return __escape(value);
  } else {
    return '';
  }
}, __safe = function(value) {
  if (value && value.ecoSafe) {
    return value;
  } else {
    if (!(typeof value !== 'undefined' && value != null)) value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  }
}, __escape = function(value) {
  return ('' + value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\x22/g, '&quot;');
};
