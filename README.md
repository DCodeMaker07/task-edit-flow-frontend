# TaskFlow Pro - Frontend

Dashboard de gestión de tareas y proyectos con una interfaz moderna y responsiva, construido con Next.js 16, React 19, Redux Toolkit y Tailwind CSS.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **Node.js**: v18.17 o superior ([descargar](https://nodejs.org/))
- **pnpm**: v10.33.2 o superior (gestor de paquetes recomendado)
  ```bash
  npm install -g pnpm
  ```
- **Backend en ejecución**: El servidor backend debe estar activo en `http://localhost:3001` (o configurar la URL en variables de entorno)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd TaskFlow-Pro/frontend
```

### 2. Instalar dependencias

Con **pnpm** (recomendado):
```bash
pnpm install
```

O con npm:
```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

**Notas importantes:**
- `NEXT_PUBLIC_` indica que la variable será accesible desde el navegador
- Ajusta la URL según la ubicación de tu servidor backend

## 📖 Uso

### Modo desarrollo

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

El aplicativo estará disponible en [http://localhost:3000](http://localhost:3000)

El servidor se recargará automáticamente cuando hagas cambios en los archivos.

### Compilación para producción

```bash
pnpm build
```

### Ejecutar en modo producción

```bash
pnpm start
```

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Compila el proyecto para producción |
| `pnpm start` | Ejecuta el proyecto compilado |
| `pnpm lint` | Ejecuta ESLint para validar el código |

## 🏗️ Estructura del Proyecto

```
frontend/
├── app/                      # App router de Next.js (rutas y layouts)
│   ├── auth/                 # Páginas de autenticación (login, etc.)
│   ├── dashboard/            # Dashboard principal
│   │   ├── projects/         # Gestión de proyectos
│   │   ├── tasks/            # Gestión de tareas
│   │   └── users/            # Gestión de usuarios
│   └── page.tsx              # Página principal
├── components/               # Componentes reutilizables
│   ├── dashboard/            # Componentes del dashboard
│   ├── layout/               # Componentes de layout (Header, Sidebar)
│   ├── projects/             # Componentes de proyectos
│   ├── tasks/                # Componentes de tareas
│   └── users/                # Componentes de usuarios
├── hooks/                    # Custom React hooks
├── lib/                      # Utilitarios y funciones auxiliares
│   ├── axios.ts              # Configuración de Axios
│   ├── auth.api.ts           # API de autenticación
│   └── validations/          # Esquemas de validación (Yup)
├── public/                   # Archivos estáticos
├── redux/                    # Configuración de Redux
│   ├── slices/               # Redux slices
│   ├── services/             # RTK Query services
│   └── store.ts              # Configuración del store
├── styles/                   # Estilos globales
├── types/                    # Tipos TypeScript
└── utils/                    # Funciones utilitarias

```

## 🛠️ Dependencias Principales

### Framework & UI
- **Next.js** (16.2.4): Framework React con renderizado del lado del servidor
- **React** (19.2.4): Librería JavaScript para interfaces de usuario
- **Tailwind CSS** (4): Framework CSS para estilos
- **DaisyUI** (5.5.19): Componentes UI basados en Tailwind CSS

### Estado & Manejo de datos
- **Redux Toolkit** (2.11.2): Gestión del estado global
- **Axios** (1.15.2): Cliente HTTP para peticiones API

### Formularios & Validación
- **Formik** (2.4.9): Gestión de formularios
- **Yup** (1.7.1): Validación de esquemas

### Utilidades
- **date-fns** (4.1.0): Manipulación de fechas
- **react-toastify** (11.1.0): Notificaciones toast
- **@tanstack/react-table** (8.21.3): Librería para tablas avanzadas

## 🔐 Autenticación

El proyecto utiliza **JWT (JSON Web Tokens)** para la autenticación:

1. El usuario inicia sesión en `/auth/login`
2. El backend retorna un token JWT
3. El token se guarda en Redux y se incluye en cada petición API
4. El middleware verifica el token antes de permitir acceso a rutas protegidas

**Archivos clave:**
- [lib/auth.api.ts](lib/auth.api.ts): Funciones de autenticación
- [redux/slices/authSlice.ts](redux/slices/authSlice.ts): Estado de autenticación

## 🌐 Integración con Backend

El frontend se comunica con el backend API a través de Axios:

- **URL base**: `NEXT_PUBLIC_API_URL` (por defecto: `http://localhost:3001/api`)
- **Autenticación**: Token JWT incluido en header `Authorization`
- **Interceptadores**: Manejo automático de errores y renovación de tokens

**Archivo de configuración:** [lib/axios.ts](lib/axios.ts)

## 📝 Convenciones de Código

- **TypeScript**: Todo el código está escrito en TypeScript
- **Componentes**: Usar componentes funcionales con hooks
- **Estructura de archivos**: Agrupar por features (auth, projects, tasks, users)
- **Estilos**: Usar clases de Tailwind CSS en lugar de CSS puro

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Limpiar caché y reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Error de conexión con el backend

- Verifica que el servidor backend está en ejecución
- Comprueba que `NEXT_PUBLIC_API_URL` apunta a la URL correcta
- Abre la consola del navegador (F12) para ver errores detallados

### Puerto 3000 ya está en uso

```bash
# Usar un puerto diferente
pnpm dev -p 3002
```

## 📚 Documentación Adicional

- [ARCHITECTURE.md](ARCHITECTURE.md): Decisiones y arquitectura del proyecto
- [Next.js Documentation](https://nextjs.org/docs): Documentación oficial de Next.js
- [Redux Toolkit](https://redux-toolkit.js.org/): Guía de Redux Toolkit
- [Tailwind CSS](https://tailwindcss.com/): Documentación de Tailwind CSS

## 🤝 Contribuir

1. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
2. Realiza tus cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`)
3. Push a la rama (`git push origin feature/nueva-funcionalidad`)
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver LICENSE para más detalles.
