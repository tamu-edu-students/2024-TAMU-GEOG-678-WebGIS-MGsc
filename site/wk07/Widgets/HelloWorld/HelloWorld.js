"use strict";
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorators_1 = require("esri/core/accessorSupport/decorators");
var Widget = require("esri/widgets/Widget");
var widget_1 = require("esri/widgets/support/widget");
var CSS = {
    base: "esri-hello-world",
    emphasis: "esri-hello-world--emphasis"
};
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //----------------------------------
        //  firstName
        //----------------------------------
        _this.firstName = "John";
        //----------------------------------
        //  lastName
        //----------------------------------
        _this.lastName = "Smith";
        //----------------------------------
        //  emphasized
        //----------------------------------
        _this.isCool = false;
        return _this;
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    HelloWorld.prototype.render = function () {
        var greeting = this._getGreeting();
        var classes = (_a = {},
            _a[CSS.emphasis] = this.isCool,
            _a);
        return (<div bind={this} class={CSS.base} classes={classes}>
      {greeting}
      </div>);
        var _a;
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    HelloWorld.prototype._getGreeting = function () {
        return "Hello, my name is " + this.firstName + " " + this.lastName + "!";
    };
    __decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "firstName");
    __decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "lastName");
    __decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "isCool");
    HelloWorld = __decorate([
        decorators_1.subclass("esri.widgets.HelloWorld")
    ], HelloWorld);
    return HelloWorld;
}(decorators_1.declared(Widget)));
module.exports = HelloWorld;
