// All portfolio content lives here. Edit this file to update the site.
// Converts a Google Drive share link into a direct image URL.
export const driveImg = (url) => {
  const m = url && url.match(/\/d\/([^/]+)/)
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1000` : url
}

export const personal = {
  name: 'Pratikshya Sahoo',
  role: 'MCA Student & Aspiring Web Developer',
  rotatingRoles: ['MCA Student', 'Aspiring Web Developer', 'React Developer'],
  location: 'Bhubaneswar, India',
  email: 'pratikshyasahooguddy@gmail.com',
  phone: '8895515012',
  photo: 'https://drive.google.com/file/d/1NI04fWeusHITIB3Q8fNOASSRojTAxU44/view?usp=drive_link',
  resume: 'https://drive.google.com/file/d/1KGvD8jjLKFH96xeiahyZz5sYB1yRm2_t/view?usp=drive_link',
  shortBio: "I'm a passionate Web Developer and MCA student who enjoys turning ideas into meaningful digital experiences. I love building modern, responsive, and user-friendly websites that combine clean design with smooth functionality.",
  about: [
    'I have hands-on experience with HTML, CSS, JavaScript, React.js, and Tailwind CSS, and I enjoy exploring new technologies to improve my development skills. I have worked on projects like a Pizza Ordering Website and an AI Tutor, which helped me strengthen my understanding of frontend development and problem-solving.',
    'Along with web development, I am also interested in Artificial Intelligence, Machine Learning, and Data Science. I believe in continuous learning, experimenting with new ideas, and improving my skills through practical projects.',
    "My goal is to grow as a skilled Software Developer, contribute to real-world projects, and build digital solutions that make people's lives easier. I'm always excited to learn, create, and take on new challenges.",
  ],
}

export const socials = {
  github: 'https://github.com/pratikshyasahoo-creator',
  linkedin: 'https://www.linkedin.com/in/pratikshya-sahoo-b088353a0',
}

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'Biju Patnaik University of Technology (BPUT)', years: '2025–2027', grade: 'Currently Pursuing', desc: 'Focused on software development, Artificial Intelligence and Machine Learning, building hands-on projects alongside coursework.' },
  { degree: 'Bachelor of Science (B.Sc)', school: 'Utkal University', years: '2022–2025', grade: 'Grade A' },
  { degree: '+2 (Higher Secondary)', school: 'Council of Higher Secondary Education, Odisha (CHSE)', years: '2020–2022', grade: 'Grade A' },
]

// level + percent are editable per skill
const b = (name) => ({ name, level: 'Beginner', percent: 40 })
export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'JavaScript'].map(b) },
  { group: 'Languages', items: ['Python', 'JavaScript'].map(b) },
  { group: 'Database', items: ['MySQL'].map(b) },
  { group: 'Tools', items: ['Git', 'VS Code'].map(b) },
  { group: 'Soft Skills', items: ['Teamwork', 'Communication'].map(b) },
]

export const projects = [
  { title: 'Pizza Ordering Website', desc: 'A responsive pizza ordering experience with menu categories, cart management, order confirmation, random order IDs, and order history stored in Local Storage.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'], live: 'https://pizzaorderingwebsite-virid.vercel.app/', github: '', screenshot: 'https://drive.google.com/file/d/1OMXL-zip0BgRl_S-Vbik7BlPjhONrwya/view?usp=sharing' },
  { title: 'AI Tutor: Smart Learning Assistant', desc: 'A smart learning assistant that uses AI API integration to answer student questions and explain concepts in a simple, interactive, and responsive interface.', tech: ['HTML5', 'CSS3', 'JavaScript', 'AI API Integration'], live: 'https://edumentor-ai-five.vercel.app/', github: '', screenshot: 'https://drive.google.com/file/d/176vSQv2vZRlgd4gvk1pXjkCg77OMwj8M/view?usp=sharing' },
]

export const experience = [
  { role: 'Data Science Intern', org: 'CodSoft', duration: '4 weeks (Virtual Internship)', desc: 'Completed projects and tasks as part of a virtual Data Science internship.' },
]

export const certificates = [
  { title: 'Data Science Internship Certificate: CodSoft', link: 'https://drive.google.com/file/d/1eUWC_GnQNwW9avzlpvUj4-hlYfcQWxR6/view?usp=sharing' },
]

export const extraActivities = ['Hackathons']
