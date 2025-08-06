
  // Step 1: Select the screen where we will display numbers
  const screen = document.querySelector(".screen");

  // Step 2: Select all buttons inside the calculator
  const buttons = document.querySelectorAll(".keys button");
  console.log(buttons);

  // Step 3: Make an empty string to store user input
  let input = "";

  // Step 4: Add a click event to each button
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "AC") {
        // If AC is clicked, clear everything
        input = "";
        screen.textContent = "0";
      } else if (value === "=") {
        // If = is clicked, evaluate the input
        try {
          // Replace X with * and ÷ with /
          let result = input.replace(/X/g, "*").replace(/÷/g, "/");
          screen.textContent = eval(result);  // Calculate the result
          input = eval(result).toString();    // Store result for further use
        } catch (err) {
          screen.textContent = "Error";
          input = "";
        }
      } else {
        // Otherwise, add the button value to input and show on screen
        input += value;
        screen.textContent = input;
      }
    });
  });

