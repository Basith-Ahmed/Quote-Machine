document.addEventListener("DOMContentLoaded", function () { //ensuring the frontend loads are complete
//   const quoteContainer = document.getElementById("mainContainer");
  const quoteLine = document.getElementById("quoteLine");
  const newQuoteButton = document.getElementById("newQuoteButton");

  function getQuote() { //the main funtion
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quote = data.content
        author = data.author
        quoteLine.innerHTML = `"${quote}" </br> - ${author}`
      })
      .catch((error) =>
        console.error("There was an error in fetching the API", error));
  }

  newQuoteButton.addEventListener('click', getQuote); //button functionality

  getQuote(); //for quote when page loads
});
