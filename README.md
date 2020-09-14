# GoSwap Interface

[![Tests](https://github.com/goswap/interface/workflows/Tests/badge.svg)](https://github.com/goswap/interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for GoSwap -- a protocol for decentralized exchange of GoChain tokens.

- [goswap.exchange](https://goswap.exchange/)
- [Docs](https://help.goswap.exchange/)
- [Twitter](https://twitter.com/goswapper)
- [Medium](https://medium.com/fast-finance)

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.
