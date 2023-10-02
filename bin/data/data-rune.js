const Irune = document.querySelector("#itemList");

Irune.innerHTML = `

            <input type="button" class="btn-Col" value="Clear" onclick="clearFields()">
            <input type="button" class="btn-Col" value="Undo" onclick="resetFields()">
            
           

            <!-- // RUNE FEU - INE -->
            <input class="ga" value="GaPa" type="button" onclick="addValue(100)">
            <input class="ga" value="GaPm" type="button" onclick="addValue(90)">
            <input class="ga" value="po" type="button" onclick="addValue(51)">
            <input class="ga" value="inov" type="button" onclick="addValue(30)">

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
            
            <input class="rune" value="Ré" type="button" onclick="setPercentage(1)">
            <input class="rune" value="PA Ré" type="button" onclick="setPercentage(3)">
            <input class="rune" value="Ré Per" type="button" onclick="setPercentage(1)">

            `
        
            var selectedPercentage = 1;
                  var previousResult = "";
                  var operationsList = [];
          
                  function setPercentage(percentage) {
                      selectedPercentage = percentage;
                      calculate();
                      var num1 = parseFloat(document.getElementById("num1").value);
                      var result = (num1 - selectedPercentage);
                      operationsList.push(`${num1} - ${selectedPercentage} = ${result.toFixed(2)}`);
                      updateOperations();
                      document.getElementById("num1").value = result.toFixed(2);
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
                  }
          
                  function resetFields() {
                      document.getElementById("num1").value = previousResult.toFixed(2); // إعادة النتيجة السابقة
                      document.getElementById("result").textContent = previousResult.toFixed(2);
                      operationsList = [];
                      updateOperations();
                  }
          
                  function updateOperations() {
                      var operationsDiv = document.getElementById("operations");
                      operationsDiv.innerHTML = "<strong>history :</strong><br>" + operationsList.join("<br>");
                  }
          
                  var filterInput = document.getElementById("filterInput");
                  var itemList = document.getElementById("itemList");
                  
                  
                  filterInput.addEventListener("input", function() {
                      var filterValue = filterInput.value.toLowerCase(); 
                      var items = itemList.getElementsByTagName("li");
          
                      
                      for (var i = 0; i < items.length; i++) {
                          var item = items[i];
                          var text = item.textContent.toLowerCase();
                          
                          if (text.includes(filterValue)) {
                              item.style.display = "block"; 
                          } else {
                              item.style.display = "none";
                          }
                      }
                  });
          
                  function addValue(value) {
                      var num1Field = document.getElementById("num1");
                      num1Field.value = value.toString();
                  }
          
           