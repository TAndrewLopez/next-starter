"use client";

import { InsertGuestbookEntrySchema } from "@/db/schema";
import { useFormState } from "react-dom";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { createGuestbookEntry } from "@/app/guestbook/actions";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GuestbookClient = () => {
  const [lastResult, action] = useFormState(createGuestbookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: InsertGuestbookEntrySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="flex flex-col gap-y-3"
    >
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          key={fields.message.key}
          name={fields.message.name}
          placeholder="Enter your message"
          id="message"
        />
        <p className="text-sm font-medium text-destructive">
          {fields.message.errors}
        </p>
      </div>
      <Button type="submit">Send message</Button>
    </form>
  );
};

export default GuestbookClient;
