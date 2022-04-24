let once = true;
const lines = document.querySelectorAll(".line-content");

lines.forEach((element) => {
  element.addEventListener("click", (e) => {
    let x = e.x;
    let y = e.y;
    let toReveal = e.target.nextElementSibling;
    toReveal.classList.add("make-visible");
    toReveal.style.setProperty("top", `${y}px`);
    toReveal.style.setProperty("left", `${x}px`);
    let closeBox = toReveal.firstChild.nextElementSibling;
    closeBox.addEventListener("click", (e) => {
      toReveal.classList.remove("make-visible");
    });
  });
});

const editButton = document.querySelectorAll(".edit-button");
editButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    let boxToReplace = element.parentNode;

    let newId = boxToReplace.classList[0];

    let newDiv = document.createElement("div");

    newDiv.innerHTML = `<div class="close-box">x</div>
  <p>Edit</p><form method='POST' name=${newId} action='items/edit/${newId}'><input type='text' placeholder='Description' name='description'/><input type='text' placeholder='Category' name='category'/><input type='submit' value='submit' /></form>`;
    newDiv.classList.add("hidden-content-container");
    let closeBox = newDiv.firstChild;
    closeBox.addEventListener("click", (e) => {
      newDiv.classList.add("make-hidden");
      //  element.parentNode.remove(newDiv)
    });

    console.log(boxToReplace);
    boxToReplace.classList.remove("make-visible");
    element.parentNode.parentNode.appendChild(newDiv);
  });
});

const editCard = (e) => {};
