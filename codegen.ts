import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations", "typed-document-node"] },
    "react-apollo.ts": { plugins: [ {
      "typescript-react-apollo": {
        documentMode: "external",
        importOperationTypesFrom: "Operations",
        importDocumentNodeExternallyFrom: "./types"
      }
      }]}
  },
};

export default config;
