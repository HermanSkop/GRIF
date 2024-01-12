// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
                if (!jumped && currentRequire) {
                    return currentRequire(name, true);
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true);
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === 'string') {
                    return nodeRequire(name);
                }

                var err = new Error('Cannot find module \'' + name + '\'');
                err.code = 'MODULE_NOT_FOUND';
                throw err;
            }

            localRequire.resolve = resolve;
            localRequire.cache = {};

            var module = cache[name] = new newRequire.Module(name);

            modules[name][0].call(module.exports, localRequire, module, module.exports, this);
        }

        return cache[name].exports;

        function localRequire(x) {
            return newRequire(localRequire.resolve(x));
        }

        function resolve(x) {
            return modules[name][1][x] || x;
        }
    }

    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
        modules[id] = [function (require, module) {
            module.exports = exports;
        }, {}];
    };

    var error;
    for (var i = 0; i < entry.length; i++) {
        try {
            newRequire(entry[i]);
        } catch (e) {
            // Save first error but execute all entries
            if (!error) {
                error = e;
            }
        }
    }

    if (entry.length) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(entry[entry.length - 1]);

        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") {
            module.exports = mainExports;

            // RequireJS
        } else if (typeof define === "function" && define.amd) {
            define(function () {
                return mainExports;
            });

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports;
        }
    }

    // Override the current require with this new one
    parcelRequire = newRequire;

    if (error) {
        // throw error from earlier, _after updating parcelRequire_
        throw error;
    }

    return newRequire;
})({
    "../node_modules/@popperjs/core/lib/enums.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.write = exports.viewport = exports.variationPlacements = exports.top = exports.start = exports.right = exports.reference = exports.read = exports.popper = exports.placements = exports.modifierPhases = exports.main = exports.left = exports.end = exports.clippingParents = exports.bottom = exports.beforeWrite = exports.beforeRead = exports.beforeMain = exports.basePlacements = exports.auto = exports.afterWrite = exports.afterRead = exports.afterMain = void 0;
        var top = exports.top = 'top';
        var bottom = exports.bottom = 'bottom';
        var right = exports.right = 'right';
        var left = exports.left = 'left';
        var auto = exports.auto = 'auto';
        var basePlacements = exports.basePlacements = [top, bottom, right, left];
        var start = exports.start = 'start';
        var end = exports.end = 'end';
        var clippingParents = exports.clippingParents = 'clippingParents';
        var viewport = exports.viewport = 'viewport';
        var popper = exports.popper = 'popper';
        var reference = exports.reference = 'reference';
        var variationPlacements = exports.variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
            return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = exports.placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
            return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = exports.beforeRead = 'beforeRead';
        var read = exports.read = 'read';
        var afterRead = exports.afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = exports.beforeMain = 'beforeMain';
        var main = exports.main = 'main';
        var afterMain = exports.afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = exports.beforeWrite = 'beforeWrite';
        var write = exports.write = 'write';
        var afterWrite = exports.afterWrite = 'afterWrite';
        var modifierPhases = exports.modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getNodeName;

        function getNodeName(element) {
            return element ? (element.nodeName || '').toLowerCase() : null;
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getWindow;

        function getWindow(node) {
            if (node == null) {
                return window;
            }
            if (node.toString() !== '[object Window]') {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isElement = isElement;
        exports.isHTMLElement = isHTMLElement;
        exports.isShadowRoot = isShadowRoot;
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function isElement(node) {
            var OwnElement = (0, _getWindow.default)(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }

        function isHTMLElement(node) {
            var OwnElement = (0, _getWindow.default)(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }

        function isShadowRoot(node) {
            // IE 11 has no ShadowRoot
            if (typeof ShadowRoot === 'undefined') {
                return false;
            }
            var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
    }, {"./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],
    "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));
        var _instanceOf = require("../dom-utils/instanceOf.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach(function (name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name]; // arrow is optional + virtual elements

                if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
                    return;
                } // Flow doesn't support to extend this property, but it's the most
                // effective way to apply styles to an HTMLElement
                // $FlowFixMe[cannot-write]

                Object.assign(element.style, style);
                Object.keys(attributes).forEach(function (name) {
                    var value = attributes[name];
                    if (value === false) {
                        element.removeAttribute(name);
                    } else {
                        element.setAttribute(name, value === true ? '' : value);
                    }
                });
            });
        }

        function effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0'
                },
                arrow: {
                    position: 'absolute'
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) {
                Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
            return function () {
                Object.keys(state.elements).forEach(function (name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

                    var style = styleProperties.reduce(function (style, property) {
                        style[property] = '';
                        return style;
                    }, {}); // arrow is optional + virtual elements

                    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
                        return;
                    }
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach(function (attribute) {
                        element.removeAttribute(attribute);
                    });
                });
            };
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'applyStyles',
            enabled: true,
            phase: 'write',
            fn: applyStyles,
            effect: effect,
            requires: ['computeStyles']
        };
    }, {
        "../dom-utils/getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "../dom-utils/instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getBasePlacement;
        var _enums = require("../enums.js");

        function getBasePlacement(placement) {
            return placement.split('-')[0];
        }
    }, {"../enums.js": "../node_modules/@popperjs/core/lib/enums.js"}],
    "../node_modules/@popperjs/core/lib/utils/math.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.round = exports.min = exports.max = void 0;
        var max = exports.max = Math.max;
        var min = exports.min = Math.min;
        var round = exports.round = Math.round;
    }, {}],
    "../node_modules/@popperjs/core/lib/utils/userAgent.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getUAString;

        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
                return uaData.brands.map(function (item) {
                    return item.brand + "/" + item.version;
                }).join(' ');
            }
            return navigator.userAgent;
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isLayoutViewport;
        var _userAgent = _interopRequireDefault(require("../utils/userAgent.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test((0, _userAgent.default)());
        }
    }, {"../utils/userAgent.js": "../node_modules/@popperjs/core/lib/utils/userAgent.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getBoundingClientRect;
        var _instanceOf = require("./instanceOf.js");
        var _math = require("../utils/math.js");
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));
        var _isLayoutViewport = _interopRequireDefault(require("./isLayoutViewport.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) {
                includeScale = false;
            }
            if (isFixedStrategy === void 0) {
                isFixedStrategy = false;
            }
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && (0, _instanceOf.isHTMLElement)(element)) {
                scaleX = element.offsetWidth > 0 ? (0, _math.round)(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? (0, _math.round)(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = (0, _instanceOf.isElement)(element) ? (0, _getWindow.default)(element) : window,
                visualViewport = _ref.visualViewport;
            var addVisualOffsets = !(0, _isLayoutViewport.default)() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width: width,
                height: height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x: x,
                y: y
            };
        }
    }, {
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js",
        "./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "./isLayoutViewport.js": "../node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getLayoutRect;
        var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

        function getLayoutRect(element) {
            var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
            // Fixes https://github.com/popperjs/popper-core/issues/1223

            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) {
                width = clientRect.width;
            }
            if (Math.abs(clientRect.height - height) <= 1) {
                height = clientRect.height;
            }
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: width,
                height: height
            };
        }
    }, {"./getBoundingClientRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/contains.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = contains;
        var _instanceOf = require("./instanceOf.js");

        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

            if (parent.contains(child)) {
                return true;
            } // then fallback to custom implementation with Shadow DOM support
            else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) {
                        return true;
                    } // $FlowFixMe[prop-missing]: need a better way to handle this...

                    next = next.parentNode || next.host;
                } while (next);
            } // Give up, the result is false

            return false;
        }
    }, {"./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getComputedStyle;
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getComputedStyle(element) {
            return (0, _getWindow.default)(element).getComputedStyle(element);
        }
    }, {"./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isTableElement;
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function isTableElement(element) {
            return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
        }
    }, {"./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getDocumentElement;
        var _instanceOf = require("./instanceOf.js");

        function getDocumentElement(element) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return (((0, _instanceOf.isElement)(element) ? element.ownerDocument :
                // $FlowFixMe[prop-missing]
                element.document) || window.document).documentElement;
        }
    }, {"./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getParentNode;
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _instanceOf = require("./instanceOf.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getParentNode(element) {
            if ((0, _getNodeName.default)(element) === 'html') {
                return element;
            }
            return (
                // this is a quicker (but less type safe) way to save quite some bytes from the bundle
                // $FlowFixMe[incompatible-return]
                // $FlowFixMe[prop-missing]
                element.assignedSlot ||
                // step into the shadow DOM of the parent of a slotted node
                element.parentNode || (
                    // DOM Element detected
                    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) ||
                // ShadowRoot detected
                // $FlowFixMe[incompatible-call]: HTMLElement is a Node
                (0, _getDocumentElement.default)(element) // fallback
            );
        }
    }, {
        "./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getOffsetParent;
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));
        var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));
        var _instanceOf = require("./instanceOf.js");
        var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));
        var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));
        var _userAgent = _interopRequireDefault(require("../utils/userAgent.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getTrueOffsetParent(element) {
            if (!(0, _instanceOf.isHTMLElement)(element) ||
                // https://github.com/popperjs/popper-core/issues/837
                (0, _getComputedStyle.default)(element).position === 'fixed') {
                return null;
            }
            return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test((0, _userAgent.default)());
            var isIE = /Trident/i.test((0, _userAgent.default)());
            if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
                // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
                var elementCss = (0, _getComputedStyle.default)(element);
                if (elementCss.position === 'fixed') {
                    return null;
                }
            }
            var currentNode = (0, _getParentNode.default)(element);
            if ((0, _instanceOf.isShadowRoot)(currentNode)) {
                currentNode = currentNode.host;
            }
            while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
                var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
                // create a containing block.
                // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

                if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
                    return currentNode;
                } else {
                    currentNode = currentNode.parentNode;
                }
            }
            return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

        function getOffsetParent(element) {
            var window = (0, _getWindow.default)(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
                offsetParent = getTrueOffsetParent(offsetParent);
            }
            if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
                return window;
            }
            return offsetParent || getContainingBlock(element) || window;
        }
    }, {
        "./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "./getComputedStyle.js": "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "./isTableElement.js": "../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js",
        "./getParentNode.js": "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js",
        "../utils/userAgent.js": "../node_modules/@popperjs/core/lib/utils/userAgent.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getMainAxisFromPlacement;

        function getMainAxisFromPlacement(placement) {
            return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/utils/within.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.within = within;
        exports.withinMaxClamp = withinMaxClamp;
        var _math = require("./math.js");

        function within(min, value, max) {
            return (0, _math.max)(min, (0, _math.min)(value, max));
        }

        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
    }, {"./math.js": "../node_modules/@popperjs/core/lib/utils/math.js"}],
    "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getFreshSideObject;

        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = mergePaddingObject;
        var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function mergePaddingObject(paddingObject) {
            return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
        }
    }, {"./getFreshSideObject.js": "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],
    "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = expandToHashMap;

        function expandToHashMap(value, keys) {
            return keys.reduce(function (hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }, {});
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/modifiers/arrow.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));
        var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));
        var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));
        var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));
        var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));
        var _within = require("../utils/within.js");
        var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));
        var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));
        var _enums = require("../enums.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
        };

        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state,
                name = _ref.name,
                options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = (0, _getBasePlacement.default)(state.placement);
            var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
            var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
            var len = isVertical ? 'height' : 'width';
            if (!arrowElement || !popperOffsets) {
                return;
            }
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = (0, _getLayoutRect.default)(arrowElement);
            var minProp = axis === 'y' ? _enums.top : _enums.left;
            var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
            var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
            // outside of the popper bounds

            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = (0, _within.within)(min, center, max); // Prevents breaking syntax highlighting...

            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }

        function effect(_ref2) {
            var state = _ref2.state,
                options = _ref2.options;
            var _options$element = options.element,
                arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
            if (arrowElement == null) {
                return;
            } // CSS selector

            if (typeof arrowElement === 'string') {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) {
                    return;
                }
            }
            if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
                return;
            }
            state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'arrow',
            enabled: true,
            phase: 'main',
            fn: arrow,
            effect: effect,
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow']
        };
    }, {
        "../utils/getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "../dom-utils/getLayoutRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js",
        "../dom-utils/contains.js": "../node_modules/@popperjs/core/lib/dom-utils/contains.js",
        "../dom-utils/getOffsetParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
        "../utils/getMainAxisFromPlacement.js": "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js",
        "../utils/within.js": "../node_modules/@popperjs/core/lib/utils/within.js",
        "../utils/mergePaddingObject.js": "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js",
        "../utils/expandToHashMap.js": "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/getVariation.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getVariation;

        function getVariation(placement) {
            return placement.split('-')[1];
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        exports.mapToStyles = mapToStyles;
        var _enums = require("../enums.js");
        var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));
        var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));
        var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));
        var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));
        var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));
        var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));
        var _math = require("../utils/math.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        var unsetSides = {
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
            left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x,
                y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: (0, _math.round)(x * dpr) / dpr || 0,
                y: (0, _math.round)(y * dpr) / dpr || 0
            };
        }

        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper,
                popperRect = _ref2.popperRect,
                placement = _ref2.placement,
                variation = _ref2.variation,
                offsets = _ref2.offsets,
                position = _ref2.position,
                gpuAcceleration = _ref2.gpuAcceleration,
                adaptive = _ref2.adaptive,
                roundOffsets = _ref2.roundOffsets,
                isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x,
                x = _offsets$x === void 0 ? 0 : _offsets$x,
                _offsets$y = offsets.y,
                y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
                x: x,
                y: y
            }) : {
                x: x,
                y: y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty('x');
            var hasY = offsets.hasOwnProperty('y');
            var sideX = _enums.left;
            var sideY = _enums.top;
            var win = window;
            if (adaptive) {
                var offsetParent = (0, _getOffsetParent.default)(popper);
                var heightProp = 'clientHeight';
                var widthProp = 'clientWidth';
                if (offsetParent === (0, _getWindow.default)(popper)) {
                    offsetParent = (0, _getDocumentElement.default)(popper);
                    if ((0, _getComputedStyle.default)(offsetParent).position !== 'static' && position === 'absolute') {
                        heightProp = 'scrollHeight';
                        widthProp = 'scrollWidth';
                    }
                } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

                offsetParent = offsetParent;
                if (placement === _enums.top || (placement === _enums.left || placement === _enums.right) && variation === _enums.end) {
                    sideY = _enums.bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
                        // $FlowFixMe[prop-missing]
                        offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === _enums.left || (placement === _enums.top || placement === _enums.bottom) && variation === _enums.end) {
                    sideX = _enums.right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
                        // $FlowFixMe[prop-missing]
                        offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position: position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x: x,
                y: y
            }, (0, _getWindow.default)(popper)) : {
                x: x,
                y: y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }

        function computeStyles(_ref5) {
            var state = _ref5.state,
                options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration,
                gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
                _options$adaptive = options.adaptive,
                adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
                _options$roundOffsets = options.roundOffsets,
                roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: (0, _getBasePlacement.default)(state.placement),
                variation: (0, _getVariation.default)(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration: gpuAcceleration,
                isFixed: state.options.strategy === 'fixed'
            };
            if (state.modifiersData.popperOffsets != null) {
                state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.popperOffsets,
                    position: state.options.strategy,
                    adaptive: adaptive,
                    roundOffsets: roundOffsets
                })));
            }
            if (state.modifiersData.arrow != null) {
                state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: false,
                    roundOffsets: roundOffsets
                })));
            }
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-placement': state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'computeStyles',
            enabled: true,
            phase: 'beforeWrite',
            fn: computeStyles,
            data: {}
        };
    }, {
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "../dom-utils/getOffsetParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
        "../dom-utils/getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "../dom-utils/getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "../dom-utils/getComputedStyle.js": "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js",
        "../utils/getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "../utils/getVariation.js": "../node_modules/@popperjs/core/lib/utils/getVariation.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        var passive = {
            passive: true
        };

        function effect(_ref) {
            var state = _ref.state,
                instance = _ref.instance,
                options = _ref.options;
            var _options$scroll = options.scroll,
                scroll = _options$scroll === void 0 ? true : _options$scroll,
                _options$resize = options.resize,
                resize = _options$resize === void 0 ? true : _options$resize;
            var window = (0, _getWindow.default)(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) {
                scrollParents.forEach(function (scrollParent) {
                    scrollParent.addEventListener('scroll', instance.update, passive);
                });
            }
            if (resize) {
                window.addEventListener('resize', instance.update, passive);
            }
            return function () {
                if (scroll) {
                    scrollParents.forEach(function (scrollParent) {
                        scrollParent.removeEventListener('scroll', instance.update, passive);
                    });
                }
                if (resize) {
                    window.removeEventListener('resize', instance.update, passive);
                }
            };
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'eventListeners',
            enabled: true,
            phase: 'write',
            fn: function fn() {
            },
            effect: effect,
            data: {}
        };
    }, {"../dom-utils/getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],
    "../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getOppositePlacement;
        var hash = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };

        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, function (matched) {
                return hash[matched];
            });
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getOppositeVariationPlacement;
        var hash = {
            start: 'end',
            end: 'start'
        };

        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, function (matched) {
                return hash[matched];
            });
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getWindowScroll;
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getWindowScroll(node) {
            var win = (0, _getWindow.default)(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            };
        }
    }, {"./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getWindowScrollBarX;
        var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getWindowScrollBarX(element) {
            // If <html> has a CSS width greater than the viewport, then this will be
            // incorrect for RTL.
            // Popper 1 is broken in this case and never had a bug report so let's assume
            // it's not an issue. I don't think anyone ever specifies width on <html>
            // anyway.
            // Browsers where the left scrollbar doesn't cause an issue report `0` for
            // this (e.g. Edge 2019, IE11, Safari)
            return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
        }
    }, {
        "./getBoundingClientRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js",
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./getWindowScroll.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getViewportRect;
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));
        var _isLayoutViewport = _interopRequireDefault(require("./isLayoutViewport.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getViewportRect(element, strategy) {
            var win = (0, _getWindow.default)(element);
            var html = (0, _getDocumentElement.default)(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = (0, _isLayoutViewport.default)();
                if (layoutViewport || !layoutViewport && strategy === 'fixed') {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width: width,
                height: height,
                x: x + (0, _getWindowScrollBarX.default)(element),
                y: y
            };
        }
    }, {
        "./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./getWindowScrollBarX.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js",
        "./isLayoutViewport.js": "../node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getDocumentRect;
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));
        var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));
        var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));
        var _math = require("../utils/math.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = (0, _getDocumentElement.default)(element);
            var winScroll = (0, _getWindowScroll.default)(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
            var y = -winScroll.scrollTop;
            if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
                x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
            }
            return {
                width: width,
                height: height,
                x: x,
                y: y
            };
        }
    }, {
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./getComputedStyle.js": "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js",
        "./getWindowScrollBarX.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js",
        "./getWindowScroll.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isScrollParent;
        var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function isScrollParent(element) {
            // Firefox wants us to check `-x` and `-y` variations as well
            var _getComputedStyle = (0, _getComputedStyle2.default)(element),
                overflow = _getComputedStyle.overflow,
                overflowX = _getComputedStyle.overflowX,
                overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
    }, {"./getComputedStyle.js": "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],
    "../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getScrollParent;
        var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));
        var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));
        var _instanceOf = require("./instanceOf.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getScrollParent(node) {
            if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
                // $FlowFixMe[incompatible-return]: assume body is always available
                return node.ownerDocument.body;
            }
            if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
                return node;
            }
            return getScrollParent((0, _getParentNode.default)(node));
        }
    }, {
        "./getParentNode.js": "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js",
        "./isScrollParent.js": "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js",
        "./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = listScrollParents;
        var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));
        var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));
        var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        /*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) {
                list = [];
            }
            var scrollParent = (0, _getScrollParent.default)(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = (0, _getWindow.default)(scrollParent);
            var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList :
                // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
                updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
        }
    }, {
        "./getScrollParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js",
        "./getParentNode.js": "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js",
        "./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "./isScrollParent.js": "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = rectToClientRect;

        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getClippingRect;
        var _enums = require("../enums.js");
        var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));
        var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));
        var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));
        var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));
        var _instanceOf = require("./instanceOf.js");
        var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));
        var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));
        var _contains = _interopRequireDefault(require("./contains.js"));
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));
        var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));
        var _math = require("../utils/math.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getInnerBoundingClientRect(element, strategy) {
            var rect = (0, _getBoundingClientRect.default)(element, false, strategy === 'fixed');
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }

        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element, strategy)) : (0, _instanceOf.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

        function getClippingParents(element) {
            var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
            var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
            var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;
            if (!(0, _instanceOf.isElement)(clipperElement)) {
                return [];
            } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

            return clippingParents.filter(function (clippingParent) {
                return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
            });
        } // Gets the maximum area that the element is visible in due to any number of
// clipping parents

        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = (0, _math.max)(rect.top, accRect.top);
                accRect.right = (0, _math.min)(rect.right, accRect.right);
                accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
                accRect.left = (0, _math.max)(rect.left, accRect.left);
                return accRect;
            }, getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
    }, {
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "./getViewportRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js",
        "./getDocumentRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js",
        "./listScrollParents.js": "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js",
        "./getOffsetParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./getComputedStyle.js": "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "./getBoundingClientRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js",
        "./getParentNode.js": "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js",
        "./contains.js": "../node_modules/@popperjs/core/lib/dom-utils/contains.js",
        "./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "../utils/rectToClientRect.js": "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/computeOffsets.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = computeOffsets;
        var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));
        var _getVariation = _interopRequireDefault(require("./getVariation.js"));
        var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));
        var _enums = require("../enums.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function computeOffsets(_ref) {
            var reference = _ref.reference,
                element = _ref.element,
                placement = _ref.placement;
            var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
            var variation = placement ? (0, _getVariation.default)(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
                case _enums.top:
                    offsets = {
                        x: commonX,
                        y: reference.y - element.height
                    };
                    break;
                case _enums.bottom:
                    offsets = {
                        x: commonX,
                        y: reference.y + reference.height
                    };
                    break;
                case _enums.right:
                    offsets = {
                        x: reference.x + reference.width,
                        y: commonY
                    };
                    break;
                case _enums.left:
                    offsets = {
                        x: reference.x - element.width,
                        y: commonY
                    };
                    break;
                default:
                    offsets = {
                        x: reference.x,
                        y: reference.y
                    };
            }
            var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === 'y' ? 'height' : 'width';
                switch (variation) {
                    case _enums.start:
                        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                        break;
                    case _enums.end:
                        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                        break;
                    default:
                }
            }
            return offsets;
        }
    }, {
        "./getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "./getVariation.js": "../node_modules/@popperjs/core/lib/utils/getVariation.js",
        "./getMainAxisFromPlacement.js": "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/detectOverflow.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = detectOverflow;
        var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));
        var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));
        var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));
        var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));
        var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));
        var _enums = require("../enums.js");
        var _instanceOf = require("../dom-utils/instanceOf.js");
        var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));
        var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        function detectOverflow(state, options) {
            if (options === void 0) {
                options = {};
            }
            var _options = options,
                _options$placement = _options.placement,
                placement = _options$placement === void 0 ? state.placement : _options$placement,
                _options$strategy = _options.strategy,
                strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
                _options$boundary = _options.boundary,
                boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
                _options$rootBoundary = _options.rootBoundary,
                rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
                _options$elementConte = _options.elementContext,
                elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
                _options$altBoundary = _options.altBoundary,
                altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
                _options$padding = _options.padding,
                padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
            var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = (0, _getBoundingClientRect.default)(state.elements.reference);
            var popperOffsets = (0, _computeOffsets.default)({
                reference: referenceClientRect,
                element: popperRect,
                strategy: 'absolute',
                placement: placement
            });
            var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
            // 0 or negative = within the clipping rect

            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

            if (elementContext === _enums.popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach(function (key) {
                    var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
                    overflowOffsets[key] += offset[axis] * multiply;
                });
            }
            return overflowOffsets;
        }
    }, {
        "../dom-utils/getClippingRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js",
        "../dom-utils/getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "../dom-utils/getBoundingClientRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js",
        "./computeOffsets.js": "../node_modules/@popperjs/core/lib/utils/computeOffsets.js",
        "./rectToClientRect.js": "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "../dom-utils/instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "./mergePaddingObject.js": "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js",
        "./expandToHashMap.js": "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = computeAutoPlacement;
        var _getVariation = _interopRequireDefault(require("./getVariation.js"));
        var _enums = require("../enums.js");
        var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));
        var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function computeAutoPlacement(state, options) {
            if (options === void 0) {
                options = {};
            }
            var _options = options,
                placement = _options.placement,
                boundary = _options.boundary,
                rootBoundary = _options.rootBoundary,
                padding = _options.padding,
                flipVariations = _options.flipVariations,
                _options$allowedAutoP = _options.allowedAutoPlacements,
                allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
            var variation = (0, _getVariation.default)(placement);
            var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
                return (0, _getVariation.default)(placement) === variation;
            }) : _enums.basePlacements;
            var allowedPlacements = placements.filter(function (placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            });
            if (allowedPlacements.length === 0) {
                allowedPlacements = placements;
            } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

            var overflows = allowedPlacements.reduce(function (acc, placement) {
                acc[placement] = (0, _detectOverflow.default)(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding
                })[(0, _getBasePlacement.default)(placement)];
                return acc;
            }, {});
            return Object.keys(overflows).sort(function (a, b) {
                return overflows[a] - overflows[b];
            });
        }
    }, {
        "./getVariation.js": "../node_modules/@popperjs/core/lib/utils/getVariation.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "./detectOverflow.js": "../node_modules/@popperjs/core/lib/utils/detectOverflow.js",
        "./getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/flip.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));
        var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));
        var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));
        var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));
        var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));
        var _enums = require("../enums.js");
        var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        function getExpandedFallbackPlacements(placement) {
            if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
                return [];
            }
            var oppositePlacement = (0, _getOppositePlacement.default)(placement);
            return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
        }

        function flip(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;
            if (state.modifiersData[name]._skip) {
                return;
            }
            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
                specifiedFallbackPlacements = options.fallbackPlacements,
                padding = options.padding,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                _options$flipVariatio = options.flipVariations,
                flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
                allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
                return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding,
                    flipVariations: flipVariations,
                    allowedAutoPlacements: allowedAutoPlacements
                }) : placement);
            }, []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map();
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = (0, _getBasePlacement.default)(placement);
                var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;
                var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
                var len = isVertical ? 'width' : 'height';
                var overflow = (0, _detectOverflow.default)(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    altBoundary: altBoundary,
                    padding: padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;
                if (referenceRect[len] > popperRect[len]) {
                    mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
                }
                var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
                var checks = [];
                if (checkMainAxis) {
                    checks.push(overflow[_basePlacement] <= 0);
                }
                if (checkAltAxis) {
                    checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                }
                if (checks.every(function (check) {
                    return check;
                })) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                // `2` may be desired in some cases – research later
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find(function (placement) {
                        var checks = checksMap.get(placement);
                        if (checks) {
                            return checks.slice(0, _i).every(function (check) {
                                return check;
                            });
                        }
                    });
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'flip',
            enabled: true,
            phase: 'main',
            fn: flip,
            requiresIfExists: ['offset'],
            data: {
                _skip: false
            }
        };
    }, {
        "../utils/getOppositePlacement.js": "../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js",
        "../utils/getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "../utils/getOppositeVariationPlacement.js": "../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js",
        "../utils/detectOverflow.js": "../node_modules/@popperjs/core/lib/utils/detectOverflow.js",
        "../utils/computeAutoPlacement.js": "../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "../utils/getVariation.js": "../node_modules/@popperjs/core/lib/utils/getVariation.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/hide.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _enums = require("../enums.js");
        var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) {
                preventedOffsets = {
                    x: 0,
                    y: 0
                };
            }
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }

        function isAnySideFullyClipped(overflow) {
            return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
                return overflow[side] >= 0;
            });
        }

        function hide(_ref) {
            var state = _ref.state,
                name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = (0, _detectOverflow.default)(state, {
                elementContext: 'reference'
            });
            var popperAltOverflow = (0, _detectOverflow.default)(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets: referenceClippingOffsets,
                popperEscapeOffsets: popperEscapeOffsets,
                isReferenceHidden: isReferenceHidden,
                hasPopperEscaped: hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-reference-hidden': isReferenceHidden,
                'data-popper-escaped': hasPopperEscaped
            });
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'hide',
            enabled: true,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: hide
        };
    }, {
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "../utils/detectOverflow.js": "../node_modules/@popperjs/core/lib/utils/detectOverflow.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/offset.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;
        var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));
        var _enums = require("../enums.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// eslint-disable-next-line import/no-unused-modules

        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = (0, _getBasePlacement.default)(placement);
            var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
                    placement: placement
                })) : offset,
                skidding = _ref[0],
                distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }

        function offset(_ref2) {
            var state = _ref2.state,
                options = _ref2.options,
                name = _ref2.name;
            var _options$offset = options.offset,
                offset = _options$offset === void 0 ? [0, 0] : _options$offset;
            var data = _enums.placements.reduce(function (acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }, {});
            var _data$state$placement = data[state.placement],
                x = _data$state$placement.x,
                y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'offset',
            enabled: true,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: offset
        };
    }, {
        "../utils/getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function popperOffsets(_ref) {
            var state = _ref.state,
                name = _ref.name;
            // Offsets are the actual position the popper needs to have to be
            // properly positioned near its reference element
            // This is the most basic placement, and will be adjusted by
            // the modifiers in the next step
            state.modifiersData[name] = (0, _computeOffsets.default)({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: 'absolute',
                placement: state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'popperOffsets',
            enabled: true,
            phase: 'read',
            fn: popperOffsets,
            data: {}
        };
    }, {"../utils/computeOffsets.js": "../node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],
    "../node_modules/@popperjs/core/lib/utils/getAltAxis.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getAltAxis;

        function getAltAxis(axis) {
            return axis === 'x' ? 'y' : 'x';
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _enums = require("../enums.js");
        var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));
        var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));
        var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));
        var _within = require("../utils/within.js");
        var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));
        var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));
        var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));
        var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));
        var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));
        var _math = require("../utils/math.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function preventOverflow(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;
            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                padding = options.padding,
                _options$tether = options.tether,
                tether = _options$tether === void 0 ? true : _options$tether,
                _options$tetherOffset = options.tetherOffset,
                tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = (0, _detectOverflow.default)(state, {
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                altBoundary: altBoundary
            });
            var basePlacement = (0, _getBasePlacement.default)(state.placement);
            var variation = (0, _getVariation.default)(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
            var altAxis = (0, _getAltAxis.default)(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) {
                return;
            }
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
                var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
                var len = mainAxis === 'y' ? 'height' : 'width';
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
                // outside the reference bounds

                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
                // to include its full size in the calculation. If the reference is small
                // and near the edge of a boundary, the popper can overflow even if the
                // reference is not overflowing as well (e.g. virtual elements with no
                // width or height)

                var arrowLen = (0, _within.within)(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = (0, _within.within)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;
                var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === 'y' ? 'height' : 'width';
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [_enums.top, _enums.left].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? (0, _within.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _within.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules
        var _default = exports.default = {
            name: 'preventOverflow',
            enabled: true,
            phase: 'main',
            fn: preventOverflow,
            requiresIfExists: ['offset']
        };
    }, {
        "../enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "../utils/getBasePlacement.js": "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
        "../utils/getMainAxisFromPlacement.js": "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js",
        "../utils/getAltAxis.js": "../node_modules/@popperjs/core/lib/utils/getAltAxis.js",
        "../utils/within.js": "../node_modules/@popperjs/core/lib/utils/within.js",
        "../dom-utils/getLayoutRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js",
        "../dom-utils/getOffsetParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
        "../utils/detectOverflow.js": "../node_modules/@popperjs/core/lib/utils/detectOverflow.js",
        "../utils/getVariation.js": "../node_modules/@popperjs/core/lib/utils/getVariation.js",
        "../utils/getFreshSideObject.js": "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js"
    }],
    "../node_modules/@popperjs/core/lib/modifiers/index.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "applyStyles", {
            enumerable: true,
            get: function () {
                return _applyStyles.default;
            }
        });
        Object.defineProperty(exports, "arrow", {
            enumerable: true,
            get: function () {
                return _arrow.default;
            }
        });
        Object.defineProperty(exports, "computeStyles", {
            enumerable: true,
            get: function () {
                return _computeStyles.default;
            }
        });
        Object.defineProperty(exports, "eventListeners", {
            enumerable: true,
            get: function () {
                return _eventListeners.default;
            }
        });
        Object.defineProperty(exports, "flip", {
            enumerable: true,
            get: function () {
                return _flip.default;
            }
        });
        Object.defineProperty(exports, "hide", {
            enumerable: true,
            get: function () {
                return _hide.default;
            }
        });
        Object.defineProperty(exports, "offset", {
            enumerable: true,
            get: function () {
                return _offset.default;
            }
        });
        Object.defineProperty(exports, "popperOffsets", {
            enumerable: true,
            get: function () {
                return _popperOffsets.default;
            }
        });
        Object.defineProperty(exports, "preventOverflow", {
            enumerable: true,
            get: function () {
                return _preventOverflow.default;
            }
        });
        var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));
        var _arrow = _interopRequireDefault(require("./arrow.js"));
        var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));
        var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));
        var _flip = _interopRequireDefault(require("./flip.js"));
        var _hide = _interopRequireDefault(require("./hide.js"));
        var _offset = _interopRequireDefault(require("./offset.js"));
        var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));
        var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }
    }, {
        "./applyStyles.js": "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js",
        "./arrow.js": "../node_modules/@popperjs/core/lib/modifiers/arrow.js",
        "./computeStyles.js": "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js",
        "./eventListeners.js": "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js",
        "./flip.js": "../node_modules/@popperjs/core/lib/modifiers/flip.js",
        "./hide.js": "../node_modules/@popperjs/core/lib/modifiers/hide.js",
        "./offset.js": "../node_modules/@popperjs/core/lib/modifiers/offset.js",
        "./popperOffsets.js": "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js",
        "./preventOverflow.js": "../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getHTMLElementScroll;

        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getNodeScroll;
        var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));
        var _getWindow = _interopRequireDefault(require("./getWindow.js"));
        var _instanceOf = require("./instanceOf.js");
        var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function getNodeScroll(node) {
            if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
                return (0, _getWindowScroll.default)(node);
            } else {
                return (0, _getHTMLElementScroll.default)(node);
            }
        }
    }, {
        "./getWindowScroll.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js",
        "./getWindow.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "./getHTMLElementScroll.js": "../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"
    }],
    "../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = getCompositeRect;
        var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));
        var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));
        var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));
        var _instanceOf = require("./instanceOf.js");
        var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));
        var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));
        var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));
        var _math = require("../utils/math.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = (0, _math.round)(rect.width) / element.offsetWidth || 1;
            var scaleY = (0, _math.round)(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) {
                isFixed = false;
            }
            var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
            var offsetParentIsScaled = (0, _instanceOf.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
            var documentElement = (0, _getDocumentElement.default)(offsetParent);
            var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if ((0, _getNodeName.default)(offsetParent) !== 'body' ||
                    // https://github.com/popperjs/popper-core/issues/1078
                    (0, _isScrollParent.default)(documentElement)) {
                    scroll = (0, _getNodeScroll.default)(offsetParent);
                }
                if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
                    offsets = (0, _getBoundingClientRect.default)(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) {
                    offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
                }
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
    }, {
        "./getBoundingClientRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js",
        "./getNodeScroll.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js",
        "./getNodeName.js": "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
        "./instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
        "./getWindowScrollBarX.js": "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js",
        "./getDocumentElement.js": "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
        "./isScrollParent.js": "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js",
        "../utils/math.js": "../node_modules/@popperjs/core/lib/utils/math.js"
    }],
    "../node_modules/@popperjs/core/lib/utils/orderModifiers.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = orderModifiers;
        var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255

        function order(modifiers) {
            var map = new Map();
            var visited = new Set();
            var result = [];
            modifiers.forEach(function (modifier) {
                map.set(modifier.name, modifier);
            }); // On visiting object, check for its dependencies and visit them recursively

            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach(function (dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) {
                            sort(depModifier);
                        }
                    }
                });
                result.push(modifier);
            }

            modifiers.forEach(function (modifier) {
                if (!visited.has(modifier.name)) {
                    // check for visited object
                    sort(modifier);
                }
            });
            return result;
        }

        function orderModifiers(modifiers) {
            // order based on dependencies
            var orderedModifiers = order(modifiers); // order based on phase

            return _enums.modifierPhases.reduce(function (acc, phase) {
                return acc.concat(orderedModifiers.filter(function (modifier) {
                    return modifier.phase === phase;
                }));
            }, []);
        }
    }, {"../enums.js": "../node_modules/@popperjs/core/lib/enums.js"}],
    "../node_modules/@popperjs/core/lib/utils/debounce.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = debounce;

        function debounce(fn) {
            var pending;
            return function () {
                if (!pending) {
                    pending = new Promise(function (resolve) {
                        Promise.resolve().then(function () {
                            pending = undefined;
                            resolve(fn());
                        });
                    });
                }
                return pending;
            };
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/utils/mergeByName.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = mergeByName;

        function mergeByName(modifiers) {
            var merged = modifiers.reduce(function (merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }, {}); // IE11 does not support Object.values

            return Object.keys(merged).map(function (key) {
                return merged[key];
            });
        }
    }, {}],
    "../node_modules/@popperjs/core/lib/createPopper.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createPopper = void 0;
        Object.defineProperty(exports, "detectOverflow", {
            enumerable: true,
            get: function () {
                return _detectOverflow.default;
            }
        });
        exports.popperGenerator = popperGenerator;
        var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));
        var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));
        var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));
        var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));
        var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));
        var _debounce = _interopRequireDefault(require("./utils/debounce.js"));
        var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));
        var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));
        var _instanceOf = require("./dom-utils/instanceOf.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        var DEFAULT_OPTIONS = {
            placement: 'bottom',
            modifiers: [],
            strategy: 'absolute'
        };

        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return !args.some(function (element) {
                return !(element && typeof element.getBoundingClientRect === 'function');
            });
        }

        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) {
                generatorOptions = {};
            }
            var _generatorOptions = generatorOptions,
                _generatorOptions$def = _generatorOptions.defaultModifiers,
                defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
                _generatorOptions$def2 = _generatorOptions.defaultOptions,
                defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) {
                    options = defaultOptions;
                }
                var state = {
                    placement: 'bottom',
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference: reference,
                        popper: popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state: state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
                            popper: (0, _listScrollParents.default)(popper)
                        }; // Orders the modifiers based on their dependencies and `phase`
                        // properties

                        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                        state.orderedModifiers = orderedModifiers.filter(function (m) {
                            return m.enabled;
                        });
                        runModifierEffects();
                        return instance.update();
                    },
                    // Sync update – it will always be executed, even if not necessary. This
                    // is useful for low frequency updates where sync behavior simplifies the
                    // logic.
                    // For high frequency updates (e.g. `resize` and `scroll` events), always
                    // prefer the async Popper#update method
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) {
                            return;
                        }
                        var _state$elements = state.elements,
                            reference = _state$elements.reference,
                            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                        // anymore

                        if (!areValidElements(reference, popper)) {
                            return;
                        } // Store the reference and popper rects to be read by modifiers

                        state.rects = {
                            reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
                            popper: (0, _getLayoutRect.default)(popper)
                        }; // Modifiers have the ability to reset the current update cycle. The
                        // most common use case for this is the `flip` modifier changing the
                        // placement, which then needs to re-run all the modifiers, because the
                        // logic was previously ran for the previous placement and is therefore
                        // stale/incorrect

                        state.reset = false;
                        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                        // is filled with the initial data specified by the modifier. This means
                        // it doesn't persist and is fresh on each update.
                        // To ensure persistent data, use `${name}#persistent`

                        state.orderedModifiers.forEach(function (modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        });
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index],
                                fn = _state$orderedModifie.fn,
                                _state$orderedModifie2 = _state$orderedModifie.options,
                                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                                name = _state$orderedModifie.name;
                            if (typeof fn === 'function') {
                                state = fn({
                                    state: state,
                                    options: _options,
                                    name: name,
                                    instance: instance
                                }) || state;
                            }
                        }
                    },
                    // Async and optimistically optimized update – it will not be executed if
                    // not necessary (debounced to run at most once-per-tick)
                    update: (0, _debounce.default)(function () {
                        return new Promise(function (resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        });
                    }),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) {
                    return instance;
                }
                instance.setOptions(options).then(function (state) {
                    if (!isDestroyed && options.onFirstUpdate) {
                        options.onFirstUpdate(state);
                    }
                }); // Modifiers have the ability to execute arbitrary code before the first
                // update cycle runs. They will be executed in the same order as the update
                // cycle. This is useful when a modifier adds some persistent data that
                // other modifiers need to use, but the modifier is run after the dependent
                // one.

                function runModifierEffects() {
                    state.orderedModifiers.forEach(function (_ref) {
                        var name = _ref.name,
                            _ref$options = _ref.options,
                            options = _ref$options === void 0 ? {} : _ref$options,
                            effect = _ref.effect;
                        if (typeof effect === 'function') {
                            var cleanupFn = effect({
                                state: state,
                                name: name,
                                instance: instance,
                                options: options
                            });
                            var noopFn = function noopFn() {
                            };
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    });
                }

                function cleanupModifierEffects() {
                    effectCleanupFns.forEach(function (fn) {
                        return fn();
                    });
                    effectCleanupFns = [];
                }

                return instance;
            };
        }

        var createPopper = exports.createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules
    }, {
        "./dom-utils/getCompositeRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js",
        "./dom-utils/getLayoutRect.js": "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js",
        "./dom-utils/listScrollParents.js": "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js",
        "./dom-utils/getOffsetParent.js": "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
        "./utils/orderModifiers.js": "../node_modules/@popperjs/core/lib/utils/orderModifiers.js",
        "./utils/debounce.js": "../node_modules/@popperjs/core/lib/utils/debounce.js",
        "./utils/mergeByName.js": "../node_modules/@popperjs/core/lib/utils/mergeByName.js",
        "./utils/detectOverflow.js": "../node_modules/@popperjs/core/lib/utils/detectOverflow.js",
        "./dom-utils/instanceOf.js": "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"
    }],
    "../node_modules/@popperjs/core/lib/popper-lite.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.defaultModifiers = exports.createPopper = void 0;
        Object.defineProperty(exports, "detectOverflow", {
            enumerable: true,
            get: function () {
                return _createPopper.detectOverflow;
            }
        });
        Object.defineProperty(exports, "popperGenerator", {
            enumerable: true,
            get: function () {
                return _createPopper.popperGenerator;
            }
        });
        var _createPopper = require("./createPopper.js");
        var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));
        var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));
        var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));
        var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        var defaultModifiers = exports.defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
        var createPopper = exports.createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
            defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules
    }, {
        "./createPopper.js": "../node_modules/@popperjs/core/lib/createPopper.js",
        "./modifiers/eventListeners.js": "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js",
        "./modifiers/popperOffsets.js": "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js",
        "./modifiers/computeStyles.js": "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js",
        "./modifiers/applyStyles.js": "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js"
    }],
    "../node_modules/@popperjs/core/lib/popper.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _exportNames = {
            createPopper: true,
            defaultModifiers: true,
            popperGenerator: true,
            detectOverflow: true,
            createPopperLite: true
        };
        exports.createPopper = void 0;
        Object.defineProperty(exports, "createPopperLite", {
            enumerable: true,
            get: function () {
                return _popperLite.createPopper;
            }
        });
        exports.defaultModifiers = void 0;
        Object.defineProperty(exports, "detectOverflow", {
            enumerable: true,
            get: function () {
                return _createPopper.detectOverflow;
            }
        });
        Object.defineProperty(exports, "popperGenerator", {
            enumerable: true,
            get: function () {
                return _createPopper.popperGenerator;
            }
        });
        var _createPopper = require("./createPopper.js");
        var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));
        var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));
        var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));
        var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));
        var _offset = _interopRequireDefault(require("./modifiers/offset.js"));
        var _flip = _interopRequireDefault(require("./modifiers/flip.js"));
        var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));
        var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));
        var _hide = _interopRequireDefault(require("./modifiers/hide.js"));
        var _popperLite = require("./popper-lite.js");
        var _index = require("./modifiers/index.js");
        Object.keys(_index).forEach(function (key) {
            if (key === "default" || key === "__esModule") return;
            if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
            if (key in exports && exports[key] === _index[key]) return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function () {
                    return _index[key];
                }
            });
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        var defaultModifiers = exports.defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
        var createPopper = exports.createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
            defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

// eslint-disable-next-line import/no-unused-modules

// eslint-disable-next-line import/no-unused-modules
    }, {
        "./createPopper.js": "../node_modules/@popperjs/core/lib/createPopper.js",
        "./modifiers/eventListeners.js": "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js",
        "./modifiers/popperOffsets.js": "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js",
        "./modifiers/computeStyles.js": "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js",
        "./modifiers/applyStyles.js": "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js",
        "./modifiers/offset.js": "../node_modules/@popperjs/core/lib/modifiers/offset.js",
        "./modifiers/flip.js": "../node_modules/@popperjs/core/lib/modifiers/flip.js",
        "./modifiers/preventOverflow.js": "../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js",
        "./modifiers/arrow.js": "../node_modules/@popperjs/core/lib/modifiers/arrow.js",
        "./modifiers/hide.js": "../node_modules/@popperjs/core/lib/modifiers/hide.js",
        "./popper-lite.js": "../node_modules/@popperjs/core/lib/popper-lite.js",
        "./modifiers/index.js": "../node_modules/@popperjs/core/lib/modifiers/index.js"
    }],
    "../node_modules/@popperjs/core/lib/index.js": [function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _exportNames = {
            popperGenerator: true,
            detectOverflow: true,
            createPopperBase: true,
            createPopper: true,
            createPopperLite: true
        };
        Object.defineProperty(exports, "createPopper", {
            enumerable: true,
            get: function () {
                return _popper.createPopper;
            }
        });
        Object.defineProperty(exports, "createPopperBase", {
            enumerable: true,
            get: function () {
                return _createPopper.createPopper;
            }
        });
        Object.defineProperty(exports, "createPopperLite", {
            enumerable: true,
            get: function () {
                return _popperLite.createPopper;
            }
        });
        Object.defineProperty(exports, "detectOverflow", {
            enumerable: true,
            get: function () {
                return _createPopper.detectOverflow;
            }
        });
        Object.defineProperty(exports, "popperGenerator", {
            enumerable: true,
            get: function () {
                return _createPopper.popperGenerator;
            }
        });
        var _enums = require("./enums.js");
        Object.keys(_enums).forEach(function (key) {
            if (key === "default" || key === "__esModule") return;
            if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
            if (key in exports && exports[key] === _enums[key]) return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function () {
                    return _enums[key];
                }
            });
        });
        var _index = require("./modifiers/index.js");
        Object.keys(_index).forEach(function (key) {
            if (key === "default" || key === "__esModule") return;
            if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
            if (key in exports && exports[key] === _index[key]) return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function () {
                    return _index[key];
                }
            });
        });
        var _createPopper = require("./createPopper.js");
        var _popper = require("./popper.js");
        var _popperLite = require("./popper-lite.js");
    }, {
        "./enums.js": "../node_modules/@popperjs/core/lib/enums.js",
        "./modifiers/index.js": "../node_modules/@popperjs/core/lib/modifiers/index.js",
        "./createPopper.js": "../node_modules/@popperjs/core/lib/createPopper.js",
        "./popper.js": "../node_modules/@popperjs/core/lib/popper.js",
        "./popper-lite.js": "../node_modules/@popperjs/core/lib/popper-lite.js"
    }],
    "js/bootstrap.js": [function (require, module, exports) {
        var define;
        var global = arguments[3];

        function _get() {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                _get = Reflect.get.bind();
            } else {
                _get = function _get(target, property, receiver) {
                    var base = _superPropBase(target, property);
                    if (!base) return;
                    var desc = Object.getOwnPropertyDescriptor(base, property);
                    if (desc.get) {
                        return desc.get.call(arguments.length < 3 ? target : receiver);
                    }
                    return desc.value;
                };
            }
            return _get.apply(this, arguments);
        }

        function _superPropBase(object, property) {
            while (!Object.prototype.hasOwnProperty.call(object, property)) {
                object = _getPrototypeOf(object);
                if (object === null) break;
            }
            return object;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true
                }
            });
            Object.defineProperty(subClass, "prototype", {writable: false});
            if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };
            return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
            };
        }

        function _possibleConstructorReturn(self, call) {
            if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
            } else if (call !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined");
            }
            return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
            if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self;
        }

        function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                }));
                return true;
            } catch (e) {
                return false;
            }
        }

        function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
        }

        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter(function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }

        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
                    _defineProperty(e, r, t[r]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
            }
            return e;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {writable: false});
            return Constructor;
        }

        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }

        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }

        function _createForOfIteratorHelper(o, allowArrayLike) {
            var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
            if (!it) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                    if (it) o = it;
                    var i = 0;
                    var F = function F() {
                    };
                    return {
                        s: F, n: function n() {
                            if (i >= o.length) return {done: true};
                            return {done: false, value: o[i++]};
                        }, e: function e(_e) {
                            throw _e;
                        }, f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var normalCompletion = true, didErr = false, err;
            return {
                s: function s() {
                    it = it.call(o);
                }, n: function n() {
                    var step = it.next();
                    normalCompletion = step.done;
                    return step;
                }, e: function e(_e2) {
                    didErr = true;
                    err = _e2;
                }, f: function f() {
                    try {
                        if (!normalCompletion && it.return != null) it.return();
                    } finally {
                        if (didErr) throw err;
                    }
                }
            };
        }

        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }

        function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) {
                Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
            } else {
                obj[key] = value;
            }
            return obj;
        }

        function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
            if (_typeof(input) !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (_typeof(res) !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }

        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
                return typeof o;
            } : function (o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, _typeof(o);
        }

        /*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
        (function (global, factory) {
            (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) : typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
        })(this, function (Popper) {
            'use strict';

            function _interopNamespaceDefault(e) {
                var n = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
                    value: 'Module'
                }));
                if (e) {
                    var _loop = function _loop(k) {
                        if (k !== 'default') {
                            var d = Object.getOwnPropertyDescriptor(e, k);
                            Object.defineProperty(n, k, d.get ? d : {
                                enumerable: true,
                                get: function get() {
                                    return e[k];
                                }
                            });
                        }
                    };
                    for (var k in e) {
                        _loop(k);
                    }
                }
                n.default = e;
                return Object.freeze(n);
            }

            var Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap dom/data.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var elementMap = new Map();
            var Data = {
                set: function set(element, key, instance) {
                    if (!elementMap.has(element)) {
                        elementMap.set(element, new Map());
                    }
                    var instanceMap = elementMap.get(element);

                    // make it clear we only want one instance per element
                    // can be removed later when multiple key/instances are fine to be used
                    if (!instanceMap.has(key) && instanceMap.size !== 0) {
                        // eslint-disable-next-line no-console
                        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
                        return;
                    }
                    instanceMap.set(key, instance);
                },
                get: function get(element, key) {
                    if (elementMap.has(element)) {
                        return elementMap.get(element).get(key) || null;
                    }
                    return null;
                },
                remove: function remove(element, key) {
                    if (!elementMap.has(element)) {
                        return;
                    }
                    var instanceMap = elementMap.get(element);
                    instanceMap.delete(key);

                    // free up element references if there are no instances left for an element
                    if (instanceMap.size === 0) {
                        elementMap.delete(element);
                    }
                }
            };

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/index.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            var MAX_UID = 1000000;
            var MILLISECONDS_MULTIPLIER = 1000;
            var TRANSITION_END = 'transitionend';

            /**
             * Properly escape IDs selectors to handle weird IDs
             * @param {string} selector
             * @returns {string}
             */
            var parseSelector = function parseSelector(selector) {
                if (selector && window.CSS && window.CSS.escape) {
                    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
                    selector = selector.replace(/#([^\s"#']+)/g, function (match, id) {
                        return "#".concat(CSS.escape(id));
                    });
                }
                return selector;
            };

            // Shout-out Angus Croll (https://goo.gl/pxwQGp)
            var toType = function toType(object) {
                if (object === null || object === undefined) {
                    return "".concat(object);
                }
                return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
            };

            /**
             * Public Util API
             */

            var getUID = function getUID(prefix) {
                do {
                    prefix += Math.floor(Math.random() * MAX_UID);
                } while (document.getElementById(prefix));
                return prefix;
            };
            var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
                if (!element) {
                    return 0;
                }

                // Get transition-duration of the element
                var _window$getComputedSt = window.getComputedStyle(element),
                    transitionDuration = _window$getComputedSt.transitionDuration,
                    transitionDelay = _window$getComputedSt.transitionDelay;
                var floatTransitionDuration = Number.parseFloat(transitionDuration);
                var floatTransitionDelay = Number.parseFloat(transitionDelay);

                // Return 0 if element or transition duration is not found
                if (!floatTransitionDuration && !floatTransitionDelay) {
                    return 0;
                }

                // If multiple durations are defined, take the first
                transitionDuration = transitionDuration.split(',')[0];
                transitionDelay = transitionDelay.split(',')[0];
                return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
            };
            var triggerTransitionEnd = function triggerTransitionEnd(element) {
                element.dispatchEvent(new Event(TRANSITION_END));
            };
            var isElement = function isElement(object) {
                if (!object || _typeof(object) !== 'object') {
                    return false;
                }
                if (typeof object.jquery !== 'undefined') {
                    object = object[0];
                }
                return typeof object.nodeType !== 'undefined';
            };
            var getElement = function getElement(object) {
                // it's a jQuery object or a node element
                if (isElement(object)) {
                    return object.jquery ? object[0] : object;
                }
                if (typeof object === 'string' && object.length > 0) {
                    return document.querySelector(parseSelector(object));
                }
                return null;
            };
            var isVisible = function isVisible(element) {
                if (!isElement(element) || element.getClientRects().length === 0) {
                    return false;
                }
                var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
                // Handle `details` element as its content may falsie appear visible when it is closed
                var closedDetails = element.closest('details:not([open])');
                if (!closedDetails) {
                    return elementIsVisible;
                }
                if (closedDetails !== element) {
                    var summary = element.closest('summary');
                    if (summary && summary.parentNode !== closedDetails) {
                        return false;
                    }
                    if (summary === null) {
                        return false;
                    }
                }
                return elementIsVisible;
            };
            var isDisabled = function isDisabled(element) {
                if (!element || element.nodeType !== Node.ELEMENT_NODE) {
                    return true;
                }
                if (element.classList.contains('disabled')) {
                    return true;
                }
                if (typeof element.disabled !== 'undefined') {
                    return element.disabled;
                }
                return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
            };
            var findShadowRoot = function findShadowRoot(element) {
                if (!document.documentElement.attachShadow) {
                    return null;
                }

                // Can find the shadow root otherwise it'll return the document
                if (typeof element.getRootNode === 'function') {
                    var root = element.getRootNode();
                    return root instanceof ShadowRoot ? root : null;
                }
                if (element instanceof ShadowRoot) {
                    return element;
                }

                // when we don't find a shadow root
                if (!element.parentNode) {
                    return null;
                }
                return findShadowRoot(element.parentNode);
            };
            var noop = function noop() {
            };

            /**
             * Trick to restart an element's animation
             *
             * @param {HTMLElement} element
             * @return void
             *
             * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
             */
            var reflow = function reflow(element) {
                element.offsetHeight; // eslint-disable-line no-unused-expressions
            };
            var getjQuery = function getjQuery() {
                if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
                    return window.jQuery;
                }
                return null;
            };
            var DOMContentLoadedCallbacks = [];
            var onDOMContentLoaded = function onDOMContentLoaded(callback) {
                if (document.readyState === 'loading') {
                    // add listener on the first call when the document is in loading state
                    if (!DOMContentLoadedCallbacks.length) {
                        document.addEventListener('DOMContentLoaded', function () {
                            for (var _i = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i < _DOMContentLoadedCall.length; _i++) {
                                var _callback = _DOMContentLoadedCall[_i];
                                _callback();
                            }
                        });
                    }
                    DOMContentLoadedCallbacks.push(callback);
                } else {
                    callback();
                }
            };
            var isRTL = function isRTL() {
                return document.documentElement.dir === 'rtl';
            };
            var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
                onDOMContentLoaded(function () {
                    var $ = getjQuery();
                    /* istanbul ignore if */
                    if ($) {
                        var name = plugin.NAME;
                        var JQUERY_NO_CONFLICT = $.fn[name];
                        $.fn[name] = plugin.jQueryInterface;
                        $.fn[name].Constructor = plugin;
                        $.fn[name].noConflict = function () {
                            $.fn[name] = JQUERY_NO_CONFLICT;
                            return plugin.jQueryInterface;
                        };
                    }
                });
            };
            var execute = function execute(possibleCallback) {
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : possibleCallback;
                return typeof possibleCallback === 'function' ? possibleCallback.apply(void 0, _toConsumableArray(args)) : defaultValue;
            };
            var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
                var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                if (!waitForTransition) {
                    execute(callback);
                    return;
                }
                var durationPadding = 5;
                var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
                var called = false;
                var handler = function handler(_ref) {
                    var target = _ref.target;
                    if (target !== transitionElement) {
                        return;
                    }
                    called = true;
                    transitionElement.removeEventListener(TRANSITION_END, handler);
                    execute(callback);
                };
                transitionElement.addEventListener(TRANSITION_END, handler);
                setTimeout(function () {
                    if (!called) {
                        triggerTransitionEnd(transitionElement);
                    }
                }, emulatedDuration);
            };

            /**
             * Return the previous/next element of a list.
             *
             * @param {array} list    The list of elements
             * @param activeElement   The active element
             * @param shouldGetNext   Choose to get next or previous element
             * @param isCycleAllowed
             * @return {Element|elem} The proper element
             */
            var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
                var listLength = list.length;
                var index = list.indexOf(activeElement);

                // if the element does not exist in the list return an element
                // depending on the direction and if cycle is allowed
                if (index === -1) {
                    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
                }
                index += shouldGetNext ? 1 : -1;
                if (isCycleAllowed) {
                    index = (index + listLength) % listLength;
                }
                return list[Math.max(0, Math.min(index, listLength - 1))];
            };

            /**
             * --------------------------------------------------------------------------
             * Bootstrap dom/event-handler.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
            var stripNameRegex = /\..*/;
            var stripUidRegex = /::\d+$/;
            var eventRegistry = {}; // Events storage
            var uidEvent = 1;
            var customEvents = {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout'
            };
            var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

            /**
             * Private methods
             */

            function makeEventUid(element, uid) {
                return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
            }

            function getElementEvents(element) {
                var uid = makeEventUid(element);
                element.uidEvent = uid;
                eventRegistry[uid] = eventRegistry[uid] || {};
                return eventRegistry[uid];
            }

            function bootstrapHandler(element, fn) {
                return function handler(event) {
                    hydrateObj(event, {
                        delegateTarget: element
                    });
                    if (handler.oneOff) {
                        EventHandler.off(element, event.type, fn);
                    }
                    return fn.apply(element, [event]);
                };
            }

            function bootstrapDelegationHandler(element, selector, fn) {
                return function handler(event) {
                    var domElements = element.querySelectorAll(selector);
                    for (var target = event.target; target && target !== this; target = target.parentNode) {
                        var _iterator = _createForOfIteratorHelper(domElements),
                            _step;
                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var domElement = _step.value;
                                if (domElement !== target) {
                                    continue;
                                }
                                hydrateObj(event, {
                                    delegateTarget: target
                                });
                                if (handler.oneOff) {
                                    EventHandler.off(element, event.type, selector, fn);
                                }
                                return fn.apply(target, [event]);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    }
                };
            }

            function findHandler(events, callable) {
                var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                return Object.values(events).find(function (event) {
                    return event.callable === callable && event.delegationSelector === delegationSelector;
                });
            }

            function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
                var isDelegated = typeof handler === 'string';
                // TODO: tooltip passes `false` instead of selector, so we need to check
                var callable = isDelegated ? delegationFunction : handler || delegationFunction;
                var typeEvent = getTypeEvent(originalTypeEvent);
                if (!nativeEvents.has(typeEvent)) {
                    typeEvent = originalTypeEvent;
                }
                return [isDelegated, callable, typeEvent];
            }

            function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
                if (typeof originalTypeEvent !== 'string' || !element) {
                    return;
                }
                var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
                    _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
                    isDelegated = _normalizeParameters2[0],
                    callable = _normalizeParameters2[1],
                    typeEvent = _normalizeParameters2[2];

                // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
                // this prevents the handler from being dispatched the same way as mouseover or mouseout does
                if (originalTypeEvent in customEvents) {
                    var wrapFunction = function wrapFunction(fn) {
                        return function (event) {
                            if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                                return fn.call(this, event);
                            }
                        };
                    };
                    callable = wrapFunction(callable);
                }
                var events = getElementEvents(element);
                var handlers = events[typeEvent] || (events[typeEvent] = {});
                var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
                if (previousFunction) {
                    previousFunction.oneOff = previousFunction.oneOff && oneOff;
                    return;
                }
                var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
                var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
                fn.delegationSelector = isDelegated ? handler : null;
                fn.callable = callable;
                fn.oneOff = oneOff;
                fn.uidEvent = uid;
                handlers[uid] = fn;
                element.addEventListener(typeEvent, fn, isDelegated);
            }

            function removeHandler(element, events, typeEvent, handler, delegationSelector) {
                var fn = findHandler(events[typeEvent], handler, delegationSelector);
                if (!fn) {
                    return;
                }
                element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
                delete events[typeEvent][fn.uidEvent];
            }

            function removeNamespacedHandlers(element, events, typeEvent, namespace) {
                var storeElementEvent = events[typeEvent] || {};
                for (var _i2 = 0, _Object$entries = Object.entries(storeElementEvent); _i2 < _Object$entries.length; _i2++) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                        handlerKey = _Object$entries$_i[0],
                        event = _Object$entries$_i[1];
                    if (handlerKey.includes(namespace)) {
                        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
                    }
                }
            }

            function getTypeEvent(event) {
                // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
                event = event.replace(stripNameRegex, '');
                return customEvents[event] || event;
            }

            var EventHandler = {
                on: function on(element, event, handler, delegationFunction) {
                    addHandler(element, event, handler, delegationFunction, false);
                },
                one: function one(element, event, handler, delegationFunction) {
                    addHandler(element, event, handler, delegationFunction, true);
                },
                off: function off(element, originalTypeEvent, handler, delegationFunction) {
                    if (typeof originalTypeEvent !== 'string' || !element) {
                        return;
                    }
                    var _normalizeParameters3 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
                        _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
                        isDelegated = _normalizeParameters4[0],
                        callable = _normalizeParameters4[1],
                        typeEvent = _normalizeParameters4[2];
                    var inNamespace = typeEvent !== originalTypeEvent;
                    var events = getElementEvents(element);
                    var storeElementEvent = events[typeEvent] || {};
                    var isNamespace = originalTypeEvent.startsWith('.');
                    if (typeof callable !== 'undefined') {
                        // Simplest case: handler is passed, remove that listener ONLY.
                        if (!Object.keys(storeElementEvent).length) {
                            return;
                        }
                        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
                        return;
                    }
                    if (isNamespace) {
                        for (var _i3 = 0, _Object$keys = Object.keys(events); _i3 < _Object$keys.length; _i3++) {
                            var elementEvent = _Object$keys[_i3];
                            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
                        }
                    }
                    for (var _i4 = 0, _Object$entries2 = Object.entries(storeElementEvent); _i4 < _Object$entries2.length; _i4++) {
                        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
                            keyHandlers = _Object$entries2$_i[0],
                            event = _Object$entries2$_i[1];
                        var handlerKey = keyHandlers.replace(stripUidRegex, '');
                        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                            removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
                        }
                    }
                },
                trigger: function trigger(element, event, args) {
                    if (typeof event !== 'string' || !element) {
                        return null;
                    }
                    var $ = getjQuery();
                    var typeEvent = getTypeEvent(event);
                    var inNamespace = event !== typeEvent;
                    var jQueryEvent = null;
                    var bubbles = true;
                    var nativeDispatch = true;
                    var defaultPrevented = false;
                    if (inNamespace && $) {
                        jQueryEvent = $.Event(event, args);
                        $(element).trigger(jQueryEvent);
                        bubbles = !jQueryEvent.isPropagationStopped();
                        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                        defaultPrevented = jQueryEvent.isDefaultPrevented();
                    }
                    var evt = hydrateObj(new Event(event, {
                        bubbles: bubbles,
                        cancelable: true
                    }), args);
                    if (defaultPrevented) {
                        evt.preventDefault();
                    }
                    if (nativeDispatch) {
                        element.dispatchEvent(evt);
                    }
                    if (evt.defaultPrevented && jQueryEvent) {
                        jQueryEvent.preventDefault();
                    }
                    return evt;
                }
            };

            function hydrateObj(obj) {
                var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _loop2 = function _loop2() {
                    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i5], 2),
                        key = _Object$entries3$_i[0],
                        value = _Object$entries3$_i[1];
                    try {
                        obj[key] = value;
                    } catch (_unused) {
                        Object.defineProperty(obj, key, {
                            configurable: true,
                            get: function get() {
                                return value;
                            }
                        });
                    }
                };
                for (var _i5 = 0, _Object$entries3 = Object.entries(meta); _i5 < _Object$entries3.length; _i5++) {
                    _loop2();
                }
                return obj;
            }

            /**
             * --------------------------------------------------------------------------
             * Bootstrap dom/manipulator.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            function normalizeData(value) {
                if (value === 'true') {
                    return true;
                }
                if (value === 'false') {
                    return false;
                }
                if (value === Number(value).toString()) {
                    return Number(value);
                }
                if (value === '' || value === 'null') {
                    return null;
                }
                if (typeof value !== 'string') {
                    return value;
                }
                try {
                    return JSON.parse(decodeURIComponent(value));
                } catch (_unused) {
                    return value;
                }
            }

            function normalizeDataKey(key) {
                return key.replace(/[A-Z]/g, function (chr) {
                    return "-".concat(chr.toLowerCase());
                });
            }

            var Manipulator = {
                setDataAttribute: function setDataAttribute(element, key, value) {
                    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
                },
                removeDataAttribute: function removeDataAttribute(element, key) {
                    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
                },
                getDataAttributes: function getDataAttributes(element) {
                    if (!element) {
                        return {};
                    }
                    var attributes = {};
                    var bsKeys = Object.keys(element.dataset).filter(function (key) {
                        return key.startsWith('bs') && !key.startsWith('bsConfig');
                    });
                    var _iterator2 = _createForOfIteratorHelper(bsKeys),
                        _step2;
                    try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var key = _step2.value;
                            var pureKey = key.replace(/^bs/, '');
                            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                            attributes[pureKey] = normalizeData(element.dataset[key]);
                        }
                    } catch (err) {
                        _iterator2.e(err);
                    } finally {
                        _iterator2.f();
                    }
                    return attributes;
                },
                getDataAttribute: function getDataAttribute(element, key) {
                    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
                }
            };

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/config.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Class definition
             */
            var Config = /*#__PURE__*/function () {
                function Config() {
                    _classCallCheck(this, Config);
                }

                _createClass(Config, [{
                    key: "_getConfig",
                    value: function _getConfig(config) {
                        config = this._mergeConfigObj(config);
                        config = this._configAfterMerge(config);
                        this._typeCheckConfig(config);
                        return config;
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        return config;
                    }
                }, {
                    key: "_mergeConfigObj",
                    value: function _mergeConfigObj(config, element) {
                        var jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

                        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), _typeof(jsonConfig) === 'object' ? jsonConfig : {}), isElement(element) ? Manipulator.getDataAttributes(element) : {}), _typeof(config) === 'object' ? config : {});
                    }
                }, {
                    key: "_typeCheckConfig",
                    value: function _typeCheckConfig(config) {
                        var configTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
                        for (var _i6 = 0, _Object$entries4 = Object.entries(configTypes); _i6 < _Object$entries4.length; _i6++) {
                            var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i6], 2),
                                property = _Object$entries4$_i[0],
                                expectedTypes = _Object$entries4$_i[1];
                            var value = config[property];
                            var valueType = isElement(value) ? 'element' : toType(value);
                            if (!new RegExp(expectedTypes).test(valueType)) {
                                throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
                            }
                        }
                    }
                }], [{
                    key: "Default",
                    get:
                    // Getters
                        function get() {
                            return {};
                        }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return {};
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        throw new Error('You have to implement the static method "NAME", for each component!');
                    }
                }]);
                return Config;
            }();
            /**
             * --------------------------------------------------------------------------
             * Bootstrap base-component.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var VERSION = '5.3.2';

            /**
             * Class definition
             */
            var BaseComponent = /*#__PURE__*/function (_Config) {
                _inherits(BaseComponent, _Config);
                var _super = _createSuper(BaseComponent);

                function BaseComponent(element, config) {
                    var _this;
                    _classCallCheck(this, BaseComponent);
                    _this = _super.call(this);
                    element = getElement(element);
                    if (!element) {
                        return _possibleConstructorReturn(_this);
                    }
                    _this._element = element;
                    _this._config = _this._getConfig(config);
                    Data.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this));
                    return _this;
                }

                // Public
                _createClass(BaseComponent, [{
                    key: "dispose",
                    value: function dispose() {
                        Data.remove(this._element, this.constructor.DATA_KEY);
                        EventHandler.off(this._element, this.constructor.EVENT_KEY);
                        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
                            _step3;
                        try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                var propertyName = _step3.value;
                                this[propertyName] = null;
                            }
                        } catch (err) {
                            _iterator3.e(err);
                        } finally {
                            _iterator3.f();
                        }
                    }
                }, {
                    key: "_queueCallback",
                    value: function _queueCallback(callback, element) {
                        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                        executeAfterTransition(callback, element, isAnimated);
                    }
                }, {
                    key: "_getConfig",
                    value: function _getConfig(config) {
                        config = this._mergeConfigObj(config, this._element);
                        config = this._configAfterMerge(config);
                        this._typeCheckConfig(config);
                        return config;
                    }

                    // Static
                }], [{
                    key: "getInstance",
                    value: function getInstance(element) {
                        return Data.get(getElement(element), this.DATA_KEY);
                    }
                }, {
                    key: "getOrCreateInstance",
                    value: function getOrCreateInstance(element) {
                        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function get() {
                        return "bs.".concat(this.NAME);
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function get() {
                        return ".".concat(this.DATA_KEY);
                    }
                }, {
                    key: "eventName",
                    value: function eventName(name) {
                        return "".concat(name).concat(this.EVENT_KEY);
                    }
                }]);
                return BaseComponent;
            }(Config);
            /**
             * --------------------------------------------------------------------------
             * Bootstrap dom/selector-engine.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            var getSelector = function getSelector(element) {
                var selector = element.getAttribute('data-bs-target');
                if (!selector || selector === '#') {
                    var hrefAttribute = element.getAttribute('href');

                    // The only valid content that could double as a selector are IDs or classes,
                    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
                    // `document.querySelector` will rightfully complain it is invalid.
                    // See https://github.com/twbs/bootstrap/issues/32273
                    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
                        return null;
                    }

                    // Just in case some CMS puts out a full URL with the anchor appended
                    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
                        hrefAttribute = "#".concat(hrefAttribute.split('#')[1]);
                    }
                    selector = hrefAttribute && hrefAttribute !== '#' ? parseSelector(hrefAttribute.trim()) : null;
                }
                return selector;
            };
            var SelectorEngine = {
                find: function find(selector) {
                    var _ref2;
                    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
                    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
                },
                findOne: function findOne(selector) {
                    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
                    return Element.prototype.querySelector.call(element, selector);
                },
                children: function children(element, selector) {
                    var _ref3;
                    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
                        return child.matches(selector);
                    });
                },
                parents: function parents(element, selector) {
                    var parents = [];
                    var ancestor = element.parentNode.closest(selector);
                    while (ancestor) {
                        parents.push(ancestor);
                        ancestor = ancestor.parentNode.closest(selector);
                    }
                    return parents;
                },
                prev: function prev(element, selector) {
                    var previous = element.previousElementSibling;
                    while (previous) {
                        if (previous.matches(selector)) {
                            return [previous];
                        }
                        previous = previous.previousElementSibling;
                    }
                    return [];
                },
                // TODO: this is now unused; remove later along with prev()
                next: function next(element, selector) {
                    var next = element.nextElementSibling;
                    while (next) {
                        if (next.matches(selector)) {
                            return [next];
                        }
                        next = next.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren: function focusableChildren(element) {
                    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
                        return "".concat(selector, ":not([tabindex^=\"-\"])");
                    }).join(',');
                    return this.find(focusables, element).filter(function (el) {
                        return !isDisabled(el) && isVisible(el);
                    });
                },
                getSelectorFromElement: function getSelectorFromElement(element) {
                    var selector = getSelector(element);
                    if (selector) {
                        return SelectorEngine.findOne(selector) ? selector : null;
                    }
                    return null;
                },
                getElementFromSelector: function getElementFromSelector(element) {
                    var selector = getSelector(element);
                    return selector ? SelectorEngine.findOne(selector) : null;
                },
                getMultipleElementsFromSelector: function getMultipleElementsFromSelector(element) {
                    var selector = getSelector(element);
                    return selector ? SelectorEngine.find(selector) : [];
                }
            };

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/component-functions.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            var enableDismissTrigger = function enableDismissTrigger(component) {
                var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
                var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
                var name = component.NAME;
                EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
                    if (['A', 'AREA'].includes(this.tagName)) {
                        event.preventDefault();
                    }
                    if (isDisabled(this)) {
                        return;
                    }
                    var target = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(name));
                    var instance = component.getOrCreateInstance(target);

                    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
                    instance[method]();
                });
            };

            /**
             * --------------------------------------------------------------------------
             * Bootstrap alert.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$f = 'alert';
            var DATA_KEY$a = 'bs.alert';
            var EVENT_KEY$b = ".".concat(DATA_KEY$a);
            var EVENT_CLOSE = "close".concat(EVENT_KEY$b);
            var EVENT_CLOSED = "closed".concat(EVENT_KEY$b);
            var CLASS_NAME_FADE$5 = 'fade';
            var CLASS_NAME_SHOW$8 = 'show';

            /**
             * Class definition
             */
            var Alert = /*#__PURE__*/function (_BaseComponent) {
                _inherits(Alert, _BaseComponent);
                var _super2 = _createSuper(Alert);

                function Alert() {
                    _classCallCheck(this, Alert);
                    return _super2.apply(this, arguments);
                }

                _createClass(Alert, [{
                    key: "close",
                    value:
                    // Public
                        function close() {
                            var _this2 = this;
                            var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
                            if (closeEvent.defaultPrevented) {
                                return;
                            }
                            this._element.classList.remove(CLASS_NAME_SHOW$8);
                            var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
                            this._queueCallback(function () {
                                return _this2._destroyElement();
                            }, this._element, isAnimated);
                        }

                    // Private
                }, {
                    key: "_destroyElement",
                    value: function _destroyElement() {
                        this._element.remove();
                        EventHandler.trigger(this._element, EVENT_CLOSED);
                        this.dispose();
                    }

                    // Static
                }], [{
                    key: "NAME",
                    get:
                    // Getters
                        function get() {
                            return NAME$f;
                        }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Alert.getOrCreateInstance(this);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config](this);
                        });
                    }
                }]);
                return Alert;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            enableDismissTrigger(Alert, 'close');

            /**
             * jQuery
             */

            defineJQueryPlugin(Alert);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap button.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$e = 'button';
            var DATA_KEY$9 = 'bs.button';
            var EVENT_KEY$a = ".".concat(DATA_KEY$9);
            var DATA_API_KEY$6 = '.data-api';
            var CLASS_NAME_ACTIVE$3 = 'active';
            var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
            var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);

            /**
             * Class definition
             */
            var Button = /*#__PURE__*/function (_BaseComponent2) {
                _inherits(Button, _BaseComponent2);
                var _super3 = _createSuper(Button);

                function Button() {
                    _classCallCheck(this, Button);
                    return _super3.apply(this, arguments);
                }

                _createClass(Button, [{
                    key: "toggle",
                    value:
                    // Public
                        function toggle() {
                            // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
                            this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
                        }

                    // Static
                }], [{
                    key: "NAME",
                    get:
                    // Getters
                        function get() {
                            return NAME$e;
                        }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Button.getOrCreateInstance(this);
                            if (config === 'toggle') {
                                data[config]();
                            }
                        });
                    }
                }]);
                return Button;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
                event.preventDefault();
                var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
                var data = Button.getOrCreateInstance(button);
                data.toggle();
            });

            /**
             * jQuery
             */

            defineJQueryPlugin(Button);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/swipe.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$d = 'swipe';
            var EVENT_KEY$9 = '.bs.swipe';
            var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$9);
            var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$9);
            var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$9);
            var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$9);
            var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$9);
            var POINTER_TYPE_TOUCH = 'touch';
            var POINTER_TYPE_PEN = 'pen';
            var CLASS_NAME_POINTER_EVENT = 'pointer-event';
            var SWIPE_THRESHOLD = 40;
            var Default$c = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            };
            var DefaultType$c = {
                endCallback: '(function|null)',
                leftCallback: '(function|null)',
                rightCallback: '(function|null)'
            };

            /**
             * Class definition
             */
            var Swipe = /*#__PURE__*/function (_Config2) {
                _inherits(Swipe, _Config2);
                var _super4 = _createSuper(Swipe);

                function Swipe(element, config) {
                    var _this3;
                    _classCallCheck(this, Swipe);
                    _this3 = _super4.call(this);
                    _this3._element = element;
                    if (!element || !Swipe.isSupported()) {
                        return _possibleConstructorReturn(_this3);
                    }
                    _this3._config = _this3._getConfig(config);
                    _this3._deltaX = 0;
                    _this3._supportPointerEvents = Boolean(window.PointerEvent);
                    _this3._initEvents();
                    return _this3;
                }

                // Getters
                _createClass(Swipe, [{
                    key: "dispose",
                    value:
                    // Public
                        function dispose() {
                            EventHandler.off(this._element, EVENT_KEY$9);
                        }

                    // Private
                }, {
                    key: "_start",
                    value: function _start(event) {
                        if (!this._supportPointerEvents) {
                            this._deltaX = event.touches[0].clientX;
                            return;
                        }
                        if (this._eventIsPointerPenTouch(event)) {
                            this._deltaX = event.clientX;
                        }
                    }
                }, {
                    key: "_end",
                    value: function _end(event) {
                        if (this._eventIsPointerPenTouch(event)) {
                            this._deltaX = event.clientX - this._deltaX;
                        }
                        this._handleSwipe();
                        execute(this._config.endCallback);
                    }
                }, {
                    key: "_move",
                    value: function _move(event) {
                        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
                    }
                }, {
                    key: "_handleSwipe",
                    value: function _handleSwipe() {
                        var absDeltaX = Math.abs(this._deltaX);
                        if (absDeltaX <= SWIPE_THRESHOLD) {
                            return;
                        }
                        var direction = absDeltaX / this._deltaX;
                        this._deltaX = 0;
                        if (!direction) {
                            return;
                        }
                        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
                    }
                }, {
                    key: "_initEvents",
                    value: function _initEvents() {
                        var _this4 = this;
                        if (this._supportPointerEvents) {
                            EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
                                return _this4._start(event);
                            });
                            EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
                                return _this4._end(event);
                            });
                            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
                        } else {
                            EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
                                return _this4._start(event);
                            });
                            EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
                                return _this4._move(event);
                            });
                            EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
                                return _this4._end(event);
                            });
                        }
                    }
                }, {
                    key: "_eventIsPointerPenTouch",
                    value: function _eventIsPointerPenTouch(event) {
                        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$c;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$c;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$d;
                    }
                }, {
                    key: "isSupported",
                    value: function isSupported() {
                        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
                    }
                }]);
                return Swipe;
            }(Config);
            /**
             * --------------------------------------------------------------------------
             * Bootstrap carousel.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var NAME$c = 'carousel';
            var DATA_KEY$8 = 'bs.carousel';
            var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
            var DATA_API_KEY$5 = '.data-api';
            var ARROW_LEFT_KEY$1 = 'ArrowLeft';
            var ARROW_RIGHT_KEY$1 = 'ArrowRight';
            var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

            var ORDER_NEXT = 'next';
            var ORDER_PREV = 'prev';
            var DIRECTION_LEFT = 'left';
            var DIRECTION_RIGHT = 'right';
            var EVENT_SLIDE = "slide".concat(EVENT_KEY$8);
            var EVENT_SLID = "slid".concat(EVENT_KEY$8);
            var EVENT_KEYDOWN$1 = "keydown".concat(EVENT_KEY$8);
            var EVENT_MOUSEENTER$1 = "mouseenter".concat(EVENT_KEY$8);
            var EVENT_MOUSELEAVE$1 = "mouseleave".concat(EVENT_KEY$8);
            var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$8);
            var EVENT_LOAD_DATA_API$3 = "load".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
            var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
            var CLASS_NAME_CAROUSEL = 'carousel';
            var CLASS_NAME_ACTIVE$2 = 'active';
            var CLASS_NAME_SLIDE = 'slide';
            var CLASS_NAME_END = 'carousel-item-end';
            var CLASS_NAME_START = 'carousel-item-start';
            var CLASS_NAME_NEXT = 'carousel-item-next';
            var CLASS_NAME_PREV = 'carousel-item-prev';
            var SELECTOR_ACTIVE = '.active';
            var SELECTOR_ITEM = '.carousel-item';
            var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
            var SELECTOR_ITEM_IMG = '.carousel-item img';
            var SELECTOR_INDICATORS = '.carousel-indicators';
            var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
            var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
            var KEY_TO_DIRECTION = _defineProperty(_defineProperty({}, ARROW_LEFT_KEY$1, DIRECTION_RIGHT), ARROW_RIGHT_KEY$1, DIRECTION_LEFT);
            var Default$b = {
                interval: 5000,
                keyboard: true,
                pause: 'hover',
                ride: false,
                touch: true,
                wrap: true
            };
            var DefaultType$b = {
                interval: '(number|boolean)',
                // TODO:v6 remove boolean support
                keyboard: 'boolean',
                pause: '(string|boolean)',
                ride: '(boolean|string)',
                touch: 'boolean',
                wrap: 'boolean'
            };

            /**
             * Class definition
             */
            var Carousel = /*#__PURE__*/function (_BaseComponent3) {
                _inherits(Carousel, _BaseComponent3);
                var _super5 = _createSuper(Carousel);

                function Carousel(element, config) {
                    var _this5;
                    _classCallCheck(this, Carousel);
                    _this5 = _super5.call(this, element, config);
                    _this5._interval = null;
                    _this5._activeElement = null;
                    _this5._isSliding = false;
                    _this5.touchTimeout = null;
                    _this5._swipeHelper = null;
                    _this5._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this5._element);
                    _this5._addEventListeners();
                    if (_this5._config.ride === CLASS_NAME_CAROUSEL) {
                        _this5.cycle();
                    }
                    return _this5;
                }

                // Getters
                _createClass(Carousel, [{
                    key: "next",
                    value:
                    // Public
                        function next() {
                            this._slide(ORDER_NEXT);
                        }
                }, {
                    key: "nextWhenVisible",
                    value: function nextWhenVisible() {
                        // FIXME TODO use `document.visibilityState`
                        // Don't call next when the page isn't visible
                        // or the carousel or its parent isn't visible
                        if (!document.hidden && isVisible(this._element)) {
                            this.next();
                        }
                    }
                }, {
                    key: "prev",
                    value: function prev() {
                        this._slide(ORDER_PREV);
                    }
                }, {
                    key: "pause",
                    value: function pause() {
                        if (this._isSliding) {
                            triggerTransitionEnd(this._element);
                        }
                        this._clearInterval();
                    }
                }, {
                    key: "cycle",
                    value: function cycle() {
                        var _this6 = this;
                        this._clearInterval();
                        this._updateInterval();
                        this._interval = setInterval(function () {
                            return _this6.nextWhenVisible();
                        }, this._config.interval);
                    }
                }, {
                    key: "_maybeEnableCycle",
                    value: function _maybeEnableCycle() {
                        var _this7 = this;
                        if (!this._config.ride) {
                            return;
                        }
                        if (this._isSliding) {
                            EventHandler.one(this._element, EVENT_SLID, function () {
                                return _this7.cycle();
                            });
                            return;
                        }
                        this.cycle();
                    }
                }, {
                    key: "to",
                    value: function to(index) {
                        var _this8 = this;
                        var items = this._getItems();
                        if (index > items.length - 1 || index < 0) {
                            return;
                        }
                        if (this._isSliding) {
                            EventHandler.one(this._element, EVENT_SLID, function () {
                                return _this8.to(index);
                            });
                            return;
                        }
                        var activeIndex = this._getItemIndex(this._getActive());
                        if (activeIndex === index) {
                            return;
                        }
                        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
                        this._slide(order, items[index]);
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        if (this._swipeHelper) {
                            this._swipeHelper.dispose();
                        }
                        _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
                    }

                    // Private
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        config.defaultInterval = config.interval;
                        return config;
                    }
                }, {
                    key: "_addEventListeners",
                    value: function _addEventListeners() {
                        var _this9 = this;
                        if (this._config.keyboard) {
                            EventHandler.on(this._element, EVENT_KEYDOWN$1, function (event) {
                                return _this9._keydown(event);
                            });
                        }
                        if (this._config.pause === 'hover') {
                            EventHandler.on(this._element, EVENT_MOUSEENTER$1, function () {
                                return _this9.pause();
                            });
                            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, function () {
                                return _this9._maybeEnableCycle();
                            });
                        }
                        if (this._config.touch && Swipe.isSupported()) {
                            this._addTouchEventListeners();
                        }
                    }
                }, {
                    key: "_addTouchEventListeners",
                    value: function _addTouchEventListeners() {
                        var _this10 = this;
                        var _iterator4 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)),
                            _step4;
                        try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                var img = _step4.value;
                                EventHandler.on(img, EVENT_DRAG_START, function (event) {
                                    return event.preventDefault();
                                });
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                        var endCallBack = function endCallBack() {
                            if (_this10._config.pause !== 'hover') {
                                return;
                            }

                            // If it's a touch-enabled device, mouseenter/leave are fired as
                            // part of the mouse compatibility events on first tap - the carousel
                            // would stop cycling until user tapped out of it;
                            // here, we listen for touchend, explicitly pause the carousel
                            // (as if it's the second time we tap on it, mouseenter compat event
                            // is NOT fired) and after a timeout (to allow for mouse compatibility
                            // events to fire) we explicitly restart cycling

                            _this10.pause();
                            if (_this10.touchTimeout) {
                                clearTimeout(_this10.touchTimeout);
                            }
                            _this10.touchTimeout = setTimeout(function () {
                                return _this10._maybeEnableCycle();
                            }, TOUCHEVENT_COMPAT_WAIT + _this10._config.interval);
                        };
                        var swipeConfig = {
                            leftCallback: function leftCallback() {
                                return _this10._slide(_this10._directionToOrder(DIRECTION_LEFT));
                            },
                            rightCallback: function rightCallback() {
                                return _this10._slide(_this10._directionToOrder(DIRECTION_RIGHT));
                            },
                            endCallback: endCallBack
                        };
                        this._swipeHelper = new Swipe(this._element, swipeConfig);
                    }
                }, {
                    key: "_keydown",
                    value: function _keydown(event) {
                        if (/input|textarea/i.test(event.target.tagName)) {
                            return;
                        }
                        var direction = KEY_TO_DIRECTION[event.key];
                        if (direction) {
                            event.preventDefault();
                            this._slide(this._directionToOrder(direction));
                        }
                    }
                }, {
                    key: "_getItemIndex",
                    value: function _getItemIndex(element) {
                        return this._getItems().indexOf(element);
                    }
                }, {
                    key: "_setActiveIndicatorElement",
                    value: function _setActiveIndicatorElement(index) {
                        if (!this._indicatorsElement) {
                            return;
                        }
                        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
                        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                        activeIndicator.removeAttribute('aria-current');
                        var newActiveIndicator = SelectorEngine.findOne("[data-bs-slide-to=\"".concat(index, "\"]"), this._indicatorsElement);
                        if (newActiveIndicator) {
                            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
                            newActiveIndicator.setAttribute('aria-current', 'true');
                        }
                    }
                }, {
                    key: "_updateInterval",
                    value: function _updateInterval() {
                        var element = this._activeElement || this._getActive();
                        if (!element) {
                            return;
                        }
                        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
                        this._config.interval = elementInterval || this._config.defaultInterval;
                    }
                }, {
                    key: "_slide",
                    value: function _slide(order) {
                        var _this11 = this;
                        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        if (this._isSliding) {
                            return;
                        }
                        var activeElement = this._getActive();
                        var isNext = order === ORDER_NEXT;
                        var nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
                        if (nextElement === activeElement) {
                            return;
                        }
                        var nextElementIndex = this._getItemIndex(nextElement);
                        var triggerEvent = function triggerEvent(eventName) {
                            return EventHandler.trigger(_this11._element, eventName, {
                                relatedTarget: nextElement,
                                direction: _this11._orderToDirection(order),
                                from: _this11._getItemIndex(activeElement),
                                to: nextElementIndex
                            });
                        };
                        var slideEvent = triggerEvent(EVENT_SLIDE);
                        if (slideEvent.defaultPrevented) {
                            return;
                        }
                        if (!activeElement || !nextElement) {
                            // Some weirdness is happening, so we bail
                            // TODO: change tests that use empty divs to avoid this check
                            return;
                        }
                        var isCycling = Boolean(this._interval);
                        this.pause();
                        this._isSliding = true;
                        this._setActiveIndicatorElement(nextElementIndex);
                        this._activeElement = nextElement;
                        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
                        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
                        nextElement.classList.add(orderClassName);
                        reflow(nextElement);
                        activeElement.classList.add(directionalClassName);
                        nextElement.classList.add(directionalClassName);
                        var completeCallBack = function completeCallBack() {
                            nextElement.classList.remove(directionalClassName, orderClassName);
                            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                            _this11._isSliding = false;
                            triggerEvent(EVENT_SLID);
                        };
                        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
                        if (isCycling) {
                            this.cycle();
                        }
                    }
                }, {
                    key: "_isAnimated",
                    value: function _isAnimated() {
                        return this._element.classList.contains(CLASS_NAME_SLIDE);
                    }
                }, {
                    key: "_getActive",
                    value: function _getActive() {
                        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
                    }
                }, {
                    key: "_getItems",
                    value: function _getItems() {
                        return SelectorEngine.find(SELECTOR_ITEM, this._element);
                    }
                }, {
                    key: "_clearInterval",
                    value: function _clearInterval() {
                        if (this._interval) {
                            clearInterval(this._interval);
                            this._interval = null;
                        }
                    }
                }, {
                    key: "_directionToOrder",
                    value: function _directionToOrder(direction) {
                        if (isRTL()) {
                            return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
                        }
                        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
                    }
                }, {
                    key: "_orderToDirection",
                    value: function _orderToDirection(order) {
                        if (isRTL()) {
                            return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
                        }
                        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$b;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$b;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$c;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Carousel.getOrCreateInstance(this, config);
                            if (typeof config === 'number') {
                                data.to(config);
                                return;
                            }
                            if (typeof config === 'string') {
                                if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                                    throw new TypeError("No method named \"".concat(config, "\""));
                                }
                                data[config]();
                            }
                        });
                    }
                }]);
                return Carousel;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
                var target = SelectorEngine.getElementFromSelector(this);
                if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
                    return;
                }
                event.preventDefault();
                var carousel = Carousel.getOrCreateInstance(target);
                var slideIndex = this.getAttribute('data-bs-slide-to');
                if (slideIndex) {
                    carousel.to(slideIndex);
                    carousel._maybeEnableCycle();
                    return;
                }
                if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
                    carousel.next();
                    carousel._maybeEnableCycle();
                    return;
                }
                carousel.prev();
                carousel._maybeEnableCycle();
            });
            EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
                var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
                var _iterator5 = _createForOfIteratorHelper(carousels),
                    _step5;
                try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        var carousel = _step5.value;
                        Carousel.getOrCreateInstance(carousel);
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally {
                    _iterator5.f();
                }
            });

            /**
             * jQuery
             */

            defineJQueryPlugin(Carousel);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap collapse.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$b = 'collapse';
            var DATA_KEY$7 = 'bs.collapse';
            var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
            var DATA_API_KEY$4 = '.data-api';
            var EVENT_SHOW$6 = "show".concat(EVENT_KEY$7);
            var EVENT_SHOWN$6 = "shown".concat(EVENT_KEY$7);
            var EVENT_HIDE$6 = "hide".concat(EVENT_KEY$7);
            var EVENT_HIDDEN$6 = "hidden".concat(EVENT_KEY$7);
            var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
            var CLASS_NAME_SHOW$7 = 'show';
            var CLASS_NAME_COLLAPSE = 'collapse';
            var CLASS_NAME_COLLAPSING = 'collapsing';
            var CLASS_NAME_COLLAPSED = 'collapsed';
            var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
            var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
            var WIDTH = 'width';
            var HEIGHT = 'height';
            var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
            var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
            var Default$a = {
                parent: null,
                toggle: true
            };
            var DefaultType$a = {
                parent: '(null|element)',
                toggle: 'boolean'
            };

            /**
             * Class definition
             */
            var Collapse = /*#__PURE__*/function (_BaseComponent4) {
                _inherits(Collapse, _BaseComponent4);
                var _super6 = _createSuper(Collapse);

                function Collapse(element, config) {
                    var _this12;
                    _classCallCheck(this, Collapse);
                    _this12 = _super6.call(this, element, config);
                    _this12._isTransitioning = false;
                    _this12._triggerArray = [];
                    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
                    var _iterator6 = _createForOfIteratorHelper(toggleList),
                        _step6;
                    try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                            var elem = _step6.value;
                            var selector = SelectorEngine.getSelectorFromElement(elem);
                            var filterElement = SelectorEngine.find(selector).filter(function (foundElement) {
                                return foundElement === _this12._element;
                            });
                            if (selector !== null && filterElement.length) {
                                _this12._triggerArray.push(elem);
                            }
                        }
                    } catch (err) {
                        _iterator6.e(err);
                    } finally {
                        _iterator6.f();
                    }
                    _this12._initializeChildren();
                    if (!_this12._config.parent) {
                        _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown());
                    }
                    if (_this12._config.toggle) {
                        _this12.toggle();
                    }
                    return _this12;
                }

                // Getters
                _createClass(Collapse, [{
                    key: "toggle",
                    value:
                    // Public
                        function toggle() {
                            if (this._isShown()) {
                                this.hide();
                            } else {
                                this.show();
                            }
                        }
                }, {
                    key: "show",
                    value: function show() {
                        var _this13 = this;
                        if (this._isTransitioning || this._isShown()) {
                            return;
                        }
                        var activeChildren = [];

                        // find active children
                        if (this._config.parent) {
                            activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (element) {
                                return element !== _this13._element;
                            }).map(function (element) {
                                return Collapse.getOrCreateInstance(element, {
                                    toggle: false
                                });
                            });
                        }
                        if (activeChildren.length && activeChildren[0]._isTransitioning) {
                            return;
                        }
                        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
                        if (startEvent.defaultPrevented) {
                            return;
                        }
                        var _iterator7 = _createForOfIteratorHelper(activeChildren),
                            _step7;
                        try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                                var activeInstance = _step7.value;
                                activeInstance.hide();
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally {
                            _iterator7.f();
                        }
                        var dimension = this._getDimension();
                        this._element.classList.remove(CLASS_NAME_COLLAPSE);
                        this._element.classList.add(CLASS_NAME_COLLAPSING);
                        this._element.style[dimension] = 0;
                        this._addAriaAndCollapsedClass(this._triggerArray, true);
                        this._isTransitioning = true;
                        var complete = function complete() {
                            _this13._isTransitioning = false;
                            _this13._element.classList.remove(CLASS_NAME_COLLAPSING);
                            _this13._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                            _this13._element.style[dimension] = '';
                            EventHandler.trigger(_this13._element, EVENT_SHOWN$6);
                        };
                        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                        var scrollSize = "scroll".concat(capitalizedDimension);
                        this._queueCallback(complete, this._element, true);
                        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        var _this14 = this;
                        if (this._isTransitioning || !this._isShown()) {
                            return;
                        }
                        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
                        if (startEvent.defaultPrevented) {
                            return;
                        }
                        var dimension = this._getDimension();
                        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
                        reflow(this._element);
                        this._element.classList.add(CLASS_NAME_COLLAPSING);
                        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
                            _step8;
                        try {
                            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                                var trigger = _step8.value;
                                var element = SelectorEngine.getElementFromSelector(trigger);
                                if (element && !this._isShown(element)) {
                                    this._addAriaAndCollapsedClass([trigger], false);
                                }
                            }
                        } catch (err) {
                            _iterator8.e(err);
                        } finally {
                            _iterator8.f();
                        }
                        this._isTransitioning = true;
                        var complete = function complete() {
                            _this14._isTransitioning = false;
                            _this14._element.classList.remove(CLASS_NAME_COLLAPSING);
                            _this14._element.classList.add(CLASS_NAME_COLLAPSE);
                            EventHandler.trigger(_this14._element, EVENT_HIDDEN$6);
                        };
                        this._element.style[dimension] = '';
                        this._queueCallback(complete, this._element, true);
                    }
                }, {
                    key: "_isShown",
                    value: function _isShown() {
                        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
                        return element.classList.contains(CLASS_NAME_SHOW$7);
                    }

                    // Private
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        config.toggle = Boolean(config.toggle); // Coerce string values
                        config.parent = getElement(config.parent);
                        return config;
                    }
                }, {
                    key: "_getDimension",
                    value: function _getDimension() {
                        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
                    }
                }, {
                    key: "_initializeChildren",
                    value: function _initializeChildren() {
                        if (!this._config.parent) {
                            return;
                        }
                        var children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
                        var _iterator9 = _createForOfIteratorHelper(children),
                            _step9;
                        try {
                            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                                var element = _step9.value;
                                var selected = SelectorEngine.getElementFromSelector(element);
                                if (selected) {
                                    this._addAriaAndCollapsedClass([element], this._isShown(selected));
                                }
                            }
                        } catch (err) {
                            _iterator9.e(err);
                        } finally {
                            _iterator9.f();
                        }
                    }
                }, {
                    key: "_getFirstLevelChildren",
                    value: function _getFirstLevelChildren(selector) {
                        var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                        // remove children if greater depth
                        return SelectorEngine.find(selector, this._config.parent).filter(function (element) {
                            return !children.includes(element);
                        });
                    }
                }, {
                    key: "_addAriaAndCollapsedClass",
                    value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
                        if (!triggerArray.length) {
                            return;
                        }
                        var _iterator10 = _createForOfIteratorHelper(triggerArray),
                            _step10;
                        try {
                            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                                var element = _step10.value;
                                element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
                                element.setAttribute('aria-expanded', isOpen);
                            }
                        } catch (err) {
                            _iterator10.e(err);
                        } finally {
                            _iterator10.f();
                        }
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$a;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$a;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$b;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        var _config = {};
                        if (typeof config === 'string' && /show|hide/.test(config)) {
                            _config.toggle = false;
                        }
                        return this.each(function () {
                            var data = Collapse.getOrCreateInstance(this, _config);
                            if (typeof config === 'string') {
                                if (typeof data[config] === 'undefined') {
                                    throw new TypeError("No method named \"".concat(config, "\""));
                                }
                                data[config]();
                            }
                        });
                    }
                }]);
                return Collapse;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
                // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
                if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
                    event.preventDefault();
                }
                var _iterator11 = _createForOfIteratorHelper(SelectorEngine.getMultipleElementsFromSelector(this)),
                    _step11;
                try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var element = _step11.value;
                        Collapse.getOrCreateInstance(element, {
                            toggle: false
                        }).toggle();
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally {
                    _iterator11.f();
                }
            });

            /**
             * jQuery
             */

            defineJQueryPlugin(Collapse);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap dropdown.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$a = 'dropdown';
            var DATA_KEY$6 = 'bs.dropdown';
            var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
            var DATA_API_KEY$3 = '.data-api';
            var ESCAPE_KEY$2 = 'Escape';
            var TAB_KEY$1 = 'Tab';
            var ARROW_UP_KEY$1 = 'ArrowUp';
            var ARROW_DOWN_KEY$1 = 'ArrowDown';
            var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

            var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$6);
            var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$6);
            var EVENT_SHOW$5 = "show".concat(EVENT_KEY$6);
            var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$6);
            var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
            var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
            var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
            var CLASS_NAME_SHOW$6 = 'show';
            var CLASS_NAME_DROPUP = 'dropup';
            var CLASS_NAME_DROPEND = 'dropend';
            var CLASS_NAME_DROPSTART = 'dropstart';
            var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
            var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
            var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
            var SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE$3, ".").concat(CLASS_NAME_SHOW$6);
            var SELECTOR_MENU = '.dropdown-menu';
            var SELECTOR_NAVBAR = '.navbar';
            var SELECTOR_NAVBAR_NAV = '.navbar-nav';
            var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
            var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
            var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
            var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
            var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
            var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
            var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
            var PLACEMENT_TOPCENTER = 'top';
            var PLACEMENT_BOTTOMCENTER = 'bottom';
            var Default$9 = {
                autoClose: true,
                boundary: 'clippingParents',
                display: 'dynamic',
                offset: [0, 2],
                popperConfig: null,
                reference: 'toggle'
            };
            var DefaultType$9 = {
                autoClose: '(boolean|string)',
                boundary: '(string|element)',
                display: 'string',
                offset: '(array|string|function)',
                popperConfig: '(null|object|function)',
                reference: '(string|element|object)'
            };

            /**
             * Class definition
             */
            var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
                _inherits(Dropdown, _BaseComponent5);
                var _super7 = _createSuper(Dropdown);

                function Dropdown(element, config) {
                    var _this15;
                    _classCallCheck(this, Dropdown);
                    _this15 = _super7.call(this, element, config);
                    _this15._popper = null;
                    _this15._parent = _this15._element.parentNode; // dropdown wrapper
                    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
                    _this15._menu = SelectorEngine.next(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.prev(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, _this15._parent);
                    _this15._inNavbar = _this15._detectNavbar();
                    return _this15;
                }

                // Getters
                _createClass(Dropdown, [{
                    key: "toggle",
                    value:
                    // Public
                        function toggle() {
                            return this._isShown() ? this.hide() : this.show();
                        }
                }, {
                    key: "show",
                    value: function show() {
                        if (isDisabled(this._element) || this._isShown()) {
                            return;
                        }
                        var relatedTarget = {
                            relatedTarget: this._element
                        };
                        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
                        if (showEvent.defaultPrevented) {
                            return;
                        }
                        this._createPopper();

                        // If this is a touch-enabled device we add extra
                        // empty mouseover listeners to the body's immediate children;
                        // only needed because of broken event delegation on iOS
                        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                        if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
                            var _ref4;
                            var _iterator12 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                                _step12;
                            try {
                                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                                    var element = _step12.value;
                                    EventHandler.on(element, 'mouseover', noop);
                                }
                            } catch (err) {
                                _iterator12.e(err);
                            } finally {
                                _iterator12.f();
                            }
                        }
                        this._element.focus();
                        this._element.setAttribute('aria-expanded', true);
                        this._menu.classList.add(CLASS_NAME_SHOW$6);
                        this._element.classList.add(CLASS_NAME_SHOW$6);
                        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        if (isDisabled(this._element) || !this._isShown()) {
                            return;
                        }
                        var relatedTarget = {
                            relatedTarget: this._element
                        };
                        this._completeHide(relatedTarget);
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        if (this._popper) {
                            this._popper.destroy();
                        }
                        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
                    }
                }, {
                    key: "update",
                    value: function update() {
                        this._inNavbar = this._detectNavbar();
                        if (this._popper) {
                            this._popper.update();
                        }
                    }

                    // Private
                }, {
                    key: "_completeHide",
                    value: function _completeHide(relatedTarget) {
                        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
                        if (hideEvent.defaultPrevented) {
                            return;
                        }

                        // If this is a touch-enabled device we remove the extra
                        // empty mouseover listeners we added for iOS support
                        if ('ontouchstart' in document.documentElement) {
                            var _ref5;
                            var _iterator13 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                                _step13;
                            try {
                                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                    var element = _step13.value;
                                    EventHandler.off(element, 'mouseover', noop);
                                }
                            } catch (err) {
                                _iterator13.e(err);
                            } finally {
                                _iterator13.f();
                            }
                        }
                        if (this._popper) {
                            this._popper.destroy();
                        }
                        this._menu.classList.remove(CLASS_NAME_SHOW$6);
                        this._element.classList.remove(CLASS_NAME_SHOW$6);
                        this._element.setAttribute('aria-expanded', 'false');
                        Manipulator.removeDataAttribute(this._menu, 'popper');
                        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
                    }
                }, {
                    key: "_getConfig",
                    value: function _getConfig(config) {
                        config = _get(_getPrototypeOf(Dropdown.prototype), "_getConfig", this).call(this, config);
                        if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
                            // Popper virtual elements require a getBoundingClientRect method
                            throw new TypeError("".concat(NAME$a.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
                        }
                        return config;
                    }
                }, {
                    key: "_createPopper",
                    value: function _createPopper() {
                        if (typeof Popper__namespace === 'undefined') {
                            throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                        }
                        var referenceElement = this._element;
                        if (this._config.reference === 'parent') {
                            referenceElement = this._parent;
                        } else if (isElement(this._config.reference)) {
                            referenceElement = getElement(this._config.reference);
                        } else if (_typeof(this._config.reference) === 'object') {
                            referenceElement = this._config.reference;
                        }
                        var popperConfig = this._getPopperConfig();
                        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
                    }
                }, {
                    key: "_isShown",
                    value: function _isShown() {
                        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
                    }
                }, {
                    key: "_getPlacement",
                    value: function _getPlacement() {
                        var parentDropdown = this._parent;
                        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
                            return PLACEMENT_RIGHT;
                        }
                        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
                            return PLACEMENT_LEFT;
                        }
                        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
                            return PLACEMENT_TOPCENTER;
                        }
                        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
                            return PLACEMENT_BOTTOMCENTER;
                        }

                        // We need to trim the value because custom properties can also include spaces
                        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
                        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
                            return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
                        }
                        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
                    }
                }, {
                    key: "_detectNavbar",
                    value: function _detectNavbar() {
                        return this._element.closest(SELECTOR_NAVBAR) !== null;
                    }
                }, {
                    key: "_getOffset",
                    value: function _getOffset() {
                        var _this16 = this;
                        var offset = this._config.offset;
                        if (typeof offset === 'string') {
                            return offset.split(',').map(function (value) {
                                return Number.parseInt(value, 10);
                            });
                        }
                        if (typeof offset === 'function') {
                            return function (popperData) {
                                return offset(popperData, _this16._element);
                            };
                        }
                        return offset;
                    }
                }, {
                    key: "_getPopperConfig",
                    value: function _getPopperConfig() {
                        var defaultBsPopperConfig = {
                            placement: this._getPlacement(),
                            modifiers: [{
                                name: 'preventOverflow',
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: 'offset',
                                options: {
                                    offset: this._getOffset()
                                }
                            }]
                        };

                        // Disable Popper if we have a static display or Dropdown is in Navbar
                        if (this._inNavbar || this._config.display === 'static') {
                            Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
                            defaultBsPopperConfig.modifiers = [{
                                name: 'applyStyles',
                                enabled: false
                            }];
                        }
                        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
                    }
                }, {
                    key: "_selectMenuItem",
                    value: function _selectMenuItem(_ref6) {
                        var key = _ref6.key,
                            target = _ref6.target;
                        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
                            return isVisible(element);
                        });
                        if (!items.length) {
                            return;
                        }

                        // if target isn't included in items (e.g. when expanding the dropdown)
                        // allow cycling to get the last item in case key equals ARROW_UP_KEY
                        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$9;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$9;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$a;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Dropdown.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config]();
                        });
                    }
                }, {
                    key: "clearMenus",
                    value: function clearMenus(event) {
                        if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
                            return;
                        }
                        var openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
                        var _iterator14 = _createForOfIteratorHelper(openToggles),
                            _step14;
                        try {
                            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                                var toggle = _step14.value;
                                var context = Dropdown.getInstance(toggle);
                                if (!context || context._config.autoClose === false) {
                                    continue;
                                }
                                var composedPath = event.composedPath();
                                var isMenuTarget = composedPath.includes(context._menu);
                                if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
                                    continue;
                                }

                                // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                                if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                                    continue;
                                }
                                var relatedTarget = {
                                    relatedTarget: context._element
                                };
                                if (event.type === 'click') {
                                    relatedTarget.clickEvent = event;
                                }
                                context._completeHide(relatedTarget);
                            }
                        } catch (err) {
                            _iterator14.e(err);
                        } finally {
                            _iterator14.f();
                        }
                    }
                }, {
                    key: "dataApiKeydownHandler",
                    value: function dataApiKeydownHandler(event) {
                        // If not an UP | DOWN | ESCAPE key => not a dropdown command
                        // If input/textarea && if key is other than ESCAPE => not a dropdown command

                        var isInput = /input|textarea/i.test(event.target.tagName);
                        var isEscapeEvent = event.key === ESCAPE_KEY$2;
                        var isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
                        if (!isUpOrDownEvent && !isEscapeEvent) {
                            return;
                        }
                        if (isInput && !isEscapeEvent) {
                            return;
                        }
                        event.preventDefault();

                        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
                        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
                        var instance = Dropdown.getOrCreateInstance(getToggleButton);
                        if (isUpOrDownEvent) {
                            event.stopPropagation();
                            instance.show();
                            instance._selectMenuItem(event);
                            return;
                        }
                        if (instance._isShown()) {
                            // else is escape and we check if it is shown
                            event.stopPropagation();
                            instance.hide();
                            getToggleButton.focus();
                        }
                    }
                }]);
                return Dropdown;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
            EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
            EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
            EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
            EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
                event.preventDefault();
                Dropdown.getOrCreateInstance(this).toggle();
            });

            /**
             * jQuery
             */

            defineJQueryPlugin(Dropdown);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/backdrop.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$9 = 'backdrop';
            var CLASS_NAME_FADE$4 = 'fade';
            var CLASS_NAME_SHOW$5 = 'show';
            var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$9);
            var Default$8 = {
                className: 'modal-backdrop',
                clickCallback: null,
                isAnimated: false,
                isVisible: true,
                // if false, we use the backdrop helper without adding any element to the dom
                rootElement: 'body' // give the choice to place backdrop under different elements
            };
            var DefaultType$8 = {
                className: 'string',
                clickCallback: '(function|null)',
                isAnimated: 'boolean',
                isVisible: 'boolean',
                rootElement: '(element|string)'
            };

            /**
             * Class definition
             */
            var Backdrop = /*#__PURE__*/function (_Config3) {
                _inherits(Backdrop, _Config3);
                var _super8 = _createSuper(Backdrop);

                function Backdrop(config) {
                    var _this17;
                    _classCallCheck(this, Backdrop);
                    _this17 = _super8.call(this);
                    _this17._config = _this17._getConfig(config);
                    _this17._isAppended = false;
                    _this17._element = null;
                    return _this17;
                }

                // Getters
                _createClass(Backdrop, [{
                    key: "show",
                    value:
                    // Public
                        function show(callback) {
                            if (!this._config.isVisible) {
                                execute(callback);
                                return;
                            }
                            this._append();
                            var element = this._getElement();
                            if (this._config.isAnimated) {
                                reflow(element);
                            }
                            element.classList.add(CLASS_NAME_SHOW$5);
                            this._emulateAnimation(function () {
                                execute(callback);
                            });
                        }
                }, {
                    key: "hide",
                    value: function hide(callback) {
                        var _this18 = this;
                        if (!this._config.isVisible) {
                            execute(callback);
                            return;
                        }
                        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
                        this._emulateAnimation(function () {
                            _this18.dispose();
                            execute(callback);
                        });
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        if (!this._isAppended) {
                            return;
                        }
                        EventHandler.off(this._element, EVENT_MOUSEDOWN);
                        this._element.remove();
                        this._isAppended = false;
                    }

                    // Private
                }, {
                    key: "_getElement",
                    value: function _getElement() {
                        if (!this._element) {
                            var backdrop = document.createElement('div');
                            backdrop.className = this._config.className;
                            if (this._config.isAnimated) {
                                backdrop.classList.add(CLASS_NAME_FADE$4);
                            }
                            this._element = backdrop;
                        }
                        return this._element;
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        // use getElement() with the default "body" to get a fresh Element on each instantiation
                        config.rootElement = getElement(config.rootElement);
                        return config;
                    }
                }, {
                    key: "_append",
                    value: function _append() {
                        var _this19 = this;
                        if (this._isAppended) {
                            return;
                        }
                        var element = this._getElement();
                        this._config.rootElement.append(element);
                        EventHandler.on(element, EVENT_MOUSEDOWN, function () {
                            execute(_this19._config.clickCallback);
                        });
                        this._isAppended = true;
                    }
                }, {
                    key: "_emulateAnimation",
                    value: function _emulateAnimation(callback) {
                        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
                    }
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$8;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$8;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$9;
                    }
                }]);
                return Backdrop;
            }(Config);
            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/focustrap.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var NAME$8 = 'focustrap';
            var DATA_KEY$5 = 'bs.focustrap';
            var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
            var EVENT_FOCUSIN$2 = "focusin".concat(EVENT_KEY$5);
            var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$5);
            var TAB_KEY = 'Tab';
            var TAB_NAV_FORWARD = 'forward';
            var TAB_NAV_BACKWARD = 'backward';
            var Default$7 = {
                autofocus: true,
                trapElement: null // The element to trap focus inside of
            };
            var DefaultType$7 = {
                autofocus: 'boolean',
                trapElement: 'element'
            };

            /**
             * Class definition
             */
            var FocusTrap = /*#__PURE__*/function (_Config4) {
                _inherits(FocusTrap, _Config4);
                var _super9 = _createSuper(FocusTrap);

                function FocusTrap(config) {
                    var _this20;
                    _classCallCheck(this, FocusTrap);
                    _this20 = _super9.call(this);
                    _this20._config = _this20._getConfig(config);
                    _this20._isActive = false;
                    _this20._lastTabNavDirection = null;
                    return _this20;
                }

                // Getters
                _createClass(FocusTrap, [{
                    key: "activate",
                    value:
                    // Public
                        function activate() {
                            var _this21 = this;
                            if (this._isActive) {
                                return;
                            }
                            if (this._config.autofocus) {
                                this._config.trapElement.focus();
                            }
                            EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
                            EventHandler.on(document, EVENT_FOCUSIN$2, function (event) {
                                return _this21._handleFocusin(event);
                            });
                            EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
                                return _this21._handleKeydown(event);
                            });
                            this._isActive = true;
                        }
                }, {
                    key: "deactivate",
                    value: function deactivate() {
                        if (!this._isActive) {
                            return;
                        }
                        this._isActive = false;
                        EventHandler.off(document, EVENT_KEY$5);
                    }

                    // Private
                }, {
                    key: "_handleFocusin",
                    value: function _handleFocusin(event) {
                        var trapElement = this._config.trapElement;
                        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
                            return;
                        }
                        var elements = SelectorEngine.focusableChildren(trapElement);
                        if (elements.length === 0) {
                            trapElement.focus();
                        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
                            elements[elements.length - 1].focus();
                        } else {
                            elements[0].focus();
                        }
                    }
                }, {
                    key: "_handleKeydown",
                    value: function _handleKeydown(event) {
                        if (event.key !== TAB_KEY) {
                            return;
                        }
                        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
                    }
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$7;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$7;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$8;
                    }
                }]);
                return FocusTrap;
            }(Config);
            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/scrollBar.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
            var SELECTOR_STICKY_CONTENT = '.sticky-top';
            var PROPERTY_PADDING = 'padding-right';
            var PROPERTY_MARGIN = 'margin-right';

            /**
             * Class definition
             */
            var ScrollBarHelper = /*#__PURE__*/function () {
                function ScrollBarHelper() {
                    _classCallCheck(this, ScrollBarHelper);
                    this._element = document.body;
                }

                // Public
                _createClass(ScrollBarHelper, [{
                    key: "getWidth",
                    value: function getWidth() {
                        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                        var documentWidth = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - documentWidth);
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        var width = this.getWidth();
                        this._disableOverFlow();
                        // give padding to element to balance the hidden scrollbar width
                        this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
                            return calculatedValue + width;
                        });
                        // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
                        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
                            return calculatedValue + width;
                        });
                        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
                            return calculatedValue - width;
                        });
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        this._resetElementAttributes(this._element, 'overflow');
                        this._resetElementAttributes(this._element, PROPERTY_PADDING);
                        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
                        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
                    }
                }, {
                    key: "isOverflowing",
                    value: function isOverflowing() {
                        return this.getWidth() > 0;
                    }

                    // Private
                }, {
                    key: "_disableOverFlow",
                    value: function _disableOverFlow() {
                        this._saveInitialAttribute(this._element, 'overflow');
                        this._element.style.overflow = 'hidden';
                    }
                }, {
                    key: "_setElementAttributes",
                    value: function _setElementAttributes(selector, styleProperty, callback) {
                        var _this22 = this;
                        var scrollbarWidth = this.getWidth();
                        var manipulationCallBack = function manipulationCallBack(element) {
                            if (element !== _this22._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                                return;
                            }
                            _this22._saveInitialAttribute(element, styleProperty);
                            var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                            element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
                        };
                        this._applyManipulationCallback(selector, manipulationCallBack);
                    }
                }, {
                    key: "_saveInitialAttribute",
                    value: function _saveInitialAttribute(element, styleProperty) {
                        var actualValue = element.style.getPropertyValue(styleProperty);
                        if (actualValue) {
                            Manipulator.setDataAttribute(element, styleProperty, actualValue);
                        }
                    }
                }, {
                    key: "_resetElementAttributes",
                    value: function _resetElementAttributes(selector, styleProperty) {
                        var manipulationCallBack = function manipulationCallBack(element) {
                            var value = Manipulator.getDataAttribute(element, styleProperty);
                            // We only want to remove the property if the value is `null`; the value can also be zero
                            if (value === null) {
                                element.style.removeProperty(styleProperty);
                                return;
                            }
                            Manipulator.removeDataAttribute(element, styleProperty);
                            element.style.setProperty(styleProperty, value);
                        };
                        this._applyManipulationCallback(selector, manipulationCallBack);
                    }
                }, {
                    key: "_applyManipulationCallback",
                    value: function _applyManipulationCallback(selector, callBack) {
                        if (isElement(selector)) {
                            callBack(selector);
                            return;
                        }
                        var _iterator15 = _createForOfIteratorHelper(SelectorEngine.find(selector, this._element)),
                            _step15;
                        try {
                            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                                var sel = _step15.value;
                                callBack(sel);
                            }
                        } catch (err) {
                            _iterator15.e(err);
                        } finally {
                            _iterator15.f();
                        }
                    }
                }]);
                return ScrollBarHelper;
            }();
            /**
             * --------------------------------------------------------------------------
             * Bootstrap modal.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var NAME$7 = 'modal';
            var DATA_KEY$4 = 'bs.modal';
            var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
            var DATA_API_KEY$2 = '.data-api';
            var ESCAPE_KEY$1 = 'Escape';
            var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$4);
            var EVENT_HIDE_PREVENTED$1 = "hidePrevented".concat(EVENT_KEY$4);
            var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$4);
            var EVENT_SHOW$4 = "show".concat(EVENT_KEY$4);
            var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$4);
            var EVENT_RESIZE$1 = "resize".concat(EVENT_KEY$4);
            var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$4);
            var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$4);
            var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$4);
            var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$4).concat(DATA_API_KEY$2);
            var CLASS_NAME_OPEN = 'modal-open';
            var CLASS_NAME_FADE$3 = 'fade';
            var CLASS_NAME_SHOW$4 = 'show';
            var CLASS_NAME_STATIC = 'modal-static';
            var OPEN_SELECTOR$1 = '.modal.show';
            var SELECTOR_DIALOG = '.modal-dialog';
            var SELECTOR_MODAL_BODY = '.modal-body';
            var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
            var Default$6 = {
                backdrop: true,
                focus: true,
                keyboard: true
            };
            var DefaultType$6 = {
                backdrop: '(boolean|string)',
                focus: 'boolean',
                keyboard: 'boolean'
            };

            /**
             * Class definition
             */
            var Modal = /*#__PURE__*/function (_BaseComponent6) {
                _inherits(Modal, _BaseComponent6);
                var _super10 = _createSuper(Modal);

                function Modal(element, config) {
                    var _this23;
                    _classCallCheck(this, Modal);
                    _this23 = _super10.call(this, element, config);
                    _this23._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this23._element);
                    _this23._backdrop = _this23._initializeBackDrop();
                    _this23._focustrap = _this23._initializeFocusTrap();
                    _this23._isShown = false;
                    _this23._isTransitioning = false;
                    _this23._scrollBar = new ScrollBarHelper();
                    _this23._addEventListeners();
                    return _this23;
                }

                // Getters
                _createClass(Modal, [{
                    key: "toggle",
                    value:
                    // Public
                        function toggle(relatedTarget) {
                            return this._isShown ? this.hide() : this.show(relatedTarget);
                        }
                }, {
                    key: "show",
                    value: function show(relatedTarget) {
                        var _this24 = this;
                        if (this._isShown || this._isTransitioning) {
                            return;
                        }
                        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
                            relatedTarget: relatedTarget
                        });
                        if (showEvent.defaultPrevented) {
                            return;
                        }
                        this._isShown = true;
                        this._isTransitioning = true;
                        this._scrollBar.hide();
                        document.body.classList.add(CLASS_NAME_OPEN);
                        this._adjustDialog();
                        this._backdrop.show(function () {
                            return _this24._showElement(relatedTarget);
                        });
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        var _this25 = this;
                        if (!this._isShown || this._isTransitioning) {
                            return;
                        }
                        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
                        if (hideEvent.defaultPrevented) {
                            return;
                        }
                        this._isShown = false;
                        this._isTransitioning = true;
                        this._focustrap.deactivate();
                        this._element.classList.remove(CLASS_NAME_SHOW$4);
                        this._queueCallback(function () {
                            return _this25._hideModal();
                        }, this._element, this._isAnimated());
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        EventHandler.off(window, EVENT_KEY$4);
                        EventHandler.off(this._dialog, EVENT_KEY$4);
                        this._backdrop.dispose();
                        this._focustrap.deactivate();
                        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
                    }
                }, {
                    key: "handleUpdate",
                    value: function handleUpdate() {
                        this._adjustDialog();
                    }

                    // Private
                }, {
                    key: "_initializeBackDrop",
                    value: function _initializeBackDrop() {
                        return new Backdrop({
                            isVisible: Boolean(this._config.backdrop),
                            // 'static' option will be translated to true, and booleans will keep their value,
                            isAnimated: this._isAnimated()
                        });
                    }
                }, {
                    key: "_initializeFocusTrap",
                    value: function _initializeFocusTrap() {
                        return new FocusTrap({
                            trapElement: this._element
                        });
                    }
                }, {
                    key: "_showElement",
                    value: function _showElement(relatedTarget) {
                        var _this26 = this;
                        // try to append dynamic modal
                        if (!document.body.contains(this._element)) {
                            document.body.append(this._element);
                        }
                        this._element.style.display = 'block';
                        this._element.removeAttribute('aria-hidden');
                        this._element.setAttribute('aria-modal', true);
                        this._element.setAttribute('role', 'dialog');
                        this._element.scrollTop = 0;
                        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
                        if (modalBody) {
                            modalBody.scrollTop = 0;
                        }
                        reflow(this._element);
                        this._element.classList.add(CLASS_NAME_SHOW$4);
                        var transitionComplete = function transitionComplete() {
                            if (_this26._config.focus) {
                                _this26._focustrap.activate();
                            }
                            _this26._isTransitioning = false;
                            EventHandler.trigger(_this26._element, EVENT_SHOWN$4, {
                                relatedTarget: relatedTarget
                            });
                        };
                        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
                    }
                }, {
                    key: "_addEventListeners",
                    value: function _addEventListeners() {
                        var _this27 = this;
                        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
                            if (event.key !== ESCAPE_KEY$1) {
                                return;
                            }
                            if (_this27._config.keyboard) {
                                _this27.hide();
                                return;
                            }
                            _this27._triggerBackdropTransition();
                        });
                        EventHandler.on(window, EVENT_RESIZE$1, function () {
                            if (_this27._isShown && !_this27._isTransitioning) {
                                _this27._adjustDialog();
                            }
                        });
                        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
                            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
                            EventHandler.one(_this27._element, EVENT_CLICK_DISMISS, function (event2) {
                                if (_this27._element !== event.target || _this27._element !== event2.target) {
                                    return;
                                }
                                if (_this27._config.backdrop === 'static') {
                                    _this27._triggerBackdropTransition();
                                    return;
                                }
                                if (_this27._config.backdrop) {
                                    _this27.hide();
                                }
                            });
                        });
                    }
                }, {
                    key: "_hideModal",
                    value: function _hideModal() {
                        var _this28 = this;
                        this._element.style.display = 'none';
                        this._element.setAttribute('aria-hidden', true);
                        this._element.removeAttribute('aria-modal');
                        this._element.removeAttribute('role');
                        this._isTransitioning = false;
                        this._backdrop.hide(function () {
                            document.body.classList.remove(CLASS_NAME_OPEN);
                            _this28._resetAdjustments();
                            _this28._scrollBar.reset();
                            EventHandler.trigger(_this28._element, EVENT_HIDDEN$4);
                        });
                    }
                }, {
                    key: "_isAnimated",
                    value: function _isAnimated() {
                        return this._element.classList.contains(CLASS_NAME_FADE$3);
                    }
                }, {
                    key: "_triggerBackdropTransition",
                    value: function _triggerBackdropTransition() {
                        var _this29 = this;
                        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
                        if (hideEvent.defaultPrevented) {
                            return;
                        }
                        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                        var initialOverflowY = this._element.style.overflowY;
                        // return if the following background transition hasn't yet completed
                        if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
                            return;
                        }
                        if (!isModalOverflowing) {
                            this._element.style.overflowY = 'hidden';
                        }
                        this._element.classList.add(CLASS_NAME_STATIC);
                        this._queueCallback(function () {
                            _this29._element.classList.remove(CLASS_NAME_STATIC);
                            _this29._queueCallback(function () {
                                _this29._element.style.overflowY = initialOverflowY;
                            }, _this29._dialog);
                        }, this._dialog);
                        this._element.focus();
                    }

                    /**
                     * The following methods are used to handle overflowing modals
                     */
                }, {
                    key: "_adjustDialog",
                    value: function _adjustDialog() {
                        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                        var scrollbarWidth = this._scrollBar.getWidth();
                        var isBodyOverflowing = scrollbarWidth > 0;
                        if (isBodyOverflowing && !isModalOverflowing) {
                            var property = isRTL() ? 'paddingLeft' : 'paddingRight';
                            this._element.style[property] = "".concat(scrollbarWidth, "px");
                        }
                        if (!isBodyOverflowing && isModalOverflowing) {
                            var _property = isRTL() ? 'paddingRight' : 'paddingLeft';
                            this._element.style[_property] = "".concat(scrollbarWidth, "px");
                        }
                    }
                }, {
                    key: "_resetAdjustments",
                    value: function _resetAdjustments() {
                        this._element.style.paddingLeft = '';
                        this._element.style.paddingRight = '';
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$6;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$6;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$7;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config, relatedTarget) {
                        return this.each(function () {
                            var data = Modal.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config](relatedTarget);
                        });
                    }
                }]);
                return Modal;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
                var _this30 = this;
                var target = SelectorEngine.getElementFromSelector(this);
                if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                }
                EventHandler.one(target, EVENT_SHOW$4, function (showEvent) {
                    if (showEvent.defaultPrevented) {
                        // only register focus restorer if modal will actually get shown
                        return;
                    }
                    EventHandler.one(target, EVENT_HIDDEN$4, function () {
                        if (isVisible(_this30)) {
                            _this30.focus();
                        }
                    });
                });

                // avoid conflict when clicking modal toggler while another one is open
                var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
                if (alreadyOpen) {
                    Modal.getInstance(alreadyOpen).hide();
                }
                var data = Modal.getOrCreateInstance(target);
                data.toggle(this);
            });
            enableDismissTrigger(Modal);

            /**
             * jQuery
             */

            defineJQueryPlugin(Modal);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap offcanvas.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$6 = 'offcanvas';
            var DATA_KEY$3 = 'bs.offcanvas';
            var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
            var DATA_API_KEY$1 = '.data-api';
            var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
            var ESCAPE_KEY = 'Escape';
            var CLASS_NAME_SHOW$3 = 'show';
            var CLASS_NAME_SHOWING$1 = 'showing';
            var CLASS_NAME_HIDING = 'hiding';
            var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
            var OPEN_SELECTOR = '.offcanvas.show';
            var EVENT_SHOW$3 = "show".concat(EVENT_KEY$3);
            var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$3);
            var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$3);
            var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$3);
            var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$3);
            var EVENT_RESIZE = "resize".concat(EVENT_KEY$3);
            var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
            var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$3);
            var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
            var Default$5 = {
                backdrop: true,
                keyboard: true,
                scroll: false
            };
            var DefaultType$5 = {
                backdrop: '(boolean|string)',
                keyboard: 'boolean',
                scroll: 'boolean'
            };

            /**
             * Class definition
             */
            var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
                _inherits(Offcanvas, _BaseComponent7);
                var _super11 = _createSuper(Offcanvas);

                function Offcanvas(element, config) {
                    var _this31;
                    _classCallCheck(this, Offcanvas);
                    _this31 = _super11.call(this, element, config);
                    _this31._isShown = false;
                    _this31._backdrop = _this31._initializeBackDrop();
                    _this31._focustrap = _this31._initializeFocusTrap();
                    _this31._addEventListeners();
                    return _this31;
                }

                // Getters
                _createClass(Offcanvas, [{
                    key: "toggle",
                    value:
                    // Public
                        function toggle(relatedTarget) {
                            return this._isShown ? this.hide() : this.show(relatedTarget);
                        }
                }, {
                    key: "show",
                    value: function show(relatedTarget) {
                        var _this32 = this;
                        if (this._isShown) {
                            return;
                        }
                        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                            relatedTarget: relatedTarget
                        });
                        if (showEvent.defaultPrevented) {
                            return;
                        }
                        this._isShown = true;
                        this._backdrop.show();
                        if (!this._config.scroll) {
                            new ScrollBarHelper().hide();
                        }
                        this._element.setAttribute('aria-modal', true);
                        this._element.setAttribute('role', 'dialog');
                        this._element.classList.add(CLASS_NAME_SHOWING$1);
                        var completeCallBack = function completeCallBack() {
                            if (!_this32._config.scroll || _this32._config.backdrop) {
                                _this32._focustrap.activate();
                            }
                            _this32._element.classList.add(CLASS_NAME_SHOW$3);
                            _this32._element.classList.remove(CLASS_NAME_SHOWING$1);
                            EventHandler.trigger(_this32._element, EVENT_SHOWN$3, {
                                relatedTarget: relatedTarget
                            });
                        };
                        this._queueCallback(completeCallBack, this._element, true);
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        var _this33 = this;
                        if (!this._isShown) {
                            return;
                        }
                        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
                        if (hideEvent.defaultPrevented) {
                            return;
                        }
                        this._focustrap.deactivate();
                        this._element.blur();
                        this._isShown = false;
                        this._element.classList.add(CLASS_NAME_HIDING);
                        this._backdrop.hide();
                        var completeCallback = function completeCallback() {
                            _this33._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
                            _this33._element.removeAttribute('aria-modal');
                            _this33._element.removeAttribute('role');
                            if (!_this33._config.scroll) {
                                new ScrollBarHelper().reset();
                            }
                            EventHandler.trigger(_this33._element, EVENT_HIDDEN$3);
                        };
                        this._queueCallback(completeCallback, this._element, true);
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        this._backdrop.dispose();
                        this._focustrap.deactivate();
                        _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
                    }

                    // Private
                }, {
                    key: "_initializeBackDrop",
                    value: function _initializeBackDrop() {
                        var _this34 = this;
                        var clickCallback = function clickCallback() {
                            if (_this34._config.backdrop === 'static') {
                                EventHandler.trigger(_this34._element, EVENT_HIDE_PREVENTED);
                                return;
                            }
                            _this34.hide();
                        };

                        // 'static' option will be translated to true, and booleans will keep their value
                        var isVisible = Boolean(this._config.backdrop);
                        return new Backdrop({
                            className: CLASS_NAME_BACKDROP,
                            isVisible: isVisible,
                            isAnimated: true,
                            rootElement: this._element.parentNode,
                            clickCallback: isVisible ? clickCallback : null
                        });
                    }
                }, {
                    key: "_initializeFocusTrap",
                    value: function _initializeFocusTrap() {
                        return new FocusTrap({
                            trapElement: this._element
                        });
                    }
                }, {
                    key: "_addEventListeners",
                    value: function _addEventListeners() {
                        var _this35 = this;
                        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
                            if (event.key !== ESCAPE_KEY) {
                                return;
                            }
                            if (_this35._config.keyboard) {
                                _this35.hide();
                                return;
                            }
                            EventHandler.trigger(_this35._element, EVENT_HIDE_PREVENTED);
                        });
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$5;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$5;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$6;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Offcanvas.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config](this);
                        });
                    }
                }]);
                return Offcanvas;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
                var _this36 = this;
                var target = SelectorEngine.getElementFromSelector(this);
                if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                }
                if (isDisabled(this)) {
                    return;
                }
                EventHandler.one(target, EVENT_HIDDEN$3, function () {
                    // focus on trigger when it is closed
                    if (isVisible(_this36)) {
                        _this36.focus();
                    }
                });

                // avoid conflict when clicking a toggler of an offcanvas, while another is open
                var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
                if (alreadyOpen && alreadyOpen !== target) {
                    Offcanvas.getInstance(alreadyOpen).hide();
                }
                var data = Offcanvas.getOrCreateInstance(target);
                data.toggle(this);
            });
            EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
                var _iterator16 = _createForOfIteratorHelper(SelectorEngine.find(OPEN_SELECTOR)),
                    _step16;
                try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                        var selector = _step16.value;
                        Offcanvas.getOrCreateInstance(selector).show();
                    }
                } catch (err) {
                    _iterator16.e(err);
                } finally {
                    _iterator16.f();
                }
            });
            EventHandler.on(window, EVENT_RESIZE, function () {
                var _iterator17 = _createForOfIteratorHelper(SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')),
                    _step17;
                try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                        var element = _step17.value;
                        if (getComputedStyle(element).position !== 'fixed') {
                            Offcanvas.getOrCreateInstance(element).hide();
                        }
                    }
                } catch (err) {
                    _iterator17.e(err);
                } finally {
                    _iterator17.f();
                }
            });
            enableDismissTrigger(Offcanvas);

            /**
             * jQuery
             */

            defineJQueryPlugin(Offcanvas);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/sanitizer.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

                // js-docs-start allow-list
            var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
            var DefaultAllowlist = {
                // Global attributes allowed on any supplied element below.
                '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
                a: ['target', 'href', 'title', 'rel'],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            };
            // js-docs-end allow-list

            var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

            /**
             * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
             * contexts.
             *
             * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
             */
                // eslint-disable-next-line unicorn/better-regex
            var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
            var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
                var attributeName = attribute.nodeName.toLowerCase();
                if (allowedAttributeList.includes(attributeName)) {
                    if (uriAttributes.has(attributeName)) {
                        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
                    }
                    return true;
                }

                // Check if a regular expression validates the attribute.
                return allowedAttributeList.filter(function (attributeRegex) {
                    return attributeRegex instanceof RegExp;
                }).some(function (regex) {
                    return regex.test(attributeName);
                });
            };

            function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
                var _ref7;
                if (!unsafeHtml.length) {
                    return unsafeHtml;
                }
                if (sanitizeFunction && typeof sanitizeFunction === 'function') {
                    return sanitizeFunction(unsafeHtml);
                }
                var domParser = new window.DOMParser();
                var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
                var elements = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(createdDocument.body.querySelectorAll('*')));
                var _iterator18 = _createForOfIteratorHelper(elements),
                    _step18;
                try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                        var _ref8;
                        var element = _step18.value;
                        var elementName = element.nodeName.toLowerCase();
                        if (!Object.keys(allowList).includes(elementName)) {
                            element.remove();
                            continue;
                        }
                        var attributeList = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(element.attributes));
                        var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
                        var _iterator19 = _createForOfIteratorHelper(attributeList),
                            _step19;
                        try {
                            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                                var attribute = _step19.value;
                                if (!allowedAttribute(attribute, allowedAttributes)) {
                                    element.removeAttribute(attribute.nodeName);
                                }
                            }
                        } catch (err) {
                            _iterator19.e(err);
                        } finally {
                            _iterator19.f();
                        }
                    }
                } catch (err) {
                    _iterator18.e(err);
                } finally {
                    _iterator18.f();
                }
                return createdDocument.body.innerHTML;
            }

            /**
             * --------------------------------------------------------------------------
             * Bootstrap util/template-factory.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$5 = 'TemplateFactory';
            var Default$4 = {
                allowList: DefaultAllowlist,
                content: {},
                // { selector : text ,  selector2 : text2 , }
                extraClass: '',
                html: false,
                sanitize: true,
                sanitizeFn: null,
                template: '<div></div>'
            };
            var DefaultType$4 = {
                allowList: 'object',
                content: 'object',
                extraClass: '(string|function)',
                html: 'boolean',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                template: 'string'
            };
            var DefaultContentType = {
                entry: '(string|element|function|null)',
                selector: '(string|element)'
            };

            /**
             * Class definition
             */
            var TemplateFactory = /*#__PURE__*/function (_Config5) {
                _inherits(TemplateFactory, _Config5);
                var _super12 = _createSuper(TemplateFactory);

                function TemplateFactory(config) {
                    var _this37;
                    _classCallCheck(this, TemplateFactory);
                    _this37 = _super12.call(this);
                    _this37._config = _this37._getConfig(config);
                    return _this37;
                }

                // Getters
                _createClass(TemplateFactory, [{
                    key: "getContent",
                    value:
                    // Public
                        function getContent() {
                            var _this38 = this;
                            return Object.values(this._config.content).map(function (config) {
                                return _this38._resolvePossibleFunction(config);
                            }).filter(Boolean);
                        }
                }, {
                    key: "hasContent",
                    value: function hasContent() {
                        return this.getContent().length > 0;
                    }
                }, {
                    key: "changeContent",
                    value: function changeContent(content) {
                        this._checkContent(content);
                        this._config.content = _objectSpread(_objectSpread({}, this._config.content), content);
                        return this;
                    }
                }, {
                    key: "toHtml",
                    value: function toHtml() {
                        var templateWrapper = document.createElement('div');
                        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
                        for (var _i7 = 0, _Object$entries5 = Object.entries(this._config.content); _i7 < _Object$entries5.length; _i7++) {
                            var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i7], 2),
                                selector = _Object$entries5$_i[0],
                                text = _Object$entries5$_i[1];
                            this._setContent(templateWrapper, text, selector);
                        }
                        var template = templateWrapper.children[0];
                        var extraClass = this._resolvePossibleFunction(this._config.extraClass);
                        if (extraClass) {
                            var _template$classList;
                            (_template$classList = template.classList).add.apply(_template$classList, _toConsumableArray(extraClass.split(' ')));
                        }
                        return template;
                    }

                    // Private
                }, {
                    key: "_typeCheckConfig",
                    value: function _typeCheckConfig(config) {
                        _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, config);
                        this._checkContent(config.content);
                    }
                }, {
                    key: "_checkContent",
                    value: function _checkContent(arg) {
                        for (var _i8 = 0, _Object$entries6 = Object.entries(arg); _i8 < _Object$entries6.length; _i8++) {
                            var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i8], 2),
                                selector = _Object$entries6$_i[0],
                                content = _Object$entries6$_i[1];
                            _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, {
                                selector: selector,
                                entry: content
                            }, DefaultContentType);
                        }
                    }
                }, {
                    key: "_setContent",
                    value: function _setContent(template, content, selector) {
                        var templateElement = SelectorEngine.findOne(selector, template);
                        if (!templateElement) {
                            return;
                        }
                        content = this._resolvePossibleFunction(content);
                        if (!content) {
                            templateElement.remove();
                            return;
                        }
                        if (isElement(content)) {
                            this._putElementInTemplate(getElement(content), templateElement);
                            return;
                        }
                        if (this._config.html) {
                            templateElement.innerHTML = this._maybeSanitize(content);
                            return;
                        }
                        templateElement.textContent = content;
                    }
                }, {
                    key: "_maybeSanitize",
                    value: function _maybeSanitize(arg) {
                        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
                    }
                }, {
                    key: "_resolvePossibleFunction",
                    value: function _resolvePossibleFunction(arg) {
                        return execute(arg, [this]);
                    }
                }, {
                    key: "_putElementInTemplate",
                    value: function _putElementInTemplate(element, templateElement) {
                        if (this._config.html) {
                            templateElement.innerHTML = '';
                            templateElement.append(element);
                            return;
                        }
                        templateElement.textContent = element.textContent;
                    }
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$4;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$4;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$5;
                    }
                }]);
                return TemplateFactory;
            }(Config);
            /**
             * --------------------------------------------------------------------------
             * Bootstrap tooltip.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */
            /**
             * Constants
             */
            var NAME$4 = 'tooltip';
            var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
            var CLASS_NAME_FADE$2 = 'fade';
            var CLASS_NAME_MODAL = 'modal';
            var CLASS_NAME_SHOW$2 = 'show';
            var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
            var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
            var EVENT_MODAL_HIDE = 'hide.bs.modal';
            var TRIGGER_HOVER = 'hover';
            var TRIGGER_FOCUS = 'focus';
            var TRIGGER_CLICK = 'click';
            var TRIGGER_MANUAL = 'manual';
            var EVENT_HIDE$2 = 'hide';
            var EVENT_HIDDEN$2 = 'hidden';
            var EVENT_SHOW$2 = 'show';
            var EVENT_SHOWN$2 = 'shown';
            var EVENT_INSERTED = 'inserted';
            var EVENT_CLICK$1 = 'click';
            var EVENT_FOCUSIN$1 = 'focusin';
            var EVENT_FOCUSOUT$1 = 'focusout';
            var EVENT_MOUSEENTER = 'mouseenter';
            var EVENT_MOUSELEAVE = 'mouseleave';
            var AttachmentMap = {
                AUTO: 'auto',
                TOP: 'top',
                RIGHT: isRTL() ? 'left' : 'right',
                BOTTOM: 'bottom',
                LEFT: isRTL() ? 'right' : 'left'
            };
            var Default$3 = {
                allowList: DefaultAllowlist,
                animation: true,
                boundary: 'clippingParents',
                container: false,
                customClass: '',
                delay: 0,
                fallbackPlacements: ['top', 'right', 'bottom', 'left'],
                html: false,
                offset: [0, 6],
                placement: 'top',
                popperConfig: null,
                sanitize: true,
                sanitizeFn: null,
                selector: false,
                template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
                title: '',
                trigger: 'hover focus'
            };
            var DefaultType$3 = {
                allowList: 'object',
                animation: 'boolean',
                boundary: '(string|element)',
                container: '(string|element|boolean)',
                customClass: '(string|function)',
                delay: '(number|object)',
                fallbackPlacements: 'array',
                html: 'boolean',
                offset: '(array|string|function)',
                placement: '(string|function)',
                popperConfig: '(null|object|function)',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                selector: '(string|boolean)',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string'
            };

            /**
             * Class definition
             */
            var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
                _inherits(Tooltip, _BaseComponent8);
                var _super13 = _createSuper(Tooltip);

                function Tooltip(element, config) {
                    var _this39;
                    _classCallCheck(this, Tooltip);
                    if (typeof Popper__namespace === 'undefined') {
                        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
                    }
                    _this39 = _super13.call(this, element, config);

                    // Private
                    _this39._isEnabled = true;
                    _this39._timeout = 0;
                    _this39._isHovered = null;
                    _this39._activeTrigger = {};
                    _this39._popper = null;
                    _this39._templateFactory = null;
                    _this39._newContent = null;

                    // Protected
                    _this39.tip = null;
                    _this39._setListeners();
                    if (!_this39._config.selector) {
                        _this39._fixTitle();
                    }
                    return _this39;
                }

                // Getters
                _createClass(Tooltip, [{
                    key: "enable",
                    value:
                    // Public
                        function enable() {
                            this._isEnabled = true;
                        }
                }, {
                    key: "disable",
                    value: function disable() {
                        this._isEnabled = false;
                    }
                }, {
                    key: "toggleEnabled",
                    value: function toggleEnabled() {
                        this._isEnabled = !this._isEnabled;
                    }
                }, {
                    key: "toggle",
                    value: function toggle() {
                        if (!this._isEnabled) {
                            return;
                        }
                        this._activeTrigger.click = !this._activeTrigger.click;
                        if (this._isShown()) {
                            this._leave();
                            return;
                        }
                        this._enter();
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        clearTimeout(this._timeout);
                        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                        if (this._element.getAttribute('data-bs-original-title')) {
                            this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
                        }
                        this._disposePopper();
                        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
                    }
                }, {
                    key: "show",
                    value: function show() {
                        var _this40 = this;
                        if (this._element.style.display === 'none') {
                            throw new Error('Please use show on visible elements');
                        }
                        if (!(this._isWithContent() && this._isEnabled)) {
                            return;
                        }
                        var showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
                        var shadowRoot = findShadowRoot(this._element);
                        var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
                        if (showEvent.defaultPrevented || !isInTheDom) {
                            return;
                        }

                        // TODO: v6 remove this or make it optional
                        this._disposePopper();
                        var tip = this._getTipElement();
                        this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
                        var container = this._config.container;
                        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                            container.append(tip);
                            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
                        }
                        this._popper = this._createPopper(tip);
                        tip.classList.add(CLASS_NAME_SHOW$2);

                        // If this is a touch-enabled device we add extra
                        // empty mouseover listeners to the body's immediate children;
                        // only needed because of broken event delegation on iOS
                        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                        if ('ontouchstart' in document.documentElement) {
                            var _ref9;
                            var _iterator20 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
                                _step20;
                            try {
                                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                                    var element = _step20.value;
                                    EventHandler.on(element, 'mouseover', noop);
                                }
                            } catch (err) {
                                _iterator20.e(err);
                            } finally {
                                _iterator20.f();
                            }
                        }
                        var complete = function complete() {
                            EventHandler.trigger(_this40._element, _this40.constructor.eventName(EVENT_SHOWN$2));
                            if (_this40._isHovered === false) {
                                _this40._leave();
                            }
                            _this40._isHovered = false;
                        };
                        this._queueCallback(complete, this.tip, this._isAnimated());
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        var _this41 = this;
                        if (!this._isShown()) {
                            return;
                        }
                        var hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
                        if (hideEvent.defaultPrevented) {
                            return;
                        }
                        var tip = this._getTipElement();
                        tip.classList.remove(CLASS_NAME_SHOW$2);

                        // If this is a touch-enabled device we remove the extra
                        // empty mouseover listeners we added for iOS support
                        if ('ontouchstart' in document.documentElement) {
                            var _ref10;
                            var _iterator21 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
                                _step21;
                            try {
                                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                                    var element = _step21.value;
                                    EventHandler.off(element, 'mouseover', noop);
                                }
                            } catch (err) {
                                _iterator21.e(err);
                            } finally {
                                _iterator21.f();
                            }
                        }
                        this._activeTrigger[TRIGGER_CLICK] = false;
                        this._activeTrigger[TRIGGER_FOCUS] = false;
                        this._activeTrigger[TRIGGER_HOVER] = false;
                        this._isHovered = null; // it is a trick to support manual triggering

                        var complete = function complete() {
                            if (_this41._isWithActiveTrigger()) {
                                return;
                            }
                            if (!_this41._isHovered) {
                                _this41._disposePopper();
                            }
                            _this41._element.removeAttribute('aria-describedby');
                            EventHandler.trigger(_this41._element, _this41.constructor.eventName(EVENT_HIDDEN$2));
                        };
                        this._queueCallback(complete, this.tip, this._isAnimated());
                    }
                }, {
                    key: "update",
                    value: function update() {
                        if (this._popper) {
                            this._popper.update();
                        }
                    }

                    // Protected
                }, {
                    key: "_isWithContent",
                    value: function _isWithContent() {
                        return Boolean(this._getTitle());
                    }
                }, {
                    key: "_getTipElement",
                    value: function _getTipElement() {
                        if (!this.tip) {
                            this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
                        }
                        return this.tip;
                    }
                }, {
                    key: "_createTipElement",
                    value: function _createTipElement(content) {
                        var tip = this._getTemplateFactory(content).toHtml();

                        // TODO: remove this check in v6
                        if (!tip) {
                            return null;
                        }
                        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
                        // TODO: v6 the following can be achieved with CSS only
                        tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
                        var tipId = getUID(this.constructor.NAME).toString();
                        tip.setAttribute('id', tipId);
                        if (this._isAnimated()) {
                            tip.classList.add(CLASS_NAME_FADE$2);
                        }
                        return tip;
                    }
                }, {
                    key: "setContent",
                    value: function setContent(content) {
                        this._newContent = content;
                        if (this._isShown()) {
                            this._disposePopper();
                            this.show();
                        }
                    }
                }, {
                    key: "_getTemplateFactory",
                    value: function _getTemplateFactory(content) {
                        if (this._templateFactory) {
                            this._templateFactory.changeContent(content);
                        } else {
                            this._templateFactory = new TemplateFactory(_objectSpread(_objectSpread({}, this._config), {}, {
                                // the `content` var has to be after `this._config`
                                // to override config.content in case of popover
                                content: content,
                                extraClass: this._resolvePossibleFunction(this._config.customClass)
                            }));
                        }
                        return this._templateFactory;
                    }
                }, {
                    key: "_getContentForTemplate",
                    value: function _getContentForTemplate() {
                        return _defineProperty({}, SELECTOR_TOOLTIP_INNER, this._getTitle());
                    }
                }, {
                    key: "_getTitle",
                    value: function _getTitle() {
                        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
                    }

                    // Private
                }, {
                    key: "_initializeOnDelegatedTarget",
                    value: function _initializeOnDelegatedTarget(event) {
                        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
                    }
                }, {
                    key: "_isAnimated",
                    value: function _isAnimated() {
                        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
                    }
                }, {
                    key: "_isShown",
                    value: function _isShown() {
                        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
                    }
                }, {
                    key: "_createPopper",
                    value: function _createPopper(tip) {
                        var placement = execute(this._config.placement, [this, tip, this._element]);
                        var attachment = AttachmentMap[placement.toUpperCase()];
                        return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
                    }
                }, {
                    key: "_getOffset",
                    value: function _getOffset() {
                        var _this42 = this;
                        var offset = this._config.offset;
                        if (typeof offset === 'string') {
                            return offset.split(',').map(function (value) {
                                return Number.parseInt(value, 10);
                            });
                        }
                        if (typeof offset === 'function') {
                            return function (popperData) {
                                return offset(popperData, _this42._element);
                            };
                        }
                        return offset;
                    }
                }, {
                    key: "_resolvePossibleFunction",
                    value: function _resolvePossibleFunction(arg) {
                        return execute(arg, [this._element]);
                    }
                }, {
                    key: "_getPopperConfig",
                    value: function _getPopperConfig(attachment) {
                        var _this43 = this;
                        var defaultBsPopperConfig = {
                            placement: attachment,
                            modifiers: [{
                                name: 'flip',
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: 'offset',
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: 'preventOverflow',
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: 'arrow',
                                options: {
                                    element: ".".concat(this.constructor.NAME, "-arrow")
                                }
                            }, {
                                name: 'preSetPlacement',
                                enabled: true,
                                phase: 'beforeMain',
                                fn: function fn(data) {
                                    // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                                    // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                                    _this43._getTipElement().setAttribute('data-popper-placement', data.state.placement);
                                }
                            }]
                        };
                        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
                    }
                }, {
                    key: "_setListeners",
                    value: function _setListeners() {
                        var _this44 = this;
                        var triggers = this._config.trigger.split(' ');
                        var _iterator22 = _createForOfIteratorHelper(triggers),
                            _step22;
                        try {
                            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                                var trigger = _step22.value;
                                if (trigger === 'click') {
                                    EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, function (event) {
                                        var context = _this44._initializeOnDelegatedTarget(event);
                                        context.toggle();
                                    });
                                } else if (trigger !== TRIGGER_MANUAL) {
                                    var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                                    var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                                    EventHandler.on(this._element, eventIn, this._config.selector, function (event) {
                                        var context = _this44._initializeOnDelegatedTarget(event);
                                        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                                        context._enter();
                                    });
                                    EventHandler.on(this._element, eventOut, this._config.selector, function (event) {
                                        var context = _this44._initializeOnDelegatedTarget(event);
                                        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                                        context._leave();
                                    });
                                }
                            }
                        } catch (err) {
                            _iterator22.e(err);
                        } finally {
                            _iterator22.f();
                        }
                        this._hideModalHandler = function () {
                            if (_this44._element) {
                                _this44.hide();
                            }
                        };
                        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                    }
                }, {
                    key: "_fixTitle",
                    value: function _fixTitle() {
                        var title = this._element.getAttribute('title');
                        if (!title) {
                            return;
                        }
                        if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
                            this._element.setAttribute('aria-label', title);
                        }
                        this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
                        this._element.removeAttribute('title');
                    }
                }, {
                    key: "_enter",
                    value: function _enter() {
                        var _this45 = this;
                        if (this._isShown() || this._isHovered) {
                            this._isHovered = true;
                            return;
                        }
                        this._isHovered = true;
                        this._setTimeout(function () {
                            if (_this45._isHovered) {
                                _this45.show();
                            }
                        }, this._config.delay.show);
                    }
                }, {
                    key: "_leave",
                    value: function _leave() {
                        var _this46 = this;
                        if (this._isWithActiveTrigger()) {
                            return;
                        }
                        this._isHovered = false;
                        this._setTimeout(function () {
                            if (!_this46._isHovered) {
                                _this46.hide();
                            }
                        }, this._config.delay.hide);
                    }
                }, {
                    key: "_setTimeout",
                    value: function _setTimeout(handler, timeout) {
                        clearTimeout(this._timeout);
                        this._timeout = setTimeout(handler, timeout);
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function _isWithActiveTrigger() {
                        return Object.values(this._activeTrigger).includes(true);
                    }
                }, {
                    key: "_getConfig",
                    value: function _getConfig(config) {
                        var dataAttributes = Manipulator.getDataAttributes(this._element);
                        for (var _i9 = 0, _Object$keys2 = Object.keys(dataAttributes); _i9 < _Object$keys2.length; _i9++) {
                            var dataAttribute = _Object$keys2[_i9];
                            if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
                                delete dataAttributes[dataAttribute];
                            }
                        }
                        config = _objectSpread(_objectSpread({}, dataAttributes), _typeof(config) === 'object' && config ? config : {});
                        config = this._mergeConfigObj(config);
                        config = this._configAfterMerge(config);
                        this._typeCheckConfig(config);
                        return config;
                    }
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        config.container = config.container === false ? document.body : getElement(config.container);
                        if (typeof config.delay === 'number') {
                            config.delay = {
                                show: config.delay,
                                hide: config.delay
                            };
                        }
                        if (typeof config.title === 'number') {
                            config.title = config.title.toString();
                        }
                        if (typeof config.content === 'number') {
                            config.content = config.content.toString();
                        }
                        return config;
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function _getDelegateConfig() {
                        var config = {};
                        for (var _i10 = 0, _Object$entries7 = Object.entries(this._config); _i10 < _Object$entries7.length; _i10++) {
                            var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i10], 2),
                                key = _Object$entries7$_i[0],
                                value = _Object$entries7$_i[1];
                            if (this.constructor.Default[key] !== value) {
                                config[key] = value;
                            }
                        }
                        config.selector = false;
                        config.trigger = 'manual';

                        // In the future can be replaced with:
                        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                        // `Object.fromEntries(keysWithDifferentValues)`
                        return config;
                    }
                }, {
                    key: "_disposePopper",
                    value: function _disposePopper() {
                        if (this._popper) {
                            this._popper.destroy();
                            this._popper = null;
                        }
                        if (this.tip) {
                            this.tip.remove();
                            this.tip = null;
                        }
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$3;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$3;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$4;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Tooltip.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config]();
                        });
                    }
                }]);
                return Tooltip;
            }(BaseComponent);
            /**
             * jQuery
             */
            defineJQueryPlugin(Tooltip);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap popover.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$3 = 'popover';
            var SELECTOR_TITLE = '.popover-header';
            var SELECTOR_CONTENT = '.popover-body';
            var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
                content: '',
                offset: [0, 8],
                placement: 'right',
                template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
                trigger: 'click'
            });
            var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
                content: '(null|string|element|function)'
            });

            /**
             * Class definition
             */
            var Popover = /*#__PURE__*/function (_Tooltip) {
                _inherits(Popover, _Tooltip);
                var _super14 = _createSuper(Popover);

                function Popover() {
                    _classCallCheck(this, Popover);
                    return _super14.apply(this, arguments);
                }

                _createClass(Popover, [{
                    key: "_isWithContent",
                    value:
                    // Overrides
                        function _isWithContent() {
                            return this._getTitle() || this._getContent();
                        }

                    // Private
                }, {
                    key: "_getContentForTemplate",
                    value: function _getContentForTemplate() {
                        return _defineProperty(_defineProperty({}, SELECTOR_TITLE, this._getTitle()), SELECTOR_CONTENT, this._getContent());
                    }
                }, {
                    key: "_getContent",
                    value: function _getContent() {
                        return this._resolvePossibleFunction(this._config.content);
                    }

                    // Static
                }], [{
                    key: "Default",
                    get:
                    // Getters
                        function get() {
                            return Default$2;
                        }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$2;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$3;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Popover.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config]();
                        });
                    }
                }]);
                return Popover;
            }(Tooltip);
            /**
             * jQuery
             */
            defineJQueryPlugin(Popover);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap scrollspy.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$2 = 'scrollspy';
            var DATA_KEY$2 = 'bs.scrollspy';
            var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
            var DATA_API_KEY = '.data-api';
            var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
            var EVENT_CLICK = "click".concat(EVENT_KEY$2);
            var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY);
            var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
            var CLASS_NAME_ACTIVE$1 = 'active';
            var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
            var SELECTOR_TARGET_LINKS = '[href]';
            var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
            var SELECTOR_NAV_LINKS = '.nav-link';
            var SELECTOR_NAV_ITEMS = '.nav-item';
            var SELECTOR_LIST_ITEMS = '.list-group-item';
            var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_NAV_ITEMS, " > ").concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS);
            var SELECTOR_DROPDOWN = '.dropdown';
            var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
            var Default$1 = {
                offset: null,
                // TODO: v6 @deprecated, keep it for backwards compatibility reasons
                rootMargin: '0px 0px -25%',
                smoothScroll: false,
                target: null,
                threshold: [0.1, 0.5, 1]
            };
            var DefaultType$1 = {
                offset: '(number|null)',
                // TODO v6 @deprecated, keep it for backwards compatibility reasons
                rootMargin: 'string',
                smoothScroll: 'boolean',
                target: 'element',
                threshold: 'array'
            };

            /**
             * Class definition
             */
            var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
                _inherits(ScrollSpy, _BaseComponent9);
                var _super15 = _createSuper(ScrollSpy);

                function ScrollSpy(element, config) {
                    var _this47;
                    _classCallCheck(this, ScrollSpy);
                    _this47 = _super15.call(this, element, config);

                    // this._element is the observablesContainer and config.target the menu links wrapper
                    _this47._targetLinks = new Map();
                    _this47._observableSections = new Map();
                    _this47._rootElement = getComputedStyle(_this47._element).overflowY === 'visible' ? null : _this47._element;
                    _this47._activeTarget = null;
                    _this47._observer = null;
                    _this47._previousScrollData = {
                        visibleEntryTop: 0,
                        parentScrollTop: 0
                    };
                    _this47.refresh(); // initialize
                    return _this47;
                }

                // Getters
                _createClass(ScrollSpy, [{
                    key: "refresh",
                    value:
                    // Public
                        function refresh() {
                            this._initializeTargetsAndObservables();
                            this._maybeEnableSmoothScroll();
                            if (this._observer) {
                                this._observer.disconnect();
                            } else {
                                this._observer = this._getNewObserver();
                            }
                            var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
                                _step23;
                            try {
                                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                                    var section = _step23.value;
                                    this._observer.observe(section);
                                }
                            } catch (err) {
                                _iterator23.e(err);
                            } finally {
                                _iterator23.f();
                            }
                        }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        this._observer.disconnect();
                        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
                    }

                    // Private
                }, {
                    key: "_configAfterMerge",
                    value: function _configAfterMerge(config) {
                        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
                        config.target = getElement(config.target) || document.body;

                        // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
                        config.rootMargin = config.offset ? "".concat(config.offset, "px 0px -30%") : config.rootMargin;
                        if (typeof config.threshold === 'string') {
                            config.threshold = config.threshold.split(',').map(function (value) {
                                return Number.parseFloat(value);
                            });
                        }
                        return config;
                    }
                }, {
                    key: "_maybeEnableSmoothScroll",
                    value: function _maybeEnableSmoothScroll() {
                        var _this48 = this;
                        if (!this._config.smoothScroll) {
                            return;
                        }

                        // unregister any previous listeners
                        EventHandler.off(this._config.target, EVENT_CLICK);
                        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, function (event) {
                            var observableSection = _this48._observableSections.get(event.target.hash);
                            if (observableSection) {
                                event.preventDefault();
                                var root = _this48._rootElement || window;
                                var height = observableSection.offsetTop - _this48._element.offsetTop;
                                if (root.scrollTo) {
                                    root.scrollTo({
                                        top: height,
                                        behavior: 'smooth'
                                    });
                                    return;
                                }

                                // Chrome 60 doesn't support `scrollTo`
                                root.scrollTop = height;
                            }
                        });
                    }
                }, {
                    key: "_getNewObserver",
                    value: function _getNewObserver() {
                        var _this49 = this;
                        var options = {
                            root: this._rootElement,
                            threshold: this._config.threshold,
                            rootMargin: this._config.rootMargin
                        };
                        return new IntersectionObserver(function (entries) {
                            return _this49._observerCallback(entries);
                        }, options);
                    }

                    // The logic of selection
                }, {
                    key: "_observerCallback",
                    value: function _observerCallback(entries) {
                        var _this50 = this;
                        var targetElement = function targetElement(entry) {
                            return _this50._targetLinks.get("#".concat(entry.target.id));
                        };
                        var activate = function activate(entry) {
                            _this50._previousScrollData.visibleEntryTop = entry.target.offsetTop;
                            _this50._process(targetElement(entry));
                        };
                        var parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
                        var userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
                        this._previousScrollData.parentScrollTop = parentScrollTop;
                        var _iterator24 = _createForOfIteratorHelper(entries),
                            _step24;
                        try {
                            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                                var entry = _step24.value;
                                if (!entry.isIntersecting) {
                                    this._activeTarget = null;
                                    this._clearActiveClass(targetElement(entry));
                                    continue;
                                }
                                var entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                                // if we are scrolling down, pick the bigger offsetTop
                                if (userScrollsDown && entryIsLowerThanPrevious) {
                                    activate(entry);
                                    // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                                    if (!parentScrollTop) {
                                        return;
                                    }
                                    continue;
                                }

                                // if we are scrolling up, pick the smallest offsetTop
                                if (!userScrollsDown && !entryIsLowerThanPrevious) {
                                    activate(entry);
                                }
                            }
                        } catch (err) {
                            _iterator24.e(err);
                        } finally {
                            _iterator24.f();
                        }
                    }
                }, {
                    key: "_initializeTargetsAndObservables",
                    value: function _initializeTargetsAndObservables() {
                        this._targetLinks = new Map();
                        this._observableSections = new Map();
                        var targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
                        var _iterator25 = _createForOfIteratorHelper(targetLinks),
                            _step25;
                        try {
                            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                                var anchor = _step25.value;
                                // ensure that the anchor has an id and is not disabled
                                if (!anchor.hash || isDisabled(anchor)) {
                                    continue;
                                }
                                var observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

                                // ensure that the observableSection exists & is visible
                                if (isVisible(observableSection)) {
                                    this._targetLinks.set(decodeURI(anchor.hash), anchor);
                                    this._observableSections.set(anchor.hash, observableSection);
                                }
                            }
                        } catch (err) {
                            _iterator25.e(err);
                        } finally {
                            _iterator25.f();
                        }
                    }
                }, {
                    key: "_process",
                    value: function _process(target) {
                        if (this._activeTarget === target) {
                            return;
                        }
                        this._clearActiveClass(this._config.target);
                        this._activeTarget = target;
                        target.classList.add(CLASS_NAME_ACTIVE$1);
                        this._activateParents(target);
                        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
                            relatedTarget: target
                        });
                    }
                }, {
                    key: "_activateParents",
                    value: function _activateParents(target) {
                        // Activate dropdown parents
                        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
                            return;
                        }
                        var _iterator26 = _createForOfIteratorHelper(SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)),
                            _step26;
                        try {
                            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                                var listGroup = _step26.value;
                                // Set triggered links parents as active
                                // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                                var _iterator27 = _createForOfIteratorHelper(SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)),
                                    _step27;
                                try {
                                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                                        var item = _step27.value;
                                        item.classList.add(CLASS_NAME_ACTIVE$1);
                                    }
                                } catch (err) {
                                    _iterator27.e(err);
                                } finally {
                                    _iterator27.f();
                                }
                            }
                        } catch (err) {
                            _iterator26.e(err);
                        } finally {
                            _iterator26.f();
                        }
                    }
                }, {
                    key: "_clearActiveClass",
                    value: function _clearActiveClass(parent) {
                        parent.classList.remove(CLASS_NAME_ACTIVE$1);
                        var activeNodes = SelectorEngine.find("".concat(SELECTOR_TARGET_LINKS, ".").concat(CLASS_NAME_ACTIVE$1), parent);
                        var _iterator28 = _createForOfIteratorHelper(activeNodes),
                            _step28;
                        try {
                            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                                var node = _step28.value;
                                node.classList.remove(CLASS_NAME_ACTIVE$1);
                            }
                        } catch (err) {
                            _iterator28.e(err);
                        } finally {
                            _iterator28.f();
                        }
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default$1;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType$1;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME$2;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = ScrollSpy.getOrCreateInstance(this, config);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config]();
                        });
                    }
                }]);
                return ScrollSpy;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
                var _iterator29 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_SPY)),
                    _step29;
                try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                        var spy = _step29.value;
                        ScrollSpy.getOrCreateInstance(spy);
                    }
                } catch (err) {
                    _iterator29.e(err);
                } finally {
                    _iterator29.f();
                }
            });

            /**
             * jQuery
             */

            defineJQueryPlugin(ScrollSpy);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap tab.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME$1 = 'tab';
            var DATA_KEY$1 = 'bs.tab';
            var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
            var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
            var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
            var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
            var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
            var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1);
            var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$1);
            var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$1);
            var ARROW_LEFT_KEY = 'ArrowLeft';
            var ARROW_RIGHT_KEY = 'ArrowRight';
            var ARROW_UP_KEY = 'ArrowUp';
            var ARROW_DOWN_KEY = 'ArrowDown';
            var HOME_KEY = 'Home';
            var END_KEY = 'End';
            var CLASS_NAME_ACTIVE = 'active';
            var CLASS_NAME_FADE$1 = 'fade';
            var CLASS_NAME_SHOW$1 = 'show';
            var CLASS_DROPDOWN = 'dropdown';
            var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
            var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
            var NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(".concat(SELECTOR_DROPDOWN_TOGGLE, ")");
            var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
            var SELECTOR_OUTER = '.nav-item, .list-group-item';
            var SELECTOR_INNER = ".nav-link".concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", .list-group-item").concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", [role=\"tab\"]").concat(NOT_SELECTOR_DROPDOWN_TOGGLE);
            var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
            var SELECTOR_INNER_ELEM = "".concat(SELECTOR_INNER, ", ").concat(SELECTOR_DATA_TOGGLE);
            var SELECTOR_DATA_TOGGLE_ACTIVE = ".".concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"tab\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"pill\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"list\"]");

            /**
             * Class definition
             */
            var Tab = /*#__PURE__*/function (_BaseComponent10) {
                _inherits(Tab, _BaseComponent10);
                var _super16 = _createSuper(Tab);

                function Tab(element) {
                    var _this51;
                    _classCallCheck(this, Tab);
                    _this51 = _super16.call(this, element);
                    _this51._parent = _this51._element.closest(SELECTOR_TAB_PANEL);
                    if (!_this51._parent) {
                        return _possibleConstructorReturn(_this51);
                        // TODO: should throw exception in v6
                        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
                    }

                    // Set up initial aria attributes
                    _this51._setInitialAttributes(_this51._parent, _this51._getChildren());
                    EventHandler.on(_this51._element, EVENT_KEYDOWN, function (event) {
                        return _this51._keydown(event);
                    });
                    return _this51;
                }

                // Getters
                _createClass(Tab, [{
                    key: "show",
                    value:
                    // Public
                        function show() {
                            // Shows this elem and deactivate the active sibling if exists
                            var innerElem = this._element;
                            if (this._elemIsActive(innerElem)) {
                                return;
                            }

                            // Search for active tab on same parent to deactivate it
                            var active = this._getActiveElem();
                            var hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
                                relatedTarget: innerElem
                            }) : null;
                            var showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
                                relatedTarget: active
                            });
                            if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
                                return;
                            }
                            this._deactivate(active, innerElem);
                            this._activate(innerElem, active);
                        }

                    // Private
                }, {
                    key: "_activate",
                    value: function _activate(element, relatedElem) {
                        var _this52 = this;
                        if (!element) {
                            return;
                        }
                        element.classList.add(CLASS_NAME_ACTIVE);
                        this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

                        var complete = function complete() {
                            if (element.getAttribute('role') !== 'tab') {
                                element.classList.add(CLASS_NAME_SHOW$1);
                                return;
                            }
                            element.removeAttribute('tabindex');
                            element.setAttribute('aria-selected', true);
                            _this52._toggleDropDown(element, true);
                            EventHandler.trigger(element, EVENT_SHOWN$1, {
                                relatedTarget: relatedElem
                            });
                        };
                        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
                    }
                }, {
                    key: "_deactivate",
                    value: function _deactivate(element, relatedElem) {
                        var _this53 = this;
                        if (!element) {
                            return;
                        }
                        element.classList.remove(CLASS_NAME_ACTIVE);
                        element.blur();
                        this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

                        var complete = function complete() {
                            if (element.getAttribute('role') !== 'tab') {
                                element.classList.remove(CLASS_NAME_SHOW$1);
                                return;
                            }
                            element.setAttribute('aria-selected', false);
                            element.setAttribute('tabindex', '-1');
                            _this53._toggleDropDown(element, false);
                            EventHandler.trigger(element, EVENT_HIDDEN$1, {
                                relatedTarget: relatedElem
                            });
                        };
                        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
                    }
                }, {
                    key: "_keydown",
                    value: function _keydown(event) {
                        if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
                            return;
                        }
                        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
                        event.preventDefault();
                        var children = this._getChildren().filter(function (element) {
                            return !isDisabled(element);
                        });
                        var nextActiveElement;
                        if ([HOME_KEY, END_KEY].includes(event.key)) {
                            nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
                        } else {
                            var isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
                            nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
                        }
                        if (nextActiveElement) {
                            nextActiveElement.focus({
                                preventScroll: true
                            });
                            Tab.getOrCreateInstance(nextActiveElement).show();
                        }
                    }
                }, {
                    key: "_getChildren",
                    value: function _getChildren() {
                        // collection of inner elements
                        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
                    }
                }, {
                    key: "_getActiveElem",
                    value: function _getActiveElem() {
                        var _this54 = this;
                        return this._getChildren().find(function (child) {
                            return _this54._elemIsActive(child);
                        }) || null;
                    }
                }, {
                    key: "_setInitialAttributes",
                    value: function _setInitialAttributes(parent, children) {
                        this._setAttributeIfNotExists(parent, 'role', 'tablist');
                        var _iterator30 = _createForOfIteratorHelper(children),
                            _step30;
                        try {
                            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                                var child = _step30.value;
                                this._setInitialAttributesOnChild(child);
                            }
                        } catch (err) {
                            _iterator30.e(err);
                        } finally {
                            _iterator30.f();
                        }
                    }
                }, {
                    key: "_setInitialAttributesOnChild",
                    value: function _setInitialAttributesOnChild(child) {
                        child = this._getInnerElement(child);
                        var isActive = this._elemIsActive(child);
                        var outerElem = this._getOuterElement(child);
                        child.setAttribute('aria-selected', isActive);
                        if (outerElem !== child) {
                            this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
                        }
                        if (!isActive) {
                            child.setAttribute('tabindex', '-1');
                        }
                        this._setAttributeIfNotExists(child, 'role', 'tab');

                        // set attributes to the related panel too
                        this._setInitialAttributesOnTargetPanel(child);
                    }
                }, {
                    key: "_setInitialAttributesOnTargetPanel",
                    value: function _setInitialAttributesOnTargetPanel(child) {
                        var target = SelectorEngine.getElementFromSelector(child);
                        if (!target) {
                            return;
                        }
                        this._setAttributeIfNotExists(target, 'role', 'tabpanel');
                        if (child.id) {
                            this._setAttributeIfNotExists(target, 'aria-labelledby', "".concat(child.id));
                        }
                    }
                }, {
                    key: "_toggleDropDown",
                    value: function _toggleDropDown(element, open) {
                        var outerElem = this._getOuterElement(element);
                        if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
                            return;
                        }
                        var toggle = function toggle(selector, className) {
                            var element = SelectorEngine.findOne(selector, outerElem);
                            if (element) {
                                element.classList.toggle(className, open);
                            }
                        };
                        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
                        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
                        outerElem.setAttribute('aria-expanded', open);
                    }
                }, {
                    key: "_setAttributeIfNotExists",
                    value: function _setAttributeIfNotExists(element, attribute, value) {
                        if (!element.hasAttribute(attribute)) {
                            element.setAttribute(attribute, value);
                        }
                    }
                }, {
                    key: "_elemIsActive",
                    value: function _elemIsActive(elem) {
                        return elem.classList.contains(CLASS_NAME_ACTIVE);
                    }

                    // Try to get the inner element (usually the .nav-link)
                }, {
                    key: "_getInnerElement",
                    value: function _getInnerElement(elem) {
                        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
                    }

                    // Try to get the outer element (usually the .nav-item)
                }, {
                    key: "_getOuterElement",
                    value: function _getOuterElement(elem) {
                        return elem.closest(SELECTOR_OUTER) || elem;
                    }

                    // Static
                }], [{
                    key: "NAME",
                    get: function get() {
                        return NAME$1;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Tab.getOrCreateInstance(this);
                            if (typeof config !== 'string') {
                                return;
                            }
                            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                                throw new TypeError("No method named \"".concat(config, "\""));
                            }
                            data[config]();
                        });
                    }
                }]);
                return Tab;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
                if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                }
                if (isDisabled(this)) {
                    return;
                }
                Tab.getOrCreateInstance(this).show();
            });

            /**
             * Initialize on focus
             */
            EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
                var _iterator31 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)),
                    _step31;
                try {
                    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                        var element = _step31.value;
                        Tab.getOrCreateInstance(element);
                    }
                } catch (err) {
                    _iterator31.e(err);
                } finally {
                    _iterator31.f();
                }
            });
            /**
             * jQuery
             */

            defineJQueryPlugin(Tab);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap toast.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME = 'toast';
            var DATA_KEY = 'bs.toast';
            var EVENT_KEY = ".".concat(DATA_KEY);
            var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
            var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
            var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
            var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
            var EVENT_HIDE = "hide".concat(EVENT_KEY);
            var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
            var EVENT_SHOW = "show".concat(EVENT_KEY);
            var EVENT_SHOWN = "shown".concat(EVENT_KEY);
            var CLASS_NAME_FADE = 'fade';
            var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
            var CLASS_NAME_SHOW = 'show';
            var CLASS_NAME_SHOWING = 'showing';
            var DefaultType = {
                animation: 'boolean',
                autohide: 'boolean',
                delay: 'number'
            };
            var Default = {
                animation: true,
                autohide: true,
                delay: 5000
            };

            /**
             * Class definition
             */
            var Toast = /*#__PURE__*/function (_BaseComponent11) {
                _inherits(Toast, _BaseComponent11);
                var _super17 = _createSuper(Toast);

                function Toast(element, config) {
                    var _this55;
                    _classCallCheck(this, Toast);
                    _this55 = _super17.call(this, element, config);
                    _this55._timeout = null;
                    _this55._hasMouseInteraction = false;
                    _this55._hasKeyboardInteraction = false;
                    _this55._setListeners();
                    return _this55;
                }

                // Getters
                _createClass(Toast, [{
                    key: "show",
                    value:
                    // Public
                        function show() {
                            var _this56 = this;
                            var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
                            if (showEvent.defaultPrevented) {
                                return;
                            }
                            this._clearTimeout();
                            if (this._config.animation) {
                                this._element.classList.add(CLASS_NAME_FADE);
                            }
                            var complete = function complete() {
                                _this56._element.classList.remove(CLASS_NAME_SHOWING);
                                EventHandler.trigger(_this56._element, EVENT_SHOWN);
                                _this56._maybeScheduleHide();
                            };
                            this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
                            reflow(this._element);
                            this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
                            this._queueCallback(complete, this._element, this._config.animation);
                        }
                }, {
                    key: "hide",
                    value: function hide() {
                        var _this57 = this;
                        if (!this.isShown()) {
                            return;
                        }
                        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
                        if (hideEvent.defaultPrevented) {
                            return;
                        }
                        var complete = function complete() {
                            _this57._element.classList.add(CLASS_NAME_HIDE); // @deprecated
                            _this57._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
                            EventHandler.trigger(_this57._element, EVENT_HIDDEN);
                        };
                        this._element.classList.add(CLASS_NAME_SHOWING);
                        this._queueCallback(complete, this._element, this._config.animation);
                    }
                }, {
                    key: "dispose",
                    value: function dispose() {
                        this._clearTimeout();
                        if (this.isShown()) {
                            this._element.classList.remove(CLASS_NAME_SHOW);
                        }
                        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
                    }
                }, {
                    key: "isShown",
                    value: function isShown() {
                        return this._element.classList.contains(CLASS_NAME_SHOW);
                    }

                    // Private
                }, {
                    key: "_maybeScheduleHide",
                    value: function _maybeScheduleHide() {
                        var _this58 = this;
                        if (!this._config.autohide) {
                            return;
                        }
                        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
                            return;
                        }
                        this._timeout = setTimeout(function () {
                            _this58.hide();
                        }, this._config.delay);
                    }
                }, {
                    key: "_onInteraction",
                    value: function _onInteraction(event, isInteracting) {
                        switch (event.type) {
                            case 'mouseover':
                            case 'mouseout': {
                                this._hasMouseInteraction = isInteracting;
                                break;
                            }
                            case 'focusin':
                            case 'focusout': {
                                this._hasKeyboardInteraction = isInteracting;
                                break;
                            }
                        }
                        if (isInteracting) {
                            this._clearTimeout();
                            return;
                        }
                        var nextElement = event.relatedTarget;
                        if (this._element === nextElement || this._element.contains(nextElement)) {
                            return;
                        }
                        this._maybeScheduleHide();
                    }
                }, {
                    key: "_setListeners",
                    value: function _setListeners() {
                        var _this59 = this;
                        EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
                            return _this59._onInteraction(event, true);
                        });
                        EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
                            return _this59._onInteraction(event, false);
                        });
                        EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
                            return _this59._onInteraction(event, true);
                        });
                        EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
                            return _this59._onInteraction(event, false);
                        });
                    }
                }, {
                    key: "_clearTimeout",
                    value: function _clearTimeout() {
                        clearTimeout(this._timeout);
                        this._timeout = null;
                    }

                    // Static
                }], [{
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType;
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return NAME;
                    }
                }, {
                    key: "jQueryInterface",
                    value: function jQueryInterface(config) {
                        return this.each(function () {
                            var data = Toast.getOrCreateInstance(this, config);
                            if (typeof config === 'string') {
                                if (typeof data[config] === 'undefined') {
                                    throw new TypeError("No method named \"".concat(config, "\""));
                                }
                                data[config](this);
                            }
                        });
                    }
                }]);
                return Toast;
            }(BaseComponent);
            /**
             * Data API implementation
             */
            enableDismissTrigger(Toast);

            /**
             * jQuery
             */

            defineJQueryPlugin(Toast);

            /**
             * --------------------------------------------------------------------------
             * Bootstrap index.umd.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            var index_umd = {
                Alert: Alert,
                Button: Button,
                Carousel: Carousel,
                Collapse: Collapse,
                Dropdown: Dropdown,
                Modal: Modal,
                Offcanvas: Offcanvas,
                Popover: Popover,
                ScrollSpy: ScrollSpy,
                Tab: Tab,
                Toast: Toast,
                Tooltip: Tooltip
            };
            return index_umd;
        });
    }, {"@popperjs/core": "../node_modules/@popperjs/core/lib/index.js"}],
    "../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;

        function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
                data: module.bundle.hotData,
                _acceptCallbacks: [],
                _disposeCallbacks: [],
                accept: function (fn) {
                    this._acceptCallbacks.push(fn || function () {
                    });
                },
                dispose: function (fn) {
                    this._disposeCallbacks.push(fn);
                }
            };
            module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var checkedAssets, assetsToAccept;
        var parent = module.bundle.parent;
        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
            var hostname = "" || location.hostname;
            var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
            var ws = new WebSocket(protocol + '://' + hostname + ':' + "64344" + '/');
            ws.onmessage = function (event) {
                checkedAssets = {};
                assetsToAccept = [];
                var data = JSON.parse(event.data);
                if (data.type === 'update') {
                    var handled = false;
                    data.assets.forEach(function (asset) {
                        if (!asset.isNew) {
                            var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
                            if (didAccept) {
                                handled = true;
                            }
                        }
                    });

                    // Enable HMR for CSS by default.
                    handled = handled || data.assets.every(function (asset) {
                        return asset.type === 'css' && asset.generated.js;
                    });
                    if (handled) {
                        console.clear();
                        data.assets.forEach(function (asset) {
                            hmrApply(global.parcelRequire, asset);
                        });
                        assetsToAccept.forEach(function (v) {
                            hmrAcceptRun(v[0], v[1]);
                        });
                    } else if (location.reload) {
                        // `location` global exists in a web worker context but lacks `.reload()` function.
                        location.reload();
                    }
                }
                if (data.type === 'reload') {
                    ws.close();
                    ws.onclose = function () {
                        location.reload();
                    };
                }
                if (data.type === 'error-resolved') {
                    console.log('[parcel] ✨ Error resolved');
                    removeErrorOverlay();
                }
                if (data.type === 'error') {
                    console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                    removeErrorOverlay();
                    var overlay = createErrorOverlay(data);
                    document.body.appendChild(overlay);
                }
            };
        }

        function removeErrorOverlay() {
            var overlay = document.getElementById(OVERLAY_ID);
            if (overlay) {
                overlay.remove();
            }
        }

        function createErrorOverlay(data) {
            var overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;

            // html encode message and stack trace
            var message = document.createElement('div');
            var stackTrace = document.createElement('pre');
            message.innerText = data.error.message;
            stackTrace.innerText = data.error.stack;
            overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
            return overlay;
        }

        function getParents(bundle, id) {
            var modules = bundle.modules;
            if (!modules) {
                return [];
            }
            var parents = [];
            var k, d, dep;
            for (k in modules) {
                for (d in modules[k][1]) {
                    dep = modules[k][1][d];
                    if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                        parents.push(k);
                    }
                }
            }
            if (bundle.parent) {
                parents = parents.concat(getParents(bundle.parent, id));
            }
            return parents;
        }

        function hmrApply(bundle, asset) {
            var modules = bundle.modules;
            if (!modules) {
                return;
            }
            if (modules[asset.id] || !bundle.parent) {
                var fn = new Function('require', 'module', 'exports', asset.generated.js);
                asset.isNew = !modules[asset.id];
                modules[asset.id] = [fn, asset.deps];
            } else if (bundle.parent) {
                hmrApply(bundle.parent, asset);
            }
        }

        function hmrAcceptCheck(bundle, id) {
            var modules = bundle.modules;
            if (!modules) {
                return;
            }
            if (!modules[id] && bundle.parent) {
                return hmrAcceptCheck(bundle.parent, id);
            }
            if (checkedAssets[id]) {
                return;
            }
            checkedAssets[id] = true;
            var cached = bundle.cache[id];
            assetsToAccept.push([bundle, id]);
            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                return true;
            }
            return getParents(global.parcelRequire, id).some(function (id) {
                return hmrAcceptCheck(global.parcelRequire, id);
            });
        }

        function hmrAcceptRun(bundle, id) {
            var cached = bundle.cache[id];
            bundle.hotData = {};
            if (cached) {
                cached.hot.data = bundle.hotData;
            }
            if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
                cached.hot._disposeCallbacks.forEach(function (cb) {
                    cb(bundle.hotData);
                });
            }
            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];
            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                cached.hot._acceptCallbacks.forEach(function (cb) {
                    cb();
                });
                return true;
            }
        }
    }, {}]
}, {}, ["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "js/bootstrap.js"], null)
//# sourceMappingURL=/bootstrap.3d3285c7.js.map