const handleItemRemove = async ({ target }) => {
  const $post = target.closest('.post');
  if (!$post || !target.matches('.btn.delete')) {
    return;
  }
  const id = $post.dataset.postId;
  const response = await fetch(`/api/post/${id}`, { method: 'DELETE' });
  if (response.status === 204) {
    location.href = '/list';
  }
};
