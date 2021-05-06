export interface AuthProps {
  authService: any;
  user?: any;
  onLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  goToMaker?: (userId: any) => void;
  onLogout?: (userId: any) => void;
}

export interface CardProps {
  cards?: any;
  addCard: (card: any) => void;
}
