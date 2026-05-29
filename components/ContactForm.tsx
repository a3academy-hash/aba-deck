'use client';

import { useState, type FormEvent } from 'react';
import { CONTACT_ROLES } from '@/lib/content';

/**
 * Intro-call request form. Client-side only for now — on submit it shows a
 * polished success state. A future version posts to an API route / CRM;
 * the field shape here maps cleanly to that payload.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire to /api/contact or a CRM webhook later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center justify-center gap-4 p-12 text-center [animation:fade-up_0.5s_var(--ease-premium)_both]">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <svg className="h-8 w-8 [animation:fade-in_0.6s_ease_0.15s_both]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="text-xl font-bold text-navy">Request received</h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks for your interest in the ABA. A member of our team will reach out to schedule your
          introductory call.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn btn-light mt-2">
          Submit another
        </button>
      </div>
    );
  }

  const field = 'tap-target w-full rounded-lg border border-silver-200 bg-white px-4 text-sm text-navy placeholder:text-steel focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10';

  return (
    <form onSubmit={handleSubmit} className="card-surface grid gap-4 p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Name</span>
          <input required name="name" autoComplete="name" className={field} placeholder="Jane Coach" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">School / Academy</span>
          <input required name="school" className={field} placeholder="Academy name" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Role</span>
          <select required name="role" defaultValue="" className={field}>
            <option value="" disabled>
              Select your role
            </option>
            {CONTACT_ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="(555) 555-5555" />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Email</span>
        <input required name="email" type="email" autoComplete="email" className={field} placeholder="you@academy.com" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-steel-deep">Message</span>
        <textarea
          name="message"
          rows={4}
          className={`${field} resize-none py-3`}
          placeholder="Tell us about your program and what you're looking for."
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary flex-1">
          Schedule Intro Call
        </button>
        <a href="/pdfs/membership-overview.pdf" download className="btn btn-light flex-1">
          Download Membership Overview
        </a>
      </div>
    </form>
  );
}
