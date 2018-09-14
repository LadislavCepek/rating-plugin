var RatingPluginApi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-component */ "./src/rating-component.ts");

var Api = /** @class */ (function () {
    function Api() {
    }
    Api.create = function (config) {
        (new _rating_component__WEBPACK_IMPORTED_MODULE_0__["default"](config)).render();
    };
    return Api;
}());
/* harmony default export */ __webpack_exports__["default"] = (Api);


/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configurable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurable */ "./src/configurable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(config) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._config = {};
        _this.setDefaultProps();
        _this._config = config;
        return _this;
    }
    Component.prototype.init = function () {
        this.config(this._config);
    };
    Component.prototype.render = function () {
        this.init();
    };
    Component.prototype.setDefaultProps = function () {
        this.id = null;
        this.className = null;
    };
    return Component;
}(_configurable__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),

/***/ "./src/configurable.ts":
/*!*****************************!*\
  !*** ./src/configurable.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Configurable = /** @class */ (function () {
    function Configurable() {
    }
    Configurable.prototype.config = function (config) {
        for (var property in config) {
            if (config.hasOwnProperty(property)) {
                this[property] = config[property];
            }
        }
    };
    Configurable.prototype.setDefaultProps = function () { };
    return Configurable;
}());
/* harmony default export */ __webpack_exports__["default"] = (Configurable);


/***/ }),

/***/ "./src/icon-component.ts":
/*!*******************************!*\
  !*** ./src/icon-component.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/icon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IconComponent = /** @class */ (function (_super) {
    __extends(IconComponent, _super);
    function IconComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconComponent.prototype.render = function () {
        _super.prototype.render.call(this);
        this.createIcon();
        return this.node;
    };
    IconComponent.prototype.setDefaultProps = function () {
        this.icon = null;
        this.title = null;
    };
    IconComponent.prototype.createIcon = function () {
        if (this.icon === null) {
            this.icon = new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        if (this.icon.src !== null) {
            this.node = document.createElement('img');
            this.node.setAttribute('src', this.icon.src);
        }
        else {
            this.node = document.createElement('span');
        }
        if (this.id) {
            this.node.setAttribute('id', this.id);
        }
        if (this.title) {
            this.node.setAttribute('title', this.title);
        }
        this.changeIcon(this.icon);
        return this.node;
    };
    IconComponent.prototype.changeIcon = function (icon) {
        if (icon.src !== null) {
            this.node.setAttribute('src', icon.src);
        }
        else {
            this.node.setAttribute('class', this.getIconClass(icon));
        }
    };
    IconComponent.prototype.getIconClass = function (icon) {
        return icon.type + " fa-" + icon.name + " fa-" + icon.size + " text-" + icon.color;
    };
    return IconComponent;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (IconComponent);


/***/ }),

/***/ "./src/icon.ts":
/*!*********************!*\
  !*** ./src/icon.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configurable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurable */ "./src/configurable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon(config) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this.setDefaultProps();
        _this.config(config);
        return _this;
    }
    Icon.prototype.setDefaultProps = function () {
        this.name = null;
        this.type = 'fa';
        this.size = Icon.SIZE_NORMAL;
        this.color = 'primary';
        this.src = null;
    };
    Icon.SIZE_NORMAL = '';
    Icon.SIZE_LARGE = 'lg';
    Icon.SIZE_XL = '2x';
    Icon.SIZE_XXL = '3x';
    return Icon;
}(_configurable__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");

function create(config) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].create(config);
}


/***/ }),

/***/ "./src/input-component.ts":
/*!********************************!*\
  !*** ./src/input-component.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputComponent.prototype.render = function () {
        _super.prototype.render.call(this);
        if (this.selector) {
            this.node = document.querySelector(this.selector);
            var value = this.node.getAttribute('value');
            if (value) {
                var parsedValue = parseInt(value, 10);
                if (parsedValue !== NaN) {
                    this.value = parsedValue;
                }
            }
        }
        if (!this.node) {
            this.node = document.createElement('input');
            this.node.setAttribute('name', this.name);
            this.node.setAttribute('type', 'hidden');
        }
        this.node.setAttribute('class', 'rating-input');
        this.changeValue(this.value);
        return this.node;
    };
    InputComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.node.setAttribute('value', value !== null ? value.toString() : null);
    };
    InputComponent.prototype.setDefaultProps = function () {
        this.selector = null;
        this.name = null;
        this.type = 'hidden';
        this.value = null;
    };
    return InputComponent;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (InputComponent);


/***/ }),

/***/ "./src/rating-component.ts":
/*!*********************************!*\
  !*** ./src/rating-component.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.ts");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-component */ "./src/icon-component.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-component */ "./src/input-component.ts");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star-component */ "./src/star-component.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Rating = /** @class */ (function (_super) {
    __extends(Rating, _super);
    function Rating() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stars = [];
        _this.input = null;
        _this.cancel = null;
        _this.currentStar = null;
        return _this;
    }
    Rating.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.value === null) {
            this.value = this.defaultValue;
        }
        this.parentNode = document.querySelector(this.parentSelector);
        if (!this.parentNode) {
            this.parentNode = document.body;
        }
        this.input = new _input_component__WEBPACK_IMPORTED_MODULE_2__["default"]({ selector: this.inputSelector, name: this.inputName, value: this.value });
        var cancelConfig = {
            className: 'cancel-rating',
            icon: new _icon__WEBPACK_IMPORTED_MODULE_4__["default"](this.cancelIcon)
        };
        cancelConfig['title'] = this.cancelHint ? this.cancelHint : 'Cancel';
        this.cancel = new _icon_component__WEBPACK_IMPORTED_MODULE_1__["default"](cancelConfig);
    };
    Rating.prototype.render = function () {
        _super.prototype.render.call(this);
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'stars-container');
        this.parentNode.appendChild(this.node);
        this.innerRender();
    };
    Rating.prototype.setDefaultProps = function () {
        this.parentSelector = null;
        this.inputName = null;
        this.inputSelector = null;
        this.minValue = 1;
        this.maxValue = 5;
        this.defaultValue = 0;
        this.icon = { name: 'star', size: _icon__WEBPACK_IMPORTED_MODULE_4__["default"].SIZE_XXL, type: 'far' };
        this.filledIcon = { name: 'star', size: _icon__WEBPACK_IMPORTED_MODULE_4__["default"].SIZE_XXL };
        this.cancelIcon = { name: 'ban', size: _icon__WEBPACK_IMPORTED_MODULE_4__["default"].SIZE_XL };
        this.fillUp = true;
        this.value = null;
        this.readonly = false;
        this.cancelHint = null;
        this.hints = null;
        this.icons = null;
        this.filledIcons = null;
        this.count = null;
    };
    Rating.prototype.innerRender = function () {
        var inputNode = this.input.render();
        this.value = this.input.value;
        if (!this.readonly) {
            var cancelNode = this.cancel.render();
            cancelNode.addEventListener('click', this.onCancelClick.bind(this));
            this.node.appendChild(cancelNode);
        }
        var count = this.count ? this.count : this.maxValue;
        var hints = null;
        if (this.hints && this.hints.length === count) {
            hints = this.hints;
        }
        for (var value = this.minValue; value <= count; value++) {
            var index = value - this.minValue;
            var starConfig = {
                id: "rating-star-" + value,
                value: value,
            };
            if (this.icons !== null) {
                starConfig['icon'] = new _icon__WEBPACK_IMPORTED_MODULE_4__["default"](this.icons[index]);
            }
            else {
                starConfig['icon'] = new _icon__WEBPACK_IMPORTED_MODULE_4__["default"](this.icon);
            }
            if (this.filledIcons !== null) {
                starConfig['filledIcon'] = new _icon__WEBPACK_IMPORTED_MODULE_4__["default"](this.filledIcons[index]);
            }
            else {
                starConfig['filledIcon'] = new _icon__WEBPACK_IMPORTED_MODULE_4__["default"](this.filledIcon);
            }
            if (hints) {
                starConfig['title'] = hints[index];
            }
            else {
                starConfig['title'] = value;
            }
            var star = new _star_component__WEBPACK_IMPORTED_MODULE_3__["default"](starConfig);
            this.stars[value] = star;
            var starNode = star.render();
            if (!this.readonly) {
                starNode.addEventListener('click', this.onClick.bind(this));
                starNode.addEventListener('mouseover', this.onMouseOver.bind(this));
                starNode.addEventListener('mouseout', this.onMouseOut.bind(this));
            }
            this.node.appendChild(starNode);
        }
        if (this.value >= this.minValue && this.value <= this.maxValue) {
            if (this.stars[this.value] !== undefined) {
                this.currentStar = this.stars[this.value];
                if (this.fillUp) {
                    this.fill(this.currentStar);
                }
                else {
                    this.currentStar.fill();
                }
            }
        }
        this.node.appendChild(inputNode);
    };
    Rating.prototype.onClick = function (event) {
        this.currentStar = this.onChange(event);
        this.input.changeValue(this.currentStar.value);
    };
    Rating.prototype.onMouseOver = function (event) {
        this.onChange(event);
    };
    Rating.prototype.onMouseOut = function (event) {
        this.refresh();
        if (this.currentStar) {
            if (this.fillUp) {
                this.fill(this.currentStar);
            }
            this.currentStar.fill();
        }
    };
    Rating.prototype.onChange = function (event) {
        event = event || window.event;
        var node = event.target || event.srcElement;
        var currentStar = null;
        this.stars.forEach(function (star) {
            star.refresh();
            if (star.id === node.id) {
                currentStar = star;
            }
        });
        if (!currentStar) {
            return;
        }
        if (this.fillUp) {
            this.fill(currentStar);
        }
        currentStar.fill();
        return currentStar;
    };
    Rating.prototype.onCancelClick = function () {
        this.resetToDefault();
    };
    Rating.prototype.refresh = function () {
        this.stars.forEach(function (star) {
            star.refresh();
        });
    };
    Rating.prototype.resetToDefault = function () {
        this.refresh();
        this.value = this.defaultValue;
        this.input.changeValue(this.value);
        this.currentStar = null;
    };
    Rating.prototype.fill = function (currentStar) {
        var shouldFill = true;
        this.stars.forEach(function (star) {
            if (shouldFill) {
                star.fill();
            }
            if (star.id === currentStar.id) {
                shouldFill = false;
            }
        });
    };
    return Rating;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Rating);


/***/ }),

/***/ "./src/star-component.ts":
/*!*******************************!*\
  !*** ./src/star-component.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-component */ "./src/icon-component.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/icon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StarComponent = /** @class */ (function (_super) {
    __extends(StarComponent, _super);
    function StarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarComponent.prototype.refresh = function () {
        this.changeIcon(this.icon);
    };
    StarComponent.prototype.fill = function () {
        this.changeIcon(this.filledIcon);
    };
    StarComponent.prototype.setDefaultProps = function () {
        this.icon = new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: 'star', size: _icon__WEBPACK_IMPORTED_MODULE_1__["default"].SIZE_XXL, type: 'far' });
        this.filledIcon = new _icon__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: 'star', size: _icon__WEBPACK_IMPORTED_MODULE_1__["default"].SIZE_XXL });
        this.value = null;
    };
    return StarComponent;
}(_icon_component__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (StarComponent);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2ljb24tY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pY29uLnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvaW5wdXQtY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9yYXRpbmctY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9zdGFyLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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NkNBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBckIwQyx1REFBYSxHQXFCdkQiLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUmF0aW5nIGZyb20gXCIuL3JhdGluZy1jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFwaVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShjb25maWc6IGFueSlcclxuICAgIHtcclxuICAgICAgICAobmV3IFJhdGluZyhjb25maWcpKS5yZW5kZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWd1cmFibGUgZnJvbSBcIi4vY29uZmlndXJhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBDb25maWd1cmFibGVcclxue1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBwYXJlbnROb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgbm9kZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBhbnkgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBhbnkgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFByb3BzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyh0aGlzLl9jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb25maWd1cmFibGVcclxue1xyXG4gICAgcHVibGljIGNvbmZpZyhjb25maWc6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IHByb3BlcnR5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZCB7fVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4vaWNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgaWNvbjogSWNvbjtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSA6IEhUTUxFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlSWNvbigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUljb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmljb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uID0gbmV3IEljb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmljb24uc3JjICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmljb24uc3JjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uKHRoaXMuaWNvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNoYW5nZUljb24oaWNvbjogSWNvbilcclxuICAgIHtcclxuICAgICAgICBpZiAoaWNvbi5zcmMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbi5zcmMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5nZXRJY29uQ2xhc3MoaWNvbikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SWNvbkNsYXNzKGljb246IEljb24pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGAke2ljb24udHlwZX0gZmEtJHtpY29uLm5hbWV9IGZhLSR7aWNvbi5zaXplfSB0ZXh0LSR7aWNvbi5jb2xvcn1gO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbmZpZ3VyYWJsZSBmcm9tIFwiLi9jb25maWd1cmFibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBDb25maWd1cmFibGVcclxue1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX05PUk1BTDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNJWkVfTEFSR0U6IHN0cmluZyA9ICdsZyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNJWkVfWEw6IHN0cmluZyA9ICcyeCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNJWkVfWFhMOiBzdHJpbmcgPSAnM3gnO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJvcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdmYSc7XHJcbiAgICAgICAgdGhpcy5zaXplID0gSWNvbi5TSVpFX05PUk1BTDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3ByaW1hcnknO1xyXG4gICAgICAgIHRoaXMuc3JjID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQXBpIGZyb20gXCIuL2FwaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShjb25maWc6IGFueSlcclxue1xyXG4gICAgcmV0dXJuIEFwaS5jcmVhdGUoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIHNlbGVjdG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkVmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkVmFsdWUgIT09IE5hTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYXRpbmctaW5wdXQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVmFsdWUodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tIFwiLi9pY29uLWNvbXBvbmVudFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuL2lucHV0LWNvbXBvbmVudFwiO1xuaW1wb3J0IFN0YXJDb21wb25lbnQgZnJvbSBcIi4vc3Rhci1jb21wb25lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgcHVibGljIGNvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIG1pblZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIG1heFZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIGRlZmF1bHRWYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnB1dFNlbGVjdG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGlucHV0TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uOiBvYmplY3Q7XG4gICAgcHVibGljIGZpbGxlZEljb246IG9iamVjdDtcbiAgICBwdWJsaWMgY2FuY2VsSWNvbjogb2JqZWN0O1xuICAgIHB1YmxpYyBmaWxsVXA6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIHB1YmxpYyBjYW5jZWxIaW50OiBzdHJpbmc7XG4gICAgcHVibGljIGhpbnRzOiBBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBpY29uczogYW55O1xuICAgIHB1YmxpYyBmaWxsZWRJY29uczogYW55O1xuXG4gICAgcHJvdGVjdGVkIHN0YXJzOiBTdGFyQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgaW5wdXQ6IElucHV0Q29tcG9uZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY2FuY2VsOiBJY29uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFN0YXI6IFN0YXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQoKVxuICAgIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyZW50U2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dENvbXBvbmVudCh7c2VsZWN0b3I6IHRoaXMuaW5wdXRTZWxlY3RvciwgbmFtZTogdGhpcy5pbnB1dE5hbWUsIHZhbHVlOiB0aGlzLnZhbHVlfSk7XG5cbiAgICAgICAgbGV0IGNhbmNlbENvbmZpZyA9IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NhbmNlbC1yYXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogbmV3IEljb24odGhpcy5jYW5jZWxJY29uKVxuICAgICAgICB9XG5cbiAgICAgICAgY2FuY2VsQ29uZmlnWyd0aXRsZSddID0gdGhpcy5jYW5jZWxIaW50ID8gdGhpcy5jYW5jZWxIaW50IDogJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5jYW5jZWwgPSBuZXcgSWNvbkNvbXBvbmVudChjYW5jZWxDb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFycy1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblxuICAgICAgICB0aGlzLmlubmVyUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXG4gICAge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTZWxlY3RvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlucHV0TmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlucHV0U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IDE7IFxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IDU7IFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAwOyBcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMLCB0eXBlOiAnZmFyJyB9OyBcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMIH07XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEljb24gPSB7IG5hbWU6ICdiYW4nLCBzaXplOiBJY29uLlNJWkVfWEwgfTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxIaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGludHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY29ucyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZEljb25zID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbm5lclJlbmRlcigpXG4gICAge1xuICAgICAgICBsZXQgaW5wdXROb2RlID0gdGhpcy5pbnB1dC5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBsZXQgY2FuY2VsTm9kZSA9IHRoaXMuY2FuY2VsLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBjYW5jZWxOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbENsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY2FuY2VsTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuY291bnQgPyB0aGlzLmNvdW50IDogdGhpcy5tYXhWYWx1ZVxuXG4gICAgICAgIGxldCBoaW50cyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmhpbnRzICYmIHRoaXMuaGludHMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgICAgICAgaGludHMgPSB0aGlzLmhpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCB2YWx1ZSA9IHRoaXMubWluVmFsdWU7IHZhbHVlIDw9IGNvdW50OyB2YWx1ZSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB2YWx1ZSAtIHRoaXMubWluVmFsdWU7XG5cbiAgICAgICAgICAgIGxldCBzdGFyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGlkOiBgcmF0aW5nLXN0YXItJHt2YWx1ZX1gLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaWNvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWydpY29uJ10gPSBuZXcgSWNvbih0aGlzLmljb25zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ljb24nXSA9IG5ldyBJY29uKHRoaXMuaWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGxlZEljb25zICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhckNvbmZpZ1snZmlsbGVkSWNvbiddID0gbmV3IEljb24odGhpcy5maWxsZWRJY29uc1tpbmRleF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWydmaWxsZWRJY29uJ10gPSBuZXcgSWNvbih0aGlzLmZpbGxlZEljb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGludHMpIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWyd0aXRsZSddID0gaGludHNbaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWyd0aXRsZSddID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzdGFyID0gbmV3IFN0YXJDb21wb25lbnQoc3RhckNvbmZpZyk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnNbdmFsdWVdID0gc3RhcjtcblxuICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gc3Rhci5yZW5kZXIoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgc3Rhck5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgc3Rhck5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHN0YXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPj0gdGhpcy5taW5WYWx1ZSAmJiB0aGlzLnZhbHVlIDw9IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJzW3RoaXMudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyID0gdGhpcy5zdGFyc1t0aGlzLnZhbHVlXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGxVcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwodGhpcy5jdXJyZW50U3Rhcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3Rhci5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGlucHV0Tm9kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblxuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMuY3VycmVudFN0YXIudmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcihldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxsVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGwodGhpcy5jdXJyZW50U3Rhcik7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNoYW5nZShldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuXG4gICAgICAgIGxldCBjdXJyZW50U3RhcjogU3RhckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBpZiAoc3Rhci5pZCA9PT0gbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFyID0gc3RhcjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY3VycmVudFN0YXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpbGxVcCkge1xuICAgICAgICAgICAgdGhpcy5maWxsKGN1cnJlbnRTdGFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGFyLmZpbGwoKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2FuY2VsQ2xpY2soKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldFRvRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoKClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRUb0RlZmF1bHQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpbGwoY3VycmVudFN0YXI6IFN0YXJDb21wb25lbnQpXG4gICAge1xuICAgICAgICBsZXQgc2hvdWxkRmlsbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3VsZEZpbGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXIuaWQgPT09IGN1cnJlbnRTdGFyLmlkKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkRmlsbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tIFwiLi9pY29uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgZmlsbGVkSWNvbjogSWNvbjtcclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24odGhpcy5pY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uKHRoaXMuZmlsbGVkSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gbmV3IEljb24oe25hbWU6ICdzdGFyJywgc2l6ZTogSWNvbi5TSVpFX1hYTCwgdHlwZTogJ2Zhcid9KVxyXG4gICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IG5ldyBJY29uKHtuYW1lOiAnc3RhcicsIHNpemU6IEljb24uU0laRV9YWEx9KVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=