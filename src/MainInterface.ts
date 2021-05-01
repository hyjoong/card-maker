export interface AuthProps {
  authService: any;
  onLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface HeaderProps {
  onLogout?: () => void;
}
