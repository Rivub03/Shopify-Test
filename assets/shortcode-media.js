document.addEventListener('DOMContentLoaded', () => {
  const articleBody = document.querySelector('.blog-post-content .rte-formatter') || document.querySelector('.blog-post-content');
  const mediaData = document.querySelector('.bideshi-article-media');
  if (!articleBody || !mediaData) return;

  let html = articleBody.innerHTML;

  const getMedia = (key) => mediaData.dataset[key] || '';

  html = html.replace(/\[image(\d*)\]/gi, (_, n) => {
    const url = getMedia(`image${n || 0}`);
    if (!url) return '';
    return `<figure class="bideshi-inline-image"><img src="${url}" alt="" class="article-image" /></figure>`;
  });

  html = html.replace(/\[audio(\d*)\]/gi, (_, n) => {
    const url = getMedia(`audio${n || 0}`);
    if (!url) return '';
    return `<div class="bideshi-inline-audio"><audio controls class="article-audio"><source src="${url}" type="audio/mpeg">Your browser does not support the audio element.</audio></div>`;
  });

  html = html.replace(/\[video(\d*)\]/gi, (_, n) => {
    const url = getMedia(`video${n || 0}`);
    if (!url) return '';
    return `<video controls class="article-video"><source src="${url}" type="video/mp4">Your browser does not support the video tag.</video>`;
  });

  html = html.replace(/\[video_link(\d*)\]/gi, (_, n) => {
    const url = getMedia(`video_link${n || 0}`);
    if (!url) return '';
    return `<div class="article-video"><iframe src="${url}" frameborder="0" allowfullscreen></iframe></div>`;
  });

  articleBody.innerHTML = html;
});
