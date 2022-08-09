# servile

## description

Ce programme gère l'nevoie et la réception de fichiers

## initialiser

Télécher et dézipper le dossier quelque part dans le projet

```typescript
// src/server.ts
import fileUpload from "express-fileupload";
app.use(fileUpload());
```

Dans le fichier index du controller ajouter
ce code dans la fonction initialiser

```typescript
import servile from "path-to-servile";

export const init = async (App: express.Express) => {
  const router = express.Router();
  await servile.init(router);
  /// ...
};
```

## middlewares

Ajouter dans tous les fichiers middlewares

```typescript
// skip if req start with servile
if (req.url.startsWith("/servile")) return next();
```

## types

Ajouter la ligne suivante dans le fichiers index.d.ts
dans le dossier types du projet

```typescript
// types/index.d.ts

import "path-to-servile/types";
```
