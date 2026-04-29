import { Button } from "@/components/ui/button";
import { RiFacebookFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/react";

function Component() {
  const buttonClassName =
    "bg-white/90 text-black shadow-[0_2px_6px_rgba(0,0,0,0.18)] hover:bg-white";

  return (
    <div className="inline-flex flex-wrap gap-2">
      <Button
        variant="outline"
        aria-label="Sign in with Google"
        size="icon"
        className={buttonClassName}
      >
        <RiGoogleFill size={16} aria-hidden="true" />
      </Button>
      <Button
        variant="outline"
        aria-label="Sign in with Facebook"
        size="icon"
        className={buttonClassName}
      >
        <RiFacebookFill size={16} aria-hidden="true" />
      </Button>
      <Button
        variant="outline"
        aria-label="Sign in with X"
        size="icon"
        className={buttonClassName}
      >
        <RiTwitterXFill size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Component };
