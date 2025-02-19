"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "./ui/section"

interface PasswordProtectionProps {
  onAuthenticate: () => void;
}

export function PasswordProtection({ onAuthenticate }: PasswordProtectionProps) {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "letmeseeplz") {
      onAuthenticate();
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <Section className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-2xl bg-white/5"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Password Required</h2>
        <p className="text-muted-foreground text-center mb-8">
          Please enter the password to view this content
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
              placeholder="Enter password"
            />
            {error && (
              <p className="text-sm text-red-500 mt-2">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </Section>
  );
}