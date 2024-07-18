// For Search Bar Alert Program

function myFunction(){
  alert("No Results Found")
}

// For Card Color Change & Text Change

document.addEventListener('DOMContentLoaded', (event) => {
  const hoverDiv = document.getElementById('changecolor');
  const titlechange = document.getElementById('titleCol')



  hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = 'red';
    titlechange.style.color = 'black';
  });

  hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = 'white';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const hoverDiv = document.getElementById('changecolor2');
  const titlechange = document.getElementById('titleCol')



  hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = 'red';
    titlechange.style.color = '#000000';
  });

  hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = 'white';
  });
});

// For checking if the Name has Required Number of Character

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  var name = document.forms['myForm']['fname'].value;
  if (name.length > 4 || name.length < 50) {
    seterror("nname", "*Length is small")
    returnval = false;
  }
  return returnval;
}





