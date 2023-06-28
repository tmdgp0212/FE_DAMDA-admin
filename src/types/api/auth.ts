export interface UserRes {
  data: UserData;
  status: number;
}

export interface UserData {
  id: number;
  adress: string | null;
  gender: 'femele' | 'mele';
  phoneNumber: string;
  profileImage: string;
  role: 'USER' | 'ADMIN';
  username: string;
}
