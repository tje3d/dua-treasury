export interface DuaLine {
  arabic: string;
  translation: string;
}

export interface DuaMetadata {
  id: string;
  title: string;
  arabicTitle: string;
  description: string; // Short description for the card
  fullDescription: string; // Long explanation (Riwayat/History)
  audioUrl: string; // URL to the audio file
  content: DuaLine[];
}

export enum ViewState {
  LIST = 'LIST',
  DETAIL = 'DETAIL',
}