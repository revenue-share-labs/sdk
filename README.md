# RSC SDK

JavaScript SDK for RSC Contracts

## Packages

| Package                                  | Description                           |
| ---------------------------------------- | :------------------------------------ |
| [xla-sdk-core](/packages/xla-sdk-core)   | Core package for integrating with XLA |
| [xla-sdk-react](/packages/xla-sdk-react) | A wrapper of xla-sdk-core for React   |

## Example implementation

[Example](/packages/xla-sdk-react/src/implementation.example.tsx)

### Build the packages

From the root directory:

```bash
yarn install
yarn lerna-build
```

### Publish new changes

```bash
git commit -am "changes"
yarn publ
```
