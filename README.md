# CI/CD Deployment Assignment – Flask & Express on EC2

## 1. Project Overview

This project demonstrates deploying a **Flask backend** and an **Express frontend** on a single **Amazon EC2 instance** with **CI/CD automation using Jenkins**.

- **Flask backend:** Python-based REST API, runs on port **5000**.
- **Express frontend:** Node.js web application, runs on port **3000**.
- **CI/CD:** Automated deployment pipeline using Jenkins triggered by GitHub webhooks.

---

## 2. Architecture Diagram

    +----------------+
    |   GitHub Repo  |
    | flask-app /    |
    | express-app    |
    +-------+--------+
            |
            v
    +----------------+
    |   Jenkins CI   |
    |  (on EC2)     |
    +-------+--------+
            |
    -------------------
    |                 |
    v                 v
 +---------------+ +---------------+
 | Flask backend | | Express frontend|
 | Port: 5000 | | Port: 3000 |
 +---------------+ +---------------+


---

## 3. EC2 Setup

**Instance Details:**
- OS: Ubuntu 22.04 LTS
- Instance Type: t3.small
- Security Group: Ports 22, 3000, 5000, 8080 open

**Dependencies Installed:**
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip nodejs npm git
sudo npm install -g pm2
sudo apt install -y openjdk-17-jdk

##4. Application Deployment

cd /backend
pip3 install -r requirements.txt
pm2 start "python3 app.py" --name flask-app

cd ~/frontend
npm install
pm2 start "npm start" --name express-app

##5. Jenkins CI/CD Pipeline
Jenkins Setup

Installed Jenkins on the same EC2 instance.

Plugins Installed: Git, NodeJS, Pipeline.

Configured NodeJS tool (Node 18 LTS).

Used system Python (python3) directly in pipeline.

##6. GitHub Webhook

Webhook URL: http://http://65.2.125.227/:8080/github-webhook/

Trigger: Push events

Result: Any push to GitHub automatically triggers the corresponding Jenkins pipeline and deploys the apps.




##Used Chatgpt For Polishing README.md File
