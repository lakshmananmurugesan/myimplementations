json.array!(@articles) do |article|
  json.extract! article, :id, :article_name
  json.url article_url(article, format: :json)
end
