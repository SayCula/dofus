const Irune = document.querySelector("#itemList");

Irune.innerHTML = `
            <!-- // RUNE FEU - INE -->
            <section>

            <li>1<input class="rune ine" type="button" value="1" onclick="setPercentage(1)"></li>
            <li>PA<input class="rune pa-ine" type="button" value="3" onclick="setPercentage(3)"></li>
            <li>RA<input class="rune ra-ine" type="button" value="10" onclick="setPercentage(10)"></li>
            </section>
            <!-- // RUNE Sa -->
            <section>
            <li>SA<input class="rune" type="button" value="3" onclick="setPercentage(3)"></li>
            <li>PA SA<input class="rune" type="button" value="9" onclick="setPercentage(9)"></li>
            <li>RA SA<input class="rune ra-ine" type="button" value="30" onclick="setPercentage(30)"></li>
            </section>
            <!-- // RUNE Prospe -->
            <section>
            <li>1<input class="rune" type="button" value="3" onclick="setPercentage(3)"></li>
            <li>PA<input class="rune" type="button" value="9" onclick="setPercentage(9)"></li>
            <li>pa<input class="rune pa" type="button"></li>
            </section>
            <!-- // RUNE Pui -->
            <section>
            <li>1<input class="rune" type="button" value="2" onclick="setPercentage(3)"></li>
            <li>PA<input class="rune" type="button" value="6" onclick="setPercentage(9)"></li>
            <li>RA<input class="rune inexistant" type="button" onclick="setPercentage(20)"></li>
            </section>
            <!-- // RUNE Ress -->
            <section>
            

            </section>
            
            `
