// import { useRouter } from "next/router";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

export default function Users(props) {
  const { dataUsers } = props;
  const router = useRouter();

  // console.log(dataUsers);
  return (
    <>
      <Head>
        <title>Next JS | Users Page</title>
        <metadata name="description" content="Website NextJS Dasar" />
      </Head>
      <div>
        {dataUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={styles.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// Akan memanggil api di dalam getStaticProps ini :
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
