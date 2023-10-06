const Irune = document.querySelector("#itemList");

Irune.innerHTML = `
            <input type="button" class="btn-Col" value="Clear" onclick="clearFields()">
            <input type="button" class="btn-Col" value="" onclick="resetFields()">
            <input type="button" class="btn-Col noActive" id ="plusBtn" value="+" onclick="plusInput()">

                        
           

            <!-- // RUNE FEU - INE -->
            <input class="ga" value="GaPa" type="button" onclick="addValue(100)">
            <input class="ga" value="GaPm" type="button" onclick="addValue(90)">
            <input class="ga" value="po" type="button" onclick="addValue(51)">
            <input class="ga" value="inov" type="button" onclick="addValue(30)">
            <input class="rune" value="So Cri" type="button" onclick="setPercentage(10)">

            <input class="inexistant" type="button">
            
            <!-- // RUNE FEU - INE -->
            
            <input class="rune" value="1" type="button" onclick="setPercentage(1)">
            <input class="rune" value="PA" type="button" onclick="setPercentage(3)">
            <input class="rune" value="RA" type="button" onclick="setPercentage(10)">
            
            
            <!-- // RUNE Sa -->
            
            <input class="rune" type="button" value="SA" onclick="setPercentage(3)">
            <input class="rune" type="button" value="PA SA" onclick="setPercentage(9)">
            <input class="rune" type="button" value="RA SA" onclick="setPercentage(30)">
            
            
            <!-- // RUNE Prospe -->
            
            
            <input class="rune" type="button" value="Prospe" onclick="setPercentage(3)">
            <input class="rune" type="button" value="PA Prospe" onclick="setPercentage(9)">
            <input class="inexistant" type="button">
            
            <!-- // RUNE Pui -->
            <input class="rune" value="Pui" type="button" onclick="setPercentage(2)">
            <input class="rune" value="PA Pui" type="button" onclick="setPercentage(6)">
            <input class="rune" value="Ré Pui" type="button" onclick="setPercentage(20)">
            
            <input class="rune" value="Ré per" type="button" onclick="setPercentage(6)">

            <input class="rune" value="Ré Pou - Cri" type="button" onclick="setPercentage(2)">
            <input class="rune" value="Pa Pou - Cri" type="button" onclick="setPercentage(6)">
            
            <input class="rune" value="Re Pa PM" type="button" onclick="setPercentage(7)">
            <input class="rune" value="Pa Re Pa PM" type="button" onclick="setPercentage(21)">
            <input class="inexistant" type="button">

            <input class="rune" value="Pod" type="button" onclick="setPercentage(2.5)">
            <input class="rune" value="Pa Pod" type="button" onclick="setPercentage(7.5)">
            <input class="rune" value="Ra Pod" type="button" onclick="setPercentage(25)">
            
            <input class="rune" value="Tacle - Fuite" type="button" onclick="setPercentage(4)">
            <input class="rune" value="Pa Tacle - Fuite" type="button" onclick="setPercentage(12)">
            <input class="inexistant" type="button">


            <input class="rune" value="DO" type="button" onclick="setPercentage(20)">
            <input class="rune" value="DO Per" type="button" onclick="setPercentage(15)">
            <input class="inexistant" type="button">
            
            <input class="rune" value="DO Ele" type="button" onclick="setPercentage(5)">
            <input class="rune" value="Pa DO Ele" type="button" onclick="setPercentage(15)">
            <input class="inexistant" type="button">

            
            <input class="rune" value="Pus" type="button" onclick="setPercentage(2)">
            <input class="rune" value="Pa Pus" type="button" onclick="setPercentage(6)">
            <input class="rune" value="Ra Pus" type="button" onclick="setPercentage(20)">

            



            `

           


            const plusBtn = document.querySelector("#plusBtn")
             plusBtn.addEventListener("click",addClass => {
               plusBtn.classList.contains("active") ? 
               (plusBtn.classList.add("noActive"),
               plusBtn.classList.remove("active")) : 
               (plusBtn.classList.add("active"),
               plusBtn.classList.remove("noActive")) ;
                 })

        
            var selectedPercentage = 1;
                  var previousResult = "";
                  var operationsList = [];
          
                  function setPercentage(percentage) {
                    if (plusBtn.classList.contains("noActive")){                      
                      selectedPercentage = percentage;
                      calculate();
                      var num1 = parseFloat(document.getElementById("num1").value);
                      var result = (num1 - selectedPercentage);
                      operationsList.push(`${num1} - ${selectedPercentage} = ${result.toFixed(2)}`);
                      updateOperations();
                      document.getElementById("num1").value = result.toFixed(2);

                    } else if (plusBtn.classList.contains("active")){
                      selectedPercentage = percentage;
                      calculatePostive();
                      var num1 = parseFloat(document.getElementById("num1").value);
                      var result = (num1 + selectedPercentage);
                      operationsList.push(`${num1} + ${selectedPercentage} = ${result.toFixed(2)}`);
                      updateOperations();
                      document.getElementById("num1").value = result.toFixed(2);
                      
                    }
                  }
                  function calculatePostive() {
                      var num1 = parseFloat(document.getElementById("num1").value);
          
                      if (!isNaN(num1)) {
                          var result = (num1 + selectedPercentage);
                          previousResult = result;
                          document.getElementById("result").textContent = result.toFixed(2);
                      } else {
                          document.getElementById("result").textContent = "";
                      }
                     
                  }
          
                  function calculate() {
                      var num1 = parseFloat(document.getElementById("num1").value);
          
                      if (!isNaN(num1)) {
                          var result = (num1 - selectedPercentage);
                          previousResult = result;
                          document.getElementById("result").textContent = result.toFixed(2);
                      } else {
                          document.getElementById("result").textContent = "";
                      }
                     
                  }
                  function clearFields() {
                      document.getElementById("num1").value = "";
                      document.getElementById("result").textContent = "";
                      var operationsDiv = document.getElementById("operations");

                      operationsDiv.innerHTML = "<strong>history :</strong><br>" ;

                  }
          

          
                  function updateOperations() {
                      var operationsDiv = document.getElementById("operations");
                      operationsDiv.innerHTML = "<strong>history :</strong><br>" + operationsList.join("<br>");
                  }
          
                 
          
                  function addValue(value) {
                      var num1Field = document.getElementById("num1");
                      num1Field.value = value.toString();
                  }
          


                                
           function filterItems() {
  var input, filter, buttons, i;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
  buttons = document.getElementsByTagName("input");

  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].type === "button") {
      if (buttons[i].value.toUpperCase().indexOf(filter) > -1) {
        buttons[i].style.display = "";
      } else {
        buttons[i].style.display = "none";
      }
    }
  }
}
function plusInput() {
  var button = document.getElementById("plusBtn");
  if (button.value === "-") {
    button.value = "+";
  } else {
    button.value = "-";
  }
}
