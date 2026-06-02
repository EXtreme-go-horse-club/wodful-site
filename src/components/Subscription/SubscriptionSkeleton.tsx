import * as React from "react";
import { Container } from "../ui/Container";
import { SUBSCRIPTION_MAX_WIDTH_CLASS } from "../../constants/eventBanner";

export const SubscriptionSkeleton = () => (
  <div
    className="min-h-screen bg-slate-50 text-gray-900"
    aria-busy="true"
    aria-label="Carregando formulário de inscrição"
  >
    <Container className={`py-6 sm:py-10 ${SUBSCRIPTION_MAX_WIDTH_CLASS}`}>
      <div className="animate-pulse space-y-6">
        <div className="h-5 w-20 rounded bg-gray-200" />
        <div className="h-9 w-3/4 rounded-lg bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
        <div className="h-4 w-2/3 rounded bg-gray-200" />
        <div className="border-t border-gray-200 pt-8">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="mt-6 space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-11 w-full rounded-lg bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-56 rounded-2xl bg-gray-200 lg:hidden" />
      </div>
    </Container>
  </div>
);
