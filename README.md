# 📰 News Search with Population Insights

A web application that combines news search with demographic data visualization. Search for news articles by keyword and country, then see population statistics for that country displayed in an interactive pie chart.

## What It Does

This project fetches news articles based on your search criteria and simultaneously retrieves population data for the selected country. You'll see:

- Up to 9 recent news articles matching your keyword
- Total population count for the selected country
- A pie chart showing the male/female population distribution
- Clickable article cards with images and descriptions

## Technologies Used

- **HTML/CSS/JavaScript** - Core web technologies
- **GNews API** - Fetches news articles from around the world
- **Population.io API** - Retrieves demographic data by country
- **Chart.js** - Creates the population distribution pie chart

## How to Use

1. Enter a keyword you want to search for (e.g., "technology", "sports", "climate")
2. Select a country from the dropdown menu
3. Click the "Search" button
4. Browse the news results and view the population data

The app currently supports 27 countries including the US, UK, Canada, Japan, Germany, and more.

## Setup Instructions

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. Start searching for news!

**Note:** The API key is included in the code for demonstration purposes. In a production environment, you'd want to secure this on a backend server.

## Features

- **Responsive Design** - Articles display in a flexible grid layout
- **External Links** - Click any article to read the full story on the source website
- **Fresh Data** - Each search clears previous results and generates a new chart
- **Visual Analytics** - Instantly see gender distribution for your selected country

## Project Structure

```
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # Styling and layout
└── js/
    └── main.js        # API calls and DOM manipulation
```

## Known Limitations

- The category selector is currently commented out but could be re-enabled
- Some news sources may not provide images
- Population API data is for the year 2025
- Limited to 9 articles per search (API constraint)

## Future Improvements

- Add error handling for failed API requests
- Implement loading indicators during data fetch
- Add filtering by news category
- Include more demographic data visualizations
- Add pagination for viewing more than 9 articles

## API Credits

- News data provided by [GNews.io](https://gnews.io/)
- Population data from [Population.io](http://population.io/)

---

Built as a learning project to practice working with multiple APIs and data visualization.
