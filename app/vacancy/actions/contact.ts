'use server';

export async function submitVacancyInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  // Get current date and time
  const now = new Date();
  const dateTime = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const submissionData = {
    name,
    email,
    phone,
    message,
    dateTime,
    timestamp: now.toISOString(),
    property: 'Warehouse in Pune – 20,000 sqft',
    inquiryType: 'Property Inquiry',
    _subject: `Property Inquiry: Pune Warehouse from ${name}`,
    _replyto: email,
  };

  try {
    // Same Formspree endpoint or create a separate one for property inquiries
    const FORMSPREE_ENDPOINT =
      process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjkroygv';

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      message:
        "Thank you for your interest! We'll contact you within 24 hours with more details about this property.",
    };
  } catch (error) {
    console.error('Error submitting vacancy inquiry:', error);
    return {
      success: false,
      message:
        'Sorry, there was an error sending your inquiry. Please try again or call us directly at +91 98765 43210.',
    };
  }
}
