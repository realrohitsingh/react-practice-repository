import './Section.css'
import cssLogo from './assets/css.webp'
import htmlLogo from './assets/html.webp'
import jsLogo from './assets/javascript.webp'

function Section() {
    const skills = [
        {
            name: "HTML",
            description: "HTML (HyperText Markup Language) is the standard language used to structure content on the web. It provides the building blocks of a webpage using elements such as headings, paragraphs, images, links, and forms. Without HTML, there would be no organized way to display text, media, or other content on the internet.",
            logo: htmlLogo,
        },
        {
            name: "CSS",
            description: "CCSS (Cascading Style Sheets) is used to style and design the appearance of web pages. It controls layout, colors, fonts, spacing, and even animations, making websites visually appealing and user-friendly. CSS also enables responsive design, allowing web pages to adapt seamlessly to different devices and screen sizes.",
            logo: cssLogo,
        },
        {
            name: "JavaScript",
            description: "JavaScript is a powerful programming language that brings interactivity and dynamic behavior to websites. It allows developers to manipulate HTML and CSS, respond to user actions, validate forms, create animations, and build modern web applications. JavaScript is widely used both on the frontend (with frameworks like React, Angular, and Vue) and the backend (with Node.js).",
            logo: jsLogo,
        },
    ]

    return (
        <section className="skills-section">
            {skills.map((skill, index) => (
                <div key={index} className="card">
                    <img src={skill.logo} alt={skill.name} className="card-logo" />
                    <h2>{skill.name}</h2>
                    <p>{skill.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Section
