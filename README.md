package.json =

{
    "name": "typescript-project-with-unit-test",
    "version": "1.0.0",
    "scripts": {
        "test": "vitest"
    },
    "devDependencies": {
        "typescript": "^5.9.3",
        "vitest": "^1.6.1"
    }
}

tsconfig.json =

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "types": ["vitest"]
  },
  "include": ["src", "test"]
}


run = ts-node merge.ts

run test=  "npm test"  