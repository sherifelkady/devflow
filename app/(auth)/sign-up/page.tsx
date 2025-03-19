"use client";
import React from "react";
import { SignUpSchema } from "@/lib/validations";
import { AuthForm } from "@/components/forms/AuthForm";

export default function SignUp() {
  return (
    <>
      <AuthForm
        onSubmit={(data) => Promise.resolve({ success: true, data })}
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "" }}
      />
    </>
  );
}
