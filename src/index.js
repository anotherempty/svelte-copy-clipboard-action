export function clipboard(node, { trigger = "click", text = "" } = {}) {
  const handle = async (e) => {
    await navigator.clipboard.writeText(text).then(
      () =>
        node.dispatchEvent(
          new CustomEvent("copied", { detail: { clipboard: text } })
        ),
      (e) =>
        node.dispatchEvent(new CustomEvent("error", { detail: { error: e } }))
    );
  };

  node.addEventListener(trigger, handle, true);

  return {
    update: ({ tr = trigger, txt = text } = {}) => {
      trigger = tr;
      text = txt;
    },
    destroy() {
      node.removeEventListener(trigger, handle, true);
    },
  };
}
