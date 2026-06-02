import * as React from "react";

export function useAccessCodeFromPath(
  segment: "event" | "subscription",
  accessCodeFromRouter?: string
): string {
  const [accessCode, setAccessCode] = React.useState(accessCodeFromRouter ?? "");

  React.useEffect(() => {
    if (accessCodeFromRouter) {
      setAccessCode(accessCodeFromRouter);
      return;
    }

    if (typeof window === "undefined") return;

    const pattern = new RegExp(`/${segment}/([^/]+)`, "i");
    const match = window.location.pathname.match(pattern);
    if (match?.[1]) {
      setAccessCode(decodeURIComponent(match[1]));
    }
  }, [accessCodeFromRouter, segment]);

  return accessCodeFromRouter ?? accessCode;
}
