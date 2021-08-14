const GLOBAL_CLICK_EVENT = "__close_menu__";

window.addEventListener("click", () =>
  window.dispatchEvent(new CustomEvent(GLOBAL_CLICK_EVENT))
);

export default GLOBAL_CLICK_EVENT;
