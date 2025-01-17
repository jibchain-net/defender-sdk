import { findKey } from 'lodash';

export type Network = SupportedNetwork | TenantNetwork;
export type SupportedNetwork = PublicNetwork | CustomNetwork;
export type PublicNetwork =
  | 'mainnet'
  | 'sepolia'
  | 'goerli'
  | 'xdai'
  | 'sokol'
  | 'fuse'
  | 'bsc'
  | 'bsctest'
  | 'fantom'
  | 'fantomtest'
  | 'moonbase'
  | 'moonriver'
  | 'moonbeam'
  | 'matic'
  | 'mumbai'
  | 'matic-zkevm'
  | 'matic-zkevm-testnet'
  | 'avalanche'
  | 'fuji'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'arbitrum-sepolia'
  | 'optimism'
  | 'optimism-goerli'
  | 'optimism-sepolia'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'zksync'
  | 'zksync-goerli'
  | 'zksync-sepolia'
  | 'base'
  | 'base-goerli'
  | 'base-sepolia'
  | 'linea-goerli'
  | 'linea'
  | 'mantle'
  | 'scroll'
  | 'scroll-sepolia'
  | 'meld'
  | 'meld-kanazawa';
export type CustomNetwork = 'x-dfk-avax-chain' | 'x-dfk-avax-chain-test' | 'x-security-alliance';
export type TenantNetwork = string;

export const Networks: Network[] = [
  'mainnet',
  'sepolia',
  'goerli',
  'xdai',
  'sokol',
  'fuse',
  'bsc',
  'bsctest',
  'fantom',
  'fantomtest',
  'moonbase',
  'moonriver',
  'moonbeam',
  'matic',
  'mumbai',
  'avalanche',
  'fuji',
  'arbitrum',
  'arbitrum-nova',
  'arbitrum-goerli',
  'arbitrum-sepolia',
  'optimism',
  'optimism-goerli',
  'optimism-sepolia',
  'celo',
  'alfajores',
  'harmony-s0',
  'harmony-test-s0',
  'aurora',
  'auroratest',
  'hedera',
  'hederatest',
  'zksync',
  'zksync-goerli',
  'zksync-sepolia',
  'base',
  'base-goerli',
  'base-sepolia',
  'linea-goerli',
  'linea',
  'x-dfk-avax-chain',
  'x-dfk-avax-chain-test',
  'x-security-alliance',
  'mantle',
  'scroll',
  'scroll-sepolia',
  'meld',
  'meld-kanazawa',
];

export function isValidNetwork(text: string): text is Network {
  return (Networks as string[]).includes(text);
}

export function fromChainId(chainId: number): Network | undefined {
  return findKey(chainIds, (number) => number === chainId) as Network | undefined;
}

export function toChainId(network: Network): number | undefined {
  return chainIds[network];
}

const chainIds: { [key in Network]: number } = {
  'mainnet': 1,
  'sepolia': 11155111,
  'goerli': 5,
  'xdai': 100,
  'sokol': 77,
  'fuse': 122,
  'bsc': 56,
  'bsctest': 97,
  'fantom': 250,
  'fantomtest': 0xfa2,
  'moonbase': 1287,
  'moonriver': 1285,
  'moonbeam': 1284,
  'matic': 137,
  'mumbai': 80001,
  'matic-zkevm': 1101,
  'matic-zkevm-testnet': 1442,
  'avalanche': 0xa86a,
  'fuji': 0xa869,
  'optimism': 10,
  'optimism-goerli': 420,
  'optimism-sepolia': 11155420,
  'arbitrum': 42161,
  'arbitrum-nova': 42170,
  'arbitrum-goerli': 421613,
  'arbitrum-sepolia': 421614,
  'celo': 42220,
  'alfajores': 44787,
  'harmony-s0': 1666600000,
  'harmony-test-s0': 1666700000,
  'aurora': 1313161554,
  'auroratest': 1313161555,
  'hedera': 295,
  'hederatest': 296,
  'zksync': 324,
  'zksync-goerli': 280,
  'zksync-sepolia': 300,
  'base': 8453,
  'base-goerli': 84531,
  'base-sepolia': 84532,
  'linea': 59144,
  'linea-goerli': 59140,
  'x-dfk-avax-chain': 53935,
  'x-dfk-avax-chain-test': 335,
  'x-security-alliance': 888,
  'mantle': 5000,
  'scroll': 534352,
  'scroll-sepolia': 534351,
  'meld': 0x13d92e8d,
  'meld-kanazawa': 0xd3b745e,
};
