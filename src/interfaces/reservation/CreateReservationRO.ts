export interface ReservationRO {
  id: number;
  name: string;
  email: string;
}

export interface EventRO {
  id: number;
  title: string;
  start_at: Date;
  end_at: Date;
}

export interface WorkshopRO {
  id: number;
  title: string;
  description: string;
  start_at: Date;
  end_at: Date;
}

export interface CreateReservationRO {
  reservation: ReservationRO;
  event: EventRO;
  workshop: WorkshopRO;
}
