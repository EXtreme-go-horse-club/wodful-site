import * as React from "react";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventDetails({ accessCode }: EventDetailsProps) {
  return <div>Você está listando o {accessCode}</div>;
}
