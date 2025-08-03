# CBT-
# POST POST CBT - University of Ibadan
Welcome to the POST UTME CBT - University of Ibadan app, a comprehensive learning platform designed to help Nigerian students prepare for the University of Ibadan POST UTME examination. This app provides a robust set of tools, including study materials, practice exams, tests, AI-powered explanations, and a leaderboard, all wrapped in a modern, user-friendly interface. Developed by Titans Devs, this project aims to enhance educational outcomes through technology.
Project Overview
Name: POST UTME CBT - University of Ibadan
Purpose: To provide an all-in-one solution for POST UTME preparation, offering personalized study plans, practice exams, and tests with advanced AI support.
Target Audience: Students preparing for the University of Ibadan POST UTME across subjects like English, Mathematics, Biology, Physics, Chemistry, Economics, Government, and Literature.
Launch Date: Targeted for late August 2025 (subject to development and testing completion).
Creator: Titans Devs
Contact:
Email: akewusholaabdulbakri101@gmail.com
Phone: +2348039896597
WhatsApp: +2348107993604
Facebook: https://www.facebook.com/profile.php?id=61575627958849
Instagram: https://www.instagram.com/heisbroken6?igsh=YzljYTk1ODg3Zg==
(Twitter and LinkedIn to be added)
Features
Core Features
Dashboard: A central hub for selecting subjects (English, Mathematics, Biology, Physics, Chemistry, Economics, Government, Literature) and academic years (2011/2012 to 2022/2023). Includes quick access cards for Practice Questions, Notes, Literary Texts, and Syllabus.
Reading Section: A dedicated area for studying materials, including topic-based study plans and an integrated Wikipedia search for additional resources.
Exam Section: Full-length practice exams (50-60 questions) with a timer, progress bar, and review mode. Questions are fetched from the Aloc API and enhanced with AI explanations.
Test Section: Short, topic-specific tests (10-15 questions) for quick practice, also with AI feedback and usage tracking.
Study Plan Section: Detailed, topic-based learning plans with progress tracking, linked to the Reading Section.
Leaderboard: Displays user rankings based on exam and test scores, motivating competitive learning.
Activation and Access
Activation System: Requires a 7-digit activation pin ("2028115") or a one-time N3000 payment via Stripe. Activation unlocks offline use, an ad-free experience, and all resources for one academic year.
Manual pin requests can be made via WhatsApp (+2348107993604).
Stripe payment integrates with your Opay account (9019185241, Akewushola Abdulbakri Temitope).
AI Integration
AI-Powered Explanations: Users can switch between Gemini, GPT-4, and Grok for detailed question explanations.
Gemini API Key: AIzaSyAkq3h7r2VN_LKJxc01jK9jslW8zzhlkuM
Grok API Key: xai-Oep1rsF9sXto6bGJT81yjMUkSvEbQ3hz8R6kOchRc4f36lKY5Wm9mCJ91bRGHCxbFTr9NOxWzSbCk139
(GPT-4 key to be provided)
AI Page: An interactive chat interface for asking study-related questions, guided by a custom system prompt about the app.
Additional Features
Wikipedia Search: In-app search functionality to access study materials directly from Wikipedia, with summaries and "Read More" options.
Login and Signup: Secure user authentication with email and password, stored in MongoDB, enabling personalized profiles and data persistence.
Settings and Help:
Account management (nickname, avatar).
Help page with contact details (email, phone, WhatsApp, social media).
"Created by Titans Devs" section with current links and placeholders for future additions.
Usage-Based Monetization: Tracks time spent and data usage (MB), converting them to currency (e.g., $0.10/hour, $0.01/MB) and transferring funds to your Opay account via Stripe.
UI Enhancements: Modern design with Tailwind CSS, including gradients, cards, and an animated moving image (to be provided) for visual appeal.
Technologies
Frontend
React: For building the user interface with dynamic components.
React Router: Handles navigation between sections.
Tailwind CSS: Provides a responsive, modern styling framework with custom animations (e.g., glitch effect).
@stripe/stripe-js: Integrates Stripe payment processing.
Backend
Node.js with Express: Powers the server-side logic.
MongoDB: Stores user data, scores, and usage statistics (connection: mongodb+srv://.mongodb.net/?retryWrites=true&w=majority&appName=).
Mongoose: Manages MongoDB schemas and Utme operations.
bcrypt: Hashes passwords for secure storage.
jsonwebtoken: Implements JWT for authentication.
stripe: Handles payment and fund transfers.
node-cron: Automates usage-based fund transfers.
APIs
Aloc API: Fetches exam and test questions (https://questions.aloc.com.ng).
Wikipedia API: Provides study material search.
Gemini, Grok, GPT-4 APIs: Deliver AI explanations.
Deployment
Vercel: Hosts both frontend and backend with static asset management.
Setup Instructions
Prerequisites
Node.js (v14 or later)
npm or yarn
MongoDB Atlas account (connection string provided)
Installation
Clone the Repository:
git clone https://github.com/your-repo/cbt-app.git
cd cbt-app
Frontend Setup:
Install dependencies:
npm install
Start the development server:
npm start
Access at http://localhost:3000.
Backend Setup:
Navigate to the backend directory:
cd backend
Install dependencies:
npm install
Create a .env file with the following:
MONGODB_URI=mongodb+srv://Utmecbt:isaiahilom@1@utme.7jkkmin.mongodb.net/?retryWrites=true&w=majority&appName=Utme
STRIPE_SECRET_KEY=
GEMINI_API_KEY=
GROK_API_KEY=xai-
Start the server:
npm start
Access at http://localhost:5000.
Database Connection:
Ensure MongoDB Atlas is configured with the provided URI.
Deployment
Push to a GitHub repository.
Deploy on Vercel using the vercel.json configuration.
Update environment variables in Vercel dashboard.
Implementation Details
Directory Structure
/public/: Static assets (e.g., logo, moving image).
/src/components/: React components for all features.
/src/services/: API and utility services.
/src/styles/: Tailwind CSS configurations.
/src/assets/: Additional icons and images.
/backend/: Node.js backend with routes, models, and utils.
Root files: App.jsx, index.js, constants.js, and configuration files.
Key Implementations
Authentication: Login.jsx and Signup.jsx with MongoDB storage and JWT authentication.
Usage Tracking: Real-time tracking of time and data usage in ExamSection.jsx and TestSection.jsx, sent to backend via auth.js.
Payment Integration: Stripe handles activation payments and usage-based transfers to Opay (requires Opay Stripe ID).
AI Logic: api.js integrates Gemini, Grok, and GPT-4 for explanations, with a custom system prompt.
UI Design: Tailwind CSS with a glitch animation for the loading screen and a moving image placeholder.
Usage Instructions
Signup/Login: Create an account or log in to access personalized features.
Activation: Enter the activation pin or pay N3000 via Stripe to unlock all features.
Navigation: Use the Navbar to switch between Dashboard, Reading, Exam, Test, AI, and Settings.
Study: Explore study plans and Wikipedia search in the Reading Section.
Practice: Take exams or tests, review answers with AI explanations.
Monetization: Usage data is tracked and converted to currency, with funds transferred to the creator’s Opay account.
Contributing
Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.
Future Enhancements
Add Twitter and LinkedIn links to the "Created by Titans Devs" section.
Implement GPT-4 API integration.
Enhance Opay integration with a Stripe Connect account.
Add offline mode for study materials.
Improve UI with more animations and mobile optimizations.
License
MIT License (to be added)
Acknowledgments
Thanks to the xAI team for Grok support.
Appreciation to Google for Gemini API.
Special thanks to the Aloc team for question data.
