"use client";

import React, { useState, useRef } from "react";
const  jobs =[
    {
      "title": "Digital Marketing Manager",
      "description": "Manage online campaigns, SEO, social media, and ads to drive leads and brand growth. Minimum 2 years of experience required.",
      "location": "Bengaluru, Karnataka",
      "positionKey": "marketing-manager"
    },
    {
      "title": "Telecaller",
      "description": "Make outbound calls, handle queries, and generate leads. 6 months BPO/call center experience required. Minimum 6 month experience required.",
      "location": "Bengaluru, Karnataka",
      "positionKey": "tele-caller"
    },
    {
      "title": "Sales Executive",
      "description": "Handle site visits, client meetings, and close real estate sales. Prior real estate experience needed. Minimum 6 month experience required.",
      "location": "Bengaluru, Karnataka",
      "positionKey": "sales-executive"
    },
    {
      "title": "Video Editor",
      "description": "Edit and create engaging videos using tools like Premiere Pro or After Effects. Minimum 6 month experience required.",
      "location": "Bengaluru, Karnataka",
      "positionKey": "video-editor"
    },
    {
      "title": "Sales Manager",
      "description": "Minimum 2+ years in sales with real estate experience; handle site visits, client meetings & close deals.",
      "location": "Bengaluru, Karnataka",
      "positionKey": "sales-manager"
    }
  ]
  ;

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: string | null;
}

export default function CareersModal({
  isOpen,
  onClose,
  selectedJob,
}: CareersModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      // Check if response is ok first
      if (!response.ok) {
        console.error('Response not ok:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Check for success
      if (result && result.success === true) {
        setSubmitMessage({
          type: 'success',
          text: result.message || 'Application submitted successfully! We will get back to you soon.'
        });
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setSubmitMessage(null);
        }, 3000);
      } else {
        setSubmitMessage({
          type: 'error',
          text: result?.message || 'Failed to submit application. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to submit application. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="careers-modal"
      className={`fixed inset-0 backdrop-blur-sm bg-white/30 z-50 transition-all duration-300 flex items-center justify-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="careers-modal-title"
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2
              id="careers-modal-title"
              className="text-xl font-semibold text-gray-900"
            >
              Apply for Position
            </h2>
            <button
              onClick={onClose}
              aria-label="Close application form"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-4">
          <form
            ref={formRef}
            id="careers-form"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* First and Last Name - Side by side on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors cursor-text"
              />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors cursor-text"
              />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors cursor-text"
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position Applying For
              </label>
              <select
                id="position"
                name="position"
                required
                defaultValue={selectedJob || ""}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="">Select a position</option>
                {jobs.map((job) => (
                  <option key={job.positionKey} value={job.positionKey}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label
                htmlFor="additional-info"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Information
              </label>
              <textarea
                id="additional-info"
                name="additional-info"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-colors resize-none cursor-text"
              ></textarea>
            </div>

            {/* CV Upload */}
            <div>
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-gray-700"
              >
                Upload CV (PDF only, max 5MB)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf"
                required
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
              />
            </div>

            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`p-4 rounded-md ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className="flex items-center">
                  {submitMessage.type === 'success' ? (
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-sm font-medium">{submitMessage.text}</span>
                </div>
              </div>
            )}

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-center md:justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="submit-careers-form"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-app-green-1 hover:bg-app-green-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-green-1 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 cursor-pointer"
              >
                {!isSubmitting ? (
                  <span className="submit-text">Submit <span className="hidden md:inline">Application</span></span>
                ) : (
                  <div className="submit-loader flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
