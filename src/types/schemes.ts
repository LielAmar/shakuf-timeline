import { Article } from "@/types/article";
import { Event } from "@/types/event";

export type NavbarItem = {
  name: string;
  link: string;
}

export type DetailsScheme = {
  page_name: string;
  
  page_title: string;
  cover_photo: string;
  logo_url: string;

  header: {
    start_text: string;
    rest_text: string;
  }

  navbar: NavbarItem[];
}

export type ContentScheme = {
  events: Event[],

  articles: Article[]
}