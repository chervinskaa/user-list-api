
const userList = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            console.log(user.name);
            const li = document.createElement("li");
            li.innerHTML = `
  <strong>${user.name}</strong><br>
  ✉️ ${user.email}<br>
`;
            userList.appendChild(li);
        })
    });

