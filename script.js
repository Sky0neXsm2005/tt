// เพิ่มหิมะ
function createSnowflakes() {
    for(let i = 0; i < 200; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() *  + 20 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.innerHTML = '❄';
        document.body.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake();
        });
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 20 + 20  + 's';
    snowflake.style.opacity = Math.random();
    snowflake.innerHTML = '❄';
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSnowflake();
    });
}

// เพิ่มการตกแต่งแบบคริสต์มาส
function addDecorations() {
    const decorations = ['🎄', '🎅', '🎁', '⭐', '🔔'];
    const positions = [
        { top: '10%', left: '5%' },
        { top: '15%', right: '5%' },
        { top: '40%', left: '3%' },
        { top: '45%', right: '3%' },
        { top: '70%', left: '4%' },
        { top: '75%', right: '4%' }
    ];

    positions.forEach((pos, index) => {
        const decoration = document.createElement('div');
        decoration.className = 'decoration';
        decoration.innerHTML = decorations[index % decorations.length];
        decoration.style.top = pos.top;
        if (pos.left) decoration.style.left = pos.left;
        if (pos.right) decoration.style.right = pos.right;
        document.body.appendChild(decoration);
    });
}

// ระบบเพลง
let isPlaying = false;
const bgMusic = document.getElementById('bgMusic');

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        document.querySelector('.music-control').textContent = '🎵';
    } else {
        bgMusic.play();
        document.querySelector('.music-control').textContent = '🔇';
    }
    isPlaying = !isPlaying;
}

// เริ่มการทำงานเมื่อโหลดหน้าเว็บ
window.onload = function() {
    createSnowflakes();
    addDecorations();
};

window.addEventListener('beforeunload', function (event) {
    // ข้อความที่จะแสดงเมื่อผู้ใช้พยายามออกจากหน้า
    const message = 'คุณแน่ใจหรือว่าต้องการออกจากหน้านี้? ข้อมูลของคุณอาจหายไป';
    event.returnValue = message;  // สำหรับบางเบราว์เซอร์
    return message;  // สำหรับบางเบราว์เซอร์
  });
  