import axios from "./axios.js";

export const getPublicaciones = () => axios.get("/publicacion");
export const verificarToken = () => axios.get("/verificacion");
export const verificarEmailConfirmado = (email) => axios.post("/emailConfirmado",email)

export const registrarse = (user) => axios.post("/user", user);
export const iniciarSesion = (user) => axios.post("/user/login", user);
export const setQueja = (formdata) => axios.post("/queja", formdata);
export const cerrarSesion = () => axios.post("/user/logout")

export const updateQueja = (queja) => axios.put("/queja",queja);