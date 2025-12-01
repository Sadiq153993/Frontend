// Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const switchTabs = document.querySelectorAll('.switch-tab');

// Tab button click handlers
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        switchToTab(tabName);
    });
});

// Quick switch links
switchTabs.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = link.getAttribute('data-tab');
        switchToTab(tabName);
    });
});

// Function to switch tabs
function switchToTab(tabName) {
    // Hide all tabs
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Deactivate all buttons
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Activate selected button
    const selectedBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedBtn && selectedBtn.classList.contains('tab-btn')) {
        selectedBtn.classList.add('active');
    }
}

// Show/Hide Password Toggle
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const icon = btn.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Password Strength Checker
document.getElementById('register-password').addEventListener('input', (e) => {
    const password = e.target.value;
    const strengthBar = document.querySelector('.password-strength');
    const strengthText = document.querySelector('.strength-text span');
    
    if (password.length === 0) {
        strengthText.textContent = '-';
        strengthBar.className = 'password-strength';
        return;
    }
    
    let strength = 0;
    
    // Check length
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Check for uppercase
    if (/[A-Z]/.test(password)) strength++;
    
    // Check for lowercase
    if (/[a-z]/.test(password)) strength++;
    
    // Check for numbers
    if (/\d/.test(password)) strength++;
    
    // Check for special characters
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;
    
    // Update display
    strengthBar.className = 'password-strength';
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak';
    } else if (strength <= 4) {
        strengthBar.classList.add('fair');
        strengthText.textContent = 'Fair';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong';
    }
});

// Alert function
function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    alert.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    alertContainer.appendChild(alert);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        alert.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(() => alert.remove(), 300);
    }, 4000);
}

// Form submission handlers
document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    console.log('Sign In:', { email, password });
    showAlert('Sign In successful! Redirecting...', 'success');
    
    // Simulate loading and redirect
    setTimeout(() => {
        // Replace with your actual backend endpoint
        // window.location.href = 'dashboard.php';
    }, 2000);
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    // Validate inputs
    if (fullname.trim().length < 3) {
        showAlert('Full name must be at least 3 characters', 'error');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (password.length < 8) {
        showAlert('Password must be at least 8 characters', 'error');
        return;
    }
    
    if (password !== confirm) {
        showAlert('Passwords do not match!', 'error');
        return;
    }
    
    console.log('Register:', { fullname, email, password });
    showAlert('Registration successful! Welcome!', 'success');
    
    // Simulate loading
    setTimeout(() => {
        // Replace with your actual backend endpoint
        // window.location.href = 'dashboard.php';
    }, 2000);
});

// Social login handlers
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.classList[1].replace('-btn', '').toUpperCase();
        showAlert(`${provider} login not yet configured`, 'info');
    });
});