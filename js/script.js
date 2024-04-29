let tBody = document.getElementById('tbody');
function apiUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(u => {
            tBody.innerHTML += `
                <tr>
                    <td>${u.id}</td>
                    <td>${u.name}</td>
                    <td>${u.username}</td>
                    <td>${u.email}</td>
                    <td>${u.address.street}</td>
                </tr>
            `
        });  
    })
}
apiUser()

// let tBody2 = document.getElementById('tbody2');
// function apiUser2() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(u => {
//             tBody.innerHTML += `
//                 <tr>
//                     <td>${u.id}</td>
//                     <td>${u.title}</td>
//                     <td>${u.body}</td>
//                 </tr>
//             `
//         });  
//     })
// }
// apiUser2()


