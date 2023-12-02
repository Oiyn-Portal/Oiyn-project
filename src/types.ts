import { Params } from 'react-router-dom';

import { PAGES } from 'src/constants/pages';
import { DictionaryKey, Locales } from 'src/i18n';
import { Currency, MsgProps } from 'src/i18n/Msg';

export type ID = string;
export type Date = string;
export type Time = string;
export type Email = string;
export type DateTime = number;
export type TimeFormat = 'am/pm' | '24-hours';

export type IconBaseProps = {
  fill?: string;
  size?: number;
};

export type Scheme = {
  scheme: PAGES;
  params?: Params;
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

export interface MeetingPlaceLocation {
  address: string;
  comments?: string;
  attachments: string[];
  location: Coordinates;
}

export type valueof<T> = T[keyof T];

export type PromoSlots = {
  id: ID;
  time: Time;
  date: Date;
  isBusy: boolean;
};

export type Workday = {
  _id: ID;
  index: number;
  isWorkday: boolean;
  defaultSlots: Time[];
  additionalSlots: Record<Date, Time[]>;
  promoSlots: PromoSlots[];
};

export type Channel = {
  href?: string;
  image: string;
  variant: string;
  message: MsgProps;
};

export type Weekday = {
  index: number;
  day: DictionaryKey;
};

export type Client = {
  _id: ID;
  userId: ID;
  startDate: string;
  name: string;
  phone: string;
  subscribed: boolean;
};

export type Booking = {
  time?: Time;
  cost?: number;
  date?: string;
  isPromo?: boolean;
  services?: Service[];
  attachments?: Attachments;
  clientDeposit?: ClientDeposit;
};

export type User = {
  userId: ID;
  phone: string;
  name: string;
  avatar?: string;
  workdays: Workday[];
  timeFormat: TimeFormat;
  onlinePage: UserSettings[];
  instagramProfile?: string;
  currency: Currency;
  depositConfigs: DepositConfigs;
  workAddress?: string;
  isIntercom?: boolean;
  meetingPlaceLocation?: MeetingPlaceLocation;
};

export type DepositConfigs = {
  isRequired: boolean;
  isFixed: boolean;
  sum: number;
  policy?: string;
  transferDetails?: string;
};

export type ClientDeposit = {
  isFixed: boolean;
  sum: number;
  currency: Currency;
  file: DepositFile;
};

export type UserSettings = {
  _id: ID;
  orderUID: string;
  facebook?: string;
  iMessage?: string;
  phoneNumber?: string;
  allowedBooking: boolean;
  whatsAppNumber?: string;
  preferredChannels?: string[];
  allowedTimeToBooking?: number;
};

export type ServiceCategory = {
  _id: ID;
  userId: ID;
  title: string;
};

export type Service = {
  _id: ID;
  cost: number;
  title: string;
  userId: ID;
  image?: string;
  duration: number;
  description?: string;
  allowedBooking: boolean;
  category: ServiceCategory;
};

export type ServiceList = {
  id: ID;
  category: ServiceCategory;
  list?: Service[];
};

export type ServiceData = {
  id: ID;
  title: ServiceCategory['title'];
  data: ServiceList[];
};

export type FileLabel = 'now' | 'want' | 'deposit';

export type DepositFile = {
  uri: string;
  filename: string;
  extension: string;
};

export type Attachments = {
  files?: { now?: string; want?: string; deposit?: DepositFile };
  comment?: string;
};

export type Policy = {
  _id: ID;
  title: string;
  userId: ID;
  description: string;
};

export type Appointment = {
  _id: ID;
  cost: number;
  date: string;
  userId: ID;
  time: Time;
  client: Client;
  services: string[];
  attachments: Attachments;
  clientDeposit: ClientDeposit;
  status: 'new' | 'confirmed';
};

export type Notification = {
  id: ID;
  type: 'SUCCESS' | 'ERROR';
  title: MsgProps;
  message: MsgProps;
  position: 'top' | 'bottom';
};

export type Message = 'successfully' | 'something was wrong' | undefined;

export type GeoInfo = {
  ip?: number;
  city?: string;
  locale: Locales;
  region?: string;
  country?: string;
  version?: string;
  languages?: string;
};

export namespace Actions {
  export namespace api {
    export namespace user {
      export namespace getUser {
        export type started = {
          extra: {
            orderUID: UserSettings['orderUID'];
          };
          isIntercom: boolean;
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: User;
        };
      }
      export namespace getServices {
        export type started = {
          extra: {
            id: Service['userId'];
          };
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: Service[];
        };
      }
      export namespace getTimeSlots {
        export type started = {
          date: string;
          userId: User['userId'];
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: Time[];
        };
      }
      export namespace getPolicies {
        export type started = {
          extra: {
            id: Policy['userId'];
          };
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: Policy[];
        };
      }
    }
    export namespace client {
      export namespace phoneVerifyStart {
        export type started = {
          phone: string;
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
        };
      }
      export namespace phoneVerifyEnd {
        export type started = {
          name: string;
          code: string;
          phone: string;
          subscribed: boolean;
          userId: User['userId'];
          extra: {
            orderUID: ID;
            isRedirect?: boolean;
          };
        };
        export type done = {
          data: Client;
          message: 'successfully' | 'something was wrong';
        };
      }
    }
    export namespace files {
      export namespace uploadImage {
        export type started = {
          file?: File;
          currentLabel: string;
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          image: string;
        };
      }

      export namespace uploadDeposit {
        export type started = {
          file?: File;
          currentLabel: string;
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          file: string;
        };
      }
    }
    export namespace appointments {
      export namespace addAppointment {
        export type started = {
          _id: Appointment['_id'];
          userId: Appointment['userId'];
          clientId: Client['_id'];
          date?: Appointment['date'];
          cost?: Appointment['cost'];
          services?: Service['_id'][];
          time?: Appointment['time'];
          status: Appointment['status'];
          attachments?: Appointment['attachments'];
          clientDeposit?: Appointment['clientDeposit'];
          extra: {
            isRedirect: boolean;
            orderUID: ID;
          };
        };
        export type done = {
          message: 'successfully' | 'something was wrong';
          data: Appointment;
        };
      }
    }
  }

  export namespace ui {
    export namespace redirect {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      export type redirectWithoutParams = any;
    }

    export namespace booking {
      export type clearBooking = void;
      export type createBooking = {
        clientId: Client['_id'];
        userId: User['userId'];
        orderUID: ID;
      };
      export type setServices = {
        services?: Service[];
        cost: Booking['cost'];
      };
      export type setAttachments = {
        attachments?: Attachments;
      };
      export type setClientDeposit = {
        clientDeposit?: ClientDeposit;
      };
      export type setTimeDate = {
        time: Time;
        date: string;
        isPromo: boolean;
      };
    }
    export namespace files {
      export type removeImage = {
        currentLabel: FileLabel;
      };
    }

    export namespace messages {
      export type resetMessages = void;
    }

    export namespace notifications {
      export type AddNotification = Notification;
      export type DeleteNotification = {
        id: ID;
      };
    }

    export namespace geoInfo {
      export type set = {
        info: GeoInfo;
      };
    }

    export namespace client {
      export type updateContact = {
        name: string;
        phone: string;
      };
    }

    export namespace gtm {
      export type event =
        | {
            name: 'profile_new_booking';
            data: { new_booking: 'new_booking' };
          }
        | {
            name: 'booking_step_service_selected';
            data: { service: 'selected' };
          }
        | {
            name: 'booking_step_photo_attached';
            data: { photo: 'attached' };
          }
        | {
            name: 'booking_step_contact_with_technician';
            data: { contact_with_technician: 'contact_with_technician' };
          }
        | {
            name: 'booking_step_next_step_button';
            data: { next_step_button: 'next_step_button' };
          }
        | {
            name: 'datatime_step_timeslot_selected';
            data: { timeslot: 'selected' };
          }
        | {
            name: 'datatime_step_next_step_button';
            data: { next_step_button: 'next_step_button' };
          }
        | {
            name: 'policy_step_next_step_button';
            data: { next_step_button: 'next_step_button' };
          }
        | {
            name: 'form_step_mobile_number_confirmation_confirmed';
            data: { mobile_number_confirmation: 'confirmed'; userID: string };
          }
        | {
            name: 'userId';
            data: { value: string };
          }
        | {
            name: 'confirmation_step_contact_with_technician';
            data: { contact_with_technician: 'contact_with_technician' };
          }
        | {
            name: 'confirmation_step_complete_button';
            data: { complete_button: 'complete_button' };
          };
    }

    export namespace loader {
      export type show = void;
      export type hide = void;
    }

    export namespace modal {
      export type show<T> = T;
      export type hide = void;
    }
  }
}
