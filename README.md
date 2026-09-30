# Clínica Dental Doctores Rey (Valladolid)

Sitio web corporativo y catálogo clínico para **Clínica Dental Doctores Rey**, clínica odontológica de referencia en el centro de Valladolid (C/ Santiago 19-21, 1ºD).

## Tecnologías

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconografía**: Lucide React
- **Imágenes**: Optimización en WebP de alta fidelidad

## Estructura del Proyecto

- `app/`: Rutas principales de la aplicación (Inicio, Tratamientos, La Clínica, Contacto).
- `components/`: Componentes reutilizables (Navbar, Footer, ContactoForm, ContactoFAQ, TratamientosCatalog, TratamientosFAQ).
- `public/images/`: Recursos visuales y fotografía clínica optimizada en WebP.

## Despliegue y Desarrollo Local

Instalar dependencias:
```bash
pnpm install
```

Iniciar servidor de desarrollo:
```bash
pnpm dev
```

Compilar para producción:
```bash
pnpm build
pnpm start
```
