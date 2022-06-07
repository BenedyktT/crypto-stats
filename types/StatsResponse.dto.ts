export interface Config {
  allowedMaxPayout: number;
  allowedMinPayout: number;
  defaultMinPayout: number;
  ipHint: string;
  ipWorkerName: string;
  minPayout: number;
  paymentHubHint: string;
}

export interface Payment {
  amount: number;
  timestamp: number;
  tx: string;
  txFee: number;
}

export interface Reward {
  blockheight: number;
  timestamp: number;
  reward: number;
  percent: number;
  immature: boolean;
  orphan: boolean;
  uncle: boolean;
}

export interface Stat {
  balance: number;
  immature: number;
  lastShare: number;
  paid: number;
  pending: number;
}

export interface Sumreward {
  inverval: number;
  reward: number;
  numreward: number;
  name: string;
  offset: number;
}

export interface Rig_5163302 {
  lastBeat: number;
  hr: number;
  offline: boolean;
  hr2: number;
  rhr: number;
  sharesValid: number;
  sharesInvalid: number;
  sharesStale: number;
}

export interface Rig_5338674 {
  lastBeat: number;
  hr: number;
  offline: boolean;
  hr2: number;
  rhr: number;
  sharesValid: number;
  sharesInvalid: number;
  sharesStale: number;
}

export interface Worker {
  rig_5163302: Rig_5163302;
  rig_5338674: Rig_5338674;
}

export interface StatsResponseDto {
  '24hnumreward': number;
  '24hreward': number;
  apiVersion: number;
  config: Config;
  currentHashrate: number;
  currentLuck: string;
  hashrate: number;
  pageSize: number;
  payments: Payment[];
  paymentsTotal: number;
  rewards: Reward[];
  roundShares: number;
  sharesInvalid: number;
  sharesStale: number;
  sharesValid: number;
  stats: Stat;
  sumrewards: Sumreward[];
  updatedAt: number;
  workers: Worker;
  workersOffline: number;
  workersOnline: number;
  workersTotal: number;
}
