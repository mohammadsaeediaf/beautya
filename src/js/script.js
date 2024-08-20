const sideBar = document.querySelector(".sidebar-sm");
const product_filter = document.querySelector(".product-filter .filter");
const close_btn = document.querySelector(".sidebar-sm .times-btn");
const apply_btn = document.querySelector(
  ".sidebar-sm .category--button .apply--btn"
);

product_filter.addEventListener("click", openSideBar);
close_btn.addEventListener("click", closeSideBar);
apply_btn.addEventListener("click", closeSideBar);

function closeSideBar() {
  sideBar.style.transform = "translate(-100%)";
}

function openSideBar() {
  sideBar.style.transform = "translate(0)";
}
