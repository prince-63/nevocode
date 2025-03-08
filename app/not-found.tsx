"use client";

import Link from "@/components/navigation/link";
import { Button } from "@/components/ui/button";
import { H1, Lead, P } from "@/components/ui/typography";
import { ArrowLeft, Home } from "lucide-react";

export default function notFound() {
  return (
    <main className="h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-lg shadow-md">
          <H1 className="text-primary">404</H1>
          <Lead>Page Not Found</Lead>
          <P className="mb-3">
            The page you are looking for doesn&apos;t exist or has been moved.
          </P>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <Button size="lg" className="w-full sm:w-max">
                <Home className="h-4 w-4 mr-1" />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              className="w-full sm:w-max"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
