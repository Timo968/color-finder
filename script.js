const projectInput = document.getElementById("projectInput");
const autocompleteText = document.getElementById("autocompleteText");

// Sample data for autocompletion
const sampleData = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
];

// Function to find the best match for autocompletion
function findBestMatch(inputValue) {
  const lowerCaseInputValue = inputValue.toLowerCase();
  for (const word of sampleData) {
    if (word.startsWith(lowerCaseInputValue)) {
      return word;
    }
  }
  return "";
}

// Event listener for input field
projectInput.addEventListener("input", () => {
  const inputValue = projectInput.value;
  if (inputValue) {
    const bestMatch = findBestMatch(inputValue);
    autocompleteText.textContent = bestMatch;
  } else {
    autocompleteText.textContent = "";
  }
});

// Event listener for keydown to handle Tab key
projectInput.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    projectInput.value = autocompleteText.textContent;
    autocompleteText.textContent = "";
  }
});

// Hover activation for input field
projectInput.addEventListener("mouseover", () => {
  projectInput.focus();
});

// Disable input field when not hovering
projectInput.addEventListener("mouseout", (event) => {
  if (!event.relatedTarget || !event.relatedTarget.closest(".input-container")) {
    projectInput.blur();
  }
});
