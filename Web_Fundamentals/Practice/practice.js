const likeButtons = [...document.querySelectorAll(".likeButton")];

let likeCount = 0;


function like () {
    likeCount++;
    console.log(likeCount);
}

likeButtons.forEach(item => {
    item.addEventListener("click", like);
});