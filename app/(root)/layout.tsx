import Link from "next/link";

import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background/90 backdrop-blur-sm">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-3">
            <Link
              href="mailto:student.siddhanthchapade@gmail.com"
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-full border border-foreground/15 bg-foreground text-background hover:bg-foreground/90"
              )}
            >
              Let&apos;s Talk
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
