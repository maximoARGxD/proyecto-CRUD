# Products CRUD con TypeScript y MongoDB

Este proyecto es un ejemplo de **CRUD (Create, Read, Update, Delete)** utilizando **TypeScript**, **Node.js** y **MongoDB** con **Mongoose**.  
No incluye API REST; todas las operaciones se ejecutan directamente desde el código.

---

## Tecnologías utilizadas

- **Node.js** v20+
- **TypeScript**
- **MongoDB**
- **Mongoose**  
- **ts-node** (para ejecutar TypeScript directamente si se desea)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/maximoARGxD/proyecto-CRUD.git 
cd proyecto-CRUD
````

2. Instalar dependencias:

```bash
npm install
```

3. Configurar MongoDB:

* Si usas local, asegúrate de tener MongoDB corriendo en `mongodb://localhost:27017`.
* Si usas MongoDB Atlas, modifica la URI en `src/database/database.ts`:

```ts
const MONGO_URI = "url_de_mongo_db";
```

---

## Ejecución

Para ejecutar el proyecto:

```bash
npm start
```

* Esto compila TypeScript (`tsc`) y ejecuta `dist/index.js`.
* Inserta automáticamente **10 productos de ejemplo** en la base de datos y muestra la salida en consola.

---

## Operaciones realizadas

El script principal (`src/index.ts`) realiza:

1. **Create**: Inserta 10 productos reales en la colección `products`.
2. **Read**: Muestra los productos insertados por ID y todos los documentos.
3. **Update**: Permite actualizar un producto por ID.
4. **Delete**: Permite eliminar un producto por ID.

> Todos los logs se muestran en consola.

---

## Funciones CRUD

* `createProduct(productData)` → Crear un producto
* `getAllProducts()` → Obtener todos los productos
* `getProductById(id)` → Obtener un producto por ID
* `updateProduct(id, updatedData)` → Actualizar un producto
* `deleteProduct(id)` → Eliminar un producto por ID

---

## Autor

Maximo Juarez