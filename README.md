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
- **Firebase:** Used for real-time database capabilities and user authentication.
- **Query:** Used for advanced querying and data manipulation tasks.
- **Authentication:** JWT (JSON Web Tokens)
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
3. **Environment setup:**
   - In your server side configure environment variables by creating a `.env` file in the root directory. Add the following variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/art_and_craft_db
     STRIPE_SECRET_KEY=your_stripe_secret_key_here
     JWT_SECRET=your_jwt_secret_key_here
     ```
     Replace `your_stripe_secret_key_here` and `your_jwt_secret_key_here` with your actual keys.

4. **Firebase setup:**
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

5. **Access the server :**
   - run code is `nodemon index.js ` or `npm run dev` and also check which file are you now. 
   - Open your web browser and navigate to `http://localhost:3000` to view the application locally.

7. **Run local :**
   - Open your vsCode tarminal and check which file are you. Go your client file and run code `npm run dev` then client side run in local.


