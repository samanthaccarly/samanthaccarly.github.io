



function fireAPI(){
  var request = new XMLHttpRequest()
  request.open('GET', 'https://httpbin.org/get', true)
  alert("opened API endpoint")
  request.onreadystatechange = function(){
    console.log(request.readyState)
    console.log(request.status)
    if (request.readyState == 4 && request.status == 200){
        console.log("readystate is 4 and status is 200")
        console.log(request.responseText)
      }
      alert("statechange ran and exit")
  }
  request.send()
  alert("performed send")
  console.log("ending")
}
