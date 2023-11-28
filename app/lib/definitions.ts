export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
}

export type Kitty = {
  id: string;
  creator_id: string;
  creation_date: string;
  ending_date: string;
  closed: boolean;
  
  title: string;
  description: string;
  picture_url: string;
  contain_gifts: boolean;
  sharing_link: string;

  current_amount: number;
  display_amount: boolean;
}

export type Kitty_Participants = {
  kitty_id : string;
  user_id : string;
}

export type Kitty_History = {
  kitty_id : string;
  date: string;
  user_id : string;
  action: 'creation' | 
          'closure' | 
          'participation' | 
          'gift_adding' | 
          'gift_removing' | 
          'gift_voting' | 
          'gift_commenting' |
          'gift_buying';
  amount: number;
}

export type Kitty_Gift = {
  title: string;
  bought : boolean;
}