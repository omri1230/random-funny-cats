var div = document.createElement('div')
div.style.height = '100vh'
div.className = 'wrapper'
document.body.appendChild(div)


var button = document.createElement('button')
button.onclick = 'makeRequest()'
button.className = 'btn'
button.innerHTML = 'Stop the interval'
div.appendChild(button)

var image = document.createElement('img')
image.className = 'cat-img'
image.width = 300;
image.height = 300;

div.appendChild(image)


div.addEventListener('mousemove', function (event) {
    var x = event.clientX
    var y = event.clientY
    div.style.backgroundColor = 'rgb(' + x + ',' + y + ',+100)'
})
function makeRequest() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.responseType = 'json'
    httpRequest.onload = function () {
        if (httpRequest.status === 200) {
            image.src = httpRequest.response.file;
        } else {
            alert('There was a problem wit the request')
        }
    }
    httpRequest.open('GET', 'https://aws.random.cat/meow');
    httpRequest.send()
}

var INTREVAL_TIME_MS = 3000;



makeRequest();

var requestIntreval = setInterval(() => {
    makeRequest()
}, INTREVAL_TIME_MS);

function clearRequestInterval() {
    clearInterval(requestIntreval)
}