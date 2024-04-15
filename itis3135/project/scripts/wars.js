const warBoardElement = document.getElementById('war-board');

const createWarProfile = (data) => {
    const {result, endTime, teamSize, clan, opponent} = data;

    if (result === null) return;

    warBoardElement.innerHTML +=
    `
    <div class='war-card'>
    <img src=${opponent.badgeUrls.medium} class='opponent-badge'>
    <p>Housing of ${teamSize}</p>
    <p>Operation ${opponent.name}</p>
    ${getResult(result)}

    <table>
        <tr>
            <th></th>
            <th>Space Invaders</th>
            <th>${opponent.name}</th>
        </tr>

        <tr>
            <td>Level</td>
            <td>${clan.clanLevel}</td>
            <td>${opponent.clanLevel}</td>
        </tr>

        <tr>
            <td>Stars</td>
            <td>${clan.stars}</td>
            <td>${opponent.stars}</td>
        </tr>

        <tr>
            <td>Destruction Percentage</td>
            <td>${clan.destructionPercentage}%</td>
            <td>${opponent.destructionPercentage}%</td>
        </tr>
    </table>

    <p>${getDate(endTime)}</p>
    </div>
    `;
}

const getResult = (e) => {
    switch (e) {
        case 'win':
            return `<p class='war-won'>Won</p>`;
        case 'lose':
            return `<p class='war-lost'>Lost</p>`;
        case 'tie':
            return `<p class='war-draw'>Draw</p>`;
    }
}

const getDate = (timestamp) => {
    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(4, 6);
    const day = timestamp.substring(6, 8);

    return `${month} ${day}, ${year}`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/wars.json').then(res => res.json()).then(json => {const warData = json.items; warData.forEach(e => createWarProfile(e));}).catch(error => console.error(error));
});