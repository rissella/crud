"use strict";

/// 1 importar módulos terceros
const express = require("express");
// 2. declarar variables auxiliares
const PORT = process.env.PORT || 4000;
// 3. inicializando express 
let app = express();
// 4. levantar el servidor express
app.listen(PORT, () => {
  console.log(`servidor levantado en el puerto ${PORT}`);
});