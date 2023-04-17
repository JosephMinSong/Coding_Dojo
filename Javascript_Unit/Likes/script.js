function increaseLikes(id) {
    var spanTag = document.querySelector('#' + id);
    var num = parseInt(spanTag.innerText);
    num += 1;
    spanTag.innerText = num;
}