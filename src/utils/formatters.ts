/**
 * Formats a number into Indonesian Rupiah (IDR) currency format.
 * Example: 15000000 -> "Rp 15.000.000"
 */
export function formatIDR(amount: number): string {
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(absAmount);

  return isNegative ? `-${formatted}` : formatted;
}

/**
 * Formats a decimal or percentage into clean percentage string.
 * Example: 0.978 or 97.8 -> "97.8%"
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

/**
 * Formats a compact currency in millions for clean chart labels.
 * Example: 45000000 -> "45M" or "Rp 45 Jt"
 */
export function formatIDRCompact(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';
  if (abs >= 1_000_000_000) {
    return `${sign}Rp ${(abs / 1_000_000_000).toFixed(2)} M`;
  }
  if (abs >= 1_000_000) {
    return `${sign}Rp ${(abs / 1_000_000).toFixed(1)} Jt`;
  }
  return formatIDR(amount);
}
