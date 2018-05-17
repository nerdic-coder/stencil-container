import { TestWindow } from '@stencil/core/testing';
import { StContainer } from './st-container';

describe('st-container', () => {
  it('should build', () => {
    expect(new StContainer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeAll(async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [StContainer],
        html: '<st-container><div>Hello, World!</div></st-container>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World!');
    });

    it('should work with st-if true', async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [StContainer],
        html: '<st-container st-if="true"><div>Hello, World!</div></st-container>'
      });

      expect(element.stIf).toEqual('true');
      expect(element.shouldRender).toBeTruthy();
      expect(element.textContent.trim()).toEqual('Hello, World!');
    });

    it('should not work with st-if false', async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [StContainer],
        html: '<st-container st-if="false"><div>Hello, World!</div></st-container>'
      });

      expect(element.stIf).toEqual('false');
      expect(element.shouldRender).toBeFalsy();
    });

  });
});
