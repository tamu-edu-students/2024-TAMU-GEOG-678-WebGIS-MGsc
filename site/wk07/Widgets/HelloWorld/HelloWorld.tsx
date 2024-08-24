/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  @property()
  @renderable()
  firstName: string = "John";

  //----------------------------------
  //  lastName
  //----------------------------------

  @property()
  @renderable()
  lastName: string = "Smith";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  @renderable()
  isCool: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------


  render() {
    const greeting = this._getGreeting();
    const classes = {
      [CSS.emphasis]: this.isCool
    };

    return (
      <div bind={this}
           class={CSS.base}
           classes={classes}>
      {greeting}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting(): string {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }

}

export = HelloWorld;