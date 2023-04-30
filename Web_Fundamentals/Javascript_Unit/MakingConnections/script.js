var friendRequestCount = document.querySelector('#friendRequestCount');
var friendConnectionCount = document.querySelector('#connectionCount');
var title = document.querySelector('#name');

function accept(elem, id) {
    elem.remove()
    document.querySelector('#' + id).remove();
    document.querySelector('#deny-' + id).remove();
    var requestCount = parseInt(friendRequestCount.innerText);
    friendRequestCount.innerText = requestCount-1;
    var connectionCount = parseInt(friendConnectionCount.innerText);
    friendConnectionCount.innerText = connectionCount+1;
}

function deny(elem, id) {
    elem.remove()
    document.querySelector('#' + id).remove();
    document.querySelector('#accept-' + id).remove();
    var requestCount = parseInt(friendRequestCount.innerText);
    friendRequestCount.innerText = requestCount-1;
}

function edit() {
    title.innerText = 'Joseph Song'
}