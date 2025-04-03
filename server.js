const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Website content database
const websiteContent = {
    company: `Occams Advisory is a global financing advisory and professional services firm headquartered in Sarasota, Florida. We help businesses of all sizes achieve their financial and operational goals through our simplified problem-solving approach.`,
    services: [
        'Financial Advisory Services',
        'Restructuring Services',
        'Tax Planning and Strategy',
        'Tax Credits',
        'Due Diligence Services'
    ],
    features: [
        'Global presence',
        'Comprehensive financial solutions',
        'Focus on small to midsize businesses',
        'Expertise across various industries',
        'Client-centric approach',
        'Professional team with extensive experience'
    ],
    divisions: {
        occamsCapital: 'Through our division Occams Capital, we provide expert boutique investment advisory services that represents small to midsize businesses across various industries including technology and financial services.'
    },
    mission: 'We believe in delivering practical, efficient solutions that help our clients navigate complex financial challenges and achieve their business objectives.'
};

// Simple search function
function searchContent(query) {
    query = query.toLowerCase();
    let response = [];

    // Check for specific keywords and return relevant information
    if (query.includes('what') && query.includes('services')) {
        response.push('Our services include:', ...websiteContent.services);
    }
    if (query.includes('where') || query.includes('location') || query.includes('based')) {
        response.push('We are headquartered in Sarasota, Florida.');
    }
    if (query.includes('about') || query.includes('who')) {
        response.push(websiteContent.company);
    }
    if (query.includes('features') || query.includes('why choose')) {
        response.push('Key features of our firm:', ...websiteContent.features);
    }
    if (query.includes('capital') || query.includes('investment')) {
        response.push(websiteContent.divisions.occamsCapital);
    }
    if (query.includes('mission') || query.includes('goal')) {
        response.push(websiteContent.mission);
    }

    // If no specific matches, return general company information
    if (response.length === 0) {
        response.push(websiteContent.company);
        response.push('Our services include:', ...websiteContent.services);
    }

    return response.join('\n');
}

// Endpoint to handle chat
app.post('/chat', async (req, res) => {
    try {
        const { question } = req.body;
        const answer = searchContent(question);
        res.json({ answer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
