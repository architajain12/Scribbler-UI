const postDetails = JSON.parse(sessionStorage.getItem('postDetails'));
document.querySelector('#title').textContent = postDetails.title;
document.querySelector('#authorName').textContent = postDetails.author;
document.querySelector('#content').textContent = postDetails.content;

const title = document.getElementById('title');
const content = document.getElementById('content');
const likebtn = document.querySelector('.like-btn');
const likeText = document.querySelector('#like');
const editBtn = document.querySelector('#edit-btn');
editBtn.addEventListener('click', toggleEdit);

editBtn.addEventListener('click', edit);

var likes = 0;
const comments = [];

// likebtn.addEventListener('click', like);

// function like() {
//     likes += 1;
//     const likeDisplay = document.getElementById('showLikes');
//     likeText.innerHTML = 'Liked';
//     if (count == 1) {
//         likeDisplay.innerHTML = `${likes} person likes this !`;
//     } else {
//         likeDisplay.innerHTML = `${likes} people like this !`;
//     }
// }

function addingComment(item, index) {
    const temp = document.getElementById('comments').innerHTML;
    document.getElementById('comments').innerHTML = `<div class="comment">${item}</div>`;
    document.getElementById('comments').innerHTML += `${temp}</br>`;
    comments.pop();
}

function showComment(comment) {
    if (comment.value !== '') {
        document.getElementById('comments').style.visibility = 'visible';
        var comment = comment.value;
        comments.unshift(comment);
        $('#comment').val('');
        comments.forEach(addingComment);
        $(document).scrollTop($(document).height());
    }
}

function toggleEdit(e) {
    console.log(e);
    if(e.target.classList.contains('edit-toggle')) {
        e.target.textContent = 'Save';
        e.target.classList.remove('edit-toggle');
        edit();
    }
    else {
        e.target.textContent = 'Edit';
        e.target.classList.add('edit-toggle');
        save();
    }
}

function save() {
    title.contentEditable = false;
    content.contentEditable = false;
    title.style.border = 'none';
    content.style.border = 'none';
    console.log("save");
}

function edit() {
    title.contentEditable = true;
    content.contentEditable = true;
    title.style.border = '2px solid red';
    content.style.border = '2px solid red';
}
