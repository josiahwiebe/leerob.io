import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Gumroad() {
  const { data } = useSWR('/api/gumroad', fetcher);

  const sales = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.sales);
  const link = 'https://gumroad.com/leerob';

  return (
    <MetricCard
      header="Gumroad Sales"
      link={link}
      metric={sales && `${sales}`}
    />
  );
}
