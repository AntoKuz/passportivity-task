'use client';

import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface RelativeTimeProps {
  date: string;
}

export default function RelativeTime({ date }: RelativeTimeProps) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatted = formatDistanceToNow(new Date(date), { addSuffix: true });
      setTimeAgo(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <span className="whitespace-nowrap">
      {timeAgo}
    </span>
  );
}

