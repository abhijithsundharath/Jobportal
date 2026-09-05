const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    category: "Development",
    location: "palakkad",
    description: "Experienced frontend developer with React expertise."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    category: "Design",
    location: "banglore",
    description: "Join our creative team to design beautiful user experiences."
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "Growth Inc",
    category: "Marketing",
    location: "Mangolre",
    description: "Lead our marketing initiatives and grow our brand presence."
  }
];

let jobIdCounter = 4;

// GET Return list of jobs
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// POST Add new job
app.post('/jobs', (req, res) => {
  const { title, company, category, location, description } = req.body;

  if (!title || !company || !category || !location || !description) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const newJob = {
    id: jobIdCounter++,
    title,
    company,
    category,
    location,
    description
  };

  jobs.push(newJob);
  res.status(201).json(newJob);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});