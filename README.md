# CDV_Frontend
GUI para la aplicacion de rentas de cabañas en linea

## Prerrequisitos

- [Docker](https://www.docker.com/products/docker-desktop/) instalado
- [Docker Compose](https://docs.docker.com/compose/) disponible

## Pasos para iniciar el entorno de desarrollo desde el repositorio principal

1. **Clonar el repositorio principal (backend):**
   ```bash
   git clone https://github.com/SigmaAssociation/CasaDelValle.git
   ```
2. **Clonar también el frontend en la carpeta hermana esperada por `docker-compose.yml`:**
   ```bash
   git clone https://github.com/SigmaAssociation/CDV_Frontend.git
   ```
3. **Verificar la estructura esperada:**
   ```bash
   # Estructura esperada
   <carpeta-base>/
   ├── CasaDelValle
   └── CDV_Frontend/
       └── Casa-Del-Valle-FE
   ```
4. **Desde `CasaDelValle`, levantar el entorno con Docker Compose:**
   ```bash
   cd CasaDelValle
   docker compose up --build
   ```

## Estilo de diseño

La aplicación usara la siguiente paleta de colores y se puede utilizar con su respectiva clase:
- #4F5D2F -----> bg-green
- #423629 -----> bg-brown
- #EC4E20 -----> bg-orange
- #EFE6D2 -----> bg-cream
- #151515 -----> bg-black

Se utilizará la siguiente fuente para titulos y encabezados: Serif ---> font-serif

Se utilizará la siguiente fuente para cuerpo de texto, formularios, etc: Sans ---> font-sans

## Guias

Se habilitaron paginas temporales con una guía más detallada de como cumplir con los requerimientos manteniendo un mismo estándar.

Se podran encontrar en las siguientes rutas del proyecto FE:
- guide/user-story
- guide/model
- guide/design


