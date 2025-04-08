import React, { useEffect } from "react";
import TicketResult from "../../components/ui/Ticket/TicketResult";
import { useLocation, useNavigate } from "react-router-dom";

function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketData = location.state?.ticketData;

  // Redirect if accessed without ticket data
  useEffect(() => {
    if (!ticketData) {
      navigate("/movies");
    }
  }, [ticketData, navigate]);

  if (!ticketData) return null;

  return (
    <>
      <TicketResult ticketData={ticketData} />
    </>
  );
}

export default Ticket;
