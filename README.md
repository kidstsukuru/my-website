<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ジャンケンゲーム</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f4f4f4;
            margin: 0;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .buttons button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 25px;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.1em;
            transition: background-color 0.3s ease;
        }
        .buttons button:hover {
            background-color: #0056b3;
        }
        #result {
            margin-top: 25px;
            font-size: 1.3em;
            font-weight: bold;
            color: #555;
        }
        #player-choice, #computer-choice {
            margin-top: 15px;
            font-size: 1.1em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>ジャンケン！</h1>
        <div class="buttons">
            <button onclick="playGame('rock')">グー</button>
            <button onclick="playGame('scissors')">チョキ</button>
            <button onclick="playGame('paper')">パー</button>
        </div>
        <p id="player-choice">あなたの手: まだ選択されていません</p>
        <p id="computer-choice">コンピュータの手: まだ選択されていません</p>
        <p id="result">結果: さあ、勝負！</p>
    </div>

    <script>
        function playGame(playerChoice) {
            const choices = ['rock', 'scissors', 'paper'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            document.getElementById('player-choice').textContent = 'あなたの手: ' + getHandName(playerChoice);
            document.getElementById('computer-choice').textContent = 'コンピュータの手: ' + getHandName(computerChoice);

            const result = determineWinner(playerChoice, computerChoice);
            document.getElementById('result').textContent = '結果: ' + result;
        }

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
    </script>
</body>
</html>
