const latestNews = [
  {
    id: 1,
    image: 'assets/Images/Latest News/13305700433_c9f4ad4685_h.jpg',
    title: 'Patzek receives distinguished erasmus award',
    type: 'Faculty Focus',
    date: 'Oct 28, 2020',
  },
  {
    id: 2,
    image: 'assets/Images/Latest News/13305701663_96d6d846f5_h.jpg',
    title: 'Patzek receives distinguished erasmus award',
    type: 'Faculty Focus',
    date: 'Oct 28, 2020',
  },
  {
    id: 3,
    image: 'assets/Images/Latest News/13305912284_f4a700c5ea_h.jpg',
    title: 'Patzek receives distinguished erasmus award',
    type: 'Faculty Focus',
    date: 'Oct 28, 2020',
  },
];

const LatestNews = () => {
  return (
    <section className='latest-news'>
      <div className='container'>
        <div className='latest-news-container'>
          <div className='header'>
            <h2>
              <span>Latest</span>News
            </h2>
            <button>Explore More</button>
          </div>
          <div className='content'>
            {latestNews.map(({ id, image, title, type, date }) => (
              <div className='news-item' key={id}>
                <div className='image'>
                  <img src={image} alt={title} />
                </div>
                <div className='text'>
                  <a href=''>
                    <h3>{title}</h3>
                  </a>
                  <p className='type'>{type}</p>
                  <p className='date'>
                    <span className='material-symbols-outlined'>
                      calendar_month
                    </span>
                    {date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='covid-19'>
          <h4>Rapid Research Response Team</h4>
          <h1>Covid-19</h1>
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
