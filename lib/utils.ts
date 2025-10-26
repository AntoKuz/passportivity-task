import { formatDistanceToNow, format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatCommitDate(dateString?: string): string {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return formatDistanceToNow(date, { 
    addSuffix: true, 
    locale: ru 
  });
}

export function formatCommitDateAbsolute(dateString?: string): string {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return format(date, 'dd.MM.yyyy HH:mm', { locale: ru });
}
