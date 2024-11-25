import { useRouter } from "next/router";

export default function FlightDetail() {
  const { query } = useRouter();
  const { id } = query;

  return <div>Flight Detail Page for ID: {id}</div>;
}
