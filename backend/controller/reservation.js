import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return res.status(400).json({
      message: "Please fill full Reservation form"
    })
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    console.error(error)
  }
};


export default send_reservation;

