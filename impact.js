



function fireAPI(){
  var request = new XMLHttpRequest()
  request.open('GET', 'http://httpbin.org/get', true)
  alert("opened API endpoint")
  request.onreadystatechange = function(){
    if (request.readystate == 4 && request.status == 200){
      alert(request.status)
    }
    //var data = JSON.parse(this.response)
    //console.log(data.url)
    alert("statechange ran and exit")
  }
  request.send()
  alert("performed send")
}
