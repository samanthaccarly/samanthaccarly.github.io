

function fireAPI(){
  alert("enter API function call")
  var request = new XMLHttpRequest()
  request.open('GET', 'http://httpbin.org/get', true)
  request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data.url)
    alert("onload ran")
  }
  request.send()
}
