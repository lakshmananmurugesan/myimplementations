class Photo < ActiveRecord::Base
  has_attached_file :image,
                    preserve_files: "true",
                    url: "/system/:hash.:extension",
                    hash_secret: "abc123",
                    styles: { thumb: ["164x164#", :jpg],
                              original: ['500x500>', :jpg] },
                    convert_options: { thumb: "-quality 75 -strip",
                                       original: "-quality 85 -strip" }
  validates_attachment :image, presence: true,
                       content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
                       size: { in: 0..500.kilobytes }
end
