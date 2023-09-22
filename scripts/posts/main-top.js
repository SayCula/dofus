const MainTop = document.querySelector("#main-top");
MainTop.innerHTML = `    

<div class="logo">
<div class="magictime vanishIn">
    <img id="logo" src="./imgs/pngegg.png" class="animate__animated animate__pulse animate__repeat-2 animate__delay-1s" alt="logo">
</div>
</div>
<div id="para">
<p class="animate__animated animate__delay-3s animate__flipInX">Saycula#0000</p>
</div>
<div id="search">

<div id="inpt-search">
        <input type="text" id="inputElement" placeholder="My Pseudo"/>
</div>
<div id="btn-search">
        <a target="_blank" href="https://account.ankama.com/fr/profil-ankama/" alt="Chercher" id="targetElement">
           
            <lord-icon 
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="hover"
                trigger="loop"
                delay="7000"
                colors="primary:#121331,secondary:#08a88a"
                style="width:50px;">
            </lord-icon>
        </a>
</div>

</div>`