"use client";
import { AuthForm } from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

export default function SignIn() {
  return (
    <>
      <AuthForm
        onSubmit={(data) => Promise.resolve({ success: true, data })}
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
      />
    </>
  );
}
