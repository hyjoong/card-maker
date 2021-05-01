export interface AuthProps {
  authService: any;
  onLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  goToMaker?: (userId: any) => void;
  onLogout?: (userId: any) => void;
}

export interface HeaderProps {
  onLogout?: () => void;
}
