const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
    services: [
      {
        serviceName: String,
        description: String,
        pricing: Number,
      },
    ],
    portfolio: [
      {
        title: String,
        description: String,
        images: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);
//image for logo
const Organizer = mongoose.model("Organizer", organizerSchema);

module.exports = Organizer;

// Location Details:

// Address: Street address, city, state/province, postal code, country.
// Geographic coordinates: Latitude and longitude for mapping and location-based services.
// Availability and Schedule:

// Working hours: Regular business hours or availability for appointments.
// Calendar: Integration with a calendar system to manage availability for bookings.
// Time zone: Specify the time zone in which the organizer operates.
// Specializations and Expertise:

// Types of events: Specializations or expertise in specific types of events (e.g., weddings, corporate events, concerts).
// Industry experience: Years of experience in event planning and organization.
// Certifications and Awards:

// Professional certifications: Certifications or accreditations relevant to event planning (e.g., Certified Wedding Planner).
// Awards and recognition: Awards received for outstanding service or achievements in the industry.
// Social Media and Online Presence:

// Website: Link to the organizer's website, if applicable.
// Social media profiles: Links to social media profiles such as Facebook, Instagram, Twitter, LinkedIn, etc.
// Insurance and Licensing:

// Liability insurance: Details of liability insurance coverage, if required for event planning services.
// Business license: License number and expiration date for operating as an event organizer.
// Client Testimonials and References:

// Client testimonials: Quotes or reviews from past clients about the organizer's services.
// References: Contact information for references or past clients who can provide feedback.
// Booking and Pricing Policies:

// Booking terms: Policies regarding booking deposits, cancellation fees, and refunds.
// Pricing structure: Detailed pricing information for services offered, including hourly rates, package pricing, and any additional charges.
// Equipment and Resources:

// Equipment inventory: List of equipment and resources available for events (e.g., audiovisual equipment, decor items).
// Partnerships: Information about partnerships or collaborations with vendors, venues, and other event professionals.
// Accessibility and Facilities:

// Accessibility features: Details of accessibility accommodations available at event venues (e.g., wheelchair accessibility, parking facilities).
// Facilities information: Description of facilities and amenities available at event venues (e.g., seating capacity, catering options).
