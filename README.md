# 🎨 RGB Color Studio

RGB Color Studio es una aplicación web interactiva desarrollada con **HTML, CSS, JavaScript y Bootstrap** que permite crear y visualizar colores mediante el modelo de color RGB.

La aplicación permite modificar individualmente los valores de **rojo, verde y azul**, mostrando en tiempo real el color resultante y su código hexadecimal.

## 🚀 Características

* 🎚️ Controles deslizantes para modificar los valores RGB.
* 🔢 Entrada manual de valores decimales entre **0 y 255**.
* 🎨 Selector de color mediante un **Color Picker de HTML**.
* 👁️ Visualización del color seleccionado en tiempo real.
* 🔴 Control individual del canal rojo.
* 🟢 Control individual del canal verde.
* 🔵 Control individual del canal azul.
* #️⃣ Conversión automática de RGB a hexadecimal.
* 🔄 Sincronización entre sliders, campos numéricos y Color Picker.
* 📱 Diseño responsivo utilizando **Bootstrap 5**.
* ✨ Interfaz moderna con efectos visuales y estilo tipo glassmorphism.

## 🛠️ Tecnologías utilizadas

* **HTML5** — Estructura de la aplicación.
* **CSS3** — Diseño y estilos personalizados.
* **JavaScript** — Lógica y actualización dinámica de los colores.
* **Bootstrap 5** — Diseño responsivo y componentes de interfaz.

## 📁 Estructura del proyecto

```text
rgb-color-studio/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🎯 Funcionamiento

Cada color RGB puede tener un valor entre **0 y 255**.

Por ejemplo:

```text
Rojo: 52
Verde: 152
Azul: 219
```

La aplicación genera:

```text
RGB: rgb(52, 152, 219)
HEX: #3498DB
```

El resultado se muestra inmediatamente en el cuadro de color.

También es posible seleccionar directamente un color utilizando el **Color Picker**. Al hacerlo, la aplicación calcula automáticamente los valores correspondientes de rojo, verde y azul.

## 💻 Cómo ejecutar el proyecto

1. Descarga o clona el proyecto.
2. Asegúrate de que `index.html`, `styles.css` y `script.js` estén en la misma carpeta.
3. Abre el archivo `index.html` en un navegador web.
4. Utiliza los sliders, campos numéricos o el Color Picker para seleccionar un color.

No es necesario instalar dependencias adicionales.

> La aplicación utiliza Bootstrap mediante CDN, por lo que se recomienda tener conexión a Internet para cargar correctamente sus estilos.

## 🔄 Sincronización de controles

Todos los métodos de selección están conectados entre sí:

```text
Color Picker
     ↕
Valores RGB
     ↕
Sliders
     ↕
Código hexadecimal
     ↕
Cuadro de color
```

Esto significa que modificar cualquiera de los controles actualizará automáticamente los demás.

## 📱 Diseño responsivo

La interfaz se adapta a diferentes tamaños de pantalla gracias al sistema de cuadrícula de Bootstrap, permitiendo utilizar la aplicación tanto en computadoras como en dispositivos móviles.

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y puede ser modificado o utilizado libremente para aprendizaje y práctica de desarrollo web.
