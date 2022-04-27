let sh_dropdowns;
let fb_dropdowns;

window.onclick = function (event) {
  // if (
  //   !event.target.matches(".feedback-drop-btn") ||
  //   !event.target.matches(".search-drop-btn")
  // ) {
  //   sh_dropdowns = document.getElementsByClassName("sh");
  //   fb_dropdowns = document.getElementsByClassName("fb");
  //   for (let i = 0; i < sh_dropdowns.length; i++) {
  //     let openDropdown = sh_dropdowns[i];
  //     console.log(openDropdown);
  //     if (openDropdown.classList.contains("sh-show")) {
  //       openDropdown.classList.remove("sh-show");
  //     }
  //   }
  //   for (let i = 0; i < fb_dropdowns.length; i++) {
  //     let openDropdown = fb_dropdowns[i];
  //     console.log(openDropdown);
  //     if (openDropdown.classList.contains("fb-show")) {
  //       openDropdown.classList.remove("fb-show");
  //     }
  //   }
  // }
};

function changeDropDownState(dropDownBtn) {
  if (dropDownBtn === "search") {
    document.getElementById("dropdown-search").classList.toggle("sh-show");
  } else if (dropDownBtn === "feedback") {
    document.getElementById("dropdown-feedback").classList.toggle("fb-show");
  }
}
