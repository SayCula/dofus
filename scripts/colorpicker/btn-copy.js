document.getElementById("copyButton").addEventListener("click", function () {
    var textToCopy = document.getElementById("printColor");
    var text = textToCopy.textContent;
  
    // Create a temporary textarea element to copy the text
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
  
    // Update the button text temporarily
    var originalText = this.innerHTML;
    this.innerHTML = "Copied!";
    setTimeout(function () {
      document.getElementById("copyButton").innerHTML = originalText;
    }, 1000);
  });