import * as React from "react";
import { Container } from "../ui/Container";
import { EVENT_BANNER_MAX_WIDTH_CLASS } from "../../constants/eventBanner";
import { EventBannerSkeleton } from "./EventBanner";

export const EventSkeleton = () => (
  <div
    className="min-h-screen bg-slate-50 text-gray-900"
    aria-busy="true"
    aria-label="Carregando evento"
  >
    <EventBannerSkeleton />
    <Container className={`py-8 ${EVENT_BANNER_MAX_WIDTH_CLASS}`}>
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
        <div className="h-4 w-2/3 rounded bg-gray-200" />
        <div className="mt-6 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
        <div className="mt-8 h-48 rounded-2xl bg-gray-200" />
      </div>
    </Container>
  </div>
);
