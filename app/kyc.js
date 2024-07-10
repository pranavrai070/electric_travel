import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CompleteKYC from "../components/Kyc/CompleteKyc";
import KycDetails from "../components/Kyc/KycDetails";
import KycID from "../components/Kyc/KycID";
import KycPhoto from "../components/Kyc/KycPhoto";
import KycBank from "../components/Kyc/KycBank";
import Payment from "../components/Kyc/Payment"
import PaymentDetail from "../components/Kyc/PaymentDetail"
import LeasePayment from "../components/Kyc/LeasePayment";

function kyc() {
  return (
    <View>
      {/* <KycPhoto/> */}
      <CompleteKYC/>
      {/* <KycDetails/> */}
      {/* <KycID/> */}
      {/* <KycBank /> */}
      {/* <Payment/> */}
      {/* <PaymentDetail/> */}
      {/* <LeasePayment/> */}
    </View>
  );
}

export default kyc;
