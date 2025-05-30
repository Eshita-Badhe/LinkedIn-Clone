let path=[1,2,3,6,9,8,5,4,7];
let selected=[];
 // Select all buttons with the class 'zip'
  const buttons = document.querySelectorAll('.zip');

  // Add click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.id);

    // Prevent duplicate selection
    if (!selected.includes(id)) {
      selected.push(id);
      console.log("Selected IDs:", selected);

      // Optionally style the button when selected
      button.style.backgroundColor = "#ffa500";
      
      // Check if this is the last button in the path
      if (id === 7) {
        setTimeout(() => {
          check();
        }, 1000); // 2000ms = 2s
        
      }
    }
  });
});

function check() {
  let loss = false;
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== selected[i]) {
      loss = true;
      break;
    }
  }
  if (loss) {
    lose();
  } else {
    win();
  }
}

function win() {
  console.log("Win!");
  alert("You Win! 🎉");
}

function lose() {
  console.log("Loss!");
  alert("Try Again ❌");
}

const undo=document.getElementById("undo")
undo.addEventListener('click',=>{
    buttons
});

const hint=document.getElementById("undo")
hint.addEventListener('click',=>{
    buttons
});