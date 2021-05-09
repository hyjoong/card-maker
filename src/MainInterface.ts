export interface AuthProps {
  authService: any;
  FileInput?: any;
  cardRepository?: any;
  user?: any;
  onLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  goToMaker?: (userId: any) => void;
  onLogout?: (userId: any) => void;
}

export interface CardProps {
  FileInput: (props: object) => any;
  cards?: any;
  createOrUpdateCard: (card: Object) => void;
  deleteCard: (card: Object) => void;
}
