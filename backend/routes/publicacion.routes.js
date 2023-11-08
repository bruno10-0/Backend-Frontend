import { Router} from "express";

import {
    getPublicacion,
    getUbicacion
} from "../controllers/publicacion.controllers.js"

const router = Router();

router.get("/publicacion",getPublicacion);
router.get("/getUbicacion",getUbicacion)

export default router;