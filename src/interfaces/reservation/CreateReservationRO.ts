export interface Reservation {
    id: number,
    name: string,
    email: string,
}

export interface Event {
    id: number,
    title: string,
    start_at: string,
    end_at: string,
}

export interface Workshop {
    id: number,
    title: string,
    description: string,
    start_at: string,
    end_at: string
}

export interface CreateReservationRO {
    reservation: Reservation;
    event: Event;
    Workshop: Workshop;
}