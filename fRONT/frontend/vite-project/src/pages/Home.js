import { fetchApi } from '../utils/fetchApi.js';
import Loading from '../components/Loading.js';

export default async function Home() {
    document.querySelector('main').innerHTML = Loading();
    
    try {
        const events = await fetchApi('/events');
        document.querySelector('main').innerHTML = `
            <h1>Available Events</h1>
            <div class="events-list">
                ${events.map(event => `
                    <div class="event-card">
                        <h3>${event.title}</h3>
                        <p>${new Date(event.date).toLocaleDateString()}</p>
                        <p>${event.location}</p>
                        <button onclick="exploreEvent('${event._id}')">Explore</button>
                    </div>
                `).join('')}
            </div>
        `;
    } catch (error) {
        document.querySelector('main').innerHTML = '<p>Error loading events</p>';
    }
}

window.exploreEvent = (eventId) => {
    //fun expl
    alert(`Event ID: ${eventId}`);
};
