import React from 'react';

export interface originator {
  entity_id: string;
  entity_name: string;
  entity_type: string;
}
export interface statusAlarm {
  severity: string;
  active_or_cleared: string;
  acknowledged_or_unacknowledged: string;
}
export interface alarmInfo {
  id: string;
  ack_ts: number;
  acknowledged: boolean;
  active: boolean;
  clear_ts: number;
  details: any;
  end_ts: number;
  originator: originator;
  severity: string;
  start_ts: number;
  type: string;
}

export interface alarmcustomize {
  ack_ts: number;
  acknowledged: boolean;
  active: boolean;
  clear_ts: number;
  details: any;
  end_ts: number;
  key: React.Key;
  id: string;
  originator: originator;
  severity: string;
  start_ts: number;
  type: string;
}