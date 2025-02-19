"use client"

import * as React from "react"
import { RolePageContent } from "@/components/role-page-content"
import { PasswordProtection } from "@/components/password-protection"

export default function AcademiaPage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return <RolePageContent company="academia" />;
}