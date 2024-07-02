# WorkDay

### 🌐 [Live link to WorkDay](https://assignment-12-80ff0.web.app) 🌐


<br/>

## 📜 Project Overview :

- **Project Concept** : Through this website you can work as a company admin or employees.  Admin can form a team and complete the work of the company. Besides, employee, admin can perform tasks easily through their dashboard.

- **Problem Solved** : Through this an admin or employees will get an idea of ​​how a company performs their work and can easily operate a small business.


---

## 🌟 Features

### Dashboard :
- **There are separate dashboards for user and admin.** As a result, roles and permissions are required to do any work.
- **An administrator** has permission to perform any task but an employee must obtain permission to perform the task.

### Employee Management :
- **When an employee joins**, he cannot perform any work until he is part of a team.
- **Admin** can add employee to his team according to his choice and after a limit he has to increase the limit through payment.

### User Authentication :
- **User-friendly login and registration system** for a personalized experience.
- Users can **easily add, view, edit, and delete** their own art pieces.

---


## 🛠 Technology Used

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment:** stripe
- **Firebase** 
- **Query**
- **Authentication:** JWT 
<br/>

## How to Clone and Run the Project Locally : 
1. **Clone the repository:**
   - First, you need to clone the **client** and **server side**. Open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **client-side** and **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
3. **Firebase setup:**
   - In your client side configure environment variables by creating a `.env.local` file in the root directory. Add the following variables:
     ```plaintext
       VITE_APIKEY
       VITE_AUTHDOMAIN
       VITE_PROJECTID
       VITE_STORAGEBUCKET
       VITE_MESSAGINGSENDERID
       VITE_APPID
     ```
     Replace `VITE_API_URL` add your server url example `VITE_API_URL='http://localhost:3000'` .

4. **Run local :**
   - Open your vsCode tarminal and check which file are you. Go your client file and run code `npm run dev` then client side run in local.


