"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatedCollapsible } from "@/components/common/animated-collapsible";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const donationAmounts = ["$10.00", "$25.00", "$50.00", "$100.00", "$250.00", "$500.00"];
const bankDetails = [
  ["Bank Name", "First Bank of Nigeria"],
  ["Account Name", "Achebe Hope Foundation"],
  ["Account Number", "1234567890"],
  ["Reference", "Donation"],
];

function formatDonationAmount(value: string) {
  const amount = Number(value.replace(/[^0-9.]/g, ""));

  if (!Number.isFinite(amount) || amount <= 0) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(donationAmounts[0]);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedLabel, setCopiedLabel] = useState("");
  const displayedAmount = customAmount.trim() ? formatDonationAmount(customAmount) : selectedAmount;

  const copyBankDetail = async (label: string, value: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(""), 1800);
    } catch {
      setCopiedLabel("");
    }
  };

  return (
    <>
      <ScrollRevealController />
      <PageHero title="Donation" crumb="Donation" />
      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto max-w-[720px] bg-white px-12 py-10" data-scroll-reveal="zoom-up">
          <form onSubmit={(event) => event.preventDefault()}>
            <div>
              <h2 className="text-[16px] font-black text-[#2A1708]">
                How much would you like to donate today?
              </h2>
              <p className="mt-3 text-[13px] font-medium text-[#697084]">
                All donations directly impact our organization and help us further our mission.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <label className="text-[13px] font-semibold text-[#2A1708]" htmlFor="custom-amount">
                  Donation Amount <span className="text-primary">*</span>
                </label>
                <span className="rounded-[4px] bg-[#eef0f2] px-3 py-1 text-[10px] font-black text-[#9aa0aa]">
                  USD $
                </span>
              </div>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    aria-pressed={!customAmount && selectedAmount === amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`h-11 rounded-[6px] text-[13px] font-black ${
                      !customAmount && selectedAmount === amount ? "bg-primary text-white" : "bg-[#f4f4f4] text-[#2A1708]"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <Input
                id="custom-amount"
                inputMode="decimal"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                className="mt-3 h-10 rounded-[5px] border-[#b9b9b9] text-center text-[12px]"
              />
            </div>

            <div className="mt-14">
              <h2 className="text-[16px] font-black text-[#2A1708]">Who&apos;s Giving Today?</h2>
              <p className="mt-3 text-[13px] font-medium text-[#697084]">
                We&apos;ll never share this information with anyone.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-[13px] font-semibold text-[#2A1708]">
                  First name <span className="sr-only">required</span>
                  <Input placeholder="John" className="h-10 rounded-[5px] border-[#b9b9b9]" required />
                </label>
                <label className="grid gap-2 text-[13px] font-semibold text-[#2A1708]">
                  Last name
                  <Input placeholder="Doe" className="h-10 rounded-[5px] border-[#b9b9b9]" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-[13px] font-semibold text-[#2A1708]">
                Email Address <span className="sr-only">required</span>
                <Input type="email" className="h-10 rounded-[5px] border-[#b9b9b9]" required />
              </label>
            </div>

            <div className="mt-14">
              <h2 className="text-[16px] font-black text-[#2A1708]">Payment Details</h2>
              <p className="mt-3 text-[13px] font-medium text-[#697084]">
                How would you like to pay for your donation?
              </p>

              <div className="mt-8 rounded-[6px] border border-[#e4e4e4] bg-[#fafafa] p-6">
                <h3 className="text-[15px] font-black text-[#2A1708]">Donation Summary</h3>
                <div className="mt-6 space-y-6 text-[13px] font-semibold text-[#697084]">
                  <div className="flex justify-between">
                    <span>Payment Amount</span>
                    <span className="text-[#2A1708]">{displayedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Giving Frequency</span>
                    <span className="text-[#2A1708]">One time</span>
                  </div>
                  <div className="flex justify-between border-t border-[#e4e4e4] pt-5 text-[15px] font-black text-[#2A1708]">
                    <span>Donation Total</span>
                    <span>{displayedAmount}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <AnimatedCollapsible
                  name="donation-payment"
                  numbered={false}
                  itemClassName="rounded-[6px] border border-primary"
                  titleClassName="px-4 py-4 text-[13px] font-semibold text-[#697084]"
                  contentClassName="border-t border-primary px-6 py-8"
                  items={[
                    {
                      title: "Donate with Offline Donation",
                      content: (
                        <>
                          <h3 className="text-[15px] font-black text-[#2A1708]">Bank Transfer Details</h3>
                          <p className="mt-3 text-[12px] font-semibold leading-5 text-[#697084]">
                            Send your donation using the account details below, then contact us with your payment reference.
                          </p>
                          <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {bankDetails.map(([label, value]) => (
                              <div key={label} className="rounded-[6px] bg-[#f4f4f4] p-4">
                                <div className="flex items-center justify-between gap-3">
                                  <p className="text-[11px] font-black uppercase tracking-[0.04em] text-[#697084]">
                                    {label}
                                  </p>
                                  <button
                                    type="button"
                                    aria-label={`Copy ${label}`}
                                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#697084] transition hover:bg-primary hover:text-white"
                                    onClick={() => void copyBankDetail(label, value)}
                                  >
                                    {copiedLabel === label ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                                  </button>
                                </div>
                                <p className="mt-2 text-[14px] font-black text-[#2A1708]">{value}</p>
                                <p className="mt-2 min-h-4 text-[11px] font-semibold text-primary">
                                  {copiedLabel === label ? "Copied" : ""}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </div>

            <Button
              type="button"
              className="mt-12 h-12 w-full rounded-[4px] bg-primary text-[18px] font-black text-white hover:bg-accent"
            >
              Donate now
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
