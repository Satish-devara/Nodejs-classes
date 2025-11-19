import express from 'express';
import {body, validationResult} from 'express-validator';

const app = express();
const userRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Needed for HTML form submission

// -----------------------------
// GET /user/  → Browser OK
// -----------------------------
userRouter.get('/', (req, res) => {
  res.send('User profile');
});

// -----------------------------
// GET /user/register → Show HTML FORM
// -----------------------------
userRouter.get('/register', (req, res) => {
  res.send(`
    <form action="/user/register" method="POST">
      <label>Email:</label><br>
      <input type="email" name="email" required /><br><br>

      <label>Password:</label><br>
      <input type="password" name="password" required /><br><br>

      <button type="submit">Register</button>
    </form>
  `);
});

// -----------------------------
// POST /user/register → Works in Browser & Postman
// -----------------------------
userRouter.post(
  '/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("POST request body:", req.body);

    res.send('User registered!');
  }
);

// Use the router
app.use('/user', userRouter);

// Start server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});