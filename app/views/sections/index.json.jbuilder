json.array!(@sections) do |section|
  json.extract! section, :id, :section_name, :article_id
  json.url section_url(section, format: :json)
end
