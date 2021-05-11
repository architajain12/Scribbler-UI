const deletePostModal = document.querySelector('#delPostModal');
const deletePost1 = document.querySelector('#delPost1');
const closeDelPost = document.querySelector('#dontDelete');
const cards = document.querySelectorAll('.card-content')[4];

deletePost1.addEventListener('click', delPost);
closeDelPost.addEventListener('click', dontDeletePost);
cards.addEventListener('click', savePostDetails);

function delPost() {
    deletePostModal.style.display = 'block';
}

function dontDeletePost() {
    deletePostModal.style.display = 'none';   
}

function openEntirePost(author, title, content) {
    var postDetails = {
        author: author,
        title: title,
        content: content
    };
    sessionStorage.setItem("postDetails", JSON.stringify(postDetails));
    window.location.href = "post.html";
}

function savePostDetails(e) {
    const card = e.currentTarget;
    const author = card.children[0].children[0].textContent;
    const title = card.children[1].children[0].children[0].textContent;
    const content = card.children[1].children[1].textContent;
    openEntirePost(author,title,content);
}