import { Carriers } from "./constants";

export interface TicketData {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: Carriers;
  stops: number;
  price: number;
}

export interface MainTheme {
  colors: {
    accent: string;
    accentLight: string;
    accentDark: string;
    background: string;
    default: string;
    defaultLight: string;
    defaultUltraLight: string;
    main: string;
    mainLight: string;
    mainDark: string;
    white: string;
  }
}
