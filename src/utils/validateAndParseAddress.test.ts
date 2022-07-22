import { validateAndParseAddress } from './validateAndParseAddress'

describe('#validateAndParseAddress', () => {
  it('returns same address if already checksummed', () => {
    expect(validateAndParseAddress('0xCE5eE266566D65Bb08D306387dA1DaAB4B49358f')).toEqual(
      '0xCE5eE266566D65Bb08D306387dA1DaAB4B49358f'
    )
  })

  it('returns checksummed address if not checksummed', () => {
    expect(validateAndParseAddress('0xCE5eE266566D65Bb08D306387dA1DaAB4B49358f'.toLowerCase())).toEqual(
      '0xCE5eE266566D65Bb08D306387dA1DaAB4B49358f'
    )
  })

  it('throws if not valid', () => {
    expect(() => validateAndParseAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6')).toThrow(
      '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6 is not a valid address.'
    )
  })
})
