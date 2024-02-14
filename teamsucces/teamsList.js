const teamSuccess = [
    {
    id: 1,
    team: "Seneca", 
    rates:{
        income: 0,
        subs: 0, 
        keys: 92
    },
    dates: {
        creationDate: "01/28/2024", 
        startingDate: "01/29/2024",
        endingDate:0 
    }
    },
    {
    id: 2,
    team: "Ptolemy Claudius", 
    rates:{
        income: 0,
        subs: 0, 
        keys: 0
    },
    dates: {
        creationDate: "00/00/0000", 
        startingDate: "00/00/0000",
        endingDate: "00/00/0000"
    }
    }
];

const teamsListRanderEl = document.querySelector('#TeamInfo');
let teamListHTML = "";
let mainLeftHTML = "";
const mainLeft = document.querySelector('.main-left');


teamSuccess.forEach(teamSucces => {
    mainLeftHTML += `      
        <a id="${teamSucces.id}" href="#${teamSucces.team}">${teamSucces.team}</a>
    `
    teamListHTML += `  
        <tr id="${teamSucces.team}">
            <td>${teamSucces.team}</td>
            <td>
                <p>Income: ${teamSucces.rates.income}</p>
                <p>Subs: ${teamSucces.rates.subs}</p>
                <p>Keys: ${teamSucces.rates.keys}</p>  
            </td>

            <td>
                <p>Creation: ${teamSucces.dates.creationDate}</p>
                <p>Starting: ${teamSucces.dates.startingDate}</p>
                <p>Ending: ${teamSucces.dates.endingDate}</p>
            </td>

        </tr>
        `
        });
        
        teamsListRanderEl.innerHTML = teamListHTML
        mainLeft.innerHTML = mainLeftHTML