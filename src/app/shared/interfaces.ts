export interface Data {
  data: [];
  meta: {
    columns: Column[]
    total: Total
  };
}
export interface Column {
  type: string;
  key: string;
  title: string;
  primary: boolean;
}
export interface Total {
  af_purchase: number;
  arpu: number;
  clicks: number;
  cpt: number;
  cr0: number;
  cr1: number;
  cr2: number;
  ctr: number;
  ecpi: number;
  ftd: number;
  ftd_unique: number;
  impressions: number;
  installs: number;
  register: number;
  register_unique: number;
  revenue: number;
  roas: number;
  spent: number;
}
