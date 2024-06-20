import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "../styles/PricingCard.module.css";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "28vw", backgroundColor: "#181815" }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "#181815",
          color: "#fff",
          border: " 1px solid #ccc",
          fontFamily: "Clash Display",
          padding: "2rem",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#181815",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Clash Display",
              fontSize: "35px",
              fontWeight: "500",
              lineHeight: "normal",
              textAlign: "center",
              '&:hover':{
              color: ' #d0140f',
            }
            }}
          >
            Fintech{" "}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#fff",
              fontFamily: "Clash Display",
              fontSize: "20px",
            }}
          >
            Transforming Finance with Fast & Ease
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="/fintechhreo.svg"
          alt="Fintech"
          sx={{ transform: 'translateY(30%)',transition: 'transform 0.3s ease',
            '&:hover':{
              transform: 'translateY(16%)',
            }
          }}
        />
      </CardActionArea>
    </Card>
  );
}
