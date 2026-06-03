const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

const app = express();

const categoriasPermitidas = [
  "vias",
  "topografia",
  "riego",
  "urbanizacion",
  "metalicas",
  "proyectos"
];


const storage = multer.diskStorage({

 destination: (req, file, cb) => {

  const categoria = req.body.categoria;

  if (!categoriasPermitidas.includes(categoria)) {
    return cb(new Error("Categoría inválida"));
  }

  cb(null, `uploads/${categoria}`);

},

  filename: (req, file, cb) => {

    cb(null, Date.now() + "-" + file.originalname);

  },

});

const upload = multer({ storage });


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://splendorous-choux-c78ce5.netlify.app"
    ]
  })
);
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render('index.ejs', {message: null})
})

app.locals.frontendUrl = process.env.FRONTEND_URL;


app.post('/', async (req, res) => {
    console.log(req.body)
    const { user, pass } = req.body
    if(user ===  process.env.APP_USER && pass ===  process.env.APP_PASS) {
        return res.redirect("/admin")
    }
   return res.render('index.ejs', {message: "Credenciales invalidas"})
})

app.post(
  "/upload",
  upload.single("imagen"),
  (req, res) => {

    return res.redirect("/admin");

});

app.get("/imagenes/:categoria", (req, res) => {

  const categoria = req.params.categoria;

  fs.readdir(`./uploads/${categoria}`, (err, files) => {

    if (err) {

      return res.status(500).json({
        ok: false
      });

    }

    return res.json(files);

  });

});



app.post("/contacto", async (req, res) => {

  const { nombre, email, telefono, mensaje } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nueva Cotización",
      html: `
        <h2>Nuevo mensaje desde la página web</h2>

        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Mensaje:</b></p>
        <p>${mensaje}</p>
      `,
    });

    res.status(200).json({
      ok: true,
      message: "Correo enviado"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false,
      message: "Error al enviar correo"
    });

  }

});

app.get("/admin", (req, res) => {

  const categorias = [
    "vias",
    "topografia",
    "riego",
    "urbanizacion",
    "metalicas",
    "proyectos"
  ];

  let imagenes = [];

  categorias.forEach((categoria) => {

    const carpeta = `./uploads/${categoria}`;

    if (fs.existsSync(carpeta)) {

      const archivos = fs.readdirSync(carpeta);

      archivos.forEach((archivo) => {

        imagenes.push({
          categoria,
          archivo
        });

      });

    }

  });

 res.render("admin.ejs", {
  mensaje: null,
  imagenes,
  frontendUrl: process.env.FRONTEND_URL
});

});

app.post("/eliminar", (req, res) => {

  const { categoria, archivo } = req.body;

  const ruta = `./uploads/${categoria}/${archivo}`;

  fs.unlink(ruta, (err) => {

    if (err) {

      console.log(err);

      return res.send("Error");

    }

    return res.redirect("/admin");

  });

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});