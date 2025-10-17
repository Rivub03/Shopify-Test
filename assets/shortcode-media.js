document.addEventListener('DOMContentLoaded', () => {
  const articleBody = document.querySelector('.blog-post-content .rte-formatter') || document.querySelector('.blog-post-content');
  if (!articleBody) return;

  let html = articleBody.innerHTML;

  // [image]URL[/image]
  html = html.replace(/\[image\]([\s\S]*?)\[\/image\]/gi, (_, url) => {
    const u = url.trim();
    return `<figure class="bideshi-inline-image"><img src="${u}" alt="" class="article-image" /></figure>`;
  });

  // [audio]URL[/audio]
  html = html.replace(/\[audio\]([\s\S]*?)\[\/audio\]/gi, (_, url) => {
    const u = url.trim();
    return `<div class="bideshi-inline-audio"><audio controls class="article-audio"><source src="${u}" type="audio/mpeg">Your browser does not support the audio element.</audio></div>`;
  });

  // [video]EMBED_URL[/video] (pass embed URL e.g. YouTube embed)
  html = html.replace(/\[video\]([\s\S]*?)\[\/video\]/gi, (_, url) => {
    const u = url.trim();
    return `<div class="article-video"><iframe src="${u}" frameborder="0" allowfullscreen></iframe></div>`;
  });

  // Optional: [reel]...[/reel] for other embed types
  html = html.replace(/\[reel\]([\s\S]*?)\[\/reel\]/gi, (_, url) => {
    const u = url.trim();
    return `<div class="article-video"><iframe src="${u}" frameborder="0" allowfullscreen></iframe></div>`;
  });

  articleBody.innerHTML = html;
});
