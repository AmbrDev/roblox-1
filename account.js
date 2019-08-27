function signup(){
  let username = document.getElementById('signup-username').value;
  let password = document.getElementById('signup-password').value;
  if (username && password && username.length > 2 && password.length > 7) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('robux', 0);
    document.location.href = "logged-in.html";
  }
}
function login(){
  if(document.getElementById('horizontal-login-username').value === localStorage.getItem('username') && document.getElementById('horizontal-login-password').value === localStorage.getItem('password')){
    document.location.href = "logged-in.html";
  }
}
function loadProfile(){
  let username = localStorage.getItem('username');
  try{
    document.getElementById('HomeContainer').childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerHTML = "Hello, " + username;
  }catch(err){console.warn('account.js [Failed to set profile username]> ' + err)}
  try{
    document.getElementsByClassName('age-bracket-label-username font-caption-header')[0].innerHTML = username + ": ";
  }catch(err){console.warn('account.js [Failed to set header username]> ' + err)}
  try{
    let arr = ["", "K", "M", "B", "T", "q", "Q"];
    let robux = (parseInt(localStorage.getItem('robux'))).toLocaleString();
    let extension = ((robux.match(/,/g) !== null) ? arr[robux.match(/,/g).length]:"");
    let findex = ((robux.indexOf(',') > -1) ? robux.indexOf(','):robux.length);
    document.getElementById('nav-robux-amount').innerHTML = robux.slice(0, findex) + extension + ((robux.slice(findex).match(/[1-9]/g) !== null) ? "+":"");
  }catch(err){console.warn('account.js [Failed to set header robux amount]> ' + err)}
}
