const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;

    const newComment = document.createElement('div');
    newComment.className = 'comment';

    newComment.innerHTML = `
         <div class="comment-author">${name}</div>
         <div class="comment-date">${new Date().toLocaleDateString()}</div>
         <div class="comment-text">${commentText}</div>
     `;

    commentsList.appendChild(newComment);

    commentForm.reset();
});