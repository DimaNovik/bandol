let START_OFFSET = 4;

(function checkCountPosts() {
  const postsBtn = document.getElementById('posts_btn');
  const postsList = document.querySelectorAll('.post');
  const morePostsCount = document.getElementById('count-posts');
  const morePostsLink = document.querySelector('.section-posts__more_link');
  
  morePostsCount.innerHTML = postsList.length;
  
  if(postsList.length <= START_OFFSET) {
    postsBtn.style.display = 'none';
  } else {
    postsList.forEach((item, key) => {
      if(key >= START_OFFSET) {
        item.classList.add('hidden');
      }
    });
  }
  
  morePostsLink.addEventListener('click', function (e) {
    e.preventDefault();
    showAllPosts(postsList);
  }, false);
  
  postsBtn.addEventListener('click', function () {
    START_OFFSET = postsList.length;
    showOffsetPosts(postsList);
  })
})()

function showAllPosts(list) {
  const postsBtn = document.getElementById('posts_btn');
  postsBtn.style.display = 'none';

  list.forEach((item, key) => {
    item.classList.remove('hidden');
  });
}

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
