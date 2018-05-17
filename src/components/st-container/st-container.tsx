import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'st-container',
  shadow: true
})
export class StContainer {

  @Prop() private stIf: string;
  @Prop({ mutable: true }) private shouldRender = true;

  @Watch('stIf')
  watchHandler(newValue: string) {
    console.log('The new value of stIf is: ', newValue);
    this.shouldRender = false;
    this.shouldRender = new Function("return " + this.stIf)();
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
    console.log(this.stIf);
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
