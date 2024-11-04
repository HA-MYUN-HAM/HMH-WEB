import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>id: {id}</h1>;
};

export default EventDetailPage;
