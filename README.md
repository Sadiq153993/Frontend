# Sign-In / Register Template

Quick guide to run this project locally (Windows + XAMPP) and test registration/login.

---

## 1) What this contains
- `index.html`, `style.css`, `script.js` — front-end template (demo)
- `config.php` — PDO database connection (edit credentials)
- `register.php`, `login.php`, `logout.php` — server-side handlers (PHP)
- `home.php` — protected page shown after login

## 2) Create the database (copy-paste)
Open phpMyAdmin (http://localhost/phpmyadmin) or use MySQL CLI and run:

```sql
CREATE DATABASE users_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE users_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Save this SQL somewhere (optional `create_users.sql`).

## 3) Set DB credentials
Open `config.php` and edit these variables to match your MySQL (XAMPP default):

```php
$db_host = '127.0.0.1';
$db_name = 'users_db';
$db_user = 'root';
$db_pass = ''; // XAMPP default is empty
```

## 4) Run locally with XAMPP (step-by-step)
1. Install XAMPP from https://www.apachefriends.org and start Apache + MySQL in the XAMPP Control Panel.
2. Copy this project folder to `C:\xampp\htdocs\yourproject\` (so `index.html` is reachable at `http://localhost/yourproject/sign-in/index.html`).
   Example PowerShell copy command (adjust paths):
```powershell
Copy-Item -Path "C:\Users\User\OneDrive\İş masası\sign-in\*" -Destination "C:\xampp\htdocs\sign-in\" -Recurse -Force
```
3. Open `http://localhost/sign-in/index.html` in your browser.

## 5) Test flows
- Register:
  - Go to the Register tab, fill fields, submit.
  - On success you should be redirected to `index.html?registered=1`.
- Login:
  - Use the account you created; on success you'll be redirected to `home.php`.
- Logout:
  - Click the Logout link on `home.php`; you'll be redirected back to the sign-in page.

If something fails, check `config.php` credentials and Apache/MySQL status in XAMPP control panel.

## 6) Quick troubleshooting
- PDO connection error: verify `$db_user`/`$db_pass` and that MySQL is running.
- Blank page / headers: ensure no whitespace before `<?php` and that `header()` runs before output.
- Sessions: `session_start()` must be called before output on pages that read/write `$_SESSION`.

## 7) Quick Git commands (copy/paste in PowerShell)
```powershell
# initialize repo
git init
git add .
git commit -m "Initial commit"
# create remote repo on GitHub and then:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

## 8) Next recommended steps
- Use HTTPS in production.
- Add server-side CSRF protection and rate-limiting on login.
- Consider logging errors instead of printing them in production.

---

If you want, I can: create the `create_users.sql` file, generate screenshots, or set up a demo on Netlify/GitHub Pages. Tell me which next step you want.

If anything is unclear, say which line or step and I'll explain it simply.
