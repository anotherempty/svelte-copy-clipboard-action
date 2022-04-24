# Svelte Copy Clipboard Action

## Installation

```sh
npm install svelte-copy-clipboard-action
```

## Usage

```svelte
<script>
  import { clipboard } from "svelte-copy-clipboard-action";

  let text = "Nisi nulla veniam quis pariatur velit nisi voluptate sint dolor.";
</script>

<div>{text}</div>

<button 
  use:clipboard={{ trigger: "click", text }}
  on:copied={(e) => doSomething(e.detail.clipboard)}
  on:error={(e) => doSomethingElse(e.detail.error)}>
  Copy to clipboard
</button>
```

## Props

`trigger` : the event for triggering the copy action, defaults to **click**

`text` : the text to copy on the clipboard

`e.detail.clipboard` : the content of the clipboard after it's copied

`e.detail.error` : an error object in case the clipboard isn't available

## License

Distributed under the MIT License. 
