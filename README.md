# Stencil Container
A stencil component that displays child elements with conditional data.

## Using this component

### Script tag

- Put `<script src='https://unpkg.com/stencil-container@latest/dist/stencil-container.js'></script>` in the head of your index.html
- Then you can use the element `<st-container>` anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-container --save`
- Put a script tag similar to this `<script src='node_modules/stencil-container/dist/stencil-container.js'></script>` in the head of your index.html
- Then you can use the element `<st-container>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-container --save`
- You might need to import the npm package in a tsx file with `import {  } from 'stencil-container';`
- Then you can use the element `<st-container>` anywhere in your template, JSX, html etc

## Parameters

### st-if

An expression that is either true or false.

## Examples

### Plain html

`<st-container st-if="false"><div>false?</div></st-container>`
Will not show the child elements content.

`<st-container st-if="true"><div>true?</div></st-container>`
Will show the child elements content.

`<st-container><div>container test?</div></st-container>`
Without the st-if parameter it assumes the content should be shown.

### Javascript variables

```html
<script>
  var numberOne = 1;
  var numberTwo = 2;
  var booleanTrue = true;
  var booleanFalse = false;
</script>

<st-container st-if="booleanTrue"><div>Will be shown!</div></st-container>
<st-container st-if="booleanFalse"><div>Will not be shown!</div></st-container>
<st-container st-if="numberOne"><div>Will be shown!</div></st-container>
<st-container st-if="numberTwo"><div>Will be shown!</div></st-container>
<st-container st-if="numberOne == numberOne"><div>Will be shown!</div></st-container>
<st-container st-if="numberOne == numberTwo"><div>Will not be shown!</div></st-container>
```

### JSX variables

```jsx
export class MyApp {
  private expression1 = '1 == 1';
  private expression2 = '1 == 2';

  render() {
    return (
      <div>
        <st-container st-if={this.expression1}><div>Will be shown!</div></st-container>
        <st-container st-if={this.expression2}><div>Will not be shown!</div></st-container>
      </div>
    );
  }
}
```

### Angular bindings

Let me know if it works! :)

## Development

Installation:
```bash
git clone https://github.com/nerdic-coder/stencil-container.git stencil-container
cd stencil-container
npm install
```

Running:
```bash
npm start
```

Tests:
```bash
npm run test
```

Watchable tests:
```bash
npm run test.watch
```

All feedback are welcome!