import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { image, title, description, address } = props;
  return (
    <section className={classes.detail}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <address>{address}</address>
    </section>
  );
}

export default MeetupDetail;
