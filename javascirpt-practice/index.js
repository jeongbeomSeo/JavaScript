const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function handleClickEasy() {
  title.classList.toggle(CLICKED_CLASS);
  //위에 함수 역할을 해줌.
}

function init() {
  title.addEventListener("click", handleClickEasy)
}

init();


