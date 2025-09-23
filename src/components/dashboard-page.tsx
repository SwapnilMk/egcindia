import React from "react";
import { cn } from "@/lib/utils";

interface DashboardPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const DashboardPage = ({
  className,
  ...props
}: DashboardPageProps) => {
  return (
    <div
      className={cn("flex flex-col h-full", className)}
      {...props}
    />
  );
};

interface DashboardPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DashboardPageHeader = ({
  className,
  ...props
}: DashboardPageHeaderProps) => {
  return (
    <div
      className={cn("p-6 border-b bg-background sticky top-0", className)}
      {...props}
    />
  );
};

interface DashboardPageContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DashboardPageContent = ({
  className,
  ...props
}: DashboardPageContentProps) => {
  return (
    <div
      className={cn("p-6 overflow-auto", className)}
      {...props}
    />
  );
};

DashboardPage.Header = DashboardPageHeader;
DashboardPage.Content = DashboardPageContent;

export default DashboardPage;
