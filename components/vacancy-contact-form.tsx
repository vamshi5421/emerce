'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { submitVacancyInquiry } from '@/app/vacancy/actions/contact';

interface VacancyContactFormProps {
  warehouseTitle?: string;
  managerPhone?: string;
  managerName?: string;
}

export function VacancyContactForm({
  warehouseTitle = 'Warehouse Property',
  managerPhone = '+91 99893 08335',
  managerName = 'Property Manager',
}: VacancyContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitVacancyInquiry(formData);

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        // Reset form
        const form = document.getElementById(
          'vacancy-contact-form'
        ) as HTMLFormElement;
        if (form) {
          form.reset();
        }
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'Sorry, there was an unexpected error. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="border-0 shadow-lg sticky top-24">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Interested in this property? Contact us now.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Mobile Call Button at Top of Form */}
        {/* Removed: <MobileCallButton phoneNumber={managerPhone} managerName={managerName} variant="inline" className="mb-4" /> */}

        <form
          id="vacancy-contact-form"
          action={handleSubmit}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder={`I'm interested in ${warehouseTitle}...`}
              className="min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`flex items-center space-x-2 p-3 rounded-lg text-sm ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span>{submitStatus.message}</span>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center mb-3">
            Need immediate assistance?
          </p>
          <div className="grid grid-cols-1 gap-2">
            <a
              href={`tel:${managerPhone}`}
              className="flex items-center justify-center space-x-2 p-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call {managerName}</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
