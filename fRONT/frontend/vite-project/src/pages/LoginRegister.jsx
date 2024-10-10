import { fetchApi } from '@/utils/fetchApi.js';

export default function LoginRegister() {
    document.querySelector('main').innerHTML = `
        <h1>Login / Register</h1>
        <form id="authForm">
            <input type="text" id="email" placeholder="Email" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <button type="button" id="registerButton">Register</button>
        </form>
        <div id="error" style="color: red;"></div>
    `;

    const form = document.getElementById('authForm');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetchApi('/api/auth/login', 'POST', { email, password });
            if (response.token) {
                localStorage.setItem('token', response.token);
                window.location.href = '/';
            }
        } catch (error) {
            errorDiv.textContent = 'Login failed. Please try again.';
        }
    });

    document.getElementById('registerButton').addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetchApi('/api/auth/register', 'POST', { email, password });
            if (response.token) {
                localStorage.setItem('token', response.token);
                window.location.href = '/';
            }
        } catch (error) {
            errorDiv.textContent = 'Registration failed. Please try again.';
        }
    });
}
