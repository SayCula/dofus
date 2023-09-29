const inputElement = document.getElementById('inputElement');
const targetElement = document.getElementById('targetElement');

inputElement.addEventListener('input', function() {
  const value = inputElement.value;
  const defaultHref = targetElement.getAttribute('href');
  const modifiedValue = value.replace(/#/g, '-');

  targetElement.href = defaultHref + modifiedValue;
});

function calculateSum() {
          
          var num1 = document.getElementById("kamas").value;
          var num2 = parseFloat(document.getElementById("money").value);

         
          if (num1.length !== 2 || isNaN(num1)) {
              alert("Please enter only two numbers (Kamas/m)");
              return;
          }


          var sum = parseFloat(num1) + num2;

  
          document.getElementById("result").textContent = "The Resulting: " + sum;
      }