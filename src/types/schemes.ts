import { Article } from "@/types/article";
import { Event } from "@/types/event";

export type DetailsScheme = {
  page_name: string;
  
  page_title: string;
  cover_photo: string;
  logo_url: string;

  header: {
    text: string;
  }

  footer: {
    text: string;
  }
}

export type ContentScheme = {
  events: Event[],

  articles: Article[]
}

export type StatisticsScheme = {

}