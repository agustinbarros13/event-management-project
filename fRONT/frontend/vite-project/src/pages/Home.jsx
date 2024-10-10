import Loading from '@/components/Loading.jsx';

export default async function Home() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = Loading(); 

    try {
        const events = [
            { _id: '1', title: 'Event 1', date: '2023-10-10', location: 'Location 1' },
            { _id: '2', title: 'Event 2', date: '2023-11-15', location: 'Location 2' }
        ];
        
        mainElement.innerHTML = `
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
        mainElement.innerHTML = '<p>Error loading events</p>';
    }
}

window.exploreEvent = (eventId) => {
    alert(`Event ID: ${eventId}`);
};
