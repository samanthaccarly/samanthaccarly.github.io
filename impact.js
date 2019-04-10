



function fireAPI(){
  //create new HTTP Request
  var request = new XMLHttpRequest()
  //Open GET request
  request.open('GET', 'https://httpbin.org/get', true)
  //when there is a change
  request.onreadystatechange = function(){
    //when change is done and status is OK
    if (request.readyState == 4 && request.status == 200){
      //write the results to the console
      console.log(request.responseText)
      }
  }
  //send Request
  request.send()
  console.log(keyparam)

}
