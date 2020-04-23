import { helper as buildHelper } from '@ember/component/helper';

// A hash of cluster states to ensure that the status menu and replication dashboards
// display states and glyphs consistently

export const CLUSTER_STATES = {
  running: {
    glyph: 'check-circle-outline',
    isOk: true,
    isSyncing: false,
  },
  'stream-wals': {
    glyph: 'check-circle-outline',
    display: 'Streaming',
    isOk: true,
    isSyncing: false,
  },
  'merkle-diff': {
    glyph: 'android-sync',
    display: 'Determining sync status',
    isOk: true,
    isSyncing: true,
  },
  connecting: {
    glyph: 'android-sync',
    display: 'Streaming',
    isOk: true,
    isSyncing: true,
  },
  'merkle-sync': {
    glyph: 'android-sync',
    display: 'Syncing',
    isOk: true,
    isSyncing: true,
  },
  idle: {
    glyph: 'cancel-circle-fill',
    isOk: false,
    isSyncing: false,
  },
  transient_failure: {
    glyph: 'cancel-circle-fill',
    isOk: false,
    isSyncing: false,
  },
  shutdown: {
    glyph: 'cancel-circle-fill',
    isOk: false,
    isSyncing: false,
  },
};

export function clusterStates([state]) {
  return CLUSTER_STATES[state];
}

export default buildHelper(clusterStates);
