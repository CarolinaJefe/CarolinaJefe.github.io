const memberBoardElement = document.getElementById('member-board');

const createMemberProfile = (data) => {
    const {donations, donationsReceived, expLevel, name, role, tag, townHallLevel, trophies, league} = data;

    memberBoardElement.innerHTML +=
    `
    <div class='member-card'>
    <img src='${league.iconUrls.small}'><p class='member-name'>${name}</p>
    <ul>
        <li>Role: ${getRole(role)}</li>
        <li>Tag: ${tag}</li>
        <li>Trophies: ${trophies}</li>
        <li>Town Hall: ${townHallLevel}</li>
        <li>Level: ${expLevel}</li>
        <li>Donations: ${donations}</li>
        <li>Donations Received: ${donationsReceived}</li>
    </ul>
    </div>
    `;
};

const getRole = (role) => {
    switch (role) {
        case 'member':
            return 'Member';
        case 'admin':
            return 'Elder';
        case 'coLeader':
            return 'Co-leader';
        case 'leader':
            return 'Leader';
        default:
            return 'Anomaly';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/members.json').then(res => res.json()).then(json => {const memberData = json.items; memberData.forEach(e => createMemberProfile(e));}).catch(error => console.error(error));
});