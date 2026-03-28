import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProjCard = (props) => {
  return (
    <Card sx={{ maxWidth: 355 }} className="EachCard">
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        // image={require(props.img)}
        image={props.img}
        className="EchCardImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="btn-project-cont">
        <Button size="small">
          <Link
            href={props.seeProject_URL}
            target="_blank"
            className="btn-anker-proj-card"
          >
            <input type="button" class="buttonProject" value="See project" />
          </Link>
        </Button>
        {props.switch === "Front" || props.switch === "Both" ? (
          <Button size="small">
            <Link
              href={props.gitHub_F_END}
              target="_blank"
              className="btn-anker-front-end"
            >
              <input type="button" class="buttonProject" value="GitHub F-End" />
            </Link>
          </Button>
        ) : (
          ""
        )}

        {props.switch === "Back" || props.switch === "Both" ? (
          <Button size="small">
            <Link
              href={props.gutHub_B_END}
              target="_blank"
              className="btn-anker-back-end"
            >
              <input type="button" class="buttonProject" value="GitHub B-End" />
            </Link>
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default ProjCard;
