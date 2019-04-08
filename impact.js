

function fireAPI(){
  //alert("Hello World")
  var request = new XMLHttpRequest()
  request.open('GET', 'http://httpbin.org/get', true)
  request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data.url)
  }
  request.send()
}
