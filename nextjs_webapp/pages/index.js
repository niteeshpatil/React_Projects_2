import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Nextjs Meetings</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   // const req = context.req;
//   // const res = context.res;
//   return {
//     props: {
//       meetups: D_M,
//     },
//   };
// }

// run build proces
export async function getStaticProps() {
  // fecth data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://niteesh:sTgOQdgbBUvyBWyk@cluster0.vlh4qpr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default Home;
