"use client";

import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { trackEvent } from "@/lib/tracking";

export function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          onToggle={(event) => {
            if (event.currentTarget.open) {
              trackEvent("faq_open", {
                faq_index: index + 1,
                faq_question: faq.question,
              });
            }
          }}
        >
          <summary>
            <span>{faq.question}</span>
            <Plus aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
