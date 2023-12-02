import { ENDPOINTS } from 'src/constants/api';
import { Actions } from 'src/types';
import { actionCreatorAsyncWithHandler } from 'src/utils/factories';

export const user = {
  getUser: actionCreatorAsyncWithHandler<
    Actions.api.user.getUser.started,
    Actions.api.user.getUser.done
  >({
    url: ENDPOINTS.USER_GET_USER,
    method: 'GET',
    extra: {
      hideErrorNotification: true,
    },
  }),
  getServices: actionCreatorAsyncWithHandler<
    Actions.api.user.getServices.started,
    Actions.api.user.getServices.done
  >({
    url: ENDPOINTS.USER_GET_SERVICES,
    method: 'GET',
    extra: {},
  }),
  getTimeSlots: actionCreatorAsyncWithHandler<
    Actions.api.user.getTimeSlots.started,
    Actions.api.user.getTimeSlots.done
  >({
    url: ENDPOINTS.USER_GET_TIME_SLOTS,
    method: 'POST',
    extra: {},
  }),
  getPolicies: actionCreatorAsyncWithHandler<
    Actions.api.user.getPolicies.started,
    Actions.api.user.getPolicies.done
  >({
    url: ENDPOINTS.USER_GET_POLICY,
    method: 'GET',
    extra: {},
  }),
};

export const client = {
  phoneVerifyStart: actionCreatorAsyncWithHandler<
    Actions.api.client.phoneVerifyStart.started,
    Actions.api.client.phoneVerifyStart.done
  >({
    url: ENDPOINTS.CLIENT_PHONE_VERIFY_START,
    method: 'POST',
    extra: {},
  }),
  phoneVerifyEnd: actionCreatorAsyncWithHandler<
    Actions.api.client.phoneVerifyEnd.started,
    Actions.api.client.phoneVerifyEnd.done
  >({
    url: ENDPOINTS.CLIENT_PHONE_VERIFY_END,
    method: 'POST',
    extra: {},
  }),
};

export const files = {
  uploadImage: actionCreatorAsyncWithHandler<
    Actions.api.files.uploadImage.started,
    Actions.api.files.uploadImage.done
  >({
    url: ENDPOINTS.FILES_UPLOAD_IMAGE,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    extra: {},
  }),
  uploadDeposit: actionCreatorAsyncWithHandler<
    Actions.api.files.uploadDeposit.started,
    Actions.api.files.uploadDeposit.done
  >({
    url: ENDPOINTS.FILES_UPLOAD_DEPOSIT,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    extra: {},
  }),
};

export const appointments = {
  addAppointment: actionCreatorAsyncWithHandler<
    Actions.api.appointments.addAppointment.started,
    Actions.api.appointments.addAppointment.done
  >({
    url: ENDPOINTS.APPOINTMENTS_ADD_APPOINTMENT,
    method: 'POST',
    extra: {
      hideErrorNotification: true,
    },
  }),
};
