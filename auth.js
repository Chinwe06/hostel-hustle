// Handle session, theme, user greeting, and logout

const currentUser = localStorage.getItem("currentUser"); 
const welcomeUser = document.getElementById("welcome-user"); 
const logoutBtn = document.getElementById("logout-btn"); 
const loginLink = document.getElementById("login-link"); 
const toggle = document.getElementById("dark-toggle");

// Welcome message and auth-based navbar 
if (currentUser) { 
    if (welcomeUser) welcomeUser.textContent = `👋 Welcome, ${currentUser}`;
    if (logoutBtn) logoutBtn.style.display = "inline-block"; 
    if (loginLink) loginLink.style.display = "none"; 
    showAdminLiks()
} else { 
    if (logoutBtn) logoutBtn.style.display = "none"; 
    if (loginLink) loginLink.style.display = "inline-block";

    // Redirect to login if required 
    const mustBeLoggedIn = !["login.html", "register.html", "index.html"].some(p => location.pathname.endsWith(p)); 
    if (mustBeLoggedIn) window.location.href = "login.html"; 
}

// Handle logout 
if (logoutBtn) { 
    logoutBtn.addEventListener("click", () => { 
        localStorage.removeItem("currentUser"); 
        window.location.href = "login.html"; }); 
    }

// Apply saved dark mode preference on load 
if (toggle) { 
    if (localStorage.getItem("theme") === "dark") { 
        document.body.classList.add("dark-mode"); 
        toggle.checked = true; 
    } else { 
        document.body.classList.remove("dark-mode"); 
        toggle.checked = false; 
    }

    toggle.addEventListener("change", () => { 
        if (toggle.checked) { 
            document.body.classList.add("dark-mode"); 
            localStorage.setItem("theme", "dark"); 
        } else { 
            document.body.classList.remove("dark-mode"); 
            localStorage.setItem("theme", "light"); 
        } 
    }); 
}
function showAdminLiks(){
    const isAdmin = currentUser === "chymammah@gmail.com";
    if (isAdmin){
        const adminDashboardLink = document.getElementById("admin-dashboard-link")
        const adminProductsLink = document.getElementById("admin-products-link")
        if (adminDashboardLink) adminDashboardLink.style.display = "inline-block";
        if (adminProductsLink) adminProductsLink.style.display = "inline-block";
    }
}
