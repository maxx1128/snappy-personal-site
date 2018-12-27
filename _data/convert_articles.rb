require 'yaml'
data = YAML.load_file('articles.yml');

data.each do |articles|
  articles['articles'].each do |article|
    titlized_name = article['name'].downcase.gsub!(/\s+/, '-')
    file_name = "./../_posts/#{article['date']}-#{titlized_name}.md"

    # print article['name']
    front_matter = %Q(---
title: "#{article['name']}"
date: "#{article['date']}"
external: true
link: "#{article['link']}"
excerpt: "#{article['description']}"
---
)

    out_file = File.new(file_name, "w")
    out_file.puts(front_matter)
    out_file.close
  end
end
