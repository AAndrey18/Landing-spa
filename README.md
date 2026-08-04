# Landing de presentación · El Palacio

Landing académica desarrollada con React y Tailwind CSS para centralizar todos los entregables del proyecto SPA.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Después abre [http://localhost:3000](http://localhost:3000).

## Agregar o cambiar enlaces

Todos los destinos están centralizados en `app/project-links.ts`. Sustituye las cadenas vacías por los enlaces de Google Drive, Vercel o cualquier otro destino. Mientras un valor permanezca vacío, su tarjeta se mostrará como pendiente y no generará un enlace roto.

## Cambiar el SRS de Word a PDF

1. Guarda el PDF como `public/documentos/srs.pdf`.
2. En `app/project-links.ts`, cambia `srsDocument` a `"/documentos/srs.pdf"`.
3. Si quieres, elimina `public/documentos/srs.docx`.

## Construir para producción

```bash
npm run build
```
