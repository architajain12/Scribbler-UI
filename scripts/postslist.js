const deletePostModal = document.querySelector('#delPostModal');
const deletePost1 = document.querySelector('#delPost1');
const closeDelPost = document.querySelector('#dontDelete')

deletePost1.addEventListener('click', delPost);
closeDelPost.addEventListener('click', dontDeletePost);

function delPost() {
    deletePostModal.style.display = 'block';
}

function dontDeletePost() {
    deletePostModal.style.display = 'none';   
}