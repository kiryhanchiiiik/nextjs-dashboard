"use client";
import { createInvoice, State } from "@/app/lib/actions";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useActionState } from "react";

export default function InvoiceStatus({ status }: { status: string }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        }
      )}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
