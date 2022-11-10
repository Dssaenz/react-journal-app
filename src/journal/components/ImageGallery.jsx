import { ImageList, ImageListItem } from "@mui/material";

const ImageGallery = ({ images }) => (
  <ImageList sx={{ width: "100%", height: 450 }} cols={4} rowHeight={200}>
    {images.map((image) => (
      <ImageListItem key={image}>
        <img
          src={`${image}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt="Note"
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export default ImageGallery;
