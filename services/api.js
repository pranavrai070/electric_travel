import React, { useState } from 'react';
import axios from 'axios';

import { encryptData, decryptData } from '../utils/crypto.js';

const serverURL = process.env.EXPO_PUBLIC_GATEWAY_URL;
const API = axios.create({ baseURL: serverURL });

API.interceptors.request.use(
  (req) => {
    if (req.data) {
      const encryptedData = encryptData(req.data);

      req.data = { data: encryptedData };
    }
    // console.log('getting request in API request inct', req.data);

    let user=false;
    console.log("getting user from window",JSON.parse(sessionStorage.getItem('user')))
    if (JSON.parse(sessionStorage.getItem('user'))) {
      // const { user_info } = JSON.parse(sessionStorage.getItem('user'));
      user = true;
  }

  if(user){
    const parsingEncrpytedData = JSON.parse(sessionStorage.getItem('user'));
    const user_data = decryptData(parsingEncrpytedData);
    console.log("getting user data login after decryptrin",user_data);
    const loginId=user_data.
    logInId
    ;
    const token=user_data.in_token;

    req.headers.authorization = `Bearer ${loginId} ${token}`;
  }
    console.log('getting encrypted request', req.data);
    return req;
  },
  (error) => {
    // Handle request error
    console.log('getting error in sending request', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  (res) => {
    console.log('getting response in API response inct', res.data);

    const decryptedData = decryptData(res.data);
    res.data = decryptedData;
    console.log('getting data decrypted in api inct', res.data);
    return res;
  },
  (error) => {
    // Handle response error
    console.log('getting error in universal enigma', error);
    const decryptedError = decryptData(error.response.data);
    return Promise.reject(decryptedError);
  }
);

// export const isSessionExpiredIdentifier = isSessionExpired;

//LOG-IN & SIGN-IN & Security
export const signIn = (formData) => API.post('/login/user_login/validate', formData);
export const listUserGroup = (formData) => API.post('/login/user_group/list', formData);
export const getUserGroup = (formData) => API.post('/login/user_group/get', formData);
export const createUserGroup = (formData) => API.post('/login/user_group/create', formData);
export const updateUserGroup = (formData) => API.post('/login/user_group/update', formData);

export const getUserGroupSecurity = (formData) => API.post('/login/user_group_security/get', formData);

//country
export const countryGet = (data) => API.post('/config/country/get', data);
export const countryCreate = (data) => API.post('/config/country/create', data);
export const countryList = () => API.post('/config/country/list');
export const countryDelete = (data) => API.post('config/country/delete', data);
export const countryUpdate = (data) => API.post('config/country/update', data);

//state
export const stateGet = (data) => API.post('config/state/get', data);
export const stateList = (data) => API.post('/config/state/list', data);
export const stateCreate = (data) => API.post('/config/state/create', data);
export const stateDelete = (data) => API.post('/config/state/delete', data);
export const stateUpdate = (data) => API.post('/config/state/update', data);

//CITY
export const cityList = (data) => API.post('/config/city/list', data);
export const cityCreate = (data) => API.post('/config/city/create', data);
export const cityDelete = (data) => API.post('/config/city/delete', data);
export const cityGet = (data) => API.post('/config/city/get', data);
export const cityUpdate = (data) => API.post('/config/city/update', data);

export const businessHouseTypeGet = (data) => API.post('/config/bh_type/get', data);
export const businessHouseTypeCreate = (data) => API.post('/config/bh_type/create', data);
export const businessHouseTypeList = () => API.post('/config/bh_type/list');
export const businessHouseTypeDelete = (data) => API.post('config/bh_type/delete', data);
export const businessHouseTypeUpdate = (data) => API.post('config/bh_type/update', data);

//payemnt Mode
export const paymentModeListAPI = (data) => API.post('/config/payment_mode/list', data);
export const paymentModeGetAPI = (data) => API.post('/config/payment_mode/get', data);

//SpeedType
export const vehicleSpeedTypeList = (data) => API.post('/config/vehicle_speed_type/list', data);
export const vehicleSpeedTypeGet = (data) => API.post('/config/vehicle_speed_type/get', data);

export const companyGet = (data) => API.post('/config/company/get', data);
export const companyCreate = (data) => API.post('/config/company/create', data);
export const companyList = () => API.post('/config/company/list');
export const companyDelete = (data) => API.post('config/company/delete', data);
export const companyUpdate = (data) => API.post('config/company/update', data);

export const idProofTypeGet = (data) => API.post('/config/id_proof_type/get', data);
export const idProofTypeCreate = (data) => API.post('/config/id_proof_type/create', data);
export const idProofTypeList = () => API.post('/config/id_proof_type/list');
export const idProofTypeDelete = (data) => API.post('config/id_proof_type/delete', data);
export const idProofTypeUpdate = (data) => API.post('config/id_proof_type/update', data);

export const configGet = (data) => API.post('/config/ev_config/get', data);
export const configCreate = (data) => API.post('/config/ev_config/create', data);
export const configList = () => API.post('/config/config/ev_list');
export const configDelete = (data) => API.post('config/ev_config/delete', data);
export const configUpdate = (data) => API.post('config/ev_config/update', data);

export const notificationClassificationGet = (data) => API.post('/config/notification_classification/get', data);
export const notificationClassificationCreate = (data) => API.post('/config/notification_classification/create', data);
export const notificationClassificationList = () => API.post('/config/notification_classification/list');
export const notificationClassificationDelete = (data) => API.post('config/notification_classification/delete', data);
export const notificationClassificationUpdate = (data) => API.post('config/notification_classification/update', data);

export const notificationStatusGet = (data) => API.post('/config/notification_status/get', data);
export const notificationStatusCreate = (data) => API.post('/config/notification_status/create', data);
export const notificationStatusList = () => API.post('/config/notification_status/list');
export const notificationStatusDelete = (data) => API.post('config/notification_status/delete', data);
export const notificationStatusUpdate = (data) => API.post('config/notification_status/update', data);

export const notificationTypeGet = (data) => API.post('/config/notification_type/get', data);
export const notificationTypeCreate = (data) => API.post('/config/notification_type/create', data);
export const notificationTypeList = () => API.post('/config/notification_type/list');
export const notificationTypeDelete = (data) => API.post('config/notification_type/delete', data);
export const notificationTypeUpdate = (data) => API.post('config/notification_type/update', data);

export const rentalPlanTypeGet = (data) => API.post('/config/rental_plan_type/get', data);
export const rentalPlanTypeCreate = (data) => API.post('/config/rental_plan_type/create', data);
export const rentalPlanTypeList = () => API.post('/config/rental_plan_type/list');
export const rentalPlanTypeDelete = (data) => API.post('config/rental_plan_type/delete', data);
export const rentalPlanTypeUpdate = (data) => API.post('config/rental_plan_type/update', data);

export const securityOptionGet = (data) => API.post('/config/security_option/get', data);
export const securityOptionCreate = (data) => API.post('/config/security_option/create', data);
export const securityOptionList = () => API.post('/config/security_option/list');
export const securityOptionDelete = (data) => API.post('config/security_option/delete', data);
export const securityOptionUpdate = (data) => API.post('config/security_option/update', data);

export const servicePriorityGet = (data) => API.post('/config/service_priority/get', data);
export const servicePriorityCreate = (data) => API.post('/config/service_priority/create', data);
export const servicePriorityList = () => API.post('/config/service_priority/list');
export const servicePriorityDelete = (data) => API.post('config/service_priority/delete', data);
export const servicePriorityUpdate = (data) => API.post('config/service_priority/update', data);

//Owner type list
export const ownerTypeList = (data) => API.post('config/owner_type/list', data);
export const ownerTypeGet = (data) => API.post('config/owner_type/get', data);

export const vehicleOemGet = (data) => API.post('/config/vehicle_oem/get', data);
export const vehicleOemCreate = (data) => API.post('/config/vehicle_oem/create', data);
export const vehicleOemList = () => API.post('/config/vehicle_oem/list');
export const vehicleOemDelete = (data) => API.post('config/vehicle_oem/delete', data);
export const vehicleOemUpdate = (data) => API.post('config/vehicle_oem/update', data);


//Business House
export const businessHouseList = (data) => API.post('/business_house/bh/list', data);
export const businessHouseCreate = (data) => API.post('/business_house/bh/create', data);
export const businessHouseDelete = (data) => API.post('/business_house/bh/delete', data);
export const businessHouseGet = (data) => API.post('/business_house/bh/get', data);
export const businessHouseUpdate = (data) => API.post('/business_house/bh/update', data);

//Business Hosue Riders
export const bhRidersList = () => API.post('/business_house/bh_riders/list', data);
export const bhRidersGet = (data) => API.post('/business_house/bh_riders/get', data);
export const bhRidersCreate = (data) => API.post('/business_house/bh_riders/create', data);
export const bhRidersUpdate = (data) => API.post('/business_house/bh_riders/update', data);
export const bhRidersDelete = (data) => API.post('/business_house/bh_riders/delete', data);

//Business Hosue User
export const bhUsersList = () => API.post('/business_house/bh_users/list', data);
export const bhUsersGet = (data) => API.post('/business_house/bh_users/get', data);
export const bhUsersCreate = (data) => API.post('/business_house/bh_users/create', data);
export const bhUsersUpdate = (data) => API.post('/business_house/bh_users/update', data);
export const bhUsersDelete = (data) => API.post('/business_house/bh_users/delete', data);

//Business Hosue Vehicle
export const bhVehicleList = (data) => API.post('/business_house/bh_vehicle/list', data);
export const bhVehicleGet = (data) => API.post('/business_house/bh_vehicle/get', data);
export const bhVehicleCreate = (data) => API.post('/business_house/bh_vehicle/create', data);
export const bhVehicleUpdate = (data) => API.post('/business_house/bh_vehicle/update', data);
export const bhVehicleDelete = (data) => API.post('/business_house/bh_vehicle/delete', data);

//vehicle status list
export const vehicleStatusList = (data) => API.post('/config/vehicle_status/list', data);
export const vehicleStatusGet = (data) => API.post('/config/vehicle_status/get', data);

//Vehicle Details
export const vehicleDetailsGet = (data) => API.post('/inventory/vehicleDetails/get', data);
export const vehicleDetailsCreate = (data) => API.post('/inventory/vehicleDetails/create', data);
export const vehicleDetailsUpdate = (data) => API.post('/inventory/vehicleDetails/update', data);
export const vehicleDetailsDelete = (data) => API.post('/inventory/vehicleDetails/delete', data);
export const vehicleDetailsList = (data) => API.post('/inventory/vehicleDetails/list', data);


//Vehicle Rental Plans
export const vehicleRentalPlansGet = (data) => API.post('/inventory/vehicleRentalPlans/get', data);
export const vehicleRentalPlansCreate = (data) => API.post('/inventory/vehicleRentalPlans/create', data);
export const vehicleRentalPlansUpdate = (data) => API.post('/inventory/vehicleRentalPlans/update', data);
export const vehicleRentalPlansDelete = (data) => API.post('/inventory/vehicleRentalPlans/delete', data);
export const vehicleRentalPlansList = (data) => API.post('/inventory/vehicleRentalPlans/list', data);


//Vehicle Type
export const vehicleTypeGet = (data) => API.post('/inventory/vehicleType/get', data);
export const vehicleTypeCreate = (data) => API.post('/inventory/vehicleType/create', data);
export const vehicleTypeUpdate = (data) => API.post('/inventory/vehicleType/update', data);
export const vehicleTypeDelete = (data) => API.post('/inventory/vehicleType/delete', data);
export const vehicleTypeList = (data) => API.post('/inventory/vehicleType/list', data);


//Warehouse
export const warehouseGet = (data) => API.post('/inventory/warehouse/get', data);
export const warehouseCreate = (data) => API.post('/inventory/warehouse/create', data);
export const warehouseUpdate = (data) => API.post('/inventory/warehouse/update', data);
export const warehouseDelete = (data) => API.post('/inventory/warehouse/delete', data);
export const warehouseList = (data) => API.post('/inventory/warehouse/list', data);


//Warehouse Vehicle
export const warehouseVehicleGet = (data) => API.post('/inventory/warehouseVehicle/get', data);
export const warehouseVehicleCreate = (data) => API.post('/inventory/warehouseVehicle/create', data);
export const warehouseVehicleUpdate = (data) => API.post('/inventory/warehouseVehicle/update', data);
export const warehouseVehicleDelete = (data) => API.post('/inventory/warehouseVehicle/delete', data);
export const warehouseVehicleList = (data) => API.post('/inventory/warehouseVehicle/list', data);