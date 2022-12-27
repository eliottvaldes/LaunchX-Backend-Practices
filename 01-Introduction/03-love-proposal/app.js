const video = document.querySelector('.video_panel');
const btnDecline = document.querySelector('.btn_decline');
const btnAccept = document.querySelector('.btn_accept');
const response = document.querySelector('.response');

// function to move the button to a random position on the screen
const moveBtn = (btn) => {
    btn.style.position = 'absolute';
    btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + 'px';
    btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + 'px';
}

btnDecline.addEventListener('mouseover', (btn) => {
    moveBtn(btn.target);
})


btnAccept.addEventListener('click', () => {
    video.style.display = 'none';
    btnDecline.style.display = 'none';
    btnAccept.style.display = 'none';

    // inner text into the response div
    response.innerHTML = `
    <p>You accepted the offer!</p>    
    <p>I♥️U!!</p>    
    <img src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" alt="I love you gif" />
    `;

})