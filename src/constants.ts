import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC = 56,
  BSC_TESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  HECO = 128,
  HECO_TESTNET = 256,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 421611,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  OKEX = 66,
  OKEX_TESTNET = 65,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  MOONBEAM = 1287,
  MOONRIVER = 1285,
  XDAI = 100,
  CELO = 42220,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x5ff2250d3f849930264d443f14a482794b12bd40ac16b457def9522f050665da',
  [ChainId.ROPSTEN]:            '0x9ee363bc4a7af5605ef17ba06c2f9447c61c22beacb5c4647efa122f3aefc8db',
  [ChainId.RINKEBY]:            '0x9ee363bc4a7af5605ef17ba06c2f9447c61c22beacb5c4647efa122f3aefc8db',
  [ChainId.GÖRLI]:              '0x5ff2250d3f849930264d443f14a482794b12bd40ac16b457def9522f050665da',
  [ChainId.KOVAN]:              '0x9ee363bc4a7af5605ef17ba06c2f9447c61c22beacb5c4647efa122f3aefc8db',
  [ChainId.BSC]:                '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.BSC_TESTNET]:        '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',  
  [ChainId.MATIC]:              '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.MATIC_TESTNET]:      '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.HARMONY]:            '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.HARMONY_TESTNET]:    '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.FANTOM]:             '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.FANTOM_TESTNET]:     '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.HECO]:               '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.HECO_TESTNET]:       '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.ARBITRUM]:           '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.ARBITRUM_TESTNET]:   '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.AVALANCHE]:          '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.AVALANCHE_TESTNET]:  '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.OKEX]:               '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.OKEX_TESTNET]:       '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.PALM]:               '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.PALM_TESTNET]:       '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.MOONBEAM]:           '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.MOONRIVER]:          '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.XDAI]:               '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428',
  [ChainId.CELO]:               '0x02a87956ec2f5e710fa13bbfe751d68112c843cdd501d3fcc9e744ade9c32428'
}

export const NFT_BID_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x0aB276b92a6E6d3EcC8D5888D1b15EffEa223923',
  [ChainId.ROPSTEN]:            '0x06C2De45973Df34DaB22AD0b767d2bE3eca5D178',
  [ChainId.RINKEBY]:            '0x06C2De45973Df34DaB22AD0b767d2bE3eca5D178',
  [ChainId.GÖRLI]:              '0x06C2De45973Df34DaB22AD0b767d2bE3eca5D178',
  [ChainId.KOVAN]:              '0x06C2De45973Df34DaB22AD0b767d2bE3eca5D178',
  [ChainId.BSC]:                '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.BSC_TESTNET]:        '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.MATIC]:              '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.MATIC_TESTNET]:      '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.HARMONY]:            '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.HARMONY_TESTNET]:    '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.FANTOM]:             '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.FANTOM_TESTNET]:     '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.HECO]:               '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.HECO_TESTNET]:       '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.ARBITRUM]:           '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.ARBITRUM_TESTNET]:   '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.AVALANCHE]:          '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.AVALANCHE_TESTNET]:  '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.OKEX]:               '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.OKEX_TESTNET]:       '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.PALM]:               '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.PALM_TESTNET]:       '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.MOONBEAM]:           '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.MOONRIVER]:          '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.XDAI]:               '0xC39b7CF51C1a657aA5141efA5021815DeFceA368',
  [ChainId.CELO]:               '0xC39b7CF51C1a657aA5141efA5021815DeFceA368'
}

export const SPONSOR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x74B6F6884FE98259aF4127ca9A5D580Da934E52b',
  [ChainId.ROPSTEN]:            '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.RINKEBY]:            '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.GÖRLI]:              '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.KOVAN]:              '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.BSC]:                '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.BSC_TESTNET]:        '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.MATIC]:              '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.MATIC_TESTNET]:      '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.HARMONY]:            '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.HARMONY_TESTNET]:    '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.FANTOM]:             '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.FANTOM_TESTNET]:     '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.HECO]:               '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.HECO_TESTNET]:       '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.ARBITRUM]:           '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.ARBITRUM_TESTNET]:   '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.AVALANCHE]:          '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.AVALANCHE_TESTNET]:  '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.OKEX]:               '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.OKEX_TESTNET]:       '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.PALM]:               '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.PALM_TESTNET]:       '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.MOONBEAM]:           '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.MOONRIVER]:          '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.XDAI]:               '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234',
  [ChainId.CELO]:               '0xB7196A981De991cdCAEe06Eb7c39c84B5277d234'
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0xEDc22C273ea25EeDA49F049e528150dBA367Da9A',
  [ChainId.ROPSTEN]:            '0x75f7b730c51610aba6f3d89deb4864f156c8e747',
  [ChainId.RINKEBY]:            '0x75f7b730c51610aba6f3d89deb4864f156c8e747',
  [ChainId.GÖRLI]:              '0x1BdB1555bDc425183ad56FcB31c06205726FEFB0',
  [ChainId.KOVAN]:              '0x75f7b730c51610aba6f3d89deb4864f156c8e747',
  [ChainId.BSC]:                '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.BSC_TESTNET]:        '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.MATIC]:              '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.MATIC_TESTNET]:      '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.HARMONY]:            '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.HARMONY_TESTNET]:    '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.FANTOM]:             '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.FANTOM_TESTNET]:     '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.HECO]:               '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.HECO_TESTNET]:       '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.ARBITRUM]:           '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.ARBITRUM_TESTNET]:   '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.AVALANCHE]:          '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.AVALANCHE_TESTNET]:  '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.OKEX]:               '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.OKEX_TESTNET]:       '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.PALM]:               '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.PALM_TESTNET]:       '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.MOONBEAM]:           '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.MOONRIVER]:          '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.XDAI]:               '0x67792044E3b220043A5a642705C0F7187aD3B319',
  [ChainId.CELO]:               '0x67792044E3b220043A5a642705C0F7187aD3B319'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0xc41FaBb87b6D35CC539bF9dA6c974ed2434A6DbC',
  [ChainId.RINKEBY]:            '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.ROPSTEN]:            '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.GÖRLI]:              '0xD5e8666620eaf809D32c5F2D739C49953FBd6e12',
  [ChainId.KOVAN]:              '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.BSC]:                '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.BSC_TESTNET]:        '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.MATIC]:              '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.MATIC_TESTNET]:      '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.HARMONY]:            '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.HARMONY_TESTNET]:    '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.FANTOM]:             '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.FANTOM_TESTNET]:     '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.HECO]:               '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.HECO_TESTNET]:       '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.ARBITRUM]:           '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.ARBITRUM_TESTNET]:   '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.AVALANCHE]:          '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.AVALANCHE_TESTNET]:  '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.OKEX]:               '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.OKEX_TESTNET]:       '0xAA469E8015c7b3fbb4124EC254BAc74470a527Cd',
  [ChainId.PALM]:               '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.PALM_TESTNET]:       '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.MOONBEAM]:           '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.MOONRIVER]:          '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.XDAI]:               '0x657db4e8c4258570cc7dd61031777901439e8079',
  [ChainId.CELO]:               '0x657db4e8c4258570cc7dd61031777901439e8079'
}

export const FESW_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.ROPSTEN]:            '0xcfcC81C508a8025879a27257cC0f699F9f2016AB',
  [ChainId.RINKEBY]:            '0xcfcC81C508a8025879a27257cC0f699F9f2016AB',
  [ChainId.GÖRLI]:              '0xcfcC81C508a8025879a27257cC0f699F9f2016AB',
  [ChainId.KOVAN]:              '0xcfcC81C508a8025879a27257cC0f699F9f2016AB',
  [ChainId.BSC]:                '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.BSC_TESTNET]:        '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.MATIC]:              '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.MATIC_TESTNET]:      '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.HARMONY]:            '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.HARMONY_TESTNET]:    '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.FANTOM]:             '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.FANTOM_TESTNET]:     '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.HECO]:               '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.HECO_TESTNET]:       '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.ARBITRUM]:           '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.ARBITRUM_TESTNET]:   '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.AVALANCHE]:          '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.AVALANCHE_TESTNET]:  '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.OKEX]:               '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.OKEX_TESTNET]:       '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.PALM]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.PALM_TESTNET]:       '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.MOONBEAM]:           '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.MOONRIVER]:          '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.XDAI]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.CELO]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe'
}

export const STAKE_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x9f35C6E6bb19A4cd7b1527CbCEB7d70be1021675',
  [ChainId.ROPSTEN]:            '0x940EA0910C2B71794e7Bc411ea6cf45091B1d1C4',
  [ChainId.RINKEBY]:            '0x940EA0910C2B71794e7Bc411ea6cf45091B1d1C4',
  [ChainId.GÖRLI]:              '0x940EA0910C2B71794e7Bc411ea6cf45091B1d1C4',
  [ChainId.KOVAN]:              '0x940EA0910C2B71794e7Bc411ea6cf45091B1d1C4',
  [ChainId.BSC]:                '',
  [ChainId.BSC_TESTNET]:        '0xD89EDB2B7bc5E80aBFD064403e1B8921004Cdb4b',
  [ChainId.MATIC]:              '',
  [ChainId.MATIC_TESTNET]:      '0x901B42607d93a042d772779BA5FFecbc9Df20024',
  [ChainId.HARMONY]:            '',
  [ChainId.HARMONY_TESTNET]:    '0x901B42607d93a042d772779BA5FFecbc9Df20024',
  [ChainId.FANTOM]:             '',
  [ChainId.FANTOM_TESTNET]:     '0x901B42607d93a042d772779BA5FFecbc9Df20024',
  [ChainId.HECO]:               '',
  [ChainId.HECO_TESTNET]:       '0xEAbC1f3d0D8b6C8788f080d66B353b6124Aa9AA5',
  [ChainId.ARBITRUM]:           '',
  [ChainId.ARBITRUM_TESTNET]:   '0xEAbC1f3d0D8b6C8788f080d66B353b6124Aa9AA5',
  [ChainId.AVALANCHE]:          '',
  [ChainId.AVALANCHE_TESTNET]:  '0xeabc1f3d0d8b6c8788f080d66b353b6124aa9aa5',
  [ChainId.OKEX]:               '',
  [ChainId.OKEX_TESTNET]:       '0xaB1211F1eb56B0AFC01E8a01537B0116Edcd8160',
  [ChainId.PALM]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.PALM_TESTNET]:       '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.MOONBEAM]:           '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.MOONRIVER]:          '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.XDAI]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe',
  [ChainId.CELO]:               '0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe'
}

/*
export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.RINKEBY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de'
//  [ChainId.FANTOM]: '',
//  [ChainId.FANTOM_TESTNET]: '',
//  [ChainId.MATIC]: '',
//  [ChainId.MATIC_TESTNET]: '',
//  [ChainId.XDAI]: '',
//  [ChainId.BSC]: '',
//  [ChainId.BSC_TESTNET]: '',
//  [ChainId.ARBITRUM]: '',
//  [ChainId.MOONBASE]: '',
//  [ChainId.AVALANCHE]: '',
//  [ChainId.FUJI]: '',
//  [ChainId.HECO]: '',
//  [ChainId.HECO_TESTNET]: '',
//  [ChainId.HARMONY]: '',
//  [ChainId.HARMONY_TESTNET]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GÖRLI]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.KOVAN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c'
//  [ChainId.FANTOM]: '',
//  [ChainId.FANTOM_TESTNET]: '',
//  [ChainId.MATIC]: '',
//  [ChainId.MATIC_TESTNET]: '',
//  [ChainId.XDAI]: '',
//  [ChainId.BSC]: '',
//  [ChainId.BSC_TESTNET]: '',
//  [ChainId.ARBITRUM]: '',
//  [ChainId.MOONBASE]: '',
//  [ChainId.AVALANCHE]: '',
//  [ChainId.FUJI]: '',
//  [ChainId.HECO]: '',
//  [ChainId.HECO_TESTNET]: '',
//  [ChainId.HARMONY]: '',
//  [ChainId.HARMONY_TESTNET]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GÖRLI]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KOVAN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa'
//  [ChainId.FANTOM]: '',
//  [ChainId.FANTOM_TESTNET]: '',
//  [ChainId.MATIC]: '',
//  [ChainId.MATIC_TESTNET]: '',
//  [ChainId.XDAI]: '',
//  [ChainId.BSC]: '',
//  [ChainId.BSC_TESTNET]: '',
//  [ChainId.ARBITRUM]: '',
//  [ChainId.MOONBASE]: '',
//  [ChainId.AVALANCHE]: '',
//  [ChainId.FUJI]: '',
//  [ChainId.HECO]: '',
//  [ChainId.HECO_TESTNET]: '',
//  [ChainId.HARMONY]: '',
//  [ChainId.HARMONY_TESTNET]: ''
}
*/

export const GOVERNANCE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.ROPSTEN]:            '0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6',
  [ChainId.RINKEBY]:            '0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6',
  [ChainId.GÖRLI]:              '0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6',
  [ChainId.KOVAN]:              '0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6',
  [ChainId.BSC]:                '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.BSC_TESTNET]:        '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.MATIC]:              '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.MATIC_TESTNET]:      '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.HARMONY]:            '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.HARMONY_TESTNET]:    '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.FANTOM]:             '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.FANTOM_TESTNET]:     '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.HECO]:               '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.HECO_TESTNET]:       '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.ARBITRUM]:           '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.ARBITRUM_TESTNET]:   '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.AVALANCHE]:          '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.AVALANCHE_TESTNET]:  '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.OKEX]:               '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.OKEX_TESTNET]:       '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.PALM]:               '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.PALM_TESTNET]:       '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.MOONBEAM]:           '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.MOONRIVER]:          '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.XDAI]:               '0x77F98c147a37564c32E48054Bff7692A1F97f343',
  [ChainId.CELO]:               '0x77F98c147a37564c32E48054Bff7692A1F97f343'
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:            '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.ROPSTEN]:            '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.RINKEBY]:            '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.GÖRLI]:              '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.KOVAN]:              '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.BSC]:                '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.BSC_TESTNET]:        '0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB',
  [ChainId.MATIC]:              '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.MATIC_TESTNET]:      '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.HARMONY]:            '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.HARMONY_TESTNET]:    '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.FANTOM]:             '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.FANTOM_TESTNET]:     '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.HECO]:               '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.HECO_TESTNET]:       '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.ARBITRUM]:           '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.ARBITRUM_TESTNET]:   '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.AVALANCHE]:          '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.AVALANCHE_TESTNET]:  '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.OKEX]:               '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.OKEX_TESTNET]:       '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.PALM]:               '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.PALM_TESTNET]:       '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.MOONBEAM]:           '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.MOONRIVER]:          '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.XDAI]:               '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1',
  [ChainId.CELO]:               '0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
