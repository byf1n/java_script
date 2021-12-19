// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let posts = document.getElementsByClassName('posts')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const post of value){
        let div = document.createElement('div');
        div.classList.add('post')

        let divUserId = document.createElement('div');
        divUserId.innerText = `user id: ${post.userId}`;

        let divId = document.createElement('div');
        divId.innerText = `id: ${post.id}`;

        let divTitle = document.createElement('div');
        divTitle.innerText = post.title;

        let button = document.createElement('button');
        button.innerText = 'show comment';
        button.classList.add('button');

        button.onclick = function (){
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => value.json())
            .then(value => {
                    let commentsDiv = document.createElement('div');
                    commentsDiv.classList.add('comment');
                    for (let post of value){

                    let body = document.createElement('div');
                    body.innerText = post.body ;

                    commentsDiv.append(body)
                    }
                    div.appendChild(commentsDiv);

            })
        }

        div.append(divUserId,divId,divTitle,button)
        posts.appendChild(div);
        }
}
)