import { Component, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'st-container',
  shadow: true
})
export class StContainer {

  @Prop({ reflectToAttr: true }) private stIf: string;
  @State() private shouldRender = true;

  @Watch('stIf')
  watchHandler(newValue: string) {
    this.shouldRender = new Function("return " + newValue)();
  }

  /**
   * The component is about to load and it has not
   * rendered yet.
   *
   * This is the best place to make any data updates
   * before the first render.
   *
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    if (this.stIf !== undefined) {
      this.shouldRender = new Function("return " + this.stIf)();
    }
  }

  render() {
    if (this.shouldRender) {
      return (
        <slot />
      );
    } else {
      return null;
    }
  }
}
