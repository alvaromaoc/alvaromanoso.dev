"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@/once-ui/components";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const performChecks = async () => {
    if (protectedRoutes[pathname as keyof typeof protectedRoutes]) {
      setIsPasswordRequired(true);

      const response = await fetch("/api/check-auth");
      if (response.ok) {
        setIsAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    setIsPasswordRequired(false);
    setIsAuthenticated(false);
    setLoading(true);
    performChecks().then(() => setLoading(false));
  }, [pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
