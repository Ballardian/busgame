// TODO: write your code here
const handleKey = (event) => {
  const items = document.querySelector('#player1_race .active');
  const nextElement = items.nextElementSibling;
  const lastElement = document.querySelector('#player1_race .finish');

  if (lastElement.classList.contains("active") == false) {
    items.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    alert("red win");
    location.reload();
  }
};

const handleKey2 = (event) => {
  const items = document.querySelector('#player2_race .active');
  const nextElement = items.nextElementSibling;
  const lastElement = document.querySelector('#player2_race .finish');

  if (lastElement.classList.contains("active") == false) {
    items.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    alert("blue win");
    location.reload();
  }
};

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 65) {
    handleKey();
  }
  if (e.keyCode === 81) {
    handleKey2();
  }
});
