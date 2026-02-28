# 🧠 Intelligent Resource Allocation System (IRAS)

<div align="center">

![IRAS Banner](https://img.shields.io/badge/IRAS-Intelligent%20Resource%20Allocation-1B4F72?style=for-the-badge&logo=databricks&logoColor=white)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

**An AI-powered system that intelligently allocates limited resources — meeting rooms, workstations, equipment, and more — using real-time conflict detection, fairness scoring, and machine learning.**

[Getting Started](#-getting-started) • [Architecture](#-architecture) • [Contributing](#-contributing) • [Branch Rules](#-branch-protection-rules) • [Tech Stack](#-tech-stack)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Project](#running-the-project)
- [Contributing](#-contributing)
  - [Branch Strategy](#branch-strategy)
  - [Branch Protection Rules](#-branch-protection-rules)
  - [Commit Convention](#commit-convention)
  - [Pull Request Process](#pull-request-process)
- [Project Structure](#-project-structure)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🎯 About the Project

IRAS is a full-stack, AI-assisted booking and allocation platform designed for teams, organizations, and institutions. Users can request limited shared resources (rooms, workstations, lab equipment, etc.) for specific time slots. The system intelligently handles:

- ✅ **Availability checking** with real-time conflict prevention
- ⚖️ **Fairness enforcement** across users, roles, and departments
- 🤖 **AI-driven priority scoring** using XGBoost and historical usage data
- 📊 **Utilization optimization** via predictive analytics
- 🔔 **Real-time notifications** via WebSockets

---

## 🏗 Architecture

```
┌─────────────────────┐     REST/WS      ┌─────────────────────┐
│   Next.js Frontend  │ ◄──────────────► │  Node.js API Server │
│  (React + Tailwind) │                  │  (Express + BullMQ) │
└─────────────────────┘                  └────────┬────────────┘
                                                  │
                          ┌───────────────────────┼───────────────────────┐
                          │                       │                       │
                 ┌────────▼────────┐   ┌──────────▼──────┐   ┌──────────▼──────┐
                 │   PostgreSQL    │   │      Redis       │   │  Python AI Svc  │
                 │  (Primary DB)   │   │ (Queue + Cache)  │   │ (FastAPI + ML)  │
                 └─────────────────┘   └─────────────────┘   └─────────────────┘
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS, Shadcn/UI, Socket.io-client |
| **Backend** | Node.js, Express, TypeScript, Prisma ORM, BullMQ, JWT |
| **AI Service** | Python 3.11, FastAPI, XGBoost, scikit-learn, Celery, pandas |
| **Database** | PostgreSQL 15 (exclusion constraints), Redis 7 |
| **DevOps** | Docker, Docker Compose, GitHub Actions |
| **Testing** | Jest, Supertest, Pytest, Playwright |

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed on your machine before proceeding:

| Tool | Version | Install Guide |
|---|---|---|
| **Node.js** | v18 or higher | [nodejs.org](https://nodejs.org) |
| **npm** | v9 or higher | Comes with Node.js |
| **Python** | 3.11 or higher | [python.org](https://python.org) |
| **Docker** | Latest | [docs.docker.com](https://docs.docker.com/get-docker/) |
| **Docker Compose** | v2+ | [docs.docker.com](https://docs.docker.com/compose/install/) |
| **Git** | Latest | [git-scm.com](https://git-scm.com) |

Verify your setup:

```bash
node -v       # v18.x.x or higher
npm -v        # 9.x.x or higher
python --version  # Python 3.11.x or higher
docker -v     # Docker version 24.x.x or higher
git --version # git version 2.x.x or higher
```

---

### Installation

#### 1. Fork the Repository

Click the **Fork** button at the top-right of this page to create your own copy of the repo.

#### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/iras.git
cd iras
```

#### 3. Add the Upstream Remote

This keeps your fork in sync with the original repo:

```bash
git remote add upstream https://github.com/original-owner/iras.git
```

Verify remotes:

```bash
git remote -v
# origin    https://github.com/<your-username>/iras.git (fetch)
# origin    https://github.com/<your-username>/iras.git (push)
# upstream  https://github.com/original-owner/iras.git (fetch)
# upstream  https://github.com/original-owner/iras.git (push)
```

---

### Environment Setup

#### Backend (Node.js)

```bash
cd backend
cp .env.example .env
npm install
```

Open `.env` and fill in your values:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/iras_db

# Redis
REDIS_URL=redis://localhost:6379

# Auth
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your_refresh_secret_here

# AI Service
AI_SERVICE_URL=http://localhost:8000

# Email (optional for dev)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your_mailtrap_user
SMTP_PASS=your_mailtrap_pass
```

#### AI Service (Python)

```bash
cd ai-service

# Create and activate a virtual environment
python -m venv venv

# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy env file
cp .env.example .env
```

#### Frontend (Next.js)

```bash
cd frontend
cp .env.example .env.local
npm install
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_WS_URL=http://localhost:5000
```

---

### Running the Project

#### Option A — Docker Compose (Recommended)

Spins up all services (PostgreSQL, Redis, Backend, AI Service, Frontend) in one command:

```bash
# From the root of the project
docker-compose up --build
```

Services will be available at:

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| AI Service | http://localhost:8000 |
| API Docs (Swagger) | http://localhost:5000/api-docs |
| AI Docs (FastAPI) | http://localhost:8000/docs |

#### Option B — Manual (Service by Service)

**Start infrastructure first:**
```bash
docker-compose up postgres redis -d
```

**Backend:**
```bash
cd backend
npx prisma migrate dev    # Run DB migrations
npx prisma db seed        # Seed initial data (roles, sample resources)
npm run dev               # Starts on :5000
```

**AI Service:**
```bash
cd ai-service
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm run dev               # Starts on :3000
```

#### Running Tests

```bash
# Backend unit + integration tests
cd backend && npm run test

# AI service tests
cd ai-service && pytest

# Frontend E2E tests
cd frontend && npx playwright test
```

---

## 🤝 Contributing

We welcome contributions from everyone! Please read this section carefully before you start.

### Branch Strategy

We follow the **Gitflow** branching model:

```
main           ← Production-ready code only. Protected. Never push directly.
├── develop    ← Integration branch. All features merge here first.
│   ├── feature/your-feature-name
│   ├── fix/bug-description
│   ├── chore/task-description
│   └── docs/what-you-documented
```

#### How to Create Your Branch

Always branch off from `develop`, never from `main`:

```bash
# Step 1: Switch to develop and pull the latest changes
git checkout develop
git pull upstream develop

# Step 2: Create your feature branch
git checkout -b feature/your-feature-name

# Example branch names:
# feature/add-waitlist-promotion
# fix/booking-conflict-edge-case
# docs/update-api-endpoints
# chore/upgrade-dependencies
```

---

### 🚫 Branch Protection Rules

> **Read this before you push anything.**

| Branch | Direct Push | Force Push | Delete | Who Can Merge |
|---|---|---|---|---|
| `main` | ❌ Never | ❌ Never | ❌ Never | Maintainers only, via PR |
| `develop` | ❌ Never | ❌ Never | ❌ Never | Maintainers only, via PR |
| `feature/*` | ✅ Your own | ✅ Your own | ✅ After merge | You, via PR to `develop` |

**Never push directly to `main` or `develop`.** All changes must go through a Pull Request with at least one approving review. PRs to `main` require two approvals and a passing CI pipeline.

If you accidentally push to the wrong branch, contact a maintainer immediately — do not try to force-push to fix it.

---

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Your commit messages must follow this format:

```
<type>(<scope>): <short description>
```

| Type | When to Use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons — no logic change |
| `refactor` | Code restructure with no feature/fix |
| `test` | Adding or updating tests |
| `chore` | Build process, dependency updates |

**Examples:**

```bash
git commit -m "feat(allocation): add waitlist auto-promotion on cancellation"
git commit -m "fix(auth): resolve refresh token race condition"
git commit -m "docs(readme): update environment variable instructions"
git commit -m "test(resources): add edge case for capacity overflow"
```

---

### Pull Request Process

1. **Sync your branch** with the latest `develop` before opening a PR:

```bash
git fetch upstream
git rebase upstream/develop
```

2. **Push your branch** to your fork:

```bash
git push origin feature/your-feature-name
```

3. **Open a Pull Request** from your fork's branch → `develop` on the original repo.

4. **Fill in the PR template** completely — title, description, linked issue, and checklist.

5. **Wait for review.** Address all comments. Do not merge your own PR.

6. Once approved and CI passes, a maintainer will merge it.

> ⚠️ PRs with failing tests, missing descriptions, or direct commits to `main`/`develop` will be closed without review.

---

### What You Can Contribute To

| Area | Examples |
|---|---|
| ✅ Features | New resource types, recurring bookings, calendar integrations |
| ✅ Bug Fixes | Conflict edge cases, UI glitches, API error handling |
| ✅ AI/ML | New features for scoring model, improving prediction accuracy |
| ✅ Tests | Unit tests, integration tests, E2E coverage |
| ✅ Docs | API docs, inline comments, guides |
| ✅ UI/UX | Frontend components, accessibility improvements |
| ❌ Direct edits to `main` | Not allowed under any circumstances |
| ❌ Skipping the PR process | Not allowed under any circumstances |

---

## 📁 Project Structure

```
iras/
├── frontend/                  # Next.js 14 application
│   ├── app/                   # App Router pages
│   ├── components/            # Reusable UI components
│   └── lib/                   # API clients, hooks, utils
│
├── backend/                   # Node.js API server
│   ├── src/
│   │   ├── modules/           # Feature modules (auth, resources, requests...)
│   │   ├── middleware/        # Auth, rate limiting, error handling
│   │   └── shared/            # Queue, cache, event helpers
│   ├── prisma/
│   │   └── schema.prisma      # Database schema
│   └── tests/
│
├── ai-service/                # Python FastAPI + ML service
│   ├── models/                # Trained model artifacts
│   ├── routers/               # API route handlers
│   ├── services/              # Feature engineering, training pipeline
│   └── tests/
│
├── docker-compose.yml         # Full stack orchestration
└── README.md
```

---

## 👥 Contributors

<a href="https://github.com/original-owner/iras/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=original-owner/iras" />
</a>

Want to see your name here? [Start contributing!](#-contributing)

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Made with ❤️ by the IRAS Team

⭐ Star this repo if you find it useful — it helps others discover the project!

</div>
