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
        var formGroup = null;
        if (!this.node) {
            this.node = document.createElement('input');
            this.node.setAttribute('name', this.name);
            this.node.setAttribute('id', this.id);
            this.node.setAttribute('type', this.type);
            this.node.setAttribute('placeholder', this.placeholder);
            var labelNode = null;
            if (this.label) {
                labelNode = document.createElement('label');
                labelNode.setAttribute('for', this.id);
                labelNode.textContent = this.label;
            }
            if (this.type !== 'hidden') {
                formGroup = document.createElement('div');
                formGroup.setAttribute('class', 'form-group');
                if (labelNode) {
                    formGroup.appendChild(labelNode);
                }
                formGroup.appendChild(this.node);
            }
            this.node.setAttribute('class', this.className);
        }
        this.changeValue(this.value);
        return formGroup ? formGroup : this.node;
    };
    InputComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.node.setAttribute('value', value !== null ? value.toString() : null);
    };
    InputComponent.prototype.setDefaultProps = function () {
        this.id = 'rating-input';
        this.selector = null;
        this.name = 'rating-input';
        this.type = 'hidden';
        this.value = null;
        this.className = 'form-control';
        this.label = null;
        this.placeholder = '';
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
        _this.textRating = null;
        _this.textValue = '';
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
        this.ratingInputConfig['value'] = this.value;
        this.input = new _input_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.ratingInputConfig);
        if (this.textRatingInputConfig) {
            this.textRatingInputConfig['value'] = this.textValue;
            this.textRatingInputConfig['type'] = 'text';
            this.textRating = new _input_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.textRatingInputConfig);
        }
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
        this.ratingInputConfig = { type: 'hidden' };
        this.textRatingInputConfig = null;
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
        if (this.textRating) {
            var textRatingNode = this.textRating.render();
            this.node.appendChild(textRatingNode);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9jb25maWd1cmFibGUudHMiLCJ3ZWJwYWNrOi8vUmF0aW5nUGx1Z2luQXBpLy4vc3JjL2ljb24tY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pY29uLnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9SYXRpbmdQbHVnaW5BcGkvLi9zcmMvaW5wdXQtY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9yYXRpbmctY29tcG9uZW50LnRzIiwid2VicGFjazovL1JhdGluZ1BsdWdpbkFwaS8uL3NyYy9zdGFyLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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MUI7SUFBMkMsaUNBQWE7SUFBeEQ7O0lBcUJBLENBQUM7SUFoQlUsK0JBQU8sR0FBZDtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLHVDQUFlLEdBQXpCO1FBRUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZDQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZDQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSw2Q0FBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQ0FyQjBDLHVEQUFhLEdBcUJ2RCIsImZpbGUiOiJyYXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBSYXRpbmcgZnJvbSBcIi4vcmF0aW5nLWNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBcGlcbntcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShjb25maWc6IGFueSlcbiAgICB7XG4gICAgICAgIChuZXcgUmF0aW5nKGNvbmZpZykpLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb25maWd1cmFibGUgZnJvbSBcIi4vY29uZmlndXJhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbmZpZ3VyYWJsZVxue1xuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHBhcmVudE5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgcHVibGljIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBhbnkgPSB7fTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSA9IG51bGwpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFByb3BzKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb25maWcodGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gbnVsbDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb25maWd1cmFibGVcbntcbiAgICBwdWJsaWMgY29uZmlnKGNvbmZpZzogYW55KVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBwcm9wZXJ0eSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBjb25maWdbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkIHt9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBpY29uOiBJY29uO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlbmRlcigpIDogSFRNTEVsZW1lbnRcbiAgICB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlSWNvbigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpXG4gICAge1xuICAgICAgICB0aGlzLmljb24gPSBudWxsO1xuICAgICAgICB0aGlzLnRpdGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSWNvbigpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5pY29uID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBuZXcgSWNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaWNvbi5zcmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5pY29uLnNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy50aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZUljb24odGhpcy5pY29uKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VJY29uKGljb246IEljb24pXG4gICAge1xuICAgICAgICBpZiAoaWNvbi5zcmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb24uc3JjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5nZXRJY29uQ2xhc3MoaWNvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEljb25DbGFzcyhpY29uOiBJY29uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGAke2ljb24udHlwZX0gZmEtJHtpY29uLm5hbWV9IGZhLSR7aWNvbi5zaXplfSB0ZXh0LSR7aWNvbi5jb2xvcn1gO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29uZmlndXJhYmxlIGZyb20gXCIuL2NvbmZpZ3VyYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgQ29uZmlndXJhYmxlXG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzaXplOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIHNyYzogc3RyaW5nO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX05PUk1BTDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSVpFX0xBUkdFOiBzdHJpbmcgPSAnbGcnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0laRV9YTDogc3RyaW5nID0gJzJ4JztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNJWkVfWFhMOiBzdHJpbmcgPSAnM3gnO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55ID0gbnVsbClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJvcHMoKTtcblxuICAgICAgICB0aGlzLmNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZhJztcbiAgICAgICAgdGhpcy5zaXplID0gSWNvbi5TSVpFX05PUk1BTDtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdwcmltYXJ5JztcbiAgICAgICAgdGhpcy5zcmMgPSBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCBBcGkgZnJvbSBcIi4vYXBpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoY29uZmlnOiBhbnkpXG57XG4gICAgcmV0dXJuIEFwaS5jcmVhdGUoY29uZmlnKTtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgcHVibGljIHNlbGVjdG9yOiBzdHJpbmc7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlbmRlcigpXG4gICAge1xuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZFZhbHVlICE9PSBOYU4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtR3JvdXAgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMubm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgbGV0IGxhYmVsTm9kZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxOb2RlLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgbGFiZWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGFiZWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBmb3JtR3JvdXAgPyBmb3JtR3JvdXAgOiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlICE9PSBudWxsID8gdmFsdWUudG9TdHJpbmcoKSA6IG51bGwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9ICdyYXRpbmctaW5wdXQnO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ3JhdGluZy1pbnB1dCc7XG4gICAgICAgIHRoaXMudHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnJztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSBcIi4vaWNvbi1jb21wb25lbnRcIjtcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tIFwiLi9pbnB1dC1jb21wb25lbnRcIjtcbmltcG9ydCBTdGFyQ29tcG9uZW50IGZyb20gXCIuL3N0YXItY29tcG9uZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGluZyBleHRlbmRzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtaW5WYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhWYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFyZW50U2VsZWN0b3I6IHN0cmluZztcbiAgICBwdWJsaWMgcmF0aW5nSW5wdXRDb25maWc6IG9iamVjdDtcbiAgICBwdWJsaWMgdGV4dFJhdGluZ0lucHV0Q29uZmlnOiBvYmplY3Q7XG4gICAgcHVibGljIGljb246IG9iamVjdDtcbiAgICBwdWJsaWMgZmlsbGVkSWNvbjogb2JqZWN0O1xuICAgIHB1YmxpYyBjYW5jZWxJY29uOiBvYmplY3Q7XG4gICAgcHVibGljIGZpbGxVcDogYm9vbGVhbjtcbiAgICBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG4gICAgcHVibGljIGNhbmNlbEhpbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgaGludHM6IEFycmF5PHN0cmluZz47XG4gICAgcHVibGljIGljb25zOiBhbnk7XG4gICAgcHVibGljIGZpbGxlZEljb25zOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnM6IFN0YXJDb21wb25lbnRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBpbnB1dDogSW5wdXRDb21wb25lbnQgPSBudWxsO1xuICAgIHByb3RlY3RlZCBjYW5jZWw6IEljb25Db21wb25lbnQgPSBudWxsO1xuICAgIHByb3RlY3RlZCBjdXJyZW50U3RhcjogU3RhckNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHRleHRSYXRpbmc6IElucHV0Q29tcG9uZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgdGV4dFZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgIHB1YmxpYyBpbml0KClcbiAgICB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmVudFNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIXRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yYXRpbmdJbnB1dENvbmZpZ1sndmFsdWUnXSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXRDb21wb25lbnQodGhpcy5yYXRpbmdJbnB1dENvbmZpZyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy50ZXh0UmF0aW5nSW5wdXRDb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dFJhdGluZ0lucHV0Q29uZmlnWyd2YWx1ZSddID0gdGhpcy50ZXh0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRleHRSYXRpbmdJbnB1dENvbmZpZ1sndHlwZSddID0gJ3RleHQnO1xuICAgICAgICAgICAgdGhpcy50ZXh0UmF0aW5nID0gbmV3IElucHV0Q29tcG9uZW50KHRoaXMudGV4dFJhdGluZ0lucHV0Q29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5jZWxDb25maWcgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYW5jZWwtcmF0aW5nJyxcbiAgICAgICAgICAgIGljb246IG5ldyBJY29uKHRoaXMuY2FuY2VsSWNvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbmNlbENvbmZpZ1sndGl0bGUnXSA9IHRoaXMuY2FuY2VsSGludCA/IHRoaXMuY2FuY2VsSGludCA6ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsID0gbmV3IEljb25Db21wb25lbnQoY2FuY2VsQ29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkgXG4gICAge1xuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5pbm5lclJlbmRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJvcHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IDE7IFxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IDU7IFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSAwOyBcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMLCB0eXBlOiAnZmFyJyB9OyBcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IHsgbmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMIH07XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEljb24gPSB7IG5hbWU6ICdiYW4nLCBzaXplOiBJY29uLlNJWkVfWEwgfTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFVwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxIaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGludHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY29ucyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZEljb25zID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yYXRpbmdJbnB1dENvbmZpZyA9IHt0eXBlOiAnaGlkZGVuJ307XG4gICAgICAgICAgICB0aGlzLnRleHRSYXRpbmdJbnB1dENvbmZpZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlubmVyUmVuZGVyKClcbiAgICB7XG4gICAgICAgIGxldCBpbnB1dE5vZGUgPSB0aGlzLmlucHV0LnJlbmRlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIGxldCBjYW5jZWxOb2RlID0gdGhpcy5jYW5jZWwucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGNhbmNlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYW5jZWxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5jb3VudCA/IHRoaXMuY291bnQgOiB0aGlzLm1heFZhbHVlXG5cbiAgICAgICAgbGV0IGhpbnRzID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaGludHMgJiYgdGhpcy5oaW50cy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICAgICAgICBoaW50cyA9IHRoaXMuaGludHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHZhbHVlID0gdGhpcy5taW5WYWx1ZTsgdmFsdWUgPD0gY291bnQ7IHZhbHVlKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcblxuICAgICAgICAgICAgbGV0IHN0YXJDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGByYXRpbmctc3Rhci0ke3ZhbHVlfWAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pY29ucyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ljb24nXSA9IG5ldyBJY29uKHRoaXMuaWNvbnNbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhckNvbmZpZ1snaWNvbiddID0gbmV3IEljb24odGhpcy5pY29uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsbGVkSWNvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyQ29uZmlnWydmaWxsZWRJY29uJ10gPSBuZXcgSWNvbih0aGlzLmZpbGxlZEljb25zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ2ZpbGxlZEljb24nXSA9IG5ldyBJY29uKHRoaXMuZmlsbGVkSWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaW50cykge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSBoaW50c1tpbmRleF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJDb25maWdbJ3RpdGxlJ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXIgPSBuZXcgU3RhckNvbXBvbmVudChzdGFyQ29uZmlnKTtcblxuICAgICAgICAgICAgdGhpcy5zdGFyc1t2YWx1ZV0gPSBzdGFyO1xuXG4gICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBzdGFyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzdGFyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHN0YXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc3Rhck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy52YWx1ZSA+PSB0aGlzLm1pblZhbHVlICYmIHRoaXMudmFsdWUgPD0gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnNbdGhpcy52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSB0aGlzLnN0YXJzW3RoaXMudmFsdWVdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsbFVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbCh0aGlzLmN1cnJlbnRTdGFyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaW5wdXROb2RlKTtcblxuICAgICAgICBpZiAodGhpcy50ZXh0UmF0aW5nKSB7XG4gICAgICAgICAgICBsZXQgdGV4dFJhdGluZ05vZGUgPSB0aGlzLnRleHRSYXRpbmcucmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGV4dFJhdGluZ05vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcblxuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMuY3VycmVudFN0YXIudmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcihldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoZXZlbnQ6IGFueSlcbiAgICB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxsVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGwodGhpcy5jdXJyZW50U3Rhcik7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNoYW5nZShldmVudDogYW55KVxuICAgIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuXG4gICAgICAgIGxldCBjdXJyZW50U3RhcjogU3RhckNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBpZiAoc3Rhci5pZCA9PT0gbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFyID0gc3RhcjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY3VycmVudFN0YXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpbGxVcCkge1xuICAgICAgICAgICAgdGhpcy5maWxsKGN1cnJlbnRTdGFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGFyLmZpbGwoKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2FuY2VsQ2xpY2soKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZXNldFRvRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoKClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcbiAgICAgICAgICAgIHN0YXIucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRUb0RlZmF1bHQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLmlucHV0LmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpXG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpbGwoY3VycmVudFN0YXI6IFN0YXJDb21wb25lbnQpXG4gICAge1xuICAgICAgICBsZXQgc2hvdWxkRmlsbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3VsZEZpbGwpIHtcbiAgICAgICAgICAgICAgICBzdGFyLmZpbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXIuaWQgPT09IGN1cnJlbnRTdGFyLmlkKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkRmlsbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tIFwiLi9pY29uLWNvbXBvbmVudFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudFxue1xuICAgIHB1YmxpYyBmaWxsZWRJY29uOiBJY29uO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHJlZnJlc2goKVxuICAgIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uKHRoaXMuaWNvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbGwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uKHRoaXMuZmlsbGVkSWNvbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRQcm9wcygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmljb24gPSBuZXcgSWNvbih7bmFtZTogJ3N0YXInLCBzaXplOiBJY29uLlNJWkVfWFhMLCB0eXBlOiAnZmFyJ30pXG4gICAgICAgIHRoaXMuZmlsbGVkSWNvbiA9IG5ldyBJY29uKHtuYW1lOiAnc3RhcicsIHNpemU6IEljb24uU0laRV9YWEx9KVxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9