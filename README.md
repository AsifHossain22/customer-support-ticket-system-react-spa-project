# SupportTrack — Customer Support Ticket System

A streamlined, React-based dashboard for managing customer support requests. This application allows support agents to track, filter and update service tickets in real-time, ensuring efficient communication and faster resolution times.

**Live Demo: https://customer-support-ticket-system-react.netlify.app/**

---

## Features

* **Ticket Dashboard:** A comprehensive overview of all active, pending and resolved support tickets.
* **Status Management:** Dynamically update ticket statuses (e.g., Open, In Progress, Resolved, Closed).
* **Priority Labeling:** Categorize tickets by urgency (Low, Medium, High, Urgent) to prioritize workflow.
* **Filter & Search:** Quickly locate specific tickets by ID, customer name or issue category.
* **Detailed Ticket View:** Access the full history of a customer's issue, including timestamps and previous interactions.
* **Responsive Design:** Fully functional on mobile and desktop for agents on the go.

---

## Technologies

| Technology | Purpose |
| :--- | :--- |
| **React** | Building the component-based user interface |
| **React Router** | Handling navigation between dashboard and ticket details |
| **Tailwind CSS** | Custom, clean styling for a professional "SaaS" look |
| **Lucide React / Icons** | Consistent iconography for status and priority levels |
| **Vite** | Modern frontend tooling for a fast development experience |
| **Netlify** | Continuous deployment and hosting |

---

## Project Structure

```text
src/
├── assets/               # Icons and brand assets
├── components/           # UI Components
│   ├── Sidebar/          # Navigation menu
│   ├── TicketTable/      # Main data grid for tickets
│   ├── StatusBadge/      # Colorful indicators for ticket status
│   └── PriorityIcon/     # Visual cues for ticket urgency
├── pages/                # Main Views
│   ├── Dashboard/        # Overview of all tickets
│   ├── TicketDetails/    # Individual ticket management view
│   ├── CreateTicket/     # Form to manually add new tickets
│   └── Analytics/        # Visual data on resolution times
├── utils/                # Helper functions (date formatting etc.)
├── App.jsx               # Main routing and layout wrapper
└── main.jsx              # Entry point

---

**#Q1: What is JSX, and why is it used?**
**#A1:** JSX - JavaScript XML হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন যা রিঅ্যাক্টে ব্যবহৃত হয়। এটি দেখতে অনেকটা HTML-এর মতো হলেও এটি জাভাস্ক্রিপ্টের ভেতরে UI কেমন হবে তা নির্ধারণ করে।

**#Q2: What is the difference between State and Props?**
**#A2:** Props: এটি "Properties"-এর সংক্ষিপ্ত রূপ। এটি প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাটা পাঠানোর জন্য ব্যবহৃত হয় (ফাংশন আর্গুমেন্টের মতো)।
#State: এটি একটি বিল্ট-ইন অবজেক্ট যা কোনো কম্পোনেন্টের নিজস্ব ডাটা ধরে রাখে যা সময়ের সাথে পরিবর্তিত হতে পারে। স্টেট পরিবর্তন হলে রিঅ্যাক্ট কম্পোনেন্টটিকে পুনরায় রেন্ডার করে।

**#Q3: What is the useState hook, and how does it work?**
**#A3:** useState হুক ফাংশনাল কম্পোনেন্টে স্টেট ব্যবহার করার সুবিধা দেয়। এটি একটি অ্যারে রিটার্ন করে যার দুটি অংশ থাকে: বর্তমান স্টেট এবং সেটি আপডেট করার ফাংশন।

**#Q4: How can you share state between components in React?**
**#A4:** রিঅ্যাক্টে ডাটা সাধারণত উপর থেকে নিচের দিকে প্রবাহিত হয়। স্টেট শেয়ার করার উপায়গুলো হলো:
i. Lifting State Up: স্টেটকে নিকটতম কমন প্যারেন্ট (Parent) কম্পোনেন্টে নিয়ে যাওয়া।
ii. Context API: গ্লোবাল ডাটা (যেমন থিম বা ইউজার ইনফো) শেয়ার করার জন্য ব্যবহৃত হয়।
iii. State Management Libraries: বড় অ্যাপ্লিকেশনের জন্য Redux বা Zustand ব্যবহার করা।

**#Q5: How is event handling done in React?**
**#A5:** রিঅ্যাক্টে ইভেন্ট হ্যান্ডলিং সাধারণ HTML-এর মতোই, তবে কিছু পার্থক্য আছে:
i. ইভেন্টের নাম camelCase-এ লিখতে হয় (যেমন: onclick-এর বদলে onClick)।
ii. ইভেন্ট হ্যান্ডলার হিসেবে সরাসরি একটি ফাংশন পাস করতে হয় (স্ট্রিং নয়)।
