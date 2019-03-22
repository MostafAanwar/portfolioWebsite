function toggleDarkLight()
{
    var body = document.getElementById("cls");
    var currentClass = body.className;
    currentClass === "dark-mode" ? lightMode() : darkMode();
}
function lightMode()
{
    document.getElementById('cls').className = "light-mode";
    var image1 = document.getElementById('linkedin');
    image1.src = 'img/light-mode-linkedin.png';
    image1.width = '180';
    image1.height = '180';
    var image2 = document.getElementById('codepen');
    image2.src = 'img/light-mode-codepen.png';
    var image3 = document.getElementById('github');
    image3.src = 'img/light-mode-github.png';
}

function darkMode()
{
    document.getElementById('cls').className = "dark-mode";
    var image1 = document.getElementById('linkedin');
    image1.src = 'img/dark-mode-linkedin.png';
    var image2 = document.getElementById('codepen');
    image2.src = 'img/dark-mode-codepen.png';
    var image3 = document.getElementById('github');
    image3.src = 'img/dark-mode-github.png';
}