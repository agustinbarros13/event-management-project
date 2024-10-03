const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event' });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('attendees', 'name email');
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events' });
    }
};

exports.addAttendee = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        event.attendees.push(req.user.id);
        await event.save();

        res.status(200).json({ message: 'User added as attendee' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding attendee' });
    }
};
