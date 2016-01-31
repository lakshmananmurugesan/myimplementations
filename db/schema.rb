# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160130183428) do

  create_table "articles", force: true do |t|
    t.string   "article_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "books", force: true do |t|
    t.string   "book_name"
    t.integer  "article_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "books", ["article_id"], name: "index_books_on_article_id"

  create_table "contacts", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.integer  "mno"
    t.string   "emailid"
    t.string   "gender"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "crawlings", force: true do |t|
    t.string   "statusCode"
    t.string   "link"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "movies", force: true do |t|
    t.string   "title"
    t.integer  "release_year"
    t.float    "price"
    t.text     "description"
    t.string   "imdb_id"
    t.string   "poster_url"
    t.string   "video_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "musers", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "musers", ["email"], name: "index_musers_on_email", unique: true
  add_index "musers", ["reset_password_token"], name: "index_musers_on_reset_password_token", unique: true

  create_table "photos", force: true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "polls", force: true do |t|
    t.text     "topic"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pollusers", force: true do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "uid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "pollusers", ["uid"], name: "index_pollusers_on_uid"

  create_table "purchases", force: true do |t|
    t.integer  "movie_id"
    t.integer  "buyer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sections", force: true do |t|
    t.string   "section_name"
    t.integer  "article_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sections", ["article_id"], name: "index_sections_on_article_id"

  create_table "todos", force: true do |t|
    t.string   "todo_item"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "braintree_customer_id"
    t.string   "name"
    t.string   "image_url"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid"], name: "index_users_on_uid"

  create_table "vote_options", force: true do |t|
    t.string   "title"
    t.integer  "poll_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "vote_options", ["poll_id"], name: "index_vote_options_on_poll_id"

  create_table "votes", force: true do |t|
    t.integer  "polluser_id"
    t.integer  "vote_option_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["polluser_id"], name: "index_votes_on_polluser_id"
  add_index "votes", ["vote_option_id", "polluser_id"], name: "index_votes_on_vote_option_id_and_polluser_id", unique: true
  add_index "votes", ["vote_option_id"], name: "index_votes_on_vote_option_id"

end
