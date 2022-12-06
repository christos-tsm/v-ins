import React from "react";

export interface PropsChildren {
    children: React.ReactNode
}

export interface IPageHero {
    header?: string,
    subheader?: string,
    paragraph?: string,
    cta?: string
}

export interface IHotel {
    id?: number | string,
    title: string;
    ratings: number;
    kmFromCityCenter: number;
    averageDayPrice: number;
    featuredImageURL: string;
    hotelURL: string;
}

export interface IRestaurant {
    id?: number | string,
    title: string;
    ratings: number;
    address: string;
    featuredImageURL: string;
    restaurantURL: string;
}

export interface IEvent {
    id?: number | string,
    title: string;
    eventDate: string;
    location: string;
    featuredImageURL: string;
    eventPageURL: string;
    isMoreThanOneDay?: boolean;
}

export interface IPost {
    id?: number | string;
    title: string;
    content: string;
    postURL: string;
    created_at?: string;
    featuredImageURL: string;
}