function clo1() {
  var elem = document.getElementById("cloud1");   
  var pos = 0; //this is my start position  inside my function
  var id = setInterval(frame, 60);

  function frame() {
    if (pos == -200) { // this will compare ny var pos // if its not true it will start my statement
		pos = 1300; // my position starts at 1200
		elem.style.left = pos + 'px'; //this will decrease per pixel to the left until reach -200
    } else { 
      	pos--; 
      	elem.style.left = pos + 'px';
    }
  }
}

function clo2() {
  var elem = document.getElementById("cloud2");   
  var pos = 0;
  var id = setInterval(frame, 40);

  function frame() {
    if (pos == 1400) { //if this condition is false it will run my function
		pos = 0; // i declare my position starts at 0
		elem.style.left = pos + 'px'; // this will add every pixel until it reach 1400
    } else { // when it reach 1400 it goes back to 0
      	pos++; //this will add every pixel again
      	elem.style.left = pos + 'px'; //until it reach 1400 and keep looping
    }
  }
}


//this starts the boat
function boat1() {
  var elem = document.getElementById('boat');   
  var pos = 0;
  var id = setInterval(frame, 40);

  function frame() {
    if (pos == 1400) {
		pos = 0;
		elem.style.left = pos + 'px';
    } else {
      	pos++; 
      	elem.style.left = pos + 'px';
    }
  }
}

clo1();
clo2();
boat1();