let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
