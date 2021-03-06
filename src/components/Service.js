import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ServiceCard from "./ServiceCard";

// images
import visa from "../assets/images/visa.png";
import travel from "../assets/images/travel.png";
import air from "../assets/images/air.png";
import covid from "../assets/images/covid.png";

const serviceData = [
  {
    img: visa,
    header: "Visa Processing ",
    para: "When your visa is approved, the interviewing officer will skeep your passport and documents for a. ",
  },
  {
    img: travel,
    header: "Travell Assistancy ",
    para: "When your visa is approved, the interviewing officer will skeep your passport and documents for a.",
  },
  {
    img: air,
    header: "Air Ticket ",
    para: "When your visa is approved, the interviewing officer will skeep your passport and documents for a.",
  },
  {
    img: covid,
    header: "Covid Test ",
    para: "When your visa is approved, the interviewing officer will skeep your passport and documents for a.",
  },
];

const Service = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "105px", marginBottom: "90px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              height: "0px",
              width: "26px",
              border: "1px solid black",
              background: "black",
            }}
          ></Box>
          <Typography
            component="p"
            sx={{
              fontSize: "15px",
              paddingLeft: "8px",
              fontWeight: "600",
              color: "#003566",
            }}
          >
            Our Service
          </Typography>
        </Box>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "45px" },
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 1,
          }}
        >
          What We Are Offering?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {serviceData.map((data, index) => {
          return <ServiceCard key={index} data={data} />;
        })}
      </Box>
    </Container>
  );
};

export default Service;
