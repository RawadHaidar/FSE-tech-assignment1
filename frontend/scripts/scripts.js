

const popup = document.getElementById("my-popup");
const openBtn = document.getElementById("add-score-popup");
const closeBtn = document.querySelector(".popup-close");
const addNameBtn = document.getElementById("add-name-btn");
const nameInput = document.getElementById("name-input");


openBtn.onclick = () => popup.style.display = "block";
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = e => {
    if (e.target === popup) popup.style.display = "none";
};

addNameBtn.onclick = () => {
    const name = nameInput.value.trim();
    if(name === ""){
        alert("Name field is empty.");
    } else{
        alert('Welcome '+name +'\nYour score has been saved successfuly.');
        popup.style.display="none";
        nameInput.value = "";
    }
};