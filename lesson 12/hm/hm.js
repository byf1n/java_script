// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const postItem of value){
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let divId = document.createElement('div');
            divId.innerText = `id: ${postItem.id}`;

            let divUserId = document.createElement('div');
            divUserId.innerText = `user id: ${postItem.userId}`;

            let divTitle = document.createElement('h2');
            divTitle.innerText = postItem.title;

            let divBody = document.createElement('div');
            divBody.innerText = postItem.body;

             postDiv.append(divId,divUserId,divTitle,divBody);
             postsDiv.appendChild(postDiv);

        }
    })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
    let commentsDiv = document.getElementsByClassName('comment')[0];

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const comment of value){
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        let divId = document.createElement('div');
        divId.innerText = `id: ${comment.id}`;

        let divPostId = document.createElement('div');
        divPostId.innerText = `post id: ${comment.postId}`;

        let divName = document.createElement('div');
        divName.innerText = `name: ${comment.name}`;

        let divEmail = document.createElement('div');
        divEmail.innerText = `email: ${comment.email}`;

        let divBody = document.createElement('div');
        divBody.innerText = `body: ${comment.body}`;




        commentDiv.append(divId,divPostId,divName,divEmail,divBody)
        commentsDiv.appendChild(commentDiv);
        }


    })