Here’s a **complete summary of all the commands you used (or needed to use)** to run the **Code-Byte**
---

## ✅ 1. Clone the GitHub Repository


## ✅ 2. Install Root-Level Dev Dependencies (Optional)

To use the `both` script:

```bash
npm install concurrently --save-dev
```

---

## ✅ 3. Install Backend Dependencies

```bash
cd backend
npm install
npm install nodemon --save-dev
```

Then go back to the root:

```bash
cd ..
```

---

## ✅ 4. Install Frontend Dependencies

```bash
cd frontend
npm install
npm install gsap
```

> This installs required packages like `react-scripts` and `gsap` (used in `Errorpage.jsx`).

Then go back to root:

```bash
cd ..
```

---

## ✅ 5. Run the Full App

Now run both frontend and backend together:

```bash
npm run both
```

This runs:

```json
"scripts": {
  "frontend": "cd frontend && npm start",
  "backend": "cd backend && npm start",
  "both": "concurrently \"npm run backend\" \"npm run frontend\""
}
```

---

## ✅ 6. Access the App

Once it compiles successfully:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000) 
---

## 🧰 Extra Commands (Optional)

### To Run Frontend Only

```bash
npm run frontend
```

### To Run Backend Only

```bash
npm run backend
```

---

## 🧠 Final Notes

* `nodemon` auto-restarts the backend when code changes.
* `gsap` is used for animations (installing it fixed module errors).
* You must always run from the **root project folder** (where `package.json` lives).

---
