import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useParams, Link } from "react-router-dom";
import { Typography, Breadcrumbs } from "@mui/material";
import ResponsiveAppBar from "../../common/TopNav/TopNav";
import { Footer } from "../../common/Footer/Footer";
import "./Gallery.css";

export default function MasonryImageList() {
  let { id, title } = useParams();

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ padding: "30px"}}
      >
        <Link color="inherit" to="/gallery" className="breadcrumbs">
          Gallery
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
      <br />
      <Typography
        variant="h3"
        sx={{
          color: "#4C3B2BF0",
          textAlign: "center",
          fontFamily: "ItimBold",
          fontWeight: 900,
        }}
        marginY={3}
      >
        {title}
      </Typography>
      <Box sx={{ overflowY: "scroll", paddingLeft: 2, paddingRight: 2 }}>
        <ImageList variant="masonry" cols={3}>
          {itemData.map((item) =>
            item.collection == id ? (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ) : null
          )}
        </ImageList>
      </Box>
      <Footer />
    </React.Fragment>
  );
}

const itemData = [
  {
    collection: 1,
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    collection: 1,
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    collection: 1,
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },{
    collection: 1,
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    collection: 1,
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    collection: 1,
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    collection: 2,
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    collection: 2,
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    collection: 2,
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    collection: 2,
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    collection: 3,
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },{
    collection: 3,
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    collection: 3,
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    collection: 3,
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    collection: 4,
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    collection: 4,
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    collection: 4,
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    collection: 4,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
