function playGame(playerChoice) {
    const choices = ['rock', 'scissors', 'paper'];
    // コンピュータの手をランダムに選択
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // プレイヤーとコンピュータの手をHTMLに表示
    document.getElementById('player-choice').textContent = 'あなたの手: ' + getHandName(playerChoice);
    document.getElementById('computer-choice').textContent = 'コンピュータの手: ' + getHandName(computerChoice);

    // 勝敗を判定し、結果をHTMLに表示
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').textContent = '結果: ' + result;
}

// 内部的な選択肢名をわかりやすい表示名に変換
function getHandName(choice) {
    switch (choice) {
        case 'rock':
            return 'グー✊';
        case 'scissors':
            return 'チョキ✌️';
        case 'paper':
            return 'パー✋';
        default:
            return '';
    }
}

// 勝敗を判定するロジック
function determineWinner(player, computer) {
    if (player === computer) {
        return '引き分け！';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'あなたの勝ち！🎉';
    } else {
        return 'あなたの負け...😢';
    }
}