



function fireAPI(){
  var request = new XMLHttpRequest()
  request.open('GET', 'http://httpbin.org/get', true)
  alert("opened API endpoint")
  request.send()
  alert("performed send")
  request.onload = function(){
    alert("onload ran")
    var data = JSON.parse(this.response)
    console.log(data.url)
    alert("onload ran and exit")
  }

}
