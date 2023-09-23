const post = document.querySelector("#main-alamnx");

post.innerHTML = `
<div id="alamax">
    <div id="alam-center">
        <div class="ls-alam">

            <img src="${posts[0].img}" alt="item" srcset="">
            <div class="data-alam">
                <h1>Calculator Kamas to Doller or MAD</h1>
                <input type="number" id="kamas" placeholder="Kamas/m">
                <input type="number" id="money" placeholder="Money">
                <button onclick="calculateSum()" id="calcul">Calculate</button>
                <p id="result"></p>

            </div>
        </div>
    </div>
</div>`;

{/* <div id="alamax">
<div id="alam-center">
    <div class="ls-alam">

    <img src="${posts[0].img}" alt="item" srcset="">
    <div class="data-alam">
        <h1>${posts[0].name} <span style="color: rgba(0, 196, 59, 0.438);">${posts[0].data}</span></h1>
        <h3><span style="color: rgb(255, 0, 76);font-weight: bold;">x${posts[0].quantité}</span> ${posts[0].itemName}</h3>
        <p style="color: yellow;">${posts[0].kamas}K</p>

    </div>
</div>
</div>
</div> */}