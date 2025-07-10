import { Router } from 'express';
import { registerUser, userLogin, userlogout } from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middlewares.js'; // <-- ensure this exists and is correctly configured
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

// Use multer middleware to handle 'avatar' and 'coverImage' fields
router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

router.route("/login").post(userLogin);

router.route("/logout").post(verifyJWT,userlogout);

export { router };
