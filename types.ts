export interface PrayerVerse {
  id: string;
  arabic: string;
  translation: string;
}

export interface PrayerInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: string;
  benefits: string;
  audio?: string;
  versesCount: number;
}

export interface Prayer extends Omit<PrayerInfo, 'versesCount'> {
  verses: PrayerVerse[];
}
