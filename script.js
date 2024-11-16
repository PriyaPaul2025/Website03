function generateText() {
    const inputText = document.getElementById("text-input").value;
    const generatedText = document.getElementById("generated-text");

    if (inputText.trim() === "") {
        generatedText.textContent = "Please enter some text to generate.";
    } else {
        generatedText.textContent = "Generated Text: " + inputText + " (This is simulated AI-generated content.)";
    }
}
function recognizeImage() {
    const imageUpload = document.getElementById("image-upload");
    const imageResult = document.getElementById("image-recognition-result");

    if (imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageResult.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%; margin-top: 10px;" />`;
            imageResult.innerHTML += `<p>Object(s) detected: Dog, Cat, and Car (Simulated)</p>`; // Simulated result
        };
        reader.readAsDataURL(imageUpload.files[0]);
    } else {
        imageResult.textContent = "Please upload an image to recognize.";
    }
}
function analyzeSentiment() {
    const sentimentText = document.getElementById("sentiment-input").value;
    const sentimentResult = document.getElementById("sentiment-analysis-result");

    if (sentimentText.trim() === "") {
        sentimentResult.textContent = "Please enter feedback for sentiment analysis.";
    } else {
        const sentiment = sentimentText.toLowerCase().includes("happy") ? "Positive" : 
                         sentimentText.toLowerCase().includes("sad") ? "Negative" : "Neutral";
                         
        sentimentResult.textContent = `Sentiment: ${sentiment}`;
    }
}
