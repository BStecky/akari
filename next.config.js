const withTM = require("next-transpile-modules")([
  "@project-serum/sol-wallet-adapter",
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-wallets",
  "@solana/wallet-adapter-react-ui",
  "@solana/wallet-adapter-material-ui",
  "@solana/wallet-adapter-blocto",
  "@solana/wallet-adapter-bitpie",
  "@solana/wallet-adapter-bitkeep",
  "@solana/wallet-adapter-clover",
  "@solana/wallet-adapter-coinhub",
  "@solana/wallet-adapter-mathwallet",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-ledger",
  "@solana/wallet-adapter-coin98",
  "@solana/wallet-adapter-slope",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-safepal",
  "@solana/wallet-adapter-solong",
  "@solana/wallet-adapter-sollet",
  "@solana/wallet-adapter-torus"

]);

module.exports = withTM({
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: '@svgr/webpack',
        })
        config.resolve.fallback = {
            fs: false,
            os: false,
            path: false,
            crypto: false,

          }
        return config
    },
    env: {
      REACT_APP_CANDY_MACHINE_ID: process.env.REACT_APP_CANDY_MACHINE_ID,
      REACT_APP_SOLANA_NETWORK: process.env.REACT_APP_SOLANA_NETWORK,
      REACT_APP_SOLANA_RPC_HOST: process.env.REACT_APP_SOLANA_RPC_HOST
    }
})