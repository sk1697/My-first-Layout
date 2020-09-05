let a = 1;
console.log(a);

/* 오브젝트 정의 및 사용하기 */
const person = {
  name: "junghyun",
  age: "33",
  sex: "male",
  hobby: ["soccer", "tennis"],
  interest: [
    { tech: "경제", book: "제테크" },
    { tech: "개발", book: "프론트엔드" },
  ] /* 오브젝트 안에 Array & 다른 object 가능*/,
};

console.log(person);
console.log(person.name);
console.log(person.interest);

/* 오브젝트 안에 함수정의하여 사용 */
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5);

console.log(plus);

const title = document.getElementById("title");
console.log(title);
/* title.innerHTML = "Hello My Portfolio"; */

/* QuerySeclector로 Html 요소 Control */

const gridHead = document.querySelector(".grid-head-name");
console.log(gridHead);

/* addEventListner 사용하기 */

function handleResize() {
  console.log("I have been Resized");
}
window.addEventListener("resize", handleResize);
/* 이벤트리스너 안에 handleResize 쓰는것과 handleResize()쓰는것 차이
있음 -> handleResize()는 특정이벤트 동작과 무관하게 함수호출됨 */

const BASE_COLOR = "rgb(33, 33, 33)";
const OTHER_COLOR = "#ff1744";

function colorCheck() {
  console.log(gridHead.style.color);
}
function changeColor() {
  const currentColor = gridHead.style.color;
  if (currentColor === BASE_COLOR) {
    gridHead.style.color = OTHER_COLOR;
    /*  console.log("true"); */
  } else {
    gridHead.style.color = BASE_COLOR;
    /* console.log("false"); */
  }
}

const dropHead = document.querySelector(".drop-head-name");
console.log(dropHead);

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = dropHead.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    dropHead.classList.remove(CLICKED_CLASS);
  } else {
    dropHead.classList.add(CLICKED_CLASS);
  }
}

const IMG_COUNT = 5;

function genNumber() {
  const imgNumber = Math.floor(Math.random() * IMG_COUNT);
  console.log(imgNumber);
  return imgNumber;
}
const img = document.querySelector(".ex-Img");
console.log(img);

function changeImgLoad() {
  console.log("Img Load Finished");
}
function changeImg(number) {
  img.src = `images/BG${number + 1}.jpg`;
  img.addEventListener("loadend", changeImgLoad);
}

function init() {
  gridHead.style.color = BASE_COLOR;
  gridHead.addEventListener("mouseenter", changeColor);
  dropHead.addEventListener("click", handleClick);

  const randomNumber = genNumber();
  changeImg(randomNumber);
}
init();
