# ControlLabs API — Sesión 1

Sistema de préstamo de salas del SENA (ADSO). Base: Express.js + Arquitectura Limpia + variables `.env`.

## Arranque

```bash
npm install
npm run dev      # nodemon server.js
```

Prueba: `GET http://localhost:3000/api/v1/health`

## Estructura

```
server.js            # Arranque HTTP (dotenv + listen)
src/app.js           # Configuración de Express (cors, json, rutas)
src/config/          # Conexión a BD y terceros (Google OAuth)
src/controllers/     # Capa HTTP
src/services/        # Lógica de negocio
src/models/          # Modelos (User, Room, Loan, InventoryItem)
src/middlewares/     # JWT, roles (RBAC), errores
src/routes/          # Routers modulares
```

`.env` no se versiona (está en `.gitignore`).
