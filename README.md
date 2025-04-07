# Full Stack React + Django Project

This is a full-stack web application built with **React (TypeScript)** for the frontend and **Django (with Django REST Framework)** for the backend. It uses **PostgreSQL** as the primary database and is Docker-ready for development and deployment.

---

## 🚀 Tech Stack

- ⚛️ **Frontend**: React + TypeScript + Bootstrap
- 🐍 **Backend**: Django + Django REST Framework
- 🐘 **Database**: PostgreSQL
- 🐳 **Deployment**: Docker & Docker Compose (optional)

---

## 📁 Project Structure

full-stack-project/
├── backend/
│   ├── api/           # Backend API implementation
│   ├── core/          # Core backend functionality
│   ├── venv/          # Python virtual environment
│   ├── .env           # Environment variables
│   ├── requirements.txt
│   └── manage.py      # Django management script
├── frontend/
│   ├── src/           # Source code
│   ├── public/        # Static files
│   ├── node_modules/  # Dependencies
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json  # TypeScript configuration
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── manage.py
├── README.md
└── requirements.txt


⚛️ Frontend (React)
cd frontend
npm install
npm start



🔧 Backend (Django)
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver