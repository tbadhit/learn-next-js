import { useRouter } from "next/router";

export default function UserDetail(props) {
  // const route = useRouter();
  // const { id } = route.query;
  const { user } = props;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
