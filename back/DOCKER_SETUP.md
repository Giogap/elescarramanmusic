# 🐳 Configuración Docker y PostgreSQL

## 📋 Resumen de la Configuración

Este proyecto utiliza Docker Compose para orquestar dos servicios principales:

1. **PostgreSQL** - Base de datos
2. **NestJS Backend** - API REST

## 🏗️ Estructura de Archivos

```
back/
├── docker-compose.yml          # Configuración principal de Docker Compose
├── Dockerfile                  # Imagen del backend
├── .dockerignore               # Archivos a ignorar en el build
├── env.example                 # Variables de entorno de ejemplo
```

## 🚀 Inicio Rápido

### Levantar todo el entorno
```bash
cd back
docker-compose up --build -d
```

### Manual
```bash
docker-compose up --build -d
```

## 📊 Servicios

### PostgreSQL
- **Imagen**: `postgres:15-alpine`
- **Puerto**: `5432`
- **Base de datos**: `escarraman_db`
- **Usuario**: `postgres`
- **Contraseña**: `postgres`
- **Volumen**: `postgres_data` (persistencia de datos)

### Backend (NestJS)
- **Puerto**: `3000`
- **Dependencias**: PostgreSQL
- **Volumen**: Código fuente montado para desarrollo
- **Variables de entorno**: Configuradas en docker-compose.yml

## 🔧 Configuración Detallada

### Variables de Entorno

Las variables de entorno se configuran en `docker-compose.yml`:

```yaml
environment:
  DATABASE_HOST: postgres
  DATABASE_PORT: 5432
  DATABASE_USER: postgres
  DATABASE_PASSWORD: postgres
  DATABASE_NAME: escarraman_db
```

### Volúmenes

- **postgres_data**: Persistencia de datos de PostgreSQL
- **../requeriments/init.sql**: Script de inicialización
- **.:/app**: Código fuente del backend (desarrollo)

### Redes

- **escarraman_network**: Red interna para comunicación entre servicios

## 🗄️ Base de Datos

### Inicialización

El script `../requeriments/init.sql` se ejecuta automáticamente al crear el contenedor de PostgreSQL:

- Crea las tablas necesarias
- Inserta datos de ejemplo
- Configura índices para optimización

### Tablas Principales

1. **bandas** - Información de bandas musicales
2. **eventos** - Eventos y conciertos
3. **banda_evento** - Relación muchos a muchos
4. **multimedia** - Enlaces multimedia
5. **productos** - Productos de las bandas

## 🔍 Comandos de Diagnóstico

### Verificar Estado
```bash
docker-compose ps
```

### Ver Logs
```bash
# Todos los servicios
docker-compose logs

# Servicio específico
docker-compose logs postgres
docker-compose logs backend

# Seguir logs en tiempo real
docker-compose logs -f
```

### Acceder a PostgreSQL
```bash
docker-compose exec postgres psql -U postgres -d escarraman_db
```

### Ejecutar Comandos en el Backend
```bash
docker-compose exec backend npm run test
docker-compose exec backend npm run build
```

## 🛠️ Desarrollo

### Modo Desarrollo

El código fuente está montado como volumen, por lo que los cambios se reflejan automáticamente:

```yaml
volumes:
  - .:/app
  - /app/node_modules
```

### Hot Reload

Para desarrollo con hot reload, puedes ejecutar:

```bash
docker-compose exec backend npm run start:dev
```

## 🚨 Solución de Problemas

### Puerto 5432 Ocupado
```bash
# Verificar qué está usando el puerto
netstat -ano | findstr :5432  # Windows
lsof -i :5432                 # Linux/Mac

# Cambiar puerto en docker-compose.yml
ports:
  - "5433:5432"  # Puerto externo diferente
```

### Error de Conexión a la Base de Datos
```bash
# Verificar que PostgreSQL esté corriendo
docker-compose logs postgres

# Reiniciar servicios
docker-compose restart
```

## 📈 Monitoreo

### Recursos del Sistema
```bash
docker stats
```

### Espacio en Disco
```bash
docker system df
```

### Limpiar Recursos No Utilizados
```bash
docker system prune
```

## 🔒 Seguridad

### Producción

Para producción, considera:

1. Cambiar contraseñas por defecto
2. Usar variables de entorno para credenciales
3. Configurar SSL/TLS
4. Limitar acceso a la red
5. Usar secrets de Docker

### Variables de Entorno de Producción

```yaml
environment:
  POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
  DATABASE_PASSWORD: ${DATABASE_PASSWORD}
```

## 📚 Recursos Adicionales

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [NestJS Documentation](https://nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/) 