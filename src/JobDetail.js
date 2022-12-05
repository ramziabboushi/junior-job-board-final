import TopNav from "./TopNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import moment from "moment";

import {
  JobCategory,
  PRIMARY_GREEN,
  JobDetailsText,
  PRIMARY_NAVY
} from "./StyledComponents";

export default function JobDetail({ collectedJobs }) {
  let { id: idFromURL } = useParams();

  const selectedJob = collectedJobs.find((job) => {
    return job.id === idFromURL;
  });

  return (
    <>
      <TopNav />
      <Box
        sx={{
          width: 0.8,
          maxWidth: "1130px",
          minHeight: "100vh",
          m: "0 auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            width: 0.5,
            p: "20px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: PRIMARY_NAVY,
              fontSize: "25px",
              textAlign: "left"
            }}
          >
            {selectedJob.position}
          </Typography>
          <Divider
            variant="middle"
            sx={{ m: "10px 0", marginLeft: "0", width: 0.9 }}
          />
          <Box sx={{ display: "flex" }}>
            {selectedJob.tags.slice(0, 5).map((tag) => (
              <JobCategory sx={{ color: "white", fontWeight: "600" }} key={tag}>
                {tag}
              </JobCategory>
            ))}
          </Box>

          <JobDetailsText sx={{ m: "10px 0" }}>
            Posted {moment(selectedJob.date).fromNow()}
          </JobDetailsText>
          <JobDetailsText>
            <Box
              component="img"
              alt=""
              src="https://assets.codepen.io/6060109/location-icon.png"
              sx={{
                width: "20px",
                mr: "7px",
                boxSizing: "border-box",
                mb: "0px"
              }}
            />
            {selectedJob.location}
          </JobDetailsText>
          <Divider
            variant="middle"
            sx={{ m: "10px 0", marginLeft: "0", width: 0.9 }}
          />
          <Box
            dangerouslySetInnerHTML={{
              __html: selectedJob.description
            }}
            sx={{ color: PRIMARY_NAVY }}
          />
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "480px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            variant="contained"
            href={selectedJob.url}
            sx={{
              backgroundColor: PRIMARY_GREEN,
              width: "200px",
              m: "20px 0",
              borderRadius: "30px",
              textTransform: "none"
            }}
          >
            Apply
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "200px",
              color: PRIMARY_GREEN,
              border: `1px solid ${PRIMARY_GREEN}`,
              borderRadius: "30px",
              textTransform: "none"
            }}
            startIcon={<FavoriteBorderIcon />}
          >
            Save Job
          </Button>
          <Divider variant="middle" sx={{ m: "30px 0", width: 1 }} />
          <Box sx={{ width: "200px" }}>
            <JobDetailsText sx={{ textAlign: "left" }}>
              About the client
            </JobDetailsText>
            <JobDetailsText sx={{ fontSize: "12px", mb: "30px" }}>
              <VerifiedIcon
                sx={{
                  width: "20px",
                  mr: "7px",
                  boxSizing: "border-box",
                  mb: "-8px",
                  color: PRIMARY_GREEN
                }}
              />
              {selectedJob.salary_min} - {selectedJob.salary_max}
            </JobDetailsText>
            <JobDetailsText sx={{ fontSize: "12px", mb: "0px" }}>
              <Box
                component="img"
                alt=""
                src="https://assets.codepen.io/6060109/location-icon.png"
                sx={{
                  width: "20px",
                  mr: "7px",
                  boxSizing: "border-box",
                  mb: "-5px"
                }}
              />
              {selectedJob.location}
            </JobDetailsText>
          </Box>
          <Divider variant="middle" sx={{ m: "30px 0", width: 1 }} />
          <Box sx={{ width: "200px" }}>
            <JobDetailsText sx={{ textAlign: "left" }}>Job Link</JobDetailsText>
            <Box
              sx={{
                width: "200px",
                backgroundColor: "#F2F2F2",
                height: "30px",
                overflow: "hidden"
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "darkgrey",
                  fontSize: "14px",
                  textAlign: "left",
                  m: "4px 10px"
                }}
              >
                {selectedJob.url}
              </Typography>
            </Box>
            <JobDetailsText
              sx={{
                textAlign: "left",
                color: PRIMARY_GREEN,
                marginTop: "20px"
              }}
            >
              Copy Link
            </JobDetailsText>
          </Box>
        </Box>
      </Box>
    </>
  );
}
