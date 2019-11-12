let renderHeader = () => {
    let header = document.createElement('div');
    header.className = 'header';

    let span = document.createElement('span');
    span.innerText = 'Newsfeed';

    let em = document.createElement('em');
    em.innerText = 'Yet Another NewsFeed';

    let div_right = document.createElement('div');
    div_right.className = 'right-subscribe';

    let input = document.createElement('input');
    input.placeholder = 'Email Address';
    input.type = 'text';
    
    let button = document.createElement('button');
    button.className = 'right-panel-btn';
    button.innerText = 'Subscribe';

    div_right.appendChild (input);
    div_right.appendChild (button);

    header.appendChild (span);
    header.appendChild (em);
    header.appendChild (div_right);

    document.querySelector('body').appendChild (header);
}

export {renderHeader};