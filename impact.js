



function fireAPI(){
  var request = new XMLHttpRequest()
  request.open('GET', 'https://httpbin.org/get', true)
  alert("opened API endpoint")
  request.onreadystatechange = function(){
    if (request.readystate == 4 && request.status == 200){
      alert(request.status)
      var data = JSON.parse(this.response)
      console.log(data)
      //alert("statechange ran and exit")
    }
  }
  request.send()
  alert("performed send")
}
