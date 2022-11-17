import { Event } from "src/entity/event.entity";

export interface Pagination {
    total: number,
    per_page: number,
    total_pages: number,
    current_page: number
}

export interface ActiveEventsRO {
    events: Event[];
    pagination: Pagination;
}