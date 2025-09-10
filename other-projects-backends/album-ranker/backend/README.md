To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000



this kind of explains the logic of the folder naming

```
project-root/
├── src/
│   ├── routes/          # route definitions (like app/pages)
│   ├── controllers/     # request handlers (optional split from routes)
│   ├── services/        # business logic
│   ├── models/          # DB models (Prisma, Mongoose, etc.)
│   ├── schemas/         # request validation (zod, joi)
│   ├── middlewares/     # auth, logging, error handling
│   ├── utils/           # helpers
│   ├── types/           # TS types/interfaces
│   ├── config/          # env, constants
│   └── index.ts         # app entrypoint
├── prisma/              # prisma schema + migrations
├── package.json
└── tsconfig.json
```