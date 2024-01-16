import { Params } from 'react-router-dom';

import { PAGES } from 'src/constants/pages';
import { Locales } from 'src/i18n';
import { MsgProps } from 'src/i18n/Msg';

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

export type GeoInfo = {
  ip?: number;
  city?: string;
  locale: Locales;
  region?: string;
  country?: string;
  version?: string;
  languages?: string;
};

export type FileLabel = 'now' | 'want' | 'deposit';

export type Attachments = {
  files?: { now?: string; want?: string };
  comment?: string;
};

export type Notification = {
  id: ID;
  type: 'SUCCESS' | 'ERROR';
  title: MsgProps;
  message: MsgProps;
  position: 'top' | 'bottom';
};

export type Message = 'successfully' | 'something was wrong' | undefined;

export type Image = {
  filename: string;
  height: number;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
  id: string;
  size: number;
  type: string;
  url: string;
  width: number;
};

export type Game = {
  id: string;
  createdTime: string;
  fields: {
    images: Image[];
    logo: Image[];
    pathToGame?: string;
    longDesc_kz: string;
    longDesc_ru: string;
    platforms: string;
    preview: Image[];
    shortDesc_kz: string;
    shortDesc_ru: string;
    title: string;
    views: number;
    url: string;
    view: 'mobile' | 'desc';
  };
};

export namespace Actions {
  export namespace api {
    export namespace games {
      export namespace getGames {
        export type started = {
          view: 'Grid view';
          maxRecords?: number;
          filterByFormula?: string;
          extra: {
            field: 'data' | 'currentGame';
          };
        };
        export type done = {
          records: Game[];
        };
      }
    }
  }

  export namespace ui {
    export namespace redirect {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      export type redirectWithoutParams = any;
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

    export namespace games {
      export type setCategories = string;
      export type setSearchWord = string;
    }
  }
}
