(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[1048],{

/***/ 7911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* reexport */ es_Editor)
});

// UNUSED EXPORTS: DiffEditor, loader, useMonaco

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



;// CONCATENATED MODULE: ../../node_modules/state-local/lib/es/state-local.js
function state_local_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function state_local_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function state_local_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      state_local_ownKeys(Object(source), true).forEach(function (key) {
        state_local_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      state_local_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function state_local_hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !state_local_hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = state_local_objectSpread2(state_local_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const state_local = (index);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  }
};

/* harmony default export */ const es_config = (config);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry_curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const utils_curry = (curry_curry);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject_isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const utils_isObject = (isObject_isObject);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/validators/index.js



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) validators_errorHandler('configIsRequired');
  if (!utils_isObject(config)) validators_errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(validators_errorMessages.deprecation);
}

function validators_throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var validators_errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var validators_errorHandler = utils_curry(validators_throwError)(validators_errorMessages);
var validators_validators = {
  config: validateConfig
};

/* harmony default export */ const es_validators = (validators_validators);


;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose_compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const utils_compose = (compose_compose);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}

/* harmony default export */ const deepMerge = (merge);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const utils_makeCancelable = (makeCancelable);


;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/loader/index.js








/** the local state of the module */

var _state$create = state_local.create({
  config: es_config,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function loader_config(globalConfig) {
  var _validators$config = es_validators.config(globalConfig),
      monaco = _validators$config.monaco,
      config = _objectWithoutProperties(_validators$config, ["monaco"]);

  setState(function (state) {
    return {
      config: deepMerge(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
        isInitialized = _ref.isInitialized,
        resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });

  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });

    if (state.monaco) {
      state.resolve(state.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    utils_compose(injectScripts, getMonacoLoaderScript)(configureLoader);
  }

  return utils_makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader_loader = {
  config: loader_config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const es_loader = (loader_loader);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/loader/lib/es/index.js



// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3980);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}



;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/Loading/Loading.js


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react.createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ const Loading_Loading = (Loading);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ const MonacoContainer_styles = (styles);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js






// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/react.createElement("section", _extends({
    style: { ...MonacoContainer_styles.wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/react.createElement(Loading_Loading, {
    content: loading
  }), /*#__PURE__*/react.createElement("div", {
    ref: _ref,
    style: { ...MonacoContainer_styles.fullWidth,
      ...(!isEditorReady && MonacoContainer_styles.hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]).isRequired,
  isEditorReady: (prop_types_default()).bool.isRequired,
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object
};

/* harmony default export */ const MonacoContainer_MonacoContainer = (MonacoContainer);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js



var es_MonacoContainer_MonacoContainer = /*#__PURE__*/(0,react.memo)(MonacoContainer_MonacoContainer);

/* harmony default export */ const es_MonacoContainer = (es_MonacoContainer_MonacoContainer);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js


function useMount_useMount(effect) {
  (0,react.useEffect)(effect, []);
}

/* harmony default export */ const hooks_useMount = (useMount_useMount);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = (0,react.useRef)(true);
  (0,react.useEffect)(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ const hooks_useUpdate = (useUpdate);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/utils/index.js
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}



;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = (0,react.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react.useState)(true);
  const editorRef = (0,react.useRef)(null);
  const monacoRef = (0,react.useRef)(null);
  const containerRef = (0,react.useRef)(null);
  const onMountRef = (0,react.useRef)(onMount);
  const beforeMountRef = (0,react.useRef)(beforeMount);
  hooks_useMount(() => {
    const cancelable = es_loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  hooks_useUpdate(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  hooks_useUpdate(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = (0,react.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = getOrCreateModel(monacoRef.current, original, originalLanguage || language, originalModelPath);
    const modifiedModel = getOrCreateModel(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = (0,react.useCallback)(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0,react.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react.createElement(es_MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

DiffEditor.propTypes = {
  original: (prop_types_default()).string,
  modified: (prop_types_default()).string,
  language: (prop_types_default()).string,
  originalLanguage: (prop_types_default()).string,
  modifiedLanguage: (prop_types_default()).string,

  /* === */
  originalModelPath: (prop_types_default()).string,
  modifiedModelPath: (prop_types_default()).string,
  keepCurrentOriginalModel: (prop_types_default()).bool,
  keepCurrentModifiedModel: (prop_types_default()).bool,
  theme: (prop_types_default()).string,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]),
  options: (prop_types_default()).object,

  /* === */
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object,

  /* === */
  beforeMount: (prop_types_default()).func,
  onMount: (prop_types_default()).func
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop
};

/* harmony default export */ const DiffEditor_DiffEditor = (DiffEditor);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js



var DiffEditor_index = /*#__PURE__*/(0,react.memo)(DiffEditor_DiffEditor);

/* harmony default export */ const es_DiffEditor = ((/* unused pure expression or super */ null && (DiffEditor_index)));

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js




function useMonaco() {
  const [monaco, setMonaco] = useState(loader.__getMonacoInstance());
  useMount(() => {
    let cancelable;

    if (!monaco) {
      cancelable = loader.init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ const hooks_useMonaco = ((/* unused pure expression or super */ null && (useMonaco)));

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js


function usePrevious(value) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ const hooks_usePrevious = (usePrevious);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/Editor/Editor.js









const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = (0,react.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react.useState)(true);
  const monacoRef = (0,react.useRef)(null);
  const editorRef = (0,react.useRef)(null);
  const containerRef = (0,react.useRef)(null);
  const onMountRef = (0,react.useRef)(onMount);
  const beforeMountRef = (0,react.useRef)(beforeMount);
  const subscriptionRef = (0,react.useRef)(null);
  const valueRef = (0,react.useRef)(value);
  const previousPath = hooks_usePrevious(path);
  const preventCreation = (0,react.useRef)(false);
  hooks_useMount(() => {
    const cancelable = es_loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  hooks_useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  hooks_useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  hooks_useUpdate(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = (0,react.useCallback)(() => {
    if (!preventCreation.current) {
      beforeMountRef.current(monacoRef.current);
      const autoCreatedModelPath = path || defaultPath;
      const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
      editorRef.current = monacoRef.current.editor.create(containerRef.current, {
        model: defaultModel,
        automaticLayout: true,
        ...options
      }, overrideServices);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
      monacoRef.current.editor.setTheme(theme);
      setIsEditorReady(true);
      preventCreation.current = true;
    }
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  (0,react.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value; // onChange

  (0,react.useEffect)(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        onChange(editorRef.current.getValue(), event);
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  (0,react.useEffect)(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react.createElement(es_MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: (prop_types_default()).string,
  defaultPath: (prop_types_default()).string,
  defaultLanguage: (prop_types_default()).string,
  value: (prop_types_default()).string,
  language: (prop_types_default()).string,
  path: (prop_types_default()).string,

  /* === */
  theme: (prop_types_default()).string,
  line: (prop_types_default()).number,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]),
  options: (prop_types_default()).object,
  overrideServices: (prop_types_default()).object,
  saveViewState: (prop_types_default()).bool,
  keepCurrentModel: (prop_types_default()).bool,

  /* === */
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object,

  /* === */
  beforeMount: (prop_types_default()).func,
  onMount: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  onValidate: (prop_types_default()).func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};

/* harmony default export */ const Editor_Editor = (Editor);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/Editor/index.js



var Editor_index = /*#__PURE__*/(0,react.memo)(Editor_Editor);

/* harmony default export */ const es_Editor = (Editor_index);

;// CONCATENATED MODULE: ../../node_modules/@monaco-editor/react/lib/es/index.js






/***/ }),

/***/ 1738:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ 4295:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ArrayRules = void 0;
var core_1 = __webpack_require__(9875);
var definitions_1 = __webpack_require__(7623);
var ArrayRules = /** @class */ (function () {
    function ArrayRules() {
    }
    ArrayRules.prototype.seq = function ($rules, $runner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray($rules))
                            return [2 /*return*/, false];
                        return [4 /*yield*/, Promise.all($rules.map(function (rule) { return $runner(rule); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ArrayRules.prototype.filter = function (array, iterator, $rule, $runner) {
        return __awaiter(this, void 0, void 0, function () {
            var results, array_1, array_1_1, ele, condition, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(array))
                            return [2 /*return*/, []];
                        results = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        array_1 = __values(array), array_1_1 = array_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!array_1_1.done) return [3 /*break*/, 5];
                        ele = array_1_1.value;
                        return [4 /*yield*/, $runner($rule, iterator ? { key: iterator, value: ele } : undefined)];
                    case 3:
                        condition = _b.sent();
                        if (condition)
                            results.push(ele);
                        _b.label = 4;
                    case 4:
                        array_1_1 = array_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (array_1_1 && !array_1_1.done && (_a = array_1["return"])) _a.call(array_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, results];
                }
            });
        });
    };
    ArrayRules.prototype.foreach = function (array, iterator, $rule, $runner) {
        return __awaiter(this, void 0, void 0, function () {
            var array_2, array_2_1, ele, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(array))
                            return [2 /*return*/, false];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        array_2 = __values(array), array_2_1 = array_2.next();
                        _b.label = 2;
                    case 2:
                        if (!!array_2_1.done) return [3 /*break*/, 5];
                        ele = array_2_1.value;
                        return [4 /*yield*/, $runner($rule, iterator ? { key: iterator, value: ele } : undefined)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        array_2_1 = array_2.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (array_2_1 && !array_2_1.done && (_a = array_2["return"])) _a.call(array_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, true];
                }
            });
        });
    };
    ArrayRules.prototype.map = function (array, iterator, $rule, $runner) {
        return __awaiter(this, void 0, void 0, function () {
            var results, array_3, array_3_1, ele, mapping, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(array))
                            return [2 /*return*/, []];
                        results = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        array_3 = __values(array), array_3_1 = array_3.next();
                        _b.label = 2;
                    case 2:
                        if (!!array_3_1.done) return [3 /*break*/, 5];
                        ele = array_3_1.value;
                        return [4 /*yield*/, $runner($rule, iterator ? { key: iterator, value: ele } : undefined)];
                    case 3:
                        mapping = _b.sent();
                        results.push(mapping);
                        _b.label = 4;
                    case 4:
                        array_3_1 = array_3.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (array_3_1 && !array_3_1.done && (_a = array_3["return"])) _a.call(array_3);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, results];
                }
            });
        });
    };
    ArrayRules.prototype.syncAll = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false);
    };
    ArrayRules.prototype.syncSeq = function ($rules, $runner) {
        if (!Array.isArray($rules))
            return false;
        $rules.map(function (rule) { return $runner(rule); });
        return true;
    };
    ArrayRules.prototype.syncFilter = function (array, iterator, $rule, $runner) {
        var e_4, _a;
        if (!Array.isArray(array))
            return [];
        var results = [];
        try {
            for (var array_4 = __values(array), array_4_1 = array_4.next(); !array_4_1.done; array_4_1 = array_4.next()) {
                var ele = array_4_1.value;
                var condition = $runner($rule, iterator ? { key: iterator, value: ele } : undefined);
                if (condition)
                    results.push(ele);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (array_4_1 && !array_4_1.done && (_a = array_4["return"])) _a.call(array_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return results;
    };
    ArrayRules.prototype.syncForeach = function (array, iterator, $rule, $runner) {
        var e_5, _a;
        if (!Array.isArray(array))
            return false;
        try {
            for (var array_5 = __values(array), array_5_1 = array_5.next(); !array_5_1.done; array_5_1 = array_5.next()) {
                var ele = array_5_1.value;
                $runner($rule, iterator ? { key: iterator, value: ele } : undefined);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (array_5_1 && !array_5_1.done && (_a = array_5["return"])) _a.call(array_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return true;
    };
    ArrayRules.prototype.syncMap = function (array, iterator, $rule, $runner) {
        var e_6, _a;
        if (!Array.isArray(array))
            return [];
        var results = [];
        try {
            for (var array_6 = __values(array), array_6_1 = array_6.next(); !array_6_1.done; array_6_1 = array_6.next()) {
                var ele = array_6_1.value;
                var mapping = $runner($rule, iterator ? { key: iterator, value: ele } : undefined);
                results.push(mapping);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (array_6_1 && !array_6_1.done && (_a = array_6["return"])) _a.call(array_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return results;
    };
    ArrayRules.prototype.flatten = function (nestedArray, level) {
        return Array.isArray(nestedArray) ? nestedArray.flat(level) : [];
    };
    ArrayRules.prototype.arrayConcat = function (firstArray, secondArray) {
        return Array.isArray(firstArray) && Array.isArray(secondArray) ? firstArray.concat(secondArray) : [];
    };
    ArrayRules.prototype.unique = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return Array.isArray(arrayOfInputs) ? __spreadArray([], __read(new Set(arrayOfInputs.map(function (r) { return JSON.stringify(r); }))), false).map(function (r) { return JSON.parse(r); }) : [];
    };
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.seqDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Function]),
        __metadata("design:returntype", Promise)
    ], ArrayRules.prototype, "seq");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.filterDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", Promise)
    ], ArrayRules.prototype, "filter");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.foreachDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", Promise)
    ], ArrayRules.prototype, "foreach");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.mapDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", Promise)
    ], ArrayRules.prototype, "map");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.allDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "syncAll");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.seqDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Function]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "syncSeq");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.filterDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "syncFilter");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.foreachDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "syncForeach");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.mapDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String, Object, Function]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "syncMap");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.flattenDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Number]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "flatten");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.arrayContactDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Array]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "arrayConcat");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.arrayUniqueDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ArrayRules.prototype, "unique");
    ArrayRules = __decorate([
        (0, core_1.JsonLangExtension)('Array/Collections')
    ], ArrayRules);
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;
//# sourceMappingURL=array.js.map

/***/ }),

/***/ 7623:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.arrayUniqueDefinition = exports.arrayContactDefinition = exports.flattenDefinition = exports.mapDefinition = exports.foreachDefinition = exports.filterDefinition = exports.seqDefinition = exports.allDefinition = void 0;
exports.allDefinition = {
    identifier: { name: 'All' },
    inputs: { type: 'array' },
    output: { type: 'array' }
};
exports.seqDefinition = {
    identifier: { name: 'Sequence', shortcut: 'Seq' },
    inputs: { type: 'rule' },
    output: { type: 'array' }
};
exports.filterDefinition = {
    identifier: { name: 'Filter' },
    inputs: { array: { type: 'array' } },
    output: { type: 'array' }
};
exports.foreachDefinition = {
    identifier: { name: 'Foreach' },
    inputs: { array: { type: 'array' } },
    output: { type: 'array' }
};
exports.mapDefinition = {
    identifier: { name: 'Map' },
    inputs: { array: { type: 'array' } },
    output: { type: 'array' }
};
exports.flattenDefinition = {
    identifier: { name: 'Flatten' },
    inputs: { nestedArray: { type: 'array' }, level: { type: 'number' } },
    output: { type: 'array' }
};
exports.arrayContactDefinition = {
    identifier: { name: 'ArrayConcat' },
    inputs: { firstArray: { type: 'array' }, secondArray: { type: 'array' } },
    output: { type: 'array' }
};
exports.arrayUniqueDefinition = {
    identifier: { name: 'ArrayUnique' },
    inputs: { inputs: { type: 'array' } },
    output: { type: 'array' }
};
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 6174:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(4295), exports);
__exportStar(__webpack_require__(7623), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1010:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JsonLang = void 0;
var core_1 = __webpack_require__(8173);
var rule_1 = __webpack_require__(4961);
var JsonLang = /** @class */ (function (_super) {
    __extends(JsonLang, _super);
    function JsonLang() {
        var _this = _super.call(this) || this;
        _this["import"](rule_1.DataRules);
        return _this;
    }
    return JsonLang;
}(core_1.RuleCore));
exports.JsonLang = JsonLang;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 6179:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(1010), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3337:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.RuleCore = void 0;
var core_types_1 = __webpack_require__(4037);
var rule_parser_1 = __webpack_require__(3572);
var RuleCore = /** @class */ (function () {
    function RuleCore(options) {
        var _this = this;
        /**
         * @param {Class[]} RuleClasses - Array of Classes which contain methods/rules.
         * @returns {void}
         * @description to extend JsonLang by importing a class with @JsonLangExtension decorator, and register its methods by @RuleExtension decorator
        */
        this["import"] = function () {
            var ruleClasses = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ruleClasses[_i] = arguments[_i];
            }
            __spreadArray([], __read(ruleClasses), false).forEach(function (RuleClass) {
                console.log('RuleClass', RuleClass);
                if (!RuleClass.prototype)
                    return;
                var ruleClass = new RuleClass();
                console.log('ruleClass', ruleClass);
                var propertyNames = Object.getOwnPropertyNames(RuleClass.prototype);
                propertyNames.forEach(function (propertyName) {
                    var _a;
                    console.log('propertyName', propertyName);
                    var group = ((_a = Reflect.getMetadata('jsonlang:group', RuleClass)) === null || _a === void 0 ? void 0 : _a.name) || 'Others';
                    var ruleDefinition = Reflect.getMetadata('jsonlang:rule', RuleClass, propertyName);
                    console.log('ruleDefinition', ruleDefinition);
                    if (ruleDefinition) {
                        var handler = ruleClass[propertyName].bind(ruleClass);
                        console.log('handler', handler);
                        ruleDefinition.identifier.group = ruleDefinition.identifier.group || group;
                        var ruleHandler = ruleDefinition.sync ? { sync: handler } : { async: handler };
                        _this.setRuleWithDefinition(ruleDefinition, ruleHandler);
                    }
                });
            });
        };
        /**
         * @param {Rules} rules - Map of Rules.
         * @returns {void}
         * @description to extend JsonLang by a Map() of rules the "Map key" is RuleIdentifier and the "Map value" is the Sync/Async RuleHandler
        */
        this.registerMany = function (rules) {
            rules.forEach(function (value, key) { return _this.registerOne(key, value); });
        };
        /**
         * @param {RuleIdentifier} ruleIdentifier
         * @param {RuleHandler} RuleHandler.
         * @returns {void}
         * @description to extend JsonLang by adding one Sync/Async Rule
        */
        this.registerOne = function (definition, ruleHandler) {
            var handler = ruleHandler.sync || ruleHandler.async;
            var ruleDefinition = rule_parser_1.RuleDefinitionParser.parse(handler, [], definition);
            _this.setRuleWithDefinition(ruleDefinition, ruleHandler);
        };
        /**
         * @param {string[]} rules - Optional Array of Rules' names or shortcuts to get their definitions.
         * @returns {RuleDefinition[]}
         * @description Get rules definitions, if no rules names passed, it will return all rules definitions
        */
        this.getRulesDefinitions = function (rules) {
            var definitions = new Map();
            _this.rulesDefinitions.forEach(function (definition, rule) {
                var id = definition.identifier.name + definition.identifier.shortcut || '';
                if (rules) {
                    if (rules.includes(rule))
                        definitions.set(id, definition);
                }
                else {
                    definitions.set(id, definition);
                }
            });
            return __spreadArray([], __read(definitions.values()), false);
        };
        this.createRunContext = function (localDataStore, data) {
            var runner = function (jsonLang, localData) { return __awaiter(_this, void 0, void 0, function () {
                var _a, ruleHandler, rule, _b, inputs, output, resolvedInputs, handler, result, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (localData === null || localData === void 0 ? void 0 : localData.key)
                                localDataStore.set(localData.key, localData === null || localData === void 0 ? void 0 : localData.value);
                            if (!this.isRule(jsonLang))
                                return [2 /*return*/, jsonLang];
                            _a = this.getRuleParams(jsonLang), ruleHandler = _a.ruleHandler, rule = _a.rule, _b = _a.inputs, inputs = _b === void 0 ? [] : _b, output = _a.output;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, this.resolveRuleInputs(rule, inputs, runner, data, localDataStore)];
                        case 2:
                            resolvedInputs = _c.sent();
                            handler = ruleHandler.async || ruleHandler.sync;
                            return [4 /*yield*/, handler.apply(void 0, __spreadArray([], __read(resolvedInputs), false))];
                        case 3:
                            result = _c.sent();
                            if (output)
                                localDataStore.set(output, result);
                            return [2 /*return*/, result];
                        case 4:
                            error_1 = _c.sent();
                            throw Error("Failed to Run \"".concat(rule, "\" cause of ").concat(error_1));
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
            return runner;
        };
        this.createSyncRunContext = function (localDataStore, data) {
            var runner = function (jsonLang, localData) {
                if (localData === null || localData === void 0 ? void 0 : localData.key)
                    localDataStore.set(localData.key, localData === null || localData === void 0 ? void 0 : localData.value);
                if (!_this.isRule(jsonLang))
                    return jsonLang;
                var _a = _this.getRuleParams(jsonLang), ruleHandler = _a.ruleHandler, rule = _a.rule, _b = _a.inputs, inputs = _b === void 0 ? [] : _b, output = _a.output;
                try {
                    var resolvedInputs = _this.resolveSyncRuleInputs(rule, inputs, runner, data, localDataStore);
                    var handler = ruleHandler.sync;
                    var result = handler.apply(void 0, __spreadArray([], __read(resolvedInputs), false));
                    if (output)
                        localDataStore.set(output, result);
                    return result;
                }
                catch (error) {
                    throw Error("Failed to Run \"".concat(rule, "\" cause of ").concat(error));
                }
            };
            return runner;
        };
        this.resolveRuleInputs = function (rule, inputs, runner, globalData, localDataStore) {
            if (globalData === void 0) { globalData = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var resolvedInputs, innerRules, i, input, result, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            resolvedInputs = [];
                            innerRules = this.getHandlerInnerRules(rule);
                            i = 0;
                            _b.label = 1;
                        case 1:
                            if (!(i < inputs.length)) return [3 /*break*/, 6];
                            input = inputs[i];
                            if (!(this.isRule(input) && !innerRules.rules.includes(i))) return [3 /*break*/, 3];
                            return [4 /*yield*/, runner(input)];
                        case 2:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _a = input;
                            _b.label = 4;
                        case 4:
                            result = _a;
                            resolvedInputs.push(result);
                            _b.label = 5;
                        case 5:
                            i++;
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/, this.getInputsWithActions(runner, globalData, localDataStore, innerRules, resolvedInputs)];
                    }
                });
            });
        };
        this.resolveSyncRuleInputs = function (rule, inputs, runner, globalData, localDataStore) {
            if (globalData === void 0) { globalData = {}; }
            var resolvedInputs = [];
            var innerRules = _this.getHandlerInnerRules(rule);
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                var result = _this.isRule(input) && !innerRules.rules.includes(i) ? runner(input) : input;
                resolvedInputs.push(result);
            }
            return _this.getInputsWithActions(runner, globalData, localDataStore, innerRules, resolvedInputs);
        };
        this.getInputsWithActions = function (runner, globalData, localDataStore, innerRules, resolvedInputs) {
            if (globalData === void 0) { globalData = {}; }
            if (innerRules.runner)
                resolvedInputs.splice(innerRules.runner, 0, runner);
            if (innerRules.localData)
                resolvedInputs.splice(innerRules.localData, 0, localDataStore);
            if (innerRules.globalData)
                resolvedInputs.splice(innerRules.globalData, 0, globalData);
            return resolvedInputs;
        };
        this.getHandlerInnerRules = function (rule) {
            var _a;
            var innerRules = { runner: null, globalData: null, localData: null, rules: [] };
            var _b = __read(_this.getRulesDefinitions([rule]), 1), definition = _b[0];
            if (!(definition === null || definition === void 0 ? void 0 : definition.inputs))
                return innerRules;
            if (((_a = definition === null || definition === void 0 ? void 0 : definition.inputs) === null || _a === void 0 ? void 0 : _a.type) && Object.keys(definition === null || definition === void 0 ? void 0 : definition.inputs).length === 1) {
                if (definition.inputs.type === 'runner')
                    innerRules.runner = 0;
                if (definition.inputs.type === 'globalData')
                    innerRules.globalData = 0;
                if (definition.inputs.type === 'localData')
                    innerRules.localData = 0;
                if (definition.inputs.type === 'rule')
                    innerRules.rules = [0];
            }
            else {
                for (var key in definition === null || definition === void 0 ? void 0 : definition.inputs) {
                    if (definition.inputs[key].type === 'runner')
                        innerRules.runner = definition.inputs[key].index;
                    if (definition.inputs[key].type === 'globalData')
                        innerRules.globalData = definition.inputs[key].index;
                    if (definition.inputs[key].type === 'localData')
                        innerRules.localData = definition.inputs[key].index;
                    if (definition.inputs[key].type === 'rule')
                        innerRules.rules.push(definition.inputs[key].index);
                }
            }
            return innerRules;
        };
        this.isRule = function (data) { return (data && typeof data === 'object' && data[core_types_1.RuleParams.Rule]); };
        this.sync = (options === null || options === void 0 ? void 0 : options.sync) || false;
        this.rules = new Map();
        this.rulesDefinitions = new Map();
    }
    RuleCore.prototype.execute = function (rules, data, options) {
        var localData = new Map();
        var sync = (options === null || options === void 0 ? void 0 : options.sync) || this.sync;
        return sync ? this.createSyncRunContext(localData, data)(rules) : this.createRunContext(localData, data)(rules);
    };
    RuleCore.prototype.setRuleWithDefinition = function (definition, ruleHandler) {
        var finalDefinition = definition;
        var finalRuleHandler = ruleHandler;
        var existingRule = this.rules.get(definition.identifier.name);
        if (existingRule) {
            finalRuleHandler = Object.assign(existingRule, ruleHandler);
            finalDefinition = this.rulesDefinitions.get(definition.identifier.name) || definition;
        }
        finalRuleHandler.async = finalRuleHandler.async || finalRuleHandler.sync;
        finalRuleHandler.sync = finalRuleHandler.sync || finalRuleHandler.async;
        this.rules.set(definition.identifier.name, finalRuleHandler);
        this.rulesDefinitions.set(definition.identifier.name, finalDefinition);
        if (definition.identifier.shortcut) {
            this.rulesDefinitions.set(definition.identifier.shortcut, finalDefinition);
            this.rules.set(definition.identifier.shortcut, finalRuleHandler);
        }
    };
    RuleCore.prototype.getRuleParams = function (jsonLang) {
        var rule = jsonLang[core_types_1.RuleParams.Rule];
        var inputs = jsonLang[core_types_1.RuleParams.Input];
        var output = jsonLang[core_types_1.RuleParams.Output];
        if (!Array.isArray(inputs))
            throw new Error('Invalid Rule, $I must be an array');
        var ruleHandler = this.rules.get(rule);
        if (!ruleHandler)
            throw Error("The \"".concat(rule, "\" Rule is not exist"));
        return { ruleHandler: ruleHandler, rule: rule, inputs: inputs, output: output };
    };
    return RuleCore;
}());
exports.RuleCore = RuleCore;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 4037:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.DataScope = exports.CoreRules = exports.RuleParams = void 0;
var RuleParams;
(function (RuleParams) {
    RuleParams["Rule"] = "$R";
    RuleParams["Input"] = "$I";
    RuleParams["Output"] = "$O";
})(RuleParams = exports.RuleParams || (exports.RuleParams = {}));
var CoreRules;
(function (CoreRules) {
    CoreRules["Data"] = "Data";
})(CoreRules = exports.CoreRules || (exports.CoreRules = {}));
var DataScope;
(function (DataScope) {
    DataScope["External"] = "External";
    DataScope["Internal"] = "Internal";
})(DataScope = exports.DataScope || (exports.DataScope = {}));
;
//# sourceMappingURL=core.types.js.map

/***/ }),

/***/ 793:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RuleExtension = exports.JsonLangExtension = void 0;
var rule_parser_1 = __webpack_require__(3572);
function JsonLangExtension(group) {
    return function (target) {
        Reflect.defineMetadata('jsonlang:group', { name: group }, target);
    };
}
exports.JsonLangExtension = JsonLangExtension;
function RuleExtension(definition) {
    var _a = definition || {}, identifier = _a.identifier, output = _a.output;
    return function (target, propertyKey) {
        var _a, _b;
        var argsTypes = ((_a = Reflect.getMetadata('design:paramtypes', target, propertyKey)) === null || _a === void 0 ? void 0 : _a.map(function (arg) { return arg.name; })) || [];
        var returnType = (_b = Reflect.getMetadata('design:returntype', target, propertyKey)) === null || _b === void 0 ? void 0 : _b.name;
        var completedDefinition = rule_parser_1.RuleDefinitionParser.parse(target[propertyKey], argsTypes, __assign(__assign({}, definition), { identifier: __assign(__assign({}, identifier), { name: (identifier === null || identifier === void 0 ? void 0 : identifier.name) || propertyKey }), output: output || { type: returnType } }));
        Reflect.defineMetadata('jsonlang:rule', completedDefinition, target.constructor, propertyKey);
    };
}
exports.RuleExtension = RuleExtension;
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ 8173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__webpack_require__(1738);
__exportStar(__webpack_require__(3337), exports);
__exportStar(__webpack_require__(4037), exports);
__exportStar(__webpack_require__(793), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3572:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RuleDefinitionParser = void 0;
var RuleDefinitionParser = /** @class */ (function () {
    function RuleDefinitionParser() {
    }
    RuleDefinitionParser.parse = function (handler, argsTypes, definition) {
        var _a, _b, _c, _d;
        if (argsTypes === void 0) { argsTypes = []; }
        var _e = definition || {}, identifier = _e.identifier, inputs = _e.inputs, output = _e.output, sync = _e.sync;
        var ruleInputs = {};
        var argsNames = ((_d = (_c = (_b = (_a = handler.toString()) === null || _a === void 0 ? void 0 : _a.match(/\((.*?)\)/)) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.split(',')) === null || _d === void 0 ? void 0 : _d.map(function (i) { return i.trim(); })) || [];
        if (argsNames.length === 1 && argsNames[0].length === 0 && argsTypes[0] === 'Object') {
            ruleInputs = { type: 'array' };
        }
        else {
            argsNames.forEach(function (argName, index) {
                var type = RuleDefinitionParser.getType(argName, argsTypes[index]);
                ruleInputs[argName] = __assign({ type: type, index: index }, (inputs ? inputs[argName] : {}));
            });
        }
        var ruleIdentifier = __assign({ name: identifier.name, group: identifier === null || identifier === void 0 ? void 0 : identifier.group }, ((identifier === null || identifier === void 0 ? void 0 : identifier.shortcut) ? { shortcut: identifier === null || identifier === void 0 ? void 0 : identifier.shortcut } : {}));
        return {
            identifier: ruleIdentifier,
            inputs: ruleInputs,
            output: output,
            sync: sync
        };
    };
    RuleDefinitionParser.getType = function (arg, type) {
        if (arg === '$runner') {
            return 'runner';
        }
        else if (arg.startsWith('$rule')) {
            return 'rule';
        }
        else if (arg.startsWith('$globalData')) {
            return 'globalData';
        }
        else if (arg.startsWith('$localData')) {
            return 'localData';
        }
        else if (arg.startsWith('$scopedData')) {
            return 'scopedData';
        }
        else if (!type) {
            return 'any';
        }
        return { type: type };
    };
    return RuleDefinitionParser;
}());
exports.RuleDefinitionParser = RuleDefinitionParser;
//# sourceMappingURL=rule-parser.js.map

/***/ }),

/***/ 9875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(6179), exports);
__exportStar(__webpack_require__(8173), exports);
__exportStar(__webpack_require__(4961), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7450:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.DataRules = void 0;
var core_1 = __webpack_require__(8173);
var definitions_1 = __webpack_require__(3634);
var DataRules = /** @class */ (function () {
    function DataRules() {
    }
    DataRules.prototype.getDate = function (varName, type, $localData, $globalData) {
        var outputValue;
        if (type === core_1.DataScope.External)
            outputValue = ['', '*', null].includes(varName) ? $globalData : $globalData[varName];
        if (type === core_1.DataScope.Internal)
            outputValue = ['', '*', null].includes(varName) ? Object.fromEntries($localData) : $localData === null || $localData === void 0 ? void 0 : $localData.get(varName);
        return outputValue || null;
    };
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.dataDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Map, Object]),
        __metadata("design:returntype", void 0)
    ], DataRules.prototype, "getDate");
    DataRules = __decorate([
        (0, core_1.JsonLangExtension)('Data')
    ], DataRules);
    return DataRules;
}());
exports.DataRules = DataRules;
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 3634:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.dataDefinition = void 0;
/*=============================== Data ================================== */
exports.dataDefinition = {
    identifier: { name: 'GetData', shortcut: 'Data' },
    inputs: { varName: { type: 'string', description: 'use * to get all data' }, type: { type: 'string', "enum": ['External', 'Internal', 'Scoped'] } },
    output: { type: 'any' }
};
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 4961:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(7450), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.IfDefinition = exports.lessThanOrEqualDefinition = exports.greaterThanOrEqualDefinition = exports.lessThanDefinition = exports.greaterThanDefinition = exports.notDefinition = exports.notEqualDefinition = exports.equalDefinition = exports.orDefinition = exports.andDefinition = exports.isObjectDefinition = exports.isArrayDefinition = exports.isBooleanDefinition = exports.isStringDefinition = exports.isNumberDefinition = exports.isEmptyDefinition = exports.isNullDefinition = void 0;
exports.isNullDefinition = {
    identifier: { name: 'IsNull' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isEmptyDefinition = {
    identifier: { name: 'IsEmpty' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isNumberDefinition = {
    identifier: { name: 'IsNumber', shortcut: 'IsNum' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isStringDefinition = {
    identifier: { name: 'IsString', shortcut: 'IsStr' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isBooleanDefinition = {
    identifier: { name: 'IsBoolean', shortcut: 'IsBool' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isArrayDefinition = {
    identifier: { name: 'IsArray', shortcut: 'IsArr' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.isObjectDefinition = {
    identifier: { name: 'IsObject', shortcut: 'IsObj' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.andDefinition = {
    identifier: { name: 'And', shortcut: '&&' },
    inputs: { type: 'array' },
    output: { type: 'boolean' }
};
exports.orDefinition = {
    identifier: { name: 'Or', shortcut: '||' },
    inputs: { type: 'array' },
    output: { type: 'boolean' }
};
exports.equalDefinition = {
    identifier: { name: 'Equal', shortcut: '==' },
    inputs: { lhs: { type: 'any' }, rhs: { type: 'any' } },
    output: { type: 'boolean' }
};
exports.notEqualDefinition = {
    identifier: { name: 'NotEqual', shortcut: '!=' },
    inputs: { lhs: { type: 'any' }, rhs: { type: 'any' } },
    output: { type: 'boolean' }
};
exports.notDefinition = {
    identifier: { name: 'Not', shortcut: '!' },
    inputs: { type: 'any' },
    output: { type: 'boolean' }
};
exports.greaterThanDefinition = {
    identifier: { name: 'GreaterThan', shortcut: '>' },
    inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.lessThanDefinition = {
    identifier: { name: 'LessThan', shortcut: '<' },
    inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.greaterThanOrEqualDefinition = {
    identifier: { name: 'GreaterThanOrEqual', shortcut: '>=' },
    inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.lessThanOrEqualDefinition = {
    identifier: { name: 'LessThanOrEqual', shortcut: '<=' },
    inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.IfDefinition = {
    identifier: { name: 'If' },
    inputs: { $rule_condition: { type: 'rule' }, $rule_then: { type: 'rule' }, $rule_else: { type: 'rule' } },
    output: { type: 'boolean' }
};
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2952:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(2177), exports);
__exportStar(__webpack_require__(5846), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.LogicRules = void 0;
var core_1 = __webpack_require__(9875);
var definitions_1 = __webpack_require__(5846);
var LogicRules = /** @class */ (function () {
    function LogicRules() {
    }
    LogicRules.prototype.isEmpty = function (input) {
        return input === null || input === undefined || input === '' || ['[]', '{}'].includes(JSON.stringify(input));
    };
    LogicRules.prototype.isNull = function (input) {
        return input === null;
    };
    LogicRules.prototype.isNumber = function (input) {
        return input === 'number';
    };
    LogicRules.prototype.isString = function (input) {
        return input === 'string';
    };
    LogicRules.prototype.isBoolean = function (input) {
        return input === 'boolean';
    };
    LogicRules.prototype.isArray = function (input) {
        return Array.isArray(input);
    };
    LogicRules.prototype.isObject = function (input) {
        return typeof input === 'object' && !Array.isArray(input);
    };
    LogicRules.prototype.and = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).every(function (input) { return input; });
    };
    LogicRules.prototype.or = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).some(function (input) { return input; });
    };
    LogicRules.prototype.equal = function (lhs, rhs) {
        if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
            var _a = __read(this.castToString(lhs, rhs), 2), stringLHS = _a[0], stringRHS = _a[1];
            return stringLHS === stringRHS;
        }
        else {
            return lhs === rhs;
        }
    };
    LogicRules.prototype.notEqual = function (lhs, rhs) {
        if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
            var _a = __read(this.castToString(lhs, rhs), 2), stringLHS = _a[0], stringRHS = _a[1];
            return stringLHS !== stringRHS;
        }
        else {
            return lhs !== rhs;
        }
    };
    LogicRules.prototype.not = function (value) {
        return !value;
    };
    LogicRules.prototype.greaterThan = function (lhs, rhs) {
        if (this.hasObjects(lhs, rhs))
            return false;
        var _a = __read(this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
        return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS > parsedRHS : false;
    };
    LogicRules.prototype.lessThan = function (lhs, rhs) {
        if (this.hasObjects(lhs, rhs))
            return false;
        var _a = __read(this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
        return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS < parsedRHS : false;
    };
    LogicRules.prototype.greaterThanOrEqual = function (lhs, rhs) {
        if (this.hasObjects(lhs, rhs))
            return false;
        var _a = __read(this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
        return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS >= parsedRHS : false;
    };
    LogicRules.prototype.lessThanOrEqual = function (lhs, rhs) {
        if (this.hasObjects(lhs, rhs))
            return false;
        var _a = __read(this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
        return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS <= parsedRHS : false;
    };
    LogicRules.prototype["if"] = function ($rule_condition, $rule_then, $rule_else, $runner) {
        return __awaiter(this, void 0, void 0, function () {
            var condition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!$runner)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, $runner($rule_condition)];
                    case 1:
                        condition = _a.sent();
                        if (!condition) return [3 /*break*/, 3];
                        return [4 /*yield*/, $runner($rule_then)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, $runner($rule_else)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LogicRules.prototype.syncIf = function ($rule_condition, $rule_then, $rule_else, $runner) {
        if (!$runner)
            return false;
        var condition = $runner($rule_condition);
        if (condition) {
            return $runner($rule_then);
        }
        else {
            return $runner($rule_else);
        }
    };
    LogicRules.prototype.areSameType = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).slice(1).every(function (i) { return typeof i === typeof inputs[0]; });
    };
    LogicRules.prototype.hasObjects = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).some(function (i) { return typeof i === 'object'; });
    };
    LogicRules.prototype.castToString = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).map(function (i) { return typeof i === 'string' ? i : JSON.stringify(i); });
    };
    LogicRules.prototype.jsonParse = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return __spreadArray([], __read(inputs), false).map(function (i) {
            if (typeof i === 'string') {
                try {
                    var result = JSON.parse(i);
                    return result;
                }
                catch (_a) {
                    return undefined;
                }
            }
            else {
                return i;
            }
        });
    };
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isEmptyDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isEmpty");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isNullDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isNull");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isNumberDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isNumber");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isStringDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isString");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isBooleanDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isBoolean");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isArrayDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isArray");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.isObjectDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "isObject");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.andDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "and");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.orDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "or");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.equalDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "equal");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.notEqualDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "notEqual");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.notDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "not");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.greaterThanDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "greaterThan");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.lessThanDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "lessThan");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.greaterThanOrEqualDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "greaterThanOrEqual");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.lessThanOrEqualDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "lessThanOrEqual");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.IfDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Function]),
        __metadata("design:returntype", Promise)
    ], LogicRules.prototype, "if");
    __decorate([
        (0, core_1.RuleExtension)(__assign(__assign({}, definitions_1.IfDefinition), { sync: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LogicRules.prototype, "syncIf");
    LogicRules = __decorate([
        (0, core_1.JsonLangExtension)('Logic')
    ], LogicRules);
    return LogicRules;
}());
exports.LogicRules = LogicRules;
//# sourceMappingURL=logic.js.map

/***/ }),

/***/ 5239:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.maximumDefinition = exports.minimumDefinition = exports.divideDefinition = exports.multiplyDefinition = exports.subtractDefinition = exports.sumDefinition = void 0;
exports.sumDefinition = {
    identifier: { name: 'Sum', shortcut: '+' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.subtractDefinition = {
    identifier: { name: 'Subtract', shortcut: '-' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.multiplyDefinition = {
    identifier: { name: 'Multiply', shortcut: '*' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.divideDefinition = {
    identifier: { name: 'Divide', shortcut: '/' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.minimumDefinition = {
    identifier: { name: 'Minimum', shortcut: 'Min' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
exports.maximumDefinition = {
    identifier: { name: 'Maximum', shortcut: 'Max' },
    inputs: { type: 'array', items: { type: 'number' } },
    output: { type: 'boolean' }
};
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 9503:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(5235), exports);
__exportStar(__webpack_require__(5239), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MathRules = void 0;
var core_1 = __webpack_require__(9875);
var definitions_1 = __webpack_require__(5239);
var MathRules = /** @class */ (function () {
    function MathRules() {
    }
    MathRules.prototype.sum = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a + b; }) : 0;
    };
    MathRules.prototype.subtract = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a - b; }) : 0;
    };
    MathRules.prototype.multiply = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a * b; }) : 0;
    };
    MathRules.prototype.divide = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) && this.hasNoZero(arrayOfInputs.slice(1)) ? arrayOfInputs.reduce(function (a, b) { return a / b; }) : 0;
    };
    MathRules.prototype.min = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) ? Math.min.apply(Math, __spreadArray([], __read(inputs), false)) : null;
    };
    MathRules.prototype.max = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var arrayOfInputs = __spreadArray([], __read(inputs), false);
        return this.isNumber(arrayOfInputs) ? Math.max.apply(Math, __spreadArray([], __read(inputs), false)) : null;
    };
    MathRules.prototype.isNumber = function (inputs) {
        return inputs.every(function (i) { return typeof i === 'number'; });
    };
    MathRules.prototype.hasNoZero = function (inputs) {
        return inputs.every(function (i) { return i !== 0; });
    };
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.sumDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "sum");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.subtractDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "subtract");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.multiplyDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "multiply");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.divideDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "divide");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.minimumDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "min");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.maximumDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MathRules.prototype, "max");
    MathRules = __decorate([
        (0, core_1.JsonLangExtension)('Math')
    ], MathRules);
    return MathRules;
}());
exports.MathRules = MathRules;
//# sourceMappingURL=math.js.map

/***/ }),

/***/ 7448:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.deleteDefinition = exports.updateDefinition = exports.setDefinition = exports.getDefinition = void 0;
exports.getDefinition = {
    identifier: { name: 'Get' },
    inputs: { path: { type: 'array' }, defaultValue: { type: 'any' }, data: { type: 'object' } },
    output: { type: 'boolean' }
};
exports.setDefinition = {
    identifier: { name: 'Set' },
    inputs: { path: { type: 'array' }, value: { type: 'any' }, data: { type: 'object' } },
    output: { type: 'boolean' }
};
exports.updateDefinition = {
    identifier: { name: 'Update' },
    inputs: { path: { type: 'array' }, value: { type: 'any' }, data: { type: 'object' } },
    output: { type: 'boolean' }
};
exports.deleteDefinition = {
    identifier: { name: 'Delete' },
    inputs: { path: { type: 'array' }, data: { type: 'object' } },
    output: { type: 'boolean' }
};
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 6619:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(7279), exports);
__exportStar(__webpack_require__(7448), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7279:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.ObjectRules = void 0;
var core_1 = __webpack_require__(9875);
var definitions_1 = __webpack_require__(7448);
var ObjectRules = /** @class */ (function () {
    function ObjectRules() {
        var _this = this;
        this.isArrayOfPaths = function (path) {
            if (!Array.isArray(path))
                return false;
            return path.every(function (p) { return typeof p === 'string'; });
        };
        this.baseGet = function (pathProps, data) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return undefined;
            return pathProps.length === 0 ? (property === '*' ? data : data[property]) : _this.baseGet(pathProps, data[property]);
        };
        this.baseSet = function (pathProps, data, value, upsert) {
            if (upsert === void 0) { upsert = false; }
            var lastKeyIndex = pathProps.length - 1;
            for (var i = 0; i < lastKeyIndex; ++i) {
                var property = pathProps[i];
                if (!(property in data)) {
                    data[property] = {};
                }
                data = data[property];
            }
            data[pathProps[lastKeyIndex]] = value;
            return true;
        };
        this.baseUpdate = function (pathProps, data, value) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return false;
            if (pathProps.length === 0) {
                data[property] = value;
                return true;
            }
            else {
                return _this.baseUpdate(pathProps, data[property], value);
            }
        };
        this.baseDelete = function (pathProps, data) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return false;
            if (pathProps.length === 0) {
                delete data[property];
                return true;
            }
            else {
                return _this.baseDelete(pathProps, data[property]);
            }
        };
        this.arrayEleNumRegex = /^\[([0-9]+)\]/;
    }
    ObjectRules.prototype.getPath = function (path) {
        var pathProps = path;
        if (typeof path === 'string')
            pathProps = path.split('.');
        return this.isArrayOfPaths(pathProps) && pathProps.length > 0 ? pathProps : undefined;
    };
    ObjectRules.prototype.set = function (path, value, data) {
        var pathProps = this.getPath(path);
        return data && pathProps && value ? this.baseSet(pathProps, data, value, true) : false;
    };
    ObjectRules.prototype.get = function (path, defaultValue, data) {
        var pathProps = this.getPath(path);
        // defaultValue = defaultValue || 'invalidPath';
        var result = data && pathProps ? this.baseGet(pathProps, data) : undefined;
        return result === undefined ? defaultValue : result;
    };
    ObjectRules.prototype.update = function (path, value, data) {
        var pathProps = this.getPath(path);
        return data && pathProps && value ? this.baseUpdate(pathProps, data, value) : false;
    };
    ObjectRules.prototype["delete"] = function (path, data) {
        var pathProps = this.getPath(path);
        return data && pathProps ? this.baseDelete(pathProps, data) : false;
    };
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.setDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ObjectRules.prototype, "set");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.getDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ObjectRules.prototype, "get");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.updateDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ObjectRules.prototype, "update");
    __decorate([
        (0, core_1.RuleExtension)(definitions_1.deleteDefinition),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], ObjectRules.prototype, "delete");
    ObjectRules = __decorate([
        (0, core_1.JsonLangExtension)('Object'),
        __metadata("design:paramtypes", [])
    ], ObjectRules);
    return ObjectRules;
}());
exports.ObjectRules = ObjectRules;
//# sourceMappingURL=object.js.map

/***/ })

}]);