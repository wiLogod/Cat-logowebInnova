// =========================================================================
// IMPORTACIONES DE IMÁGENES (Nombres actualizados por categoría)
// =========================================================================

// CARTERAS
import Abbiecartera2 from "../assets/images/Abbiecartera2.jpg";
import Abigailecartera3 from "../assets/images/Abigailcartera3.jpg";
import Acaliacartera14 from "../assets/images/Acaliacartera14.jpg";
import Agatacartera10 from "../assets/images/Agatacartera10.jpg";
import Agnescartera11 from "../assets/images/Agnescartera11.jpg";
import Aitanacartera4 from "../assets/images/Aitanacartera4.jpg";
import Beckycartera13 from "../assets/images/Beckycartera13.jpg";

// MORRALES
import Adinamorral4 from "../assets/images/Adinamorral4.jpg";
import Aframorral5 from "../assets/images/Aframorral5.jpg";
import Africamorral6 from "../assets/images/Africamorral6.jpg";
import Aimarmorral8 from "../assets/images/Aimarmorral8.jpg";
import Aixamorral5 from "../assets/images/Aixamorral5.jpg";
import Akiramorral9 from "../assets/images/Akiramorral9.jpg";
import Aldanamorral9 from "../assets/images/Aldanamorral9.jpg";
import Barbiemorral10 from "../assets/images/Barbiemorral10.jpg";
import Batiamorral11 from "../assets/images/Batiamorral11.jpg";
import Becamorral12 from "../assets/images/Becamorral12.jpg";
import Alaiamorral13 from "../assets/images/Alaiamorral13.jpg";

// MOCHILAS
import Ainamochila2 from "../assets/images/Ainamochila2.jpg";
import Ainaramochila3 from "../assets/images/Ainaramochila3.jpg";
import Barbaramochila4 from "../assets/images/Barbaramochila4.jpg";

// SETX5
import Alessiasetx56 from "../assets/images/Alessiasetx56.jpg";
import Alexsetx516 from "../assets/images/Alexsetx516.jpg";

// SETX4
import Belasetx417 from "../assets/images/Belasetx417.jpg";
import Belisasetx419 from "../assets/images/Belisasetx419.jpg";

// ETIQUETAS
import Alexiaetiqueta8 from "../assets/images/Alexiaetiqueta8.jpg";

export const products = [
  // =========================================================================
  // 👜 CARTERAS
  // =========================================================================
  { id: 101, name: "Abbie", category: "Carteras", image: Abbiecartera2, destacado: false,
    colors: [{ name: "Negro", stock: 8 }, { name: "Rosa", stock: 7 }] },
  { id: 102, name: "Abigail", category: "Carteras", image: Abigailecartera3, destacado: false,
    colors: [{ name: "Negro", stock: 18 }, { name: "Plateado", stock: 6 }, { name: "Rosa", stock: 15 }] },
  { id: 103, name: "Acalia", category: "Carteras", image: Acaliacartera14, destacado: false,
    colors: [{ name: "Negro", stock: 27 }, { name: "Plateado", stock: 30 }, { name: "Rosa", stock: 25 }] },
  { id: 104, name: "Agata", category: "Carteras", image: Agatacartera10, destacado: false,
    colors: [{ name: "Rosa", stock: 14 }, { name: "Azul", stock: 10 }] },
  { id: 105, name: "Agnes", category: "Carteras", image: Agnescartera11, destacado: false,
    colors: [{ name: "Negro", stock: 13 }] },
  { id: 106, name: "Aitana", category: "Carteras", image: Aitanacartera4, destacado: false,
    colors: [{ name: "Rosa", stock: 23 }, { name: "Azul", stock: 14 }] },
  { id: 107, name: "Becky", category: "Carteras", image: Beckycartera13, destacado: false,
    colors: [{ name: "Negro", stock: 108 }, { name: "Azul Marino", stock: 72 }, { name: "Rojo", stock: 60 }, { name: "Beige", stock: 59 }] },

  // =========================================================================
  // 🎒 MORRALES
  // =========================================================================
  { id: 201, name: "Adina", category: "Morrales", image: Adinamorral4, destacado: false,
    colors: [{ name: "Negro", stock: 11 }, { name: "Rosa", stock: 16 }] },
  { id: 202, name: "Afra", category: "Morrales", image: Aframorral5, destacado: false,
    colors: [{ name: "Verde", stock: 21 }, { name: "Negro", stock: 15 }, { name: "Azul", stock: 15 }] },
  { id: 203, name: "Africa", category: "Morrales", image: Africamorral6, destacado: false,
    colors: [{ name: "Beige", stock: 30 }, { name: "Azul", stock: 34 }, { name: "Negro", stock: 61 }, { name: "Rosa", stock: 37 }] },
  { id: 204, name: "Aimar", category: "Morrales", image: Aimarmorral8, destacado: false,
    colors: [{ name: "Rosa", stock: 22 }] },
  { id: 205, name: "Aixa", category: "Morrales", image: Aixamorral5, destacado: false,
    colors: [{ name: "Rosa", stock: 8 }, { name: "Marrón", stock: 28 }, { name: "Gris", stock: 30 }, { name: "Azul", stock: 27 }] },
  { id: 206, name: "Akira", category: "Morrales", image: Akiramorral9, destacado: false,
    colors: [{ name: "Rosa", stock: 60 }, { name: "Marrón", stock: 58 }, { name: "Beige", stock: 59 }, { name: "Gris", stock: 59 }, { name: "Azul", stock: 60 }] },
  { id: 207, name: "Alaia", category: "Morrales", image: Alaiamorral13, destacado: true,
    colors: [{ name: "Rosa", stock: 56 }, { name: "Marrón", stock: 55 }, { name: "Beige", stock: 51 }, { name: "Gris", stock: 56 }, { name: "Azul", stock: 51 }] },
  { id: 208, name: "Aldana", category: "Morrales", image: Aldanamorral9, destacado: true,
    colors: [{ name: "Rosa", stock: 19 }] },
  { id: 209, name: "Barbie", category: "Morrales", image: Barbiemorral10, destacado: false,
    colors: [{ name: "Negro", stock: 89 }, { name: "Azul Marino", stock: 57 }, { name: "Rojo", stock: 48 }, { name: "Beige", stock: 48 }] },
  { id: 210, name: "Batia", category: "Morrales", image: Batiamorral11, destacado: false,
    colors: [{ name: "Negro", stock: 105 }, { name: "Azul Marino", stock: 72 }, { name: "Rojo", stock: 55 }, { name: "Beige", stock: 58 }] },
  { id: 211, name: "Beca", category: "Morrales", image: Becamorral12, destacado: false,
    colors: [{ name: "Negro", stock: 64 }, { name: "Azul Marino", stock: 48 }, { name: "Rojo", stock: 36 }, { name: "Beige", stock: 33 }] },

  // =========================================================================
  // 🏫 MOCHILAS
  // =========================================================================
  { id: 301, name: "Aina", category: "Mochilas", image: Ainamochila2, destacado: false,
    colors: [{ name: "Negro", stock: 10 }, { name: "Rosa", stock: 17 }, { name: "Marrón", stock: 8 }] },
  { id: 302, name: "Ainara", category: "Mochilas", image: Ainaramochila3, destacado: false,
    colors: [{ name: "Azul", stock: 29 }, { name: "Beige", stock: 28 }, { name: "Verde", stock: 30 }, { name: "Negro", stock: 55 }] },
  { id: 303, name: "Barbara", category: "Mochilas", image: Barbaramochila4, destacado: false,
    colors: [{ name: "Negro", stock: 25 }, { name: "Azul Marino", stock: 24 }, { name: "Rojo", stock: 36 }, { name: "Beige", stock: 6 }] },

  // =========================================================================
  // 🌟 SETX5
  // =========================================================================
  { id: 401, name: "Alessia", category: "SETX5", image: Alessiasetx56, destacado: false,
    colors: [{ name: "Rosa", stock: 11 }, { name: "Marrón", stock: 6 }, { name: "Gris", stock: 16 }, { name: "Azul", stock: 13 }] },
  { id: 402, name: "Alex", category: "SETX5", image: Alexsetx516, destacado: true,
    colors: [{ name: "Rosa", stock: 35 }, { name: "Marrón", stock: 30 }, { name: "Beige", stock: 25 }, { name: "Gris", stock: 30 }, { name: "Azul", stock: 34 }] },

  // =========================================================================
  // ✨ SETX4
  // =========================================================================
  { id: 501, name: "Bela", category: "SETX4", image: Belasetx417, destacado: true,
    colors: [{ name: "Rosa", stock: 48 }, { name: "Negro", stock: 13 }, { name: "Marrón", stock: 14 }] },
  { id: 502, name: "Belisa", category: "SETX4", image: Belisasetx419, destacado: true,
    colors: [{ name: "Beige", stock: 48 }, { name: "Marrón", stock: 73 }] },

  // =========================================================================
  // 🏷️ ETIQUETAS
  // =========================================================================
  { id: 601, name: "Alexia", category: "Etiquetas", image: Alexiaetiqueta8, destacado: false,
    colors: [{ name: "Rosa", stock: 18 }, { name: "Marrón", stock: 21 }, { name: "Beige", stock: 8 }, { name: "Gris", stock: 18 }, { name: "Azul", stock: 12 }] }
];