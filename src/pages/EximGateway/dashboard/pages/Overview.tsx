import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DASHBOARD_CARDS from "@/app/dashboard/data.json";
import DashboardPage from "@/components/dashboard-page";
import { ModeToggle } from "@/components/theme-toggle";

const EximDashboardOverview: React.FC = () => {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Good Morning!</h1>
            <p className="text-muted-foreground">
              Verified Exporter • Certified Exporter Ltd.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Help</Button>
            <ModeToggle />
          </div>
        </div>
      </DashboardPage.Header>
      <DashboardPage.Content>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DASHBOARD_CARDS.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <Button>{card.buttonText}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DashboardPage.Content>
    </DashboardPage>
  );
};

export default EximDashboardOverview;
