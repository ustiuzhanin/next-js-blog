import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail meetup={props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(contex) {
  const meetupId = contex.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First meetup",
        image:
          "https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        address: "Some address 5/21 apt 3",
        description: "Some descr",
      },
    },
  };
}

export default MeetupDetails;
