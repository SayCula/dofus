manageVMC()
function manageVMC(){
    const teamNameInput = document.querySelector("#teamName");
    const incomeInput = document.querySelector("#income");
    const subsInput = document.querySelector("#subs");
    const clefsInput = document.querySelector("#clefs");
    const creationDateInput = document.querySelector("#creationDate");
    const startingDateInput = document.querySelector("#startingDate");
    const endingDateInput = document.querySelector("#endingDate");
    
    const btnAddTeam = document.querySelector("#btnAddTeam");
    
    let teamsData = localStorage.getItem("teamsData");
    teamsData = teamsData ? JSON.parse(teamsData) : [];

    
    function addTeam(){

        const teamNameValue = teamNameInput.value
        const incomeValue = incomeInput.value
        const subsValue = subsInput.value
        const clefsValue = clefsInput.value
        const creationDateValue = creationDateInput.value
        const startingDateValue = startingDateInput.value
        const endingDateValue = endingDateInput.value
        
        teamsData.push({
            teamNameValue,
            incomeValue,
            subsValue,
            clefsValue,
            creationDateValue,
            startingDateValue,
            endingDateValue
        });
       
        
        teamNameInput.value = "";
        incomeInput.value = "";
        subsInput.value = "";
        clefsInput.value = "";
        creationDateInput.value = "";
        startingDateInput.value = "";
        endingDateInput.value = "";
         
        localStorage.setItem("teamsData", JSON.stringify(teamsData))
  

    }

    
     
function updateHtml(){
    let teamDataHTML = '';
    teamsData.forEach(teamData =>{
        teamDataHTML += `
        <tr data-team-id="${teamData.teamNameValue}">
            <td>NX</td>
            <td>${teamData.teamNameValue}</td>

            <td>${teamData.incomeValue}m</td>

            <td>${teamData.subsValue}jrs</td>

            <td>x${teamData.clefsValue}</td>

            <td>${teamData.creationDateValue}</td>
            <td>${teamData.startingDateValue}</td>
            <td>${teamData.endingDateValue}</td>
            <td><button class="btnDelete" data-team-id="${teamData.teamNameValue}">X</button></td>
        </tr>
        `;
     
    })
    document.querySelector("#TeamInfo").innerHTML = teamDataHTML
    const btnRemove = document.querySelectorAll(".btnDelete");
    
    btnRemove.forEach((button) =>{
        button.addEventListener('click', ()=>{
            const { teamId } = button.dataset;
            removeTeam(teamId)
            manageVMC();
        })
    })
    function removeTeam(teamId){
        teamsData = teamsData.filter(team => team.teamNameValue !== teamId);
        localStorage.setItem("teamsData", JSON.stringify(teamsData))

    };
}

updateHtml()

    btnAddTeam.addEventListener('click', () => {
        addTeam();
        updateHtml()
       manageVMC();
    });
}