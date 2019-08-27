function buyrbx(amount){
  localStorage.setItem('robux', parseInt(localStorage.getItem('robux')) + parseInt(amount));
  loadProfile();
}
