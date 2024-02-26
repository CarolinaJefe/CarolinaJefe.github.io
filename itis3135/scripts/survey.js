const byoIntroForm = document.getElementById('byo-intro-form');
const courseContainer = document.getElementById("course-container");
const addCourseBtn = document.getElementById("add-course-btn");
const introContainer = document.getElementById('intro-container');

addCourseBtn.addEventListener('click', () => {
    const card = document.createElement('div');
    const courseTitleLabel = document.createElement('label');
    const courseDescriptionLabel = document.createElement('label');
    const courseTitle = document.createElement('input');
    const courseDescription = document.createElement('input');
    const divider = document.createElement('hr');
    const deleteBtn = document.createElement('button')

    courseTitleLabel.innerText = "Course Title";
    courseTitleLabel.appendChild(courseTitle);

    courseDescriptionLabel.innerText = "Course Description"
    courseDescriptionLabel.appendChild(courseDescription);

    courseTitle.setAttribute('type', 'text');
    courseTitle.setAttribute('required', 'true')
    courseDescription.setAttribute('type', 'text');
    courseDescription.setAttribute('required', 'true')

    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('type', 'button');

    deleteBtn.addEventListener('click', () => {
        card.parentNode.removeChild(card);
    });

    card.append(courseTitleLabel);
    card.append(courseDescriptionLabel);
    card.append(deleteBtn);
    card.append(divider);

    courseContainer.appendChild(card);
});

const buildIntroPage = () => {
    const mainInput = Array.from(document.querySelectorAll("#main-fieldset input"));
    const courseInput = Array.from(document.querySelectorAll("#course-container input"));
    const additionalInput = Array.from(document.querySelectorAll("#additional-fieldset input"));

    const HTMLString = 
    `
        <h2>${mainInput[0].value} | ${mainInput[1].value}</h2>

        <figure>
            <img src=${URL.createObjectURL(mainInput[2].files[0])}>
            <figcaption>${mainInput[3].value}</figcaption>
        </figure>

        <div>
            <ul class="list-container1">
                <li><b>Personal Background:</b> ${mainInput[4].value}</li>
                <li><b>Professional Background:</b> ${mainInput[5].value}</li>
                <li><b>Academic Background:</b> ${mainInput[6].value}</li>
                <li><b>Background in Web Development:</b> ${mainInput[7].value}</li>
                <li><b>Primary Computer Platform:</b> ${mainInput[8].value}</li>
                <li><b>Courses:</b>
                    <ul>
                    ${buildCourses(courseInput)}
                    </ul>
                </li>
                <li><b>Funny thing?</b> ${additionalInput[0].value ? additionalInput[0].value : "N/A"}</li>
                <li><b>Anything Else?</b> ${additionalInput[1].value ? additionalInput[1].value : "N/A"}</li>
            </ul>
        </div>

        <button type="button" onclick="location.reload()">Build Again!</button>
    `; 

    introContainer.innerHTML = HTMLString;
};

const buildCourses = (courseInput) => {
    if (courseInput.length === 0) {
        return `<p>N/A</p>`;
    } else {
        let pos = 0;
        let HTMLString = ``;
        const max = courseInput.length / 2;
        while (pos < max) {
            HTMLString += `<li><b>${courseInput[pos * 2].value}:</b> ${courseInput[(pos * 2) + 1].value}</li>`;
            pos++;
        }
        return HTMLString;
    }
}

byoIntroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    buildIntroPage();
});