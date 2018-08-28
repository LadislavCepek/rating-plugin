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
        }
        if (!this.node) {
            this.node = document.createElement('input');
            this.node.setAttribute('name', this.name);
            this.node.setAttribute('type', 'hidden');
        }
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
        this.node.appendChild(this.input.render());
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
            if (star.id === currentStar.id) {
                shouldFill = false;
            }
            if (shouldFill) {
                star.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2ljb24tY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pY29uLnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvaW5wdXQtY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9yYXRpbmctY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9zdGFyLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDZDQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDZDQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVTLDRCQUFXLEdBQXJCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUV0QyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7U0FD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Q0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0F0UG1DLGtEQUFTLEdBc1A1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVA0QztBQUNuQjtBQUUxQjtJQUEyQyxpQ0FBYTtJQUF4RDs7SUFxQkEsQ0FBQztJQWhCVSwrQkFBTyxHQUFkO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsdUNBQWUsR0FBekI7UUFFSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDZDQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkNBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDZDQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQXJCMEMsdURBQWEsR0FxQnZEIiwiZmlsZSI6InJhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFJhdGluZyBmcm9tIFwiLi9yYXRpbmctY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBcGlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoY29uZmlnOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgKG5ldyBSYXRpbmcoY29uZmlnKSkucmVuZGVyKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlndXJhYmxlIGZyb20gXCIuL2NvbmZpZ3VyYWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgcGFyZW50Tm9kZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIG5vZGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZzogYW55ID0ge307XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55ID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHRQcm9wcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIHB1YmxpYyBjb25maWcoY29uZmlnOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBwcm9wZXJ0eSBpbiBjb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gY29uZmlnW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWQge31cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIGljb246IEljb247XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkgOiBIVE1MRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUljb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmljb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVJY29uKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pY29uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IG5ldyBJY29uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pY29uLnNyYyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5pY29uLnNyYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbih0aGlzLmljb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjaGFuZ2VJY29uKGljb246IEljb24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGljb24uc3JjICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb24uc3JjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMuZ2V0SWNvbkNsYXNzKGljb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEljb25DbGFzcyhpY29uOiBJY29uKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgJHtpY29uLnR5cGV9IGZhLSR7aWNvbi5uYW1lfSBmYS0ke2ljb24uc2l6ZX0gdGV4dC0ke2ljb24uY29sb3J9YDtcclxuICAgIH1cclxufSIsImltcG9ydCBDb25maWd1cmFibGUgZnJvbSBcIi4vY29uZmlndXJhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgQ29uZmlndXJhYmxlXHJcbntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNpemU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIHNyYzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0laRV9OT1JNQUw6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX0xBUkdFOiBzdHJpbmcgPSAnbGcnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX1hMOiBzdHJpbmcgPSAnMngnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX1hYTDogc3RyaW5nID0gJzN4JztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBhbnkgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFByb3BzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnR5cGUgPSAnZmEnO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IEljb24uU0laRV9OT1JNQUw7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdwcmltYXJ5JztcclxuICAgICAgICB0aGlzLnNyYyA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEFwaSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoY29uZmlnOiBhbnkpXHJcbntcclxuICAgIHJldHVybiBBcGkuY3JlYXRlKGNvbmZpZyk7XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBzZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVmFsdWUodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tIFwiLi9pY29uLWNvbXBvbmVudFwiO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gXCIuL2lucHV0LWNvbXBvbmVudFwiO1xuaW1wb3J0IFN0YXJDb21wb25lbnQgZnJvbSBcIi4vc3Rhci1jb21wb25lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgcHVibGljIGNvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIG1pblZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIG1heFZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIGRlZmF1bHRWYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnB1dFNlbGVjdG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGlucHV0TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uOiBvYmplY3Q7XG4gICAgcHVibGljIGZpbGxlZEljb246IG9iamVjdDtcbiAgICBwdWJsaWMgY2FuY2VsSWNvbjogb2JqZWN0O1xuICAgIHB1YmxpYyBmaWxsVXA6IGJvb2xlYW47XG4gICAgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIHB1YmxpYyBjYW5jZWxIaW50OiBzdHJpbmc7XG4gICAgcHVibGljIGhpbnRzOiBBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBpY29uczogYW55O1xuICAgIHB1YmxpYyBmaWxsZWRJY29uczogYW55O1xuXG4gICAgcHJvdGVjdGVkIHN0YXJzOiBTdGFyQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgaW5wdXQ6IElucHV0Q29tcG9uZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY2FuY2VsOiBJY29uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFN0YXI6IFN0YXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQoKVxuICAgIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyZW50U2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dENvbXBvbmVudCh7c2VsZWN0b3I6IHRoaXMuaW5wdXRTZWxlY3RvciwgbmFtZTogdGhpcy5pbnB1dE5hbWUsIHZhbHVlOiB0aGlzLnZhbHVlfSk7XG5cbiAgICAgICAgbGV0IGNhbmNlbENvbmZpZyA9IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NhbmNlbC1yYXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogbmV3IEljb24odGhpcy5jYW5jZWxJY29uKVxuICAgICAgICB9XG5cbiAgICAgICAgY2FuY2VsQ29uZmlnWyd0aXRsZSddID0gdGhpcy5jYW5jZWxIaW50ID8gdGhpcy5jYW5jZWxIaW50IDogJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5jYW5jZWwgPSBuZXcgSWNvbkNvbXBvbmVudChjYW5jZWxDb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFycy1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblxuICAgICAgICB0aGlzLmlubmVyUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXG4gICAge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTZWxlY3RvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlucHV0TmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlucHV0U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IDE7IFxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IDU7IFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAwOyBcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMLCB0eXBlOiAnZmFyJyB9OyBcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMIH07XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEljb24gPSB7IG5hbWU6ICdiYW4nLCBzaXplOiBJY29uLlNJWkVfWEwgfTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxIaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGludHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY29ucyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZEljb25zID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbm5lclJlbmRlcigpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIGxldCBjYW5jZWxOb2RlID0gdGhpcy5jYW5jZWwucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGNhbmNlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYW5jZWxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5jb3VudCA/IHRoaXMuY291bnQgOiB0aGlzLm1heFZhbHVlXG5cbiAgICAgICAgbGV0IGhpbnRzID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaGludHMgJiYgdGhpcy5oaW50cy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICAgICAgICBoaW50cyA9IHRoaXMuaGludHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHZhbHVlID0gdGhpcy5taW5WYWx1ZTsgdmFsdWUgPD0gY291bnQ7IHZhbHVlKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcblxuICAgICAgICAgICAgbGV0IHN0YXJDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGByYXRpbmctc3Rhci0ke3ZhbHVlfWAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pY29ucyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ljb24nXSA9IG5ldyBJY29uKHRoaXMuaWNvbnNbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhckNvbmZpZ1snaWNvbiddID0gbmV3IEljb24odGhpcy5pY29uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsbGVkSWNvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWydmaWxsZWRJY29uJ10gPSBuZXcgSWNvbih0aGlzLmZpbGxlZEljb25zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ZpbGxlZEljb24nXSA9IG5ldyBJY29uKHRoaXMuZmlsbGVkSWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaW50cykge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSBoaW50c1tpbmRleF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXIgPSBuZXcgU3RhckNvbXBvbmVudChzdGFyQ29uZmlnKTtcblxuICAgICAgICAgICAgdGhpcy5zdGFyc1t2YWx1ZV0gPSBzdGFyO1xuXG4gICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBzdGFyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHN0YXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc3Rhck5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPj0gdGhpcy5taW5WYWx1ZSAmJiB0aGlzLnZhbHVlIDw9IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJzW3RoaXMudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyID0gdGhpcy5zdGFyc1t0aGlzLnZhbHVlXVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsbFVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbCh0aGlzLmN1cnJlbnRTdGFyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dC5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblxuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMuY3VycmVudFN0YXIudmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcihldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxsVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGwodGhpcy5jdXJyZW50U3Rhcik7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNoYW5nZShldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuXG4gICAgICAgIGxldCBjdXJyZW50U3RhcjogU3RhckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBpZiAoc3Rhci5pZCA9PT0gbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFyID0gc3RhcjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY3VycmVudFN0YXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpbGxVcCkge1xuICAgICAgICAgICAgdGhpcy5maWxsKGN1cnJlbnRTdGFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGFyLmZpbGwoKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2FuY2VsQ2xpY2soKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldFRvRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoKClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRUb0RlZmF1bHQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpbGwoY3VycmVudFN0YXI6IFN0YXJDb21wb25lbnQpXG4gICAge1xuICAgICAgICBsZXQgc2hvdWxkRmlsbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXIuaWQgPT09IGN1cnJlbnRTdGFyLmlkKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkRmlsbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKHNob3VsZEZpbGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyLmZpbGwoKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tIFwiLi9pY29uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgZmlsbGVkSWNvbjogSWNvbjtcclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24odGhpcy5pY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uKHRoaXMuZmlsbGVkSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gbmV3IEljb24oe25hbWU6ICdzdGFyJywgc2l6ZTogSWNvbi5TSVpFX1hYTCwgdHlwZTogJ2Zhcid9KVxyXG4gICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IG5ldyBJY29uKHtuYW1lOiAnc3RhcicsIHNpemU6IEljb24uU0laRV9YWEx9KVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=