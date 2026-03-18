import * as React from "react";
import { Header } from "../components/Header";
import { Head } from "../components/SEO";
import { Success } from "../components/Success";

type PageProps = {
  location?: { search?: string };
};

function getStatusFromSearch(search: string | undefined): "success" | "pending" | "failure" {
  if (!search) return "success";
  const params = new URLSearchParams(search);
  const status = params.get("status");
  if (status === "pending" || status === "failure") return status;
  return "success";
}

function getAccessCodeFromSearch(search: string | undefined): string | undefined {
  if (!search) return undefined;
  return new URLSearchParams(search).get("accessCode") ?? undefined;
}

export default function SubscriptionSuccess({ location }: PageProps) {
  const [status, setStatus] = React.useState<"success" | "pending" | "failure">(
    () => getStatusFromSearch(location?.search)
  );
  const [accessCode, setAccessCode] = React.useState<string | undefined>(
    () => getAccessCodeFromSearch(location?.search)
  );

  React.useEffect(() => {
    const search = typeof window !== "undefined" ? window.location.search : location?.search;
    setStatus(getStatusFromSearch(search));
    setAccessCode(getAccessCodeFromSearch(search));
  }, [location?.search]);

  return (
    <Head>
      <Header isSimple />
      <Success status={status} accessCode={accessCode} />
    </Head>
  );
}
