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
