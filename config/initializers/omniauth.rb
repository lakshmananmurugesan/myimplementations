Rails.application.config.middleware.use OmniAuth::Builder do
  provider  :facebook,
            492804177511578, '987f9974f23df69d4e03bb0d35f0ef73',
            scope: 'public_profile', display: 'page', image_size: 'square'
end