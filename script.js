document.getElementById('startButton').addEventListener('click', function() {
    const input = document.getElementById('tokenInput').value.trim();
    const tokens = input.match(/\d{4}-\d{4}-\d{4}-\d{4}-\d{4}/g);
    const warningDiv = document.getElementById('warning');
    const tokenDisplay = document.getElementById('tokenDisplay');
    const tokenNumberBox = document.getElementById('tokenNumberBox');
    const navigation = document.querySelector('.navigation');
    let currentIndex = 0;

    function displayToken(index) {
        if (tokens && index < tokens.length && index >= 0) {
            tokenNumberBox.textContent = tokens[index].replace(/-/g, ' ');
            tokenDisplay.style.display = 'flex';
            navigation.style.display = 'flex';

            document.getElementById('prevToken').disabled = index === 0;
            document.getElementById('nextToken').disabled = index === tokens.length - 1;
        }
    }

    warningDiv.style.display = 'none';

    if (!tokens || tokens.length === 0) {
        warningDiv.textContent = 'Please enter a valid token message.';
        warningDiv.style.display = 'block';
    } else {
        displayToken(currentIndex);
        this.style.display = 'none'; 
    }
});

document.getElementById('nextToken').addEventListener('click', function() {
    currentIndex++;
    displayToken(currentIndex);
});
document.getElementById('prevToken').addEventListener('click', function() {
    currentIndex--;
    displayToken(currentIndex);
});
let currentIndex = 0;
function displayToken(index) {
    const tokenNumberBox = document.getElementById('tokenNumberBox');
    const tokens = document.getElementById('tokenInput').value.trim().match(/\d{4}-\d{4}-\d{4}-\d{4}-\d{4}/g);

    if (tokens && index < tokens.length && index >= 0) {
        tokenNumberBox.textContent = tokens[index].replace(/-/g, ' ');
        document.getElementById('tokenDisplay').style.display = 'flex';
        document.querySelector('.navigation').style.display = 'flex';
        document.getElementById('prevToken').disabled = index === 0;
        document.getElementById('nextToken').disabled = index === tokens.length - 1;
    }
}
