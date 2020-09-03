import { Token, ChainId } from '@goswap/sdk'

export default [
  new Token(ChainId.GOCHAIN, '0xe8D71132Cd78146fbeD8c085f6c06CdeDF74E3Be', 18, 'ETH', 'Ether'),
  new Token(ChainId.GOCHAIN, '0x97a19aD887262d7Eca45515814cdeF75AcC4f713', 6, 'USDC', 'USDC'),
  new Token(ChainId.GOCHAIN, '0x9Bf1A20b764b586f2F886cfa6365938617cfdAfD', 8, 'WBTC', 'WBTC'),
  // new Token(ChainId.GOCHAIN, '0xA25AB62fe6dC7e5BE35DF80Da3DA43ADD0a0e4A3', 18, 'TURBO', 'TURBO'),
  new Token(ChainId.GOCHAIN, '0x67bBB47f6942486184f08a671155FCFA6cAd8d71', 18, 'FAST', 'Fast.Finance')
]
