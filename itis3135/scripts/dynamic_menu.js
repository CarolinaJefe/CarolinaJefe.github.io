document.addEventListener("DOMContentLoaded", function() {
    fetch("first_menu.json")
        .then(response => response.json())
        .then(data => {
            
            const menuContainer = document.getElementById("first-menu-container");
            data.forEach((item, index) => {
                
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                const entityNode = document.createTextNode(" ⛬ ");

                menuContainer.appendChild(menuItem);

                if (index !== data.length - 1) {
                    menuContainer.appendChild(entityNode);
                }  
            });
        })
        .catch(error => console.error("Error fetching menu:", error));

    fetch("second_menu.json")
    .then(response => response.json())
    .then(data => {
        
        const menuContainer = document.getElementById("second-menu-container");
        data.forEach((item, index) => {
            
            const menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item.name;
            menuItem.href = item.url;

            const entityNode = document.createTextNode(" ⛬ ");

            menuContainer.appendChild(menuItem);

            if (index !== data.length - 1) {
                menuContainer.appendChild(entityNode);
            }  
        });
    })
    .catch(error => console.error("Error fetching menu:", error));

    fetch("third_menu.json")
    .then(response => response.json())
    .then(data => {
        
        const menuContainer = document.getElementById("third-menu-container");
        data.forEach((item, index) => {
            
            const menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item.name;
            menuItem.href = item.url;

            const entityNode = document.createTextNode(" ⛬ ");

            menuContainer.appendChild(menuItem);

            if (index !== data.length - 1) {
                menuContainer.appendChild(entityNode);
            }  
        });
    })
    .catch(error => console.error("Error fetching menu:", error));
});