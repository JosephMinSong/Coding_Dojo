var neilLikes = document.querySelector("#neil-likes");
var nicholeLikes = document.querySelector("#nichole-likes");
var jimLikes = document.querySelector("#jim-likes");


var neilLikesCounter = 9;
var nicholeLikesCounter = 12;
var jimLikesCounter = 9;


function increaseLikes(id) {
    var spanTag = document.querySelector('#' + id);
    var num = parseInt(spanTag.innerText);
    num += 1;
    spanTag.innerText = num;
}