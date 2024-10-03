import { fetchApi } from '../utils/fetchApi.js';
import Loading from '../components/Loading.js';

export default function Favorites() {
    document.querySelector('main').innerHTML = `
        <h1>My Favorite Events</h1>
        <p>Coming soon...</p>
    `;
}
