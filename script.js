const profileData = {
  name: "Albin Babu",
  role: "Cybersecurity & DevOps Enthusiast",
  location: "location",
  email: "email id",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "link for Linkedin",

  summary:
    "I am focused on building practical, secure, and real-world IT projects using Linux, Docker, GitHub, Cloudflare, automation, monitoring, and cybersecurity best practices.",

  about:
    "I am developing hands-on skills in cybersecurity, DevOps, cloud infrastructure, Linux administration, CI/CD, monitoring, and secure application deployment. My goal is to build practical projects that demonstrate real technical ability rather than only listing skills on a resume.",

  skills: [
    "Linux",
    "Docker",
    "GitHub",
    "GitHub Pages",
    "Cloudflare DNS",
    "HTTPS",
    "Python",
    "Networking",
    "Cybersecurity",
    "CI/CD",
    "Monitoring",
    "Grafana",
    "Prometheus",
    "Tailscale",
    "AWS Basics"
  ],

  projects: [
    {
      title: "Secure Reminder App",
      category: "devops python cybersecurity",
      description:
        "A Python reminder application with Docker, logging, backups, Slack notifications, and secure environment handling.",
      tags: ["Python", "Docker", "Slack", "Security"],
      link: "https://github.com/YOUR_USERNAME/YOUR_REPO"
    },
    {
      title: "Personal Portfolio Website",
      category: "devops cloud",
      description:
        "A static portfolio website deployed using GitHub Pages, custom domain, HTTPS, Cloudflare DNS, and safe public hosting practices.",
      tags: ["HTML", "CSS", "JavaScript", "Cloudflare"],
      link: "https://github.com/YOUR_USERNAME/portfolio-website"
    },
    {
      title: "Monitoring Lab",
      category: "devops cybersecurity",
      description:
        "A private monitoring lab using Prometheus, Grafana, Docker, and secure access through Tailscale.",
      tags: ["Prometheus", "Grafana", "Docker", "Tailscale"],
      link: "#"
    },
    {
      title: "Secure Asset & Vulnerability Platform",
      category: "cybersecurity cloud devops",
      description:
        "Planned project for asset inventory, vulnerability tracking, risk scoring, and security reporting.",
      tags: ["Security", "Cloud", "Risk", "DevOps"],
      link: "#"
    }
  ],

  roadmap: [
    {
      title: "Phase 1: Portfolio Website",
      text: "Build and publish a secure static website with GitHub Pages, custom domain, HTTPS, and Cloudflare DNS."
    },
    {
      title: "Phase 2: DevOps Pipeline",
      text: "Add GitHub Actions, link checks, deployment workflow, and basic security scanning."
    },
    {
      title: "Phase 3: Monitoring",
      text: "Add Cloudflare Analytics and private uptime monitoring through Uptime Kuma or Grafana."
    },
    {
      title: "Phase 4: Advanced Projects",
      text: "Document larger cybersecurity and DevOps projects with architecture, threat model, and security controls."
    }
  ]
};

const logoName = document.getElementById("logoName");
const heroName = document.getElementById("heroName");
const heroRole = document.getElementById("heroRole");
const heroSummary = document.getElementById("heroSummary");
const aboutText = document.getElementById("aboutText");
const locationText = document.getElementById("locationText");
const githubBtn = document.getElementById("githubBtn");
const linkedinBtn = document.getElementById("linkedinBtn");
const githubContactBtn = document.getElementById("githubContactBtn");
const footerText = document.getElementById("footerText");

logoName.textContent = profileData.name;
heroName.textContent = profileData.name;
heroRole.textContent = profileData.role;
heroSummary.textContent = profileData.summary;
aboutText.textContent = profileData.about;
locationText.textContent = profileData.location;
githubBtn.href = profileData.github;
linkedinBtn.href = profileData.linkedin;
githubContactBtn.href = profileData.github;
footerText.textContent = `© 2026 ${profileData.name}. Built securely as a static portfolio website.`;

const skillsGrid = document.getElementById("skillsGrid");

profileData.skills.forEach((skill) => {
  const skillElement = document.createElement("div");
  skillElement.className = "skill";
  skillElement.textContent = skill;
  skillsGrid.appendChild(skillElement);
});

const projectsGrid = document.getElementById("projectsGrid");

function loadProjects(filter = "all") {
  projectsGrid.innerHTML = "";

  profileData.projects.forEach((project) => {
    if (filter !== "all" && !project.category.includes(filter)) {
      return;
    }

    const projectCard = document.createElement("article");
    projectCard.className = "project";

    const tagsHtml = project.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");

    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${tagsHtml}</div>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project →</a>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

loadProjects();

const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    loadProjects(filter);
  });
});

const roadmapList = document.getElementById("roadmapList");

profileData.roadmap.forEach((item) => {
  const roadmapItem = document.createElement("div");
  roadmapItem.className = "timeline-item";

  roadmapItem.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;

  roadmapList.appendChild(roadmapItem);
});

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
}

const copyEmailButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profileData.email);
    copyStatus.textContent = "Email copied to clipboard.";
  } catch {
    copyStatus.textContent = `Email: ${profileData.email}`;
  }

  setTimeout(() => {
    copyStatus.textContent = "";
  }, 3000);
});
