let START_OFFSET = 4;

(function checkCountPosts() {
  const postsBtn = document.getElementById('posts_btn');
  const postsList = document.querySelectorAll('.post');
  
  if(postsList.length <= START_OFFSET) {
    postsBtn.style.display = 'none';
  } else {
    postsList.forEach((item, key) => {
      if(key >= START_OFFSET) {
        item.classList.add('hidden');
      }
    });
  }
  
  postsBtn.addEventListener('click', function () {
    showOffsetPosts(postsList);
  }, false)
})()

function showOffsetPosts(list) {
  START_OFFSET += 4;
  if(list.length - 1 === START_OFFSET) {
    return;
  }
  
  list.forEach((item, key) => {
    if(key + 1 <= START_OFFSET) {
      item.classList.remove('hidden');
    }
  });
  
}
