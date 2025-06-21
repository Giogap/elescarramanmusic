# El Escarraman Music - Backend

Backend de la aplicación El Escarraman Music construido con NestJS, PostgreSQL y Docker.

## 🚀 Tecnologías

- **NestJS** - Framework de Node.js
- **PostgreSQL** - Base de datos
- **TypeORM** - ORM para TypeScript
- **Docker** - Contenedores
- **Docker Compose** - Orquestación de servicios

## 📋 Prerrequisitos

- Docker Desktop
- Node.js 18+ (para desarrollo local)
- npm o yarn

## 🛠️ Instalación y Configuración

### Opción recomendada: Docker Compose

1. **Navegar al directorio del backend**
   ```bash
   cd back
   ```

2. **Levantar el entorno completo**
   ```bash
   docker-compose up --build -d
   ```

3. **Verificar que todo esté funcionando**
   ```bash
   docker-compose ps
   ```

### Opción 2: Desarrollo Local

1. **Configurar variables de entorno**
   ```bash
   cp env.example .env
   # Editar .env con tus configuraciones
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Levantar solo PostgreSQL con Docker**
   ```bash
   docker-compose up postgres -d
   ```

4. **Ejecutar el backend**
   ```bash
   npm run start:dev
   ```

## 🗄️ Base de Datos

### Estructura

- **bandas** - Información de las bandas musicales
- **eventos** - Eventos y conciertos
- **banda_evento** - Relación muchos a muchos entre bandas y eventos
- **multimedia** - Enlaces multimedia de las bandas
- **productos** - Productos de las bandas

### Conexión

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

```bash
# Ver logs en tiempo real
docker-compose logs -f

# Parar todos los servicios
docker-compose down

# Reiniciar servicios
docker-compose restart

# Ejecutar migraciones (si las hay)
docker-compose exec backend npm run migration:run

# Acceder a PostgreSQL
docker-compose exec postgres psql -U postgres -d escarraman_db
```

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests de integración
npm run test:e2e
```

## 📝 Variables de Entorno

Copia `env.example` a `.env` y configura:

```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=escarraman_db

# Application Configuration
NODE_ENV=development
PORT=3000
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
