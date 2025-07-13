import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Importe la configuration Next.js recommandée
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),

  // Tu peux ajouter ici d'autres règles ou overrides si besoin
  {
    rules: {
      // Désactive la règle sur les caractères non échappés
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
