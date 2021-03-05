import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function YouTube() {
  const { data } = useSWR('/api/youtube', fetcher);

  const subscriberCount = new Intl.NumberFormat().format(data?.subscriberCount);
  const viewCount = new Intl.NumberFormat().format(data?.viewCount);
  const link = 'https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
      />
      <MetricCard header="YouTube Views" link={link} metric={viewCount} />
    </div>
  );
}
