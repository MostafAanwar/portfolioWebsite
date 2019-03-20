function toggleDarkLight()
{
    var body = document.getElementById("cls");
    var currentClass = body.className;
    currentClass === "dark-mode" ? lightMode() : darkMode();
}
function lightMode()
{
    document.getElementById('cls').className = "light-mode";
}

function darkMode()
{
    document.getElementById('cls').className = "dark-mode";
}