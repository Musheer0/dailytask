"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/components/logo";

const SignInPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="max-w-[500px] border-none">
        <CardHeader>
          <Logo />
          <CardTitle>Sign-in to DailyTask</CardTitle>
          <CardDescription>
            Please sign in with your account to continue using the app.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center flex-wrap flex-row gap-2">
          <Button
            variant="auth"
            className="w-full"
            onClick={() => signIn("google")}
          >
            Sign in with Google <FaGoogle />
          </Button>
          <Button
            variant="auth"
            className="w-full"
            onClick={() => signIn("facebook")}
          >
            Sign in with Facebook <FaFacebook />
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-zinc-400">
            By signing in, you agree to our{" "}
            <Link className="text-zinc-300 underline" href={"/policy"}>
              terms & conditions
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
