var users,
flag = 1,
submit = document.getElementById('submit');
submit.addEventListener('click', validate);
drawTable();

function validate() {
  flag = 1;
  var a = document.getElementsByClassName('errstr');
  while (a.length) {
    a[0].remove();
  }


  var username = document.getElementById('userName');
  var  mobile= document.getElementById('mobile');
  var email = document.getElementById('email');
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var company = document.getElementById('company');
  var locationData = document.getElementById('locationData');



  if(username.value=='')
  {
    flag=0;
    username.insertAdjacentHTML('afterend', '<span  class = "errstr" style="color : red;">Enter Valid Username</span>');
   
}


if(mobile.value=='')
  {
    flag=0;
    mobile.insertAdjacentHTML('afterend', '<span  class = "errstr" style="color : red;">Enter Valid Number</span>');
   
}


if(company.value=='')
  {
    flag=0;
   company.insertAdjacentHTML('afterend', '<span  class = "errstr" style="color : red;">Enter Company Name</span>');
   
}


if(locationData.value=='')
  {
    flag=0;
   locationData.insertAdjacentHTML('afterend', '<span  class = "errstr" style="color : red;">Enter Valid Location</span>');
   }







  if (male.checked == false && female.checked == false) {
    flag = 0;
    document.getElementById("fe").insertAdjacentHTML('afterend', '<span  class = "errstr" style="color : red;">*Invalid input</span>');
  }


  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    flag = 0;
    email.insertAdjacentHTML('afterend', '<span class = "errstr"  style="color : red;">Enter Valid Email</span>');
  }




if (flag == 1) {

    var gen = male.checked.value == true ? "male" : "female";
    

    var b = {
     
      name: username.value,
      email:email.value,
      company:company.value,
      mobile:mobile.value,
      gende:gen,
      locationData:locationData.value
    };



    users = JSON.parse(localStorage.getItem('data'));
    if (users == null) {
      users = [b];
    } else {
      users.push(b);
    }
    localStorage.setItem('data', JSON.stringify(users));
    drawTable();
 }
}



function drawTable() {
  users = JSON.parse(localStorage.getItem('data'));
  var tab = document.getElementById('tab');
  if (users) {
    if (tab) {
      tab.remove();
    }
    submit.insertAdjacentHTML("afterend", "<table id='tab' border=1><tr><th> UserName </th><th> Email </th><th> Company </th><th> Mobile </th><<th> Location </th><th> Gender </th></tr></table>");
    var len = users.length;
    for (var i = 0; i < len; i++) {
      var obj = users[i];
      tab = document.getElementById('tab');
      tab.insertAdjacentHTML("beforeend", "<tr><td>" + obj.name + "</td><td>" + obj.email + "</td><td>" + obj.company + "</td><td>" + obj.mobile + "</td> <td>" + obj.locationData + "</td> <td>" + obj.gende + "</td></tr>");
    }
  }
}