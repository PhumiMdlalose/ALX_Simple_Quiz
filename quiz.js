DOMContentLoaded = () => {
const checkAnswer = () => {
    const correctAnswer = "4";

    // Get the selected answer

    document.querySelector('input[name="quiz"]:checked');
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    //Compare the user's answer with the correct answer

    if (userAnswer === correctAnswer) {
      document.querySelector("#feedback").textContent = "Correct! Well done.";
    } else {
      document.querySelector("#feedback").textContent = "That's incorrect. Try again!";
    }
    
  //Add event listener to the submit button

  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
};
}
