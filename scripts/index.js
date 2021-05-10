const createPostsModal = document.querySelector('#createPosts');
const createPostsBtn = document.querySelector('#createPostsBtn');
const closeCreatePostBtn = document.querySelector('#closeCreatePost');

createPostsBtn.addEventListener('click', createPosts);
closeCreatePostBtn.addEventListener('click', closeCreatePost)

function createPosts() {
    createPostsModal.style.display = 'block';
}

function closeCreatePost() {
    createPostsModal.style.display = 'none';
}