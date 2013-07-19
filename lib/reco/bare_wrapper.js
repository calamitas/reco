%s = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  };
  __obj.safe = __safe; __obj.escape = __escape;
  (function() {
    %s
  }).call(__obj);
  return __out.join('');
};
