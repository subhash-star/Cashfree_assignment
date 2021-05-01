let isListVisible = false;

toggleVisibility = (event) => {
  if (!isListVisible && event.target.id == 'select-btn') {
    document.querySelector('.list').style.display = "inherit";
    isListVisible = true;
  } else {
    if (event.target.className == 'item') {
      document.getElementById('select-btn').innerText = event.target.innerText;
    }
    isListVisible = false;
    document.querySelector('.list').style.display = "none";
  }
}
document.addEventListener('click', toggleVisibility)