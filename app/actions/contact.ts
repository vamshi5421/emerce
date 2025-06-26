'use server';

export async function submitContactForm(formData: FormData) {
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
    _subject: `New Warehouse Inquiry from ${name}`,
    _replyto: email,
  };

  try {
    // Formspree endpoint - Replace with your actual Formspree form ID
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
      // Handle specific Formspree errors
      if (response.status === 422) {
        const errorData = await response.json();
        console.error('Formspree validation error:', errorData);
        return {
          success: false,
          message: 'Please check your form data and try again.',
        };
      }

      // Handle other HTTP errors
      console.error(`HTTP error! status: ${response.status}`);
      return {
        success: false,
        message: `An error occurred while submitting the form. Status code: ${response.status}. Please try again later.`,
      };
    }

    const result = await response.json();
    console.log('Form submitted successfully:', result);

    return {
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error('Error submitting form:', error);

    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        message:
          'Network error. Please check your internet connection and try again.',
      };
    }

    return {
      success: false,
      message:
        'Sorry, there was an error sending your message. Please try again or contact us directly at info@emerce.com.',
    };
  }
}
