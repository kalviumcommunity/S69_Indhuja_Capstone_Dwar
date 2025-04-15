const Testimonial = require('../models/Testimonial');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Get all testimonials
exports.getAllTestimonials = catchAsync(async (req, res, next) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    results: testimonials.length,
    data: {
      testimonials
    }
  });
});

// Get a single testimonial
exports.getTestimonial = catchAsync(async (req, res, next) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
    return next(new AppError('No testimonial found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      testimonial
    }
  });
});

// Create a new testimonial
exports.createTestimonial = catchAsync(async (req, res, next) => {
  const newTestimonial = await Testimonial.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      testimonial: newTestimonial
    }
  });
});

// Update a testimonial
exports.updateTestimonial = catchAsync(async (req, res, next) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!testimonial) {
    return next(new AppError('No testimonial found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      testimonial
    }
  });
});

// Delete a testimonial
exports.deleteTestimonial = catchAsync(async (req, res, next) => {
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

  if (!testimonial) {
    return next(new AppError('No testimonial found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

// Seed initial testimonials if none exist
exports.seedTestimonials = catchAsync(async (req, res, next) => {
  const count = await Testimonial.countDocuments();
  
  if (count === 0) {
    const initialTestimonials = [
      {
        name: "John Doe",
        role: "Regular Donor",
        comment: "I've been donating through D-WAR for over a year now. The transparency and impact reports make me confident that my contributions are making a real difference.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
      },
      {
        name: "Sarah Lee",
        role: "Volunteer",
        comment: "As both a donor and volunteer, I've seen firsthand how efficiently D-WAR operates. Their commitment to ethical practices and real impact is unmatched in the charity space.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
      },
      {
        name: "Michael Smith",
        role: "Monthly Supporter",
        comment: "The user experience is seamless, and I appreciate how easy it is to track where my donations go. D-WAR has truly revolutionized charitable giving with their transparent approach.",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        rating: 4
      }
    ];
    
    await Testimonial.insertMany(initialTestimonials);
    
    return res.status(201).json({
      status: 'success',
      message: 'Initial testimonials seeded successfully',
      data: {
        testimonials: initialTestimonials
      }
    });
  }
  
  res.status(200).json({
    status: 'success',
    message: 'Testimonials already exist, no seeding needed'
  });
});