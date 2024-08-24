const $posts = document.getElementById('posts');

$posts.addEventListener('click', async (event) => {
  const { target } = event;
  const $post = target.closest('.post');
  if (!$post || !target.matches('.btn.delete')) {
    return;
  }
  const id = $post.dataset.postId;
  const response = await fetch(`/api/post/${id}`, { method: 'DELETE' });
  if (response.status === 204) {
    location.reload();
  }
});
