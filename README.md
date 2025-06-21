# El Escarraman Music

Aplicación completa de música con frontend, backend y blog.

## 🏗️ Estructura del Proyecto

```
elescarramanmusic/
├── back/                    # Backend con NestJS + PostgreSQL + Docker
├── front/                   # Frontend con React + TypeScript
├── blog/                    # Blog con React
└── requeriments/            # Scripts SQL y documentación de BD
```

## 🚀 Inicio Rápido

### Backend (NestJS + PostgreSQL)

```bash
cd back
# Con Docker (recomendado)
docker-compose up --build -d

### Frontend (React)

```bash
cd front
npm install
npm run dev
```

## 📋 Tecnologías

### Backend
- **NestJS** - Framework de Node.js
- **PostgreSQL** - Base de datos
- **TypeORM** - ORM para TypeScript
- **Docker** - Contenedores
- **Docker Compose** - Orquestación

### Frontend
- **React** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS

## 🗄️ Base de Datos

### Estructura
- **bandas** - Información de bandas musicales
- **eventos** - Eventos y conciertos
- **banda_evento** - Relación muchos a muchos
- **multimedia** - Enlaces multimedia
- **productos** - Productos de las bandas

### Configuración
- **Host**: localhost (o postgres en Docker)
- **Puerto**: 5432
- **Usuario**: postgres
- **Contraseña**: postgres
- **Base de datos**: escarraman_db

## 📡 API Endpoints

### Bandas
- `GET /bandas` - Obtener todas las bandas
- `GET /bandas/:id` - Obtener una banda específica
- `POST /bandas` - Crear una nueva banda
- `PATCH /bandas/:id` - Actualizar una banda
- `DELETE /bandas/:id` - Eliminar una banda

### Eventos
- `GET /eventos` - Obtener todos los eventos
- `GET /eventos/:id` - Obtener un evento específico
- `POST /eventos` - Crear un nuevo evento
- `PATCH /eventos/:id` - Actualizar un evento
- `DELETE /eventos/:id` - Eliminar un evento

## 🔧 Comandos Útiles

### Backend
```bash
cd back

# Ver logs
docker-compose logs -f

# Parar servicios
docker-compose down

# Acceder a PostgreSQL
docker-compose exec postgres psql -U postgres -d escarraman_db

# Ejecutar tests
npm run test
```

### Frontend
```bash
cd front

# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 📝 Variables de Entorno

### Backend
Copia `back/env.example` a `back/.env`:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=escarraman_db
NODE_ENV=development
PORT=3000
```

## 🧪 Testing

### Backend
```bash
cd back
npm run test
npm run test:watch
npm run test:e2e
```

### Frontend
```bash
cd front
npm run test
```

## 🚨 Solución de Problemas

### Puerto 5432 Ocupado
```bash
# Cambiar puerto en back/docker-compose.yml
ports:
  - "5433:5432"
```

### Error de Conexión a la Base de Datos
```bash
cd back
docker-compose logs postgres
docker-compose restart
```

## 📚 Documentación

- [Backend Setup](back/README.md) - Configuración del backend
- [Docker Setup](back/DOCKER_SETUP.md) - Configuración de Docker
- [Database Scripts](requeriments/) - Scripts SQL

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
