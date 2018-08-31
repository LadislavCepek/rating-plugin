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
        console.log(this.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2ljb24tY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pY29uLnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvaW5wdXQtY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9yYXRpbmctY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9zdGFyLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LFFBQVEsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQ0FyQjBDLHVEQUFhLEdBcUJ2RCIsImZpbGUiOiJyYXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBSYXRpbmcgZnJvbSBcIi4vcmF0aW5nLWNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXBpXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNvbmZpZzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIChuZXcgUmF0aW5nKGNvbmZpZykpLnJlbmRlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbmZpZ3VyYWJsZSBmcm9tIFwiLi9jb25maWd1cmFibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbmZpZ3VyYWJsZVxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHBhcmVudE5vZGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBub2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWc6IGFueSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJvcHMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbmZpZ3VyYWJsZVxyXG57XHJcbiAgICBwdWJsaWMgY29uZmlnKGNvbmZpZzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgcHJvcGVydHkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IGNvbmZpZ1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkIHt9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBpY29uOiBJY29uO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIDogSFRNTEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVJY29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSWNvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24gPSBuZXcgSWNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbi5zcmMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuaWNvbi5zcmMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy50aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZUljb24odGhpcy5pY29uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hhbmdlSWNvbihpY29uOiBJY29uKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChpY29uLnNyYyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uLnNyYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmdldEljb25DbGFzcyhpY29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRJY29uQ2xhc3MoaWNvbjogSWNvbilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYCR7aWNvbi50eXBlfSBmYS0ke2ljb24ubmFtZX0gZmEtJHtpY29uLnNpemV9IHRleHQtJHtpY29uLmNvbG9yfWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29uZmlndXJhYmxlIGZyb20gXCIuL2NvbmZpZ3VyYWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIENvbmZpZ3VyYWJsZVxyXG57XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaXplOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBzcmM6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNJWkVfTk9STUFMOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0laRV9MQVJHRTogc3RyaW5nID0gJ2xnJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0laRV9YTDogc3RyaW5nID0gJzJ4JztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0laRV9YWEw6IHN0cmluZyA9ICczeCc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55ID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHRQcm9wcygpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZhJztcclxuICAgICAgICB0aGlzLnNpemUgPSBJY29uLlNJWkVfTk9STUFMO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAncHJpbWFyeSc7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBBcGkgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGNvbmZpZzogYW55KVxyXG57XHJcbiAgICByZXR1cm4gQXBpLmNyZWF0ZShjb25maWcpO1xyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgc2VsZWN0b3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRWYWx1ZSAhPT0gTmFOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVZhbHVlKHZhbHVlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUgIT09IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSBcIi4vaWNvbi1jb21wb25lbnRcIjtcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tIFwiLi9pbnB1dC1jb21wb25lbnRcIjtcbmltcG9ydCBTdGFyQ29tcG9uZW50IGZyb20gXCIuL3N0YXItY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGluZyBleHRlbmRzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtaW5WYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhWYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFyZW50U2VsZWN0b3I6IHN0cmluZztcbiAgICBwdWJsaWMgaW5wdXRTZWxlY3Rvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnB1dE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvbjogb2JqZWN0O1xuICAgIHB1YmxpYyBmaWxsZWRJY29uOiBvYmplY3Q7XG4gICAgcHVibGljIGNhbmNlbEljb246IG9iamVjdDtcbiAgICBwdWJsaWMgZmlsbFVwOiBib29sZWFuO1xuICAgIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcbiAgICBwdWJsaWMgY2FuY2VsSGludDogc3RyaW5nO1xuICAgIHB1YmxpYyBoaW50czogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMgaWNvbnM6IGFueTtcbiAgICBwdWJsaWMgZmlsbGVkSWNvbnM6IGFueTtcblxuICAgIHByb3RlY3RlZCBzdGFyczogU3RhckNvbXBvbmVudFtdID0gW107XG4gICAgcHJvdGVjdGVkIGlucHV0OiBJbnB1dENvbXBvbmVudCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGNhbmNlbDogSWNvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRTdGFyOiBTdGFyQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KClcbiAgICB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmVudFNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIXRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXRDb21wb25lbnQoe3NlbGVjdG9yOiB0aGlzLmlucHV0U2VsZWN0b3IsIG5hbWU6IHRoaXMuaW5wdXROYW1lLCB2YWx1ZTogdGhpcy52YWx1ZX0pO1xuXG4gICAgICAgIGxldCBjYW5jZWxDb25maWcgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYW5jZWwtcmF0aW5nJyxcbiAgICAgICAgICAgIGljb246IG5ldyBJY29uKHRoaXMuY2FuY2VsSWNvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbmNlbENvbmZpZ1sndGl0bGUnXSA9IHRoaXMuY2FuY2VsSGludCA/IHRoaXMuY2FuY2VsSGludCA6ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsID0gbmV3IEljb25Db21wb25lbnQoY2FuY2VsQ29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkgXG4gICAge1xuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5pbm5lclJlbmRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSAxOyBcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSA1OyBcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gMDsgXG4gICAgICAgICAgICB0aGlzLmljb24gPSB7IG5hbWU6ICdzdGFyJywgc2l6ZTogSWNvbi5TSVpFX1hYTCwgdHlwZTogJ2ZhcicgfTsgXG4gICAgICAgICAgICB0aGlzLmZpbGxlZEljb24gPSB7IG5hbWU6ICdzdGFyJywgc2l6ZTogSWNvbi5TSVpFX1hYTCB9O1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxJY29uID0geyBuYW1lOiAnYmFuJywgc2l6ZTogSWNvbi5TSVpFX1hMIH07XG4gICAgICAgICAgICB0aGlzLmZpbGxVcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsSGludCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhpbnRzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaWNvbnMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRJY29ucyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5uZXJSZW5kZXIoKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0Tm9kZSA9IHRoaXMuaW5wdXQucmVuZGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIGxldCBjYW5jZWxOb2RlID0gdGhpcy5jYW5jZWwucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGNhbmNlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYW5jZWxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5jb3VudCA/IHRoaXMuY291bnQgOiB0aGlzLm1heFZhbHVlXG5cbiAgICAgICAgbGV0IGhpbnRzID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaGludHMgJiYgdGhpcy5oaW50cy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICAgICAgICBoaW50cyA9IHRoaXMuaGludHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHZhbHVlID0gdGhpcy5taW5WYWx1ZTsgdmFsdWUgPD0gY291bnQ7IHZhbHVlKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcblxuICAgICAgICAgICAgbGV0IHN0YXJDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGByYXRpbmctc3Rhci0ke3ZhbHVlfWAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pY29ucyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ljb24nXSA9IG5ldyBJY29uKHRoaXMuaWNvbnNbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhckNvbmZpZ1snaWNvbiddID0gbmV3IEljb24odGhpcy5pY29uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsbGVkSWNvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWydmaWxsZWRJY29uJ10gPSBuZXcgSWNvbih0aGlzLmZpbGxlZEljb25zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ZpbGxlZEljb24nXSA9IG5ldyBJY29uKHRoaXMuZmlsbGVkSWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaW50cykge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSBoaW50c1tpbmRleF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXIgPSBuZXcgU3RhckNvbXBvbmVudChzdGFyQ29uZmlnKTtcblxuICAgICAgICAgICAgdGhpcy5zdGFyc1t2YWx1ZV0gPSBzdGFyO1xuXG4gICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBzdGFyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHN0YXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc3Rhck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy52YWx1ZSA+PSB0aGlzLm1pblZhbHVlICYmIHRoaXMudmFsdWUgPD0gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnNbdGhpcy52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSB0aGlzLnN0YXJzW3RoaXMudmFsdWVdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsbFVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbCh0aGlzLmN1cnJlbnRTdGFyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaW5wdXROb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljayhldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhciA9IHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUodGhpcy5jdXJyZW50U3Rhci52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdmVyKGV2ZW50OiBhbnkpXG4gICAge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU91dChldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0YXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGxVcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbCh0aGlzLmN1cnJlbnRTdGFyKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXIuZmlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2hhbmdlKGV2ZW50OiBhbnkpXG4gICAge1xuICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgXG4gICAgICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRTdGFyOiBTdGFyQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgc3Rhci5yZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIGlmIChzdGFyLmlkID09PSBub2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXIgPSBzdGFyO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50U3Rhcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbFVwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGwoY3VycmVudFN0YXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0YXIuZmlsbCgpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50U3RhcjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DYW5jZWxDbGljaygpXG4gICAge1xuICAgICAgICB0aGlzLnJlc2V0VG9EZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZnJlc2goKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgc3Rhci5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNldFRvRGVmYXVsdCgpXG4gICAge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUodGhpcy52YWx1ZSlcblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsbChjdXJyZW50U3RhcjogU3RhckNvbXBvbmVudClcbiAgICB7XG4gICAgICAgIGxldCBzaG91bGRGaWxsID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkRmlsbCkge1xuICAgICAgICAgICAgICAgIHN0YXIuZmlsbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3Rhci5pZCA9PT0gY3VycmVudFN0YXIuaWQpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRGaWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gXCIuL2ljb24tY29tcG9uZW50XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJDb21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBmaWxsZWRJY29uOiBJY29uO1xyXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2goKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbih0aGlzLmljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24odGhpcy5maWxsZWRJY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByb3BzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmljb24gPSBuZXcgSWNvbih7bmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMLCB0eXBlOiAnZmFyJ30pXHJcbiAgICAgICAgdGhpcy5maWxsZWRJY29uID0gbmV3IEljb24oe25hbWU6ICdzdGFyJywgc2l6ZTogSWNvbi5TSVpFX1hYTH0pXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==