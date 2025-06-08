const container = document.getElementById("user-container");

function fetchUserData() {
  // Clear container before re-fetching
  container.innerHTML = '';

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.innerHTML = `
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Address:</strong> ${user.address.street}, ${user.address.city}
        `;
        container.appendChild(userDiv);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}
