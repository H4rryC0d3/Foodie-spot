import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(""); 
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://foodie-spot-28.vercel.app/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <ReservationSection>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">
                                RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </ReservationSection>
    );
};

export default Reservation;

const ReservationSection = styled.section`
    display: flex;
    min-height: 75vh;
    padding: 30px 20px;
    justify-content: center;
    align-items: center;
    background: url(/reserve.svg) no-repeat center/cover;

    .container {
        max-width: 1500px;
        display: flex;
    }

    .banner {
        width: 50%;
        padding: 50px;
        display: flex;
        justify-content: center;
    }

    .reservation_form_box {
        width: 400px;
        background: #fff;
        padding: 20px;
        box-shadow: -1px 0px 37px rgba(152, 87, 191, 0.75);
    }

    .reservation_form_box h1 {
        font-weight: 200;
        font-size: 2.75rem;
        text-align: center;
        color: #111;
    }

    .reservation_form_box p {
        color: #333;
        font-size: 18px;
        text-align: center;
        margin-bottom: 30px;
    }

    form div {
        display: flex;
        gap: 25px;
        margin-bottom: 20px;
    }

    form input {
        flex: 1;
        padding: 5px;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #333;
        background: transparent;
    }

    form input:focus {
        outline: none;
        border-bottom: 2px solid skyblue;
    }

    button {
        border: 1px solid black;
        padding: 8px 36px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #111;
        background: transparent;
        margin: 30px auto 0;
    }

    button span {
        margin-left: 1rem;
        padding: 3px;
        background: #111;
        border-radius: 100%;
        color: #fff;
    }

    @media (max-width: 885px) {
        .container {
            flex-direction: column;
            gap: 30px;
        }
        .banner {
            width: 100%;
        }
    }

    @media (max-width: 450px) {
        .reservation_form_box {
            width: 100%;
        }
        .reservation_form_box h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 325px) {
        .reservation_form_box h1 {
            font-size: 1.6rem;
        }
    }
`;
