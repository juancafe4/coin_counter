let total = 0;

// Increase total depending what coin the user clicked
function increase(val) {
  const inlineBlock = 'inline-block';
  let display = document.getElementById(`add${val}`).style.display;
  let num = Number(document.getElementById(`add${val}`).innerHTML);
  
  // If display is none change to inline-block
  if (!display) {
    document.getElementById(`add${val}`).style.display = inlineBlock;
  }
  // Add the number of coins
  document.getElementById(`add${val}`).innerHTML = num + 1;
  
  // Increase total
  total += val;
}

// Display total and display clear button
function calculate() {
  document.getElementById("box").innerHTML = total;
  document.getElementById("clear").style.display = 'inline-block';
}

// Clear all coins and set total to zero
function clearAll() {
  // Clear everything little notifications off
  document.getElementById('add25').style.display = '';
  document.getElementById('add10').style.display = '';
  document.getElementById('add5').style.display = '';
  document.getElementById('add1').style.display = '';
  // Total set to zero
  total = 0;
  document.getElementById("box").innerHTML = '';

  // Display clear button to none
  document.getElementById("clear").style.display = 'none';
}