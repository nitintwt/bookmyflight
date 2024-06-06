import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {Modal,ModalContent,ModalHeader, ModalBody,ModalFooter,Button,useDisclosure,Input,} from "@nextui-org/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function PassengerDetailsInputBox() {
  const [booked, setBooked] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit} = useForm();
  const userAccessToken = useSelector((state) => state?.user?.accessToken);
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (cookies.accessToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [cookies]);

  const handleBooking = async (data) => {
    const { firstName, lastName, email, phoneNumber, gender, dateOfBirth } = data;
    try {
      const headers = { 'Authorization' : `Bearer ${userAccessToken}`, "Content-Type": "application/json" };
      const createOrder = await axios.post("https://test.api.amadeus.com/v1/booking/flight-orders", {
        data: {
          type: "flight-order",
          travelers: [
            {
              id: "1",
              dateOfBirth: dateOfBirth,
              name: {
                firstName: firstName,
                lastName: lastName,
              },
              gender: gender,
              contact: {
                emailAddress: email,
                phones: [
                  {
                    deviceType: "MOBILE",
                    countryCallingCode: "91",
                    number: phoneNumber,
                  },
                ],
              },
              documents: [
                {
                  documentType: "PASSPORT",
                  birthPlace: "Madrid",
                  issuanceLocation: "Madrid",
                  issuanceDate: "2015-04-14",
                  number: "00000000",
                  expiryDate: "2025-04-14",
                  issuanceCountry: "ES",
                  validityCountry: "ES",
                  nationality: "ES",
                  holder: true,
                },
              ],
            },
          ],
          remarks: {
            general: [
              {
                subType: "GENERAL_MISCELLANEOUS",
                text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
              },
            ],
          },
          ticketingAgreement: {
            option: "DELAY_TO_CANCEL",
            delay: "6D",
          },
          contacts: [
            {
              addresseeName: {
                firstName: "PABLO",
                lastName: "RODRIGUEZ",
              },
              companyName: "INCREIBLE VIAJES",
              purpose: "STANDARD",
              phones: [
                {
                  deviceType: "LANDLINE",
                  countryCallingCode: "34",
                  number: "480080071",
                },
                {
                  deviceType: "MOBILE",
                  countryCallingCode: "33",
                  number: "480080072",
                },
              ],
              emailAddress: "support@increibleviajes.es",
              address: {
                lines: ["Calle Prado, 16"],
                postalCode: "28014",
                cityName: "Madrid",
                countryCode: "ES",
              },
            },
          ],
        },
      }, { headers });
      setBooked(true);
      console.log(createOrder);
    } catch (error) {
      setBooked(true);
      console.log('Something went wrong while creating your order', error);
      setTimeout(() => navigate('/'), 6000);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">Book</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {isAuth ? (booked ? (
                <ModalBody>
                  <p className="m-10 text-large font-bold">
                    Your flight booking data has been sent to an Airline Consolidator(air ticket wholesalers). He will contact you regarding payment and identity confirmation.
                    Thanks.
                  </p>
                </ModalBody>
              ) : (
                <form onSubmit={handleSubmit(handleBooking)}>
                  <ModalHeader className="flex flex-col gap-1">Confirm Flight Booking</ModalHeader>
                  <ModalBody>
                    <Input
                      autoFocus
                      label="First Name"
                      variant="bordered"
                      {...register("firstName", { required: true })}
                    />
                    <Input
                      label="Last Name"
                      variant="bordered"
                      {...register('lastName', { required: true })}
                    />
                    <Input
                      label="Gender"
                      variant="bordered"
                      {...register('gender', { required: true })}
                    />
                    <Input
                      label="Email"
                      variant="bordered"
                      {...register('email', { required: true })}
                    />
                    <Input
                      label="Phone Number"
                      variant="bordered"
                      {...register('phoneNumber', { required: true })}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit">
                      Confirm
                    </Button>
                  </ModalFooter>
                </form>
              )) : (
                <ModalBody>
                <p className="m-10 text-large font-bold text-center">
                  Login first
                </p>
              </ModalBody>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
