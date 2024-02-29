  // Get elements from the DOM
  const imageInput = document.getElementById('imageInput');
  const loadedImage = document.getElementById('loadedImage');
  const colorPicker = document.getElementById('colorPicker');
  const printColor = document.getElementById('printColor');
  const printColorRgb = document.getElementById('printColorRgb');
  
  colorPicker.addEventListener('change',function () {
      var colors=hexToRGB(colorPicker.value)
      const {red,green,blue}=colors
      printColor.innerHTML=`${colorPicker.value}`
      
  })
  function hexToRGB(hex) {
      // Remove the '#' symbol if present
      hex = hex.replace('#', '');
  
      // Parse the hexadecimal values for red, green, and blue
      const red = parseInt(hex.substring(0, 2), 16);
      const green = parseInt(hex.substring(2, 4), 16);
      const blue = parseInt(hex.substring(4, 6), 16);
  
      return { red, green, blue };
  }
  
  
  
  // Add event listener to the input element
  imageInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
  
          reader.onload = function (e) {
              loadedImage.src = e.target.result;
          };
  
          reader.readAsDataURL(file);
      }
  });
  
  // Add event listener to the image element
  loadedImage.addEventListener('load', function () {
      const canvas = document.createElement('canvas');
      canvas.width = loadedImage.width;
      canvas.height = loadedImage.height;
  
      const ctx = canvas.getContext('2d');
      ctx.drawImage(loadedImage, 0, 0, loadedImage.width, loadedImage.height);
  
  });
