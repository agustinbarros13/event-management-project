import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import LoginRegister from './pages/LoginRegister.jsx';
import Header from './components/Header.jsx';


export default function App() {
    document.getElementById('app').innerHTML = `
        ${Header()}
        <main></main>
    `;

    const navigate = (path) => {
        history.pushState({}, '', path);
        handleRoute();
    };

    const handleRoute = () => {
        const path = window.location.pathname;

        if (path === '/') {
            Home();
        } else if (path === '/favorites') {
            Favorites();
        } else if (path === '/login') {
            LoginRegister();
        } else {
            document.querySelector('main').innerHTML = '<h1>404 - Page not found</h1>';
        }
    };

    window.onpopstate = handleRoute;

    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('/');
    });

    document.getElementById('favoritesLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('/favorites');
    });

    document.getElementById('loginLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('/login');
    });

    handleRoute();
}
