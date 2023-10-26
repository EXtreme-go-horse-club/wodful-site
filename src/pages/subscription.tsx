import * as React from "react";

interface EventDetailsProps {
  accessCode: string;
}

export default function EventSubscriptions({ accessCode }: EventDetailsProps) {
  return <div>Você está se inscrevendo no {accessCode}</div>;
}
