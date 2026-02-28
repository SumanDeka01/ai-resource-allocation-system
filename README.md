# 🧠 Intelligent Resource Allocation System (IRAS)

<div align="center">

![IRAS Banner](https://img.shields.io/badge/IRAS-Intelligent%20Resource%20Allocation-1B4F72?style=for-the-badge&logo=databricks&logoColor=white)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](#-contributing)

**An AI-powered system that intelligently allocates limited shared resources — meeting rooms, workstations, equipment, and more — using real-time conflict detection and future AI-based scoring.**

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Docker Setup](#-docker-setup-recommended)
- [Running Without Docker](#-running-without-docker-optional)
- [Contributing](#-contributing)
- [Project Structure](#-project-structure)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🎯 About the Project

The **Intelligent Resource Allocation System (IRAS)** is a backend-focused AI-driven system designed to allocate limited shared resources efficiently.

Examples of resources:
- Meeting rooms  
- Workstations  
- Lab equipment  
- Shared devices  

The system aims to handle:

- ✅ Availability checking  
- ⚖️ Fair allocation logic  
- 🤖 AI-based decision support (via separate AI engine)  
- 📊 Future optimization and analytics  

This repository currently includes:
- A Dockerized Node.js backend
- A Python-based AI engine (in progress)
- Docker Compose orchestration

---

## 🏗 Architecture

```
┌─────────────────────┐
│   Client / Future UI│
└─────────────┬───────┘
              │ REST API
┌─────────────▼─────────────┐
│     Node.js Backend       │
│     (Express API)         │
└─────────────┬─────────────┘
              │
      ┌───────▼────────┐
      │   AI Engine    │
      │   (Python)     │
      └────────────────┘
```

Docker Compose orchestrates services for consistent development environments.

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Backend | Node.js 18+, Express |
| AI Engine | Python 3.11+ |
| DevOps | Docker, Docker Compose |
| Version Control | Git + GitHub |

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

| Tool | Version |
|------|----------|
| Node.js | v18+ |
| npm | v9+ |
| Python | 3.11+ |
| Docker | Latest |
| Git | Latest |

Verify installation:

```bash
node -v
npm -v
python --version
docker -v
git --version
```

---

# 🐳 Docker Setup (Recommended)

Docker allows the backend to run inside an isolated container with all dependencies installed automatically.

### Why Docker?

- Ensures consistent environment across machines
- Prevents Node version conflicts
- Installs dependencies inside container
- Keeps local system clean
- Makes scaling easier in future

---

## Run with Docker

From the root directory:

```bash
docker compose up --build
```

After startup, backend will be available at:

```
http://localhost:3001
```

Expected response:

```json
{"message":"Backend is running 🚀"}
```

To stop containers:

```bash
docker compose down
```

---

# 🧪 Running Without Docker (Optional)

If you prefer local setup:

```bash
cd backend
npm install
npm start
```

Backend will run at:

```
http://localhost:3001
```

---

# 🤝 Contributing

We welcome contributions!

### Branch Naming

```
feature/your-feature-name
fix/bug-description
docs/update-readme
chore/task-description
```

### Commit Format (Conventional Commits)

```
<type>(<scope>): <description>
```

Example:

```
feat(devops): add Docker support for backend
```

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Push your branch
4. Open a Pull Request
5. Wait for review before merging

---

# 📁 Project Structure

```
ai-resource-allocation-system/
├── backend/              # Node.js API (Dockerized)
│   ├── server.js
│   └── package.json
│
├── ai-engine/            # Python AI logic (in progress)
│
├── docker-compose.yml    # Service orchestration
├── .dockerignore
├── package.json
└── README.md
```

---

# 👥 Contributors

- [@SumanDeka01](https://github.com/SumanDeka01) – Project Owner  
- [@Pubali07](https://github.com/Pubali07) – Docker Integration  

See all contributors:  
https://github.com/SumanDeka01/ai-resource-allocation-system/graphs/contributors

---

# 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

⭐ Star this repository if you find it useful!

</div>