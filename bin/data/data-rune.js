const Irune = document.querySelector("#itemList");

Irune.innerHTML = `

            <input type="button" class="btn-Col" value="Clear" onclick="clearFields()">
            <input type="button" class="btn-Col" value="Undo" onclick="resetFields()">
            <input type="button" class="btn-Col" id ="plusBtn" value="+" onclick="plusInput()">

                        
           

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
            
            <!-- // RUNE Pui -->
            
            <input class="rune" value="Ré" type="button" onclick="setPercentage(1)">
            <input class="rune" value="PA Ré" type="button" onclick="setPercentage(3)">
            <input class="rune" value="Ré Per" type="button" onclick="setPercentage(1)">

            `

           



            // <li>1<input class="rune ine" type="button" onclick="setPercentage(1)"></li>
            // <li>PA<input class="rune pa-ine" type="button" onclick="setPercentage(3)"></li>
            // <li>RA<input class="rune ra-ine" type="button" onclick="setPercentage(10)"></li>
            
            // <!-- // RUNE Sa -->
          
            // <li>SA<input class="rune" type="button" onclick="setPercentage(3)"></li>
            // <li>PA SA<input class="rune" type="button" onclick="setPercentage(9)"></li>
            // <li>RA SA<input class="rune" type="button" onclick="setPercentage(30)"></li>
            
            // <!-- // RUNE Prospe -->
            
            // <li>Prospe<input class="rune" type="button" onclick="setPercentage(3)"></li>
            // <li>PA Prospe<input class="rune" type="button" onclick="setPercentage(9)"></li>
            // <li>inexistant<input class="rune inexistant" type="button" onclick="setPercentage(9)"></li>
            
            // <!-- // RUNE Pui -->
            
            // <li>Ré<input class="rune" type="button" onclick="setPercentage(1)"></li>
            // <li>Pa Ré<input class="rune" type="button" onclick="setPercentage(3)"></li>
            // <li>Ré Per Air<input class="rune" type="button" onclick="setPercentage(1)"></li>
            
            // <li>Ré Pou<input class="rune" type="button" onclick="setPercentage(1)"></li>
            // <li>Pa Ré Pou<input class="rune" type="button" onclick="setPercentage(3)"></li>
            // <li>Ré Per Air<input class="rune" type="button" onclick="setPercentage(1)"></li>
            
            
            // <!-- // RUNE Ress -->
            
            // <section>
            // <li>GaPa<input class="rune pa" type="button" onclick="addValue(100)"></li>
            // <li>GaPm<input class="rune pm" type="button" onclick="addValue(90)"></li>
            // <li>po<input class="rune po" type="button" onclick="addValue(51)"></li>
            // <li>inov<input class="rune inov" type="button" onclick="addValue(30)"></li>
            // </section>
        
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
                      var operationsDiv = document.getElementById("operations");

                      operationsDiv.innerHTML = "<strong>history :</strong><br>" ;

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
          
                 
          
                  function addValue(value) {
                      var num1Field = document.getElementById("num1");
                      num1Field.value = value.toString();
                  }
          
                  function  plusInput(){

                    const plusInput = document.querySelector("#num2")
                    const plusBtn = document.querySelector("#plusBtn")
                                        const result =  Number(plusInput.value) + Number(num1.value);
                                        operationsList.push(`${num1.value} + ${plusInput.value} = ${result.toFixed(2)}`);
                                        num1.value = result;
                                        updateOperations()
                                        document.getElementById("result").textContent = result.toFixed(2);
                                        plusInput.value = "";
                  }

                                
           
