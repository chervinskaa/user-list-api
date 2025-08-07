
const userList = document.getElementById("user-list");
let allUsers = [];
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        allUsers = data;
        renderUsers(allUsers);
        console.log(data)
    });

//  функція для виводу користувачів
function renderUsers(users) {
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${user.name}</strong><br>
            ✉️ ${user.email}<br>
        `;
        userList.appendChild(li);
    });
}
// Пошук користувачів по імені

function filterUsers(query) {
    query = query.toLowerCase().trim();
    const filtered = allUsers.filter(user => user.name.toLowerCase().includes(query));
    renderUsers(filtered);
}

function isMobile() {
    return window.innerWidth <= 768;
}

// для пристроїв з великим екраном пошук у реальному часі
searchInput.addEventListener("input", () => {
    if (!isMobile()) {
        filterUsers(searchInput.value);
    }
});

// Пошук по кнопці для мобільних
searchBtn.addEventListener("click", () => {
    if (isMobile()) {
        filterUsers(searchInput.value);
    }
});