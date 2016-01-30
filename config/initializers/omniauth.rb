Rails.application.config.middleware.use OmniAuth::Builder do
  provider  :facebook,
            1108835329141038, '8631aaf832934c2f1f0c0b8c240dee17',
            scope: 'public_profile', display: 'page', image_size: 'square'
end