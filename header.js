(function() {
    let header = document.createElement('div');
    header.className = 'header';

    let span = document.createElement('span');
    span.innerText = 'Newsfeed';

    let em = document.createElement('em');
    em.innerText = 'Yet Another NewsFeed';

    header.appendChild (span);
    header.appendChild (em);
    
    document.querySelector('body').appendChild (header);
})();