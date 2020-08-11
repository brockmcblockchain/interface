import { Currency, ETHER, Token } from '@goswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'GO'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
