require 'nokogiri'
require 'open-uri'
require_relative 'country.rb'

module Scraper
  URL = "https://www.worldometers.info/coronavirus/country/us"

  # extract USA info
  def self.extract_usa_data(doc)
    usa_main = doc.css(".maincounter-number")
    usa_confirmed_cases = usa_main[0].text.strip
    usa_deaths = usa_main[1].text.strip
    usa_recovered = usa_main[2].text.strip

    usa = Country.new(
      "USA", 
      usa_confirmed_cases, 
      usa_deaths,
      usa_recovered
    )
  end
  
  # extract states info
  def self.extract_states_data(doc)
    states_table = doc.css('tbody tr')

    states_table[1..51].each do |row|
      name = row.css('td')[1].text.strip
      cases = row.css('td')[2].text.strip
      deaths = row.css('td')[4].text.strip
      recoveries = row.css('td')[6].text.strip
    end
  end
  
  # scrape data
  def self.scrape_data
    puts "Scraping data..."
    unparsed_page = URI.open(URL)
    doc = Nokogiri::HTML(unparsed_page)
    extract_usa_data(doc)
    extract_states_data(doc)
  end
end