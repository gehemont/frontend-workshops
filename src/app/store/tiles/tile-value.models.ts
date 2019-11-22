export interface TotalBudgetData {
  startDate: Date;
  endDate: Date;
  amount: number;
  currency: string;
  totalConsumption: number;
}

export interface BudgetData {
  days: number;
  daysTotal: number;
  spend: number;
  spendTotal: number;
}
