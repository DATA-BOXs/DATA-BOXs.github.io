const notes = document.querySelectorAll('.note');
const scoreDisplay = document.getElementById('score');
let score = 0;

// ランダムなノートをハイライトする
function activateNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    const randomNote = notes[randomIndex];

    randomNote.classList.add('active');

    setTimeout(() => {
        randomNote.classList.remove('active');
    }, 1000); // ノートが表示される時間（1秒）

    return randomNote.getAttribute('data-key');
}

// キーが押されたときの処理
function handleKeyPress(event) {
    const keyPressed = event.key;
    const activeNote = document.querySelector('.note.active');

    if (activeNote && keyPressed === activeNote.getAttribute('data-key')) {
        score++;
        scoreDisplay.textContent = `スコア: ${score}`;
    }
}

// ゲームを開始
function startGame() {
    setInterval(() => {
        activateNote();
    }, 1500); // ノートが表示される間隔（1.5秒）
}

document.addEventListener('keydown', handleKeyPress);

// ゲームスタート
startGame();
