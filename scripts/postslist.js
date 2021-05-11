const deletePostModal = document.querySelector('#delPostModal');
const deletePost1 = document.querySelector('#delPost1');
const deletePost2 = document.querySelector('#delPost2');
const deletePost3 = document.querySelector('#delPost3');
const deletePost4 = document.querySelector('#delPost4');
const deletePost5 = document.querySelector('#delPost5');

const closeDelPost = document.querySelector('#dontDelete');
const postContainer = document.querySelector('.posts-container');

deletePost1.addEventListener('click', delPost);
deletePost2.addEventListener('click', delPost);
deletePost3.addEventListener('click', delPost);
deletePost4.addEventListener('click', delPost);
deletePost5.addEventListener('click', delPost);

closeDelPost.addEventListener('click', dontDeletePost);
postContainer.addEventListener('click', savePostDetails);

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
    console.log(e);
    if(e.target.tagName != 'I') {
        return;
    }
    const card = e.target.parentNode.parentNode.parentNode;
    const author = card.children[0].children[0].textContent;
    const title = card.children[1].children[0].children[0].textContent;
    const content = card.children[1].children[1].textContent;
    openEntirePost(author,title,content);
}