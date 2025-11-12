DOMContentLoaded = () => {
const checkAnswer = () => {
    const correctAnswer = "4";

    // Get the selected answer

    document.querySelector('input[name="quiz"]:checked');
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    //Compare the user's answer with the correct answer

    document.querySelector("#feedback").textContent =
  userAnswer === correctAnswer ? "Correct! Well done." : "Incorrect. Please try again.";
    
  //Add event listener to the submit button

  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
};
}
